/* "use client";
import "../index.css";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";

//Image
import LifeCoin from "@/assets/img/components/Training/life-coin.png";
import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png";
import level from "@/assets/img/components/PlayerCard/xp.png";
import fechar from "@/assets/img/components/modal/X.png";
import clock from "@/assets/img/components/Play/cooldown-clock.png";

import { playerStore } from "@/store/playerStore";
import { toast } from "react-toastify";

import { useAccount, usePublicClient } from "wagmi";
import { contractStore } from "@/store/contractStore";
import Countdown from "react-countdown";
import Loading from "@/app/play/loading";

export default function LifeTraining({
  showModalLife,
}: {
  showModalLife: () => void;
}) {
  const ref = useRef(null);
  const handleClickOutside = () => {
    showModalLife();
  };

  const currentPlayer = playerStore((state) => state.currentPlayer);
  const publicClient = usePublicClient();
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);

  const [endTrain, setEndTrain] = useState(false);
  const [timer, setTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [cooldown, setCooldown] = useState(0);
  const { address } = useAccount();

  const [isTrainingLoading, setIsTrainingLoading] = useState<boolean>(false);

  useEffect(() => {
    async function trainTimer() {
      const blockTimestamp = await contract.read.getHealthStart([
        players[currentPlayerIndex!],
      ]);
      const startTime = Number(blockTimestamp);
      const currentTimeStamp = await contract.read.getBlocktime();
      const curTime = Number(currentTimeStamp);
      const time = curTime - startTime;
      let CD;
      if (Number(currentPlayer?.agility) >= 20) {
        CD = 10;
        setCooldown(CD);
      } else {
        CD = 30 - Number(currentPlayer?.agility);
        setCooldown(CD);
      }
      if (time < CD) {
        setCountdown(CD - time);
        setTimer(true);
      }
    }

    trainTimer();
    if (!currentPlayer?.status) {
      setEndTrain(false);
    } else {
      if (Number(currentPlayer.status) === 1) {
        setEndTrain(true);
      }
    }
  }, [currentPlayer, address, contract, timer]);

  useOnClickOutside(ref, handleClickOutside);

  async function handleBeginTrain() {
    console.log("Begin");
    console.log(players[currentPlayerIndex!]);
    try {
      setIsTrainingLoading(true);

      const start = await contract.write.startTrainingBasicHealth([
        players[currentPlayerIndex!],
      ]);
      const loading = toast.loading("Tx pending: " + start);
      const result = await publicClient.waitForTransactionReceipt({
        hash: start,
      });
      console.log(result.status);
      if (result.status === "success") {
        toast.update(loading, {
          render: "Success: " + start,
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        console.log(player);
        setCurrentPlayer(player);
        setEndTrain(true);
        setTimer(true);
      } else {
        toast.update(loading, {
          render: "Failed: " + start,
          type: "error",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
      }
    } catch (error: any) {
      toast.error(error.shortMessage as string, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsTrainingLoading(false);
    }
  }

  async function handleEndTrain() {
    try {
      setIsTrainingLoading(true);

      const end = await contract.write.endTrainingBasicHealth([
        players[currentPlayerIndex!],
      ]);
      const loading = toast.loading("Tx pending: " + end);
      const result = await publicClient.waitForTransactionReceipt({
        hash: end,
      });
      console.log(result.status);
      if (result.status === "success") {
        toast.update(loading, {
          render: "Success: " + end,
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        console.log(player);
        setCurrentPlayer(player);
        setEndTrain(false);
      } else {
        toast.update(loading, {
          render: "Failed: " + end,
          type: "error",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
      }
    } catch (error: any) {
      toast.error(error.shortMessage as string, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsTrainingLoading(false);
    }
  }

  const TimeBar = ({ maxTime = cooldown * 1000, time = 0 } = {}) => {
    const barWidth = (time / maxTime) * 69;
    return (
      <div>
        <div className="bar-time">
          <div className="time-bar" style={{ width: `${barWidth}%` }}></div>
          <div className="time-hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

  const cooldownMinutes = Math.floor(cooldown / 60);
  const cooldownSeconds = cooldown - cooldownMinutes * 60;

  const isLifeFull = currentPlayer?.currentHealth === currentPlayer?.health;
  const isPlayerNotIdle = currentPlayer?.status != 0;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 backdrop-blur-sm bg-transparent bg-opacity-40"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          ref={ref}
          className="bg-modal inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6"
        >
          <button
            onClick={() => showModalLife()}
            type="button"
            className="x-img"
          >
            <Image src={fechar} id="close" className="w-5" alt="close" />
          </button>
          <div className="flex mt-9 ml-28">
            <div className="mr-14">
              <Image src={LifeCoin} id="LifeCoin" className="" alt="LifeCoin" />
              <h1 className="text-reward my-6">
                Reward is <br />1 HP
              </h1>
              <div className="flex w-5 mx-9">
                <Image
                  src={lifeIcon}
                  id="lifeIcon"
                  className="w-7"
                  alt="lifeIcon"
                />
                <p className="text-more ml-2 mt-1">+1</p>
              </div>
            </div>
            <div className="sm:text-left">
              <h3 className="text-title">Train to recover Health!</h3>
              {timer && (
                <Countdown
                  date={Date.now() + 1000 * countdown} // 1sec * seconds
                  onComplete={() => {
                    setTimer(false);
                  }}
                  renderer={(props) => (
                    <>
                      <TimeBar time={props.total} maxTime={cooldown * 1000} />
                      <Image
                        src={level}
                        id="molde"
                        className="relative -top-4-5 h-4"
                        alt="level"
                      />
                      <p className="time -mt-3">
                        {String(props.minutes).padStart(2, "0")}:
                        {String(props.seconds).padStart(2, "0")}
                      </p>
                    </>
                  )}
                />
              )}
              <div className="mt-3">
                <p className="text-describle">
                  Embark in a training regimen that will <br />
                  allow you heal 1 hp at a time. Health Training <br />
                  allows you to restore your current health in order <br />
                  to fight monsters, bosses and even other players <br />
                  in the legendary Arena! The faster you become, <br />
                  the shorter your wait duration becomes
                </p>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Image src={clock} alt="Cooldown" />
                <p className="text-describle">
                  {String(cooldownMinutes || 0).padStart(2, "0")}:
                  {String(cooldownSeconds || 0).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            {!timer && !endTrain ? (
              <div className="flex flex-col gap-2">
                {isLifeFull ? (
                  <p className="text-describle -mt-4">Your life is full</p>
                ) : (
                  isPlayerNotIdle && (
                    <p className="text-describle -mt-4">You need to be idle</p>
                  )
                )}
                <button
                  className="w-32 mx-64 px-3 py-2 rounded bg-button text-button"
                  onClick={handleBeginTrain}
                  disabled={isLifeFull || isPlayerNotIdle}
                >
                  {isTrainingLoading ? <Loading /> : "Begin Train"}
                </button>
              </div>
            ) : (
              <button
                className="w-32 mx-64 px-3 py-2 rounded bg-button text-button"
                onClick={handleEndTrain}
                disabled={timer}
              >
                {isTrainingLoading ? <Loading color="#d1d5db" /> : "End Train"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 */