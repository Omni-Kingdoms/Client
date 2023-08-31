"use client";
import "../index.css";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Image from "next/image";
import "../index.css";
import Countdown from "react-countdown";
import clock from "@/assets/img/components/Play/cooldown-clock.png";

import modalPaperback from "@/assets/img/components/modal/Paper back.png";

import level from "@/assets/img/components/PlayerCard/xp.png";
import fechar from "@/assets/img/components/modal/X.png";
import { playerStore } from "@/store/playerStore";
import { toast } from "react-toastify";

import { useAccount, usePublicClient } from "wagmi";
import { contractStore } from "@/store/contractStore";
import { useEffect, useState } from "react";
import Loading from "@/app/play/loading";

type QuestProps = {
  agilityTimerConstant: number,
  questStartTimer: (param: BigInt[]) => Promise<void>,
  close: () => void,
  beginMethod: (param: BigInt[]) => Promise<any>,
  endMethod: (param: BigInt[]) => Promise<any>,
  type: string,
  text: string,
  mobileText?: string,
  mainIcon: string,
  secondaryIcon: string,
};

export default function QuestWrapper({
  agilityTimerConstant, questStartTimer, close, beginMethod, endMethod, type, text, mobileText, mainIcon, secondaryIcon
}: QuestProps) {
  const questRef = useRef(null);

  useOnClickOutside(questRef, close);

  const currentPlayer = playerStore((state) => state.currentPlayer);
  const publicClient = usePublicClient();
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const setGold = playerStore((state) => state.setGold);

  const { address } = useAccount();

  const [endQuest, setEndQuest] = useState(false);
  const [timer, setTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [cooldown, setCooldown] = useState(0);

  const [isQuestLoading, setIsQuestLoading] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return (() => {
      console.log('disable el');
      window.removeEventListener('resize', handleResize)
    });
  }, [])

  useEffect(() => {
    async function questTimer() {
      const blockTimestamp = await questStartTimer([
        players[currentPlayerIndex!],
      ]);

      const startTime = Number(blockTimestamp);
      const currentTimeStamp = await contract.read.getBlocktime();

      const curTime = Number(currentTimeStamp);
      const time = curTime - startTime;

      let CD;
      if (Number(currentPlayer?.agility) >= agilityTimerConstant) {
        CD = agilityTimerConstant;
        setCooldown(CD);
      } else {
        CD = (agilityTimerConstant * 2 + 10) - Number(currentPlayer?.agility);
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
      if (Number(currentPlayer.status) === 2) {
        setEndQuest(true);
      }
    }
  }, [
    agilityTimerConstant, currentPlayer, address, contract, timer, currentPlayerIndex, players, questStartTimer
  ]);

  async function handleBegin() {
    try {
      setIsQuestLoading(true);

      const start = await beginMethod([
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
          autoClose: 5000,
          closeOnClick: true,
        });
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        setCurrentPlayer(player);
        setEndQuest(true);
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
      setIsQuestLoading(false);
    }
  }

  async function handleEnd() {
    try {
      setIsQuestLoading(true);

      const end = await endMethod([
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
          autoClose: 5000,
          closeOnClick: true,
        });
        const gold = await contract.read.getGoldBalance([address]);
        console.log(gold);
        setGold(Number(gold));
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        console.log(player);
        setCurrentPlayer(player);
        setEndQuest(false);
      } else {
        toast.update(loading, {
          render: "Failed: " + end,
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
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
      setIsQuestLoading(false);
    }
  }

  const TimeBar = ({ maxTime = cooldown * 1000, time = 0 } = {}) => {
    const barWidth = (time / maxTime) * 69;
    return (
      <div>
        <div className="bar-time mt-2">
          <div className="time-bar" style={{ width: `${barWidth}%` }}></div>
          <div className="time-hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

  const cooldownMinutes = Math.floor(cooldown / 60);
  const cooldownSeconds = cooldown - cooldownMinutes * 60;

  const isBeginQuestDisabled = currentPlayer?.status != 0;

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
          ref={questRef}
          className="bg-modal inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6"
        >
          <button
            onClick={close}
            type="button"
            className="x-img cursor-pointer"
          >
            <Image src={fechar} id="gold" className="w-5" alt="gold" />
          </button>
          <div className="flex mt-9 ml-28 mr-24">
            <div className="mr-14 flex flex-col items-center">
              <Image src={mainIcon} id="gold" width={200} height={200} alt="gold" />
              <h1 className="text-reward my-6">
                Reward is <br />1 {type} token
              </h1>
              <div className="flex w-5 mx-9">
                <Image
                  src={secondaryIcon}
                  alt="icon"
                  width={3000}
                  height={3000}
                />
                <p className="text-more ml-2 mt-1">+1</p>
              </div>
            </div>
            <div className="sm:text-left">
              <h3 className="text-title">Quest to earn {type}!</h3>
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
              <p className="time -mt-3"></p>
              <div className="mt-5">
                <p className="text-describle">
                  {text}
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
            {!timer && !endQuest ? (
              <div className="flex flex-col gap-2">
                {isBeginQuestDisabled && (
                  <p className="text-describle -mt-4">You need to be idle</p>
                )}
                <button
                  className="w-32 mx-64 px-3 py-2 rounded bg-button text-button"
                  onClick={handleBegin}
                  disabled={isBeginQuestDisabled}
                >
                  {isQuestLoading ? <Loading /> : "Begin Quest"}
                </button>
              </div>
            ) : (
              <button
                className="w-32 mx-64 px-3 py-2 rounded bg-button text-button"
                onClick={handleEnd}
                disabled={timer}
              >
                {isQuestLoading ? <Loading color="#d1d5db" /> : "End Quest"}
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
        <div ref={questRef} className="bg-modal relative flex flex-col min-w-[440px] max-w-[100vw]">
          <Image src={modalPaperback} width={1000} alt="Textbook background" className="invisible w-[100%]" />
          <div className="content absolute inset-0 px-12 py-32 flex flex-col gap-4 p-[15%] md:py-24 md:px-24 sm:gap-10">
            <div className="flex gap-4 md:gap-10">
              <div className="flex-1 flex flex-col items-center justify-start mt-10">
                <Image src={mainIcon} width={100} height={100} alt="attribute coin" className="max-w-[80px] md:max-w-[100px]" />
                <h1 className="text-reward my-6">
                  Reward is <br />1 {type} token
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
              <div style={{ flex: 2 }} className="mt-10 flex flex-col gap-2">
                <h3 className="text-title">Quest to earn {type}!</h3>
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
                <div>
                  <p className="text-describle max-w-[330px]">{width >= 500 ? text : (mobileText || text)}</p>
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
            <div className="flex">
              {!timer && !endQuest ? (
                <div className="flex flex-col items-center w-[100%] gap-2 relative">
                  {isBeginQuestDisabled && (
                    <p className="text-describle absolute top-0 right-[50%] translate-x-[50%] translate-y-[-110%]">You need to be idle</p>
                  )}
                  <button
                    className="w-32 px-3 py-2 rounded bg-button text-button"
                    onClick={handleBegin}
                    disabled={isBeginQuestDisabled}
                  >
                    {isQuestLoading ? <Loading /> : "Begin Quest"}
                  </button>
                </div>
              ) : (
                <button
                  className="w-32 px-3 py-2 rounded bg-button text-button"
                  onClick={handleEnd}
                  disabled={timer}
                >
                  {isQuestLoading ? <Loading color="#d1d5db" /> : "End Quest"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
