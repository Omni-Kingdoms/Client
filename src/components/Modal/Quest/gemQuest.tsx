/* "use client";
import "../index.css";
import { useRef } from "react";
import Image from "next/image";
import { useOnClickOutside } from "usehooks-ts";

//Image
import gold from "@/assets/img/components/modal/gema-coin.png";
import goldCoin from "@/assets/img/components/modal/gema.png";
import level from "@/assets/img/components/PlayerCard/xp.png";
import fechar from "@/assets/img/components/modal/X.png";
import clock from "@/assets/img/components/Play/cooldown-clock.png";

import { playerStore } from "@/store/playerStore";
import { toast } from "react-toastify";

import { useAccount, usePublicClient } from "wagmi";
import { contractStore } from "@/store/contractStore";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import Loading from '@/app/play/loading';

type GemQuestProps = {
  close: () => void;
};

export default function GemQuest({ close }: GemQuestProps) {
  const ref = useRef(null);
  const handleClickOutside = () => {
    close();
  };

  useOnClickOutside(ref, handleClickOutside);

  const currentPlayer = playerStore((state) => state.currentPlayer);
  const publicClient = usePublicClient();
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);

  const { address } = useAccount();

  const [endQuest, setEndQuest] = useState(false);
  const [timer, setTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [cooldown, setCooldown] = useState(0);

  const [isQuestLoading, setIsQuestLoading] = useState<boolean>(false);

  useEffect(() => {
    async function questTimer() {
      const blockTimestamp = await contract.read.getGemStart([
        players[currentPlayerIndex!],
      ]);
      console.log(blockTimestamp);
      const startTime = Number(blockTimestamp);
      const currentTimeStamp = await contract.read.getBlocktime();
      const curTime = Number(currentTimeStamp);
      const time = curTime - startTime;
      console.log(time);
      let CD;
      if (Number(currentPlayer?.agility) >= 300) {
        CD = 300;
        setCooldown(CD);
      } else {
        CD = 610 - Number(currentPlayer?.agility);
        setCooldown(CD);
      }

      if (time < CD) {
        setCountdown(CD - time);
        setTimer(true);
      }
    }

    questTimer();
    if (!currentPlayer?.status) {
      setEndQuest(false);
    } else {
      if (Number(currentPlayer.status) === 5) {
        setEndQuest(true);
      }
    }
  }, [currentPlayer, address, contract, timer]);

  async function handleBeginGem() {
    console.log("Begin");
    console.log(players[currentPlayerIndex!]);
    try {
      setIsQuestLoading(true);

      const start = await contract.write.startQuestGem([
        players[currentPlayerIndex!],
      ]);
      console.log(start);

      toast.promise(
        publicClient.waitForTransactionReceipt({
          hash: start,
          confirmations: 5,
        }),
        {
          pending: "Tx pending: " + start,
          success: {
            render() {
              setEndQuest(true);
              setTimer(true);
              return "Success: " + start;
            },
          },
          error: "Tx failed",
        }
      );
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
      setIsQuestLoading(false);
    }
  }

  async function handleEndGem() {
    try {
      setIsQuestLoading(true);

      const end = await contract.write.endQuestGem([
        players[currentPlayerIndex!],
      ]);

      toast.promise(
        publicClient.waitForTransactionReceipt({ hash: end, confirmations: 3 }),
        {
          pending: "Tx pending: " + end,
          success: {
            render() {
              setEndQuest(false);
              return "Success: " + end;
            },
          },
          error: "Tx failed",
        }
      );
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
      setIsQuestLoading(false);
    }
  }

  const TimeBar = ({ maxTime = cooldown * 1000, time = 0 } = {}) => {
    const barWidth = (time / maxTime) * 86;
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

  const isBeginQuestDisabled = currentPlayer?.status != 0;

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
          <button onClick={close} type="button" className="x-img">
            <Image src={fechar} id="close" className="w-5" alt="close" />
          </button>
          <div className="flex mt-9 ml-28">
            <div className="mr-14">
              <Image src={gold} id="gold" className="" alt="gold" />
              <h1 className="text-reward my-6">
                Reward is <br />1 Gem token
              </h1>
              <div className="flex w-5 mx-9">
                <Image
                  src={goldCoin}
                  id="goldCoin"
                  className="w-5"
                  alt="goldCoin"
                />
                <p className="text-more ml-2 mt-1">+1</p>
              </div>
            </div>
            <div className="sm:text-left">
              <h3 className="text-title">Quest to earn Gem!</h3>
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
                  Recover ancient Ok Gem via Gem questing! <br />
                  Gems are one of the core resources in the OmniKingdom,
                  <br /> a necessary catalyst for crafting recipes. <br />
                  Rumor has it that gems may be required
                  <br />
                  for land instillations in the future
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
            {!endQuest || timer ? (
              <div className="flex flex-col gap-2">
                {isBeginQuestDisabled && <p className="text-describle -mt-4">You need to be idle</p>}
                <button
                  className="w-32 mx-64 px-3 py-2 rounded bg-button text-button"
                  onClick={handleBeginGem}
                  disabled={isBeginQuestDisabled}
                >
                  {
                    isQuestLoading ? <Loading color="#d1d5db" /> : 'Begin Quest'
                  }
                </button>
              </div>
            ) : (
              <button
                className="w-32 mx-64 px-3 py-2 rounded bg-button text-button"
                onClick={handleEndGem}
                disabled={timer}
              >
                {
                  isQuestLoading ? <Loading color="#d1d5db" /> : 'End Quest'
                }
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 */