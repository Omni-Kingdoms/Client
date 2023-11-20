"use client";
import "../index.css";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";

//Image
import level from "@/assets/img/components/PlayerCard/xp.png";
import closeIcon from "@/assets/img/components/modal/X.png";
import clock from "@/assets/img/components/Play/cooldown-clock.png";
import { abi } from "../../../utils/BaseDiamondABI.json";

import modalPaperback from "@/assets/img/components/modal/Paper back.png";

import { playerStore } from "@/store/playerStore";
import { toast } from "react-toastify";

import { useAccount, useNetwork, usePublicClient } from "wagmi";
import { contractStore } from "@/store/contractStore";
import Countdown from "react-countdown";
import Loading from "@/app/play/loading";
import { encodeFunctionData } from "viem";

export type Condition = {
  validate: boolean;
  text: string;
};

type TrainingWrapperProps = {
  beginMethod: (param: BigInt[]) => Promise<any>;
  endMethod: (param: BigInt[]) => Promise<any>;
  getStart: (param: BigInt[]) => Promise<any>;
  timerConstant: number;
  close: () => void;
  smug: string;
  title: string;
  text: string;
  mobileText?: string;
  mainIcon: string;
  secondaryIcon: string;
  condition?: Condition;
};

export default function TrainingWrapper({
  beginMethod,
  endMethod,
  getStart,
  timerConstant,
  close,
  smug,
  title,
  text,
  mobileText,
  mainIcon,
  secondaryIcon,
  condition,
}: TrainingWrapperProps) {
  const trainingRef = useRef(null);

  const currentPlayer = playerStore((state) => state.currentPlayer);
  const publicClient = usePublicClient();
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const contractAddress = contractStore((state) => state.contractAddress);

  const [endTrain, setEndTrain] = useState(false);
  const [timer, setTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [cooldown, setCooldown] = useState(0);
  const { address } = useAccount();
  const { chain } = useNetwork();
  const bastion = contractStore((state) => state.bastion);

  const [isTrainingLoading, setIsTrainingLoading] = useState<boolean>(false);

  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function trainTimer() {
      const blockTimestamp = await getStart([players[currentPlayerIndex!]]);
      const startTime = Number(blockTimestamp);
      const currentTimeStamp = await contract.read.getBlocktime();
      const curTime = Number(currentTimeStamp);
      const time = curTime - startTime;
      let CD;
      if (Number(currentPlayer?.agility) >= timerConstant) {
        CD = timerConstant - 10;
        setCooldown(CD);
      } else {
        CD = timerConstant + 10 - Number(currentPlayer?.agility);
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
      if (
        Number(currentPlayer.status) === 1 ||
        Number(currentPlayer.status) === 3
      ) {
        setEndTrain(true);
      }
    }
  }, [
    currentPlayer,
    address,
    contract,
    timer,
    currentPlayerIndex,
    players,
    getStart,
    timerConstant,
  ]);

  useOnClickOutside(trainingRef, close);
  async function handleBeginTrain() {
    try {
      setIsTrainingLoading(true);

      let start;
      if (bastion) {
        if (smug === "HP") {
          start = await bastion
            .writeContract({
              account: address,
              address: contractAddress,
              abi,
              functionName: "startTrainingBasicHealth",
              args: [players[currentPlayerIndex!]],
            })
            .catch((err: Error) => console.log({ err }));
        }
        if (smug === "Mana") {
          start = await bastion
            .writeContract({
              account: address,
              address: contractAddress,
              abi,
              functionName: "startTrainingMana",
              args: [players[currentPlayerIndex!]],
            })
            .catch((err: Error) => console.log({ err }));
        }
        setTimeout(async () => {
          const player = await contract.read.getPlayer([
            players[currentPlayerIndex!],
          ]);
          setCurrentPlayer(player);
          setEndTrain(true);
          setTimer(true);
        }, 3000);
      } else {
        start = await beginMethod([players[currentPlayerIndex!]]);

        const loading = toast.loading(
          <a href={`https://scroll.l2scan.co/tx/${start}`} target="_blank">
            {start}
          </a>
        );
        const result = await publicClient.waitForTransactionReceipt({
          hash: start,
        });

        if (result.status === "success") {
          toast.update(loading, {
            render: (
              <a href={`https://scroll.l2scan.co/tx/${start}`} target="_blank">
                {start}
              </a>
            ),
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });

          const player = await contract.read.getPlayer([
            players[currentPlayerIndex!],
          ]);
          setCurrentPlayer(player);
          setEndTrain(true);
          setTimer(true);
        } else {
          toast.update(loading, {
            render: (
              <a href={`https://scroll.l2scan.co/tx/${start}`} target="_blank">
                {start}
              </a>
            ),
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        }
      }
    } catch (error: any) {
      toast.error(error.shortMessage as string, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
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
      let end;
      if (bastion) {
        if (smug === "HP") {
          end = await bastion
            .writeContract({
              account: address,
              address: contractAddress,
              abi,
              functionName: "endTrainingBasicHealth",
              args: [players[currentPlayerIndex!]],
            })
            .catch((err: Error) => console.log({ err }));
        }

        if (smug === "Mana") {
          end = await bastion
            .writeContract({
              account: address,
              address: contractAddress,
              abi,
              functionName: "endTrainingMana",
              args: [players[currentPlayerIndex!]],
            })
            .catch((err: Error) => console.log({ err }));
        }

        setTimeout(async () => {
          const player = await contract.read.getPlayer([
            players[currentPlayerIndex!],
          ]);
          setCurrentPlayer(player);
          setEndTrain(false);
        }, 3000);
      } else {
        end = await endMethod([players[currentPlayerIndex!]]);

        const loading = toast.loading(
          <a href={`https://scroll.l2scan.co/tx/${end}`} target="_blank">
            {end}
          </a>
        );
        console.log({ end });
        const result = await publicClient.waitForTransactionReceipt({
          hash: end,
        });
        console.log(result);
        if (result.status === "success") {
          toast.update(loading, {
            render: (
              <a href={`https://scroll.l2scan.co/tx/${end}`} target="_blank">
                {end}
              </a>
            ),
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
          const player = await contract.read.getPlayer([
            players[currentPlayerIndex!],
          ]);
          setCurrentPlayer(player);
          setEndTrain(false);
        } else {
          toast.update(loading, {
            render: "Failed: " + end,
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        }
      }
    } catch (error: any) {
      toast.error(error.shortMessage as string, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
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
    const barWidth = (100 * time) / maxTime;
    return (
      <div>
        <div className="bar-time pr-[2px]">
          <div className="time-bar" style={{ width: `${barWidth}%` }}></div>
          <div className="time-hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

  const cooldownMinutes = Math.floor(cooldown / 60);
  const cooldownSeconds = cooldown - cooldownMinutes * 60;

  const isPlayerNotIdle = currentPlayer?.status != 0;

  /* return (
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
          ref={trainingRef}
          className="bg-modal inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6"
        >
          <button
            onClick={() => close()}
            type="button"
            className="x-img"
          >
            <Image src={fechar} id="close" className="w-5" alt="close" />
          </button>
          <div className="flex mt-9 ml-28 mr-24">
            <div className="mr-14">
              <Image src={mainIcon} width={200} height={200} alt="attribute coin" />
              <h1 className="text-reward my-6">
                Reward is <br />1 {smug}
              </h1>
              <div className="flex w-5 mx-9">
                <Image
                  src={secondaryIcon}
                  id="icon"
                  alt="icon"
                  width={3000}
                  height={3000}
                />
                <p className="text-more ml-2 mt-1">+1</p>
              </div>
            </div>
            <div className="sm:text-left">
              <h3 className="text-title">{title}</h3>
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
                <p className="text-describle">{text}</p>
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
                {(condition && condition.validate) ? (
                  <p className="text-describle -mt-4">{condition.text}</p>
                ) : (
                  isPlayerNotIdle && (
                    <p className="text-describle -mt-4">You need to be idle</p>
                  )
                )}
                <button
                  className="w-32 mx-64 px-3 py-2 rounded bg-button text-button"
                  onClick={handleBeginTrain}
                  disabled={condition?.validate || isPlayerNotIdle}
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
  ); */

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div ref={trainingRef} className="bg-modal relative flex flex-col">
          <Image
            src={modalPaperback}
            width={1000}
            alt="Textbook background"
            className="invisible min-w-[440px] w-[100vw] max-w-[600px]"
          />
          <div className="content absolute inset-0 px-12 py-2 flex flex-col gap-4 p-[15%] min-[520px]:py-10 min-[590px]:py-12 md:px-24 sm:gap-10">
            <button
              type="button"
              onClick={close}
              className="absolute top-[12%] right-[6%] z-50"
            >
              <Image src={closeIcon} alt="close icon" />
            </button>
            <div className="flex gap-4 md:gap-10">
              <div className="flex-1 flex flex-col items-center justify-start mt-10">
                <Image
                  src={mainIcon}
                  width={100}
                  height={100}
                  alt="attribute coin"
                  className="max-w-[80px] md:max-w-[100px]"
                />
                <h1 className="text-reward my-6">
                  Reward is <br />1 {smug}
                </h1>
                <div className="flex items-center gap-2 mx-9">
                  <Image
                    src={secondaryIcon}
                    id="icon"
                    alt="icon"
                    width={25}
                    height={25}
                  />
                  <p className="text-more">+1</p>
                </div>
              </div>
              <div
                style={{ flex: 2 }}
                className="mt-10 flex flex-col items-start gap-2"
              >
                <h3 className="text-title">{title}</h3>
                {timer && (
                  <Countdown
                    date={Date.now() + 1000 * countdown} // 1sec * seconds
                    onComplete={() => {
                      setTimer(false);
                    }}
                    renderer={(props) => (
                      <>
                        <div>
                          <TimeBar
                            time={props.total}
                            maxTime={cooldown * 1000}
                          />
                          <Image
                            src={level}
                            id="molde"
                            className="relative -top-4-5 h-4"
                            alt="level"
                          />
                        </div>
                        <p className="time -mt-3">
                          {String(props.minutes).padStart(2, "0")}:
                          {String(props.seconds).padStart(2, "0")}
                        </p>
                      </>
                    )}
                  />
                )}
                <div>
                  <p className="text-describle max-w-[310px]">
                    {width >= 500 ? text : mobileText || text}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={clock} alt="Cooldown" />
                  <p className="text-describle">
                    {String(cooldownMinutes || 0).padStart(2, "0")}:
                    {String(cooldownSeconds || 0).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              {!timer && !endTrain ? (
                <div className="flex flex-col items-center w-[100%] gap-2 relative">
                  {condition && condition.validate ? (
                    <p className="text-describle absolute top-0 right-[50%] translate-x-[50%] translate-y-[-110%]">
                      {condition.text}
                    </p>
                  ) : (
                    isPlayerNotIdle && (
                      <p className="text-describle absolute top-0 right-[50%] translate-x-[50%] translate-y-[-110%]">
                        You need to be idle
                      </p>
                    )
                  )}
                  <button
                    className="w-32 px-3 py-2 rounded bg-button text-button"
                    onClick={handleBeginTrain}
                    disabled={condition?.validate || isPlayerNotIdle}
                  >
                    {isTrainingLoading ? <Loading /> : "Begin Train"}
                  </button>
                </div>
              ) : (
                <button
                  className="w-32 px-3 py-2 rounded bg-button text-button"
                  onClick={handleEndTrain}
                  disabled={timer}
                >
                  {isTrainingLoading ? (
                    <Loading color="#d1d5db" />
                  ) : (
                    "End Train"
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
