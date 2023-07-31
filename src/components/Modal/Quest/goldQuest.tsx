"use client";
import Link from "next/link";
import Image from "next/image";
import "../index.css";
import Countdown from "react-countdown";

import gold from "@/assets/img/components/modal/gold.png";
import goldCoin from "@/assets/img/components/modal/gold-coin.png";
import level from "@/assets/img/components/PlayerCard/xp.png";
import fechar from "@/assets/img/components/modal/X.png";
import { playerStore } from "@/store/playerStore";
import { toast } from "react-toastify";

import { useAccount, useNetwork, usePublicClient } from "wagmi";
import { contractStore } from "@/store/contractStore";
import { useEffect, useState } from "react";

export default function GoldQuest() {
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const publicClient = usePublicClient();
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);

  const { address } = useAccount();

  const [endQuest, setEndQuest] = useState(false);
  const [timer, setTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    async function questTimer() {
      const blockTimestamp = await contract.read.getGoldStart([address]);
      console.log(blockTimestamp);
      const startTime = Number(blockTimestamp);
      const currentTimeStamp = await contract.read.getBlocktime();
      const curTime = Number(currentTimeStamp);
      const time = curTime - startTime;
      console.log(time);
      if (time < 60) {
        setCountdown(60 - time);
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
  }, [currentPlayer, address, contract]);

  async function handleBeginGold() {
    console.log("Begin");
    console.log(players[currentPlayerIndex!]);
    try {
      const start = await contract.write.startQuestGold([
        players[currentPlayerIndex!],
      ]);
      console.log(start);

      toast.promise(
        publicClient.waitForTransactionReceipt({
          hash: start,
        }),
        {
          pending: "Tx pending: " + start,
          success: {
            render() {
              setEndQuest(true);
              setTimer(true);
              setTimeout(() => {}, 3000);
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
    }
  }

  async function handleEndGold() {
    try {
      const end = await contract.write.endQuestGold([
        players[currentPlayerIndex!],
      ]);

      toast.promise(publicClient.waitForTransactionReceipt({ hash: end }), {
        pending: "Tx pending: " + end,
        success: {
          render() {
            setEndQuest(false);
            setTimeout(() => {}, 3000);
            return "Success: " + end;
          },
        },
        error: "Tx failed",
      });
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
    }
  }
  const TimeBar = ({ maxTime = 100, time = 0 } = {}) => {
    const barWidth = (time / maxTime) * 69;
    return (
      <div>
        <div className="health-bar">
          <div className="time-bar" style={{ width: `${barWidth}%` }}></div>
          <div className="time-hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

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
        <div className="bg-modal inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6">
          <Link href="/play/quest" type="button" className="x-img">
            <Image src={fechar} id="gold" className="w-5" alt="gold" />
          </Link>
          <div className="flex mt-9 ml-28">
            <div className="mr-14">
              <Image src={gold} id="gold" className="" alt="gold" />
              <h1 className="text-reward my-6">
                Reward is <br />1 Gold token
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
              <h3 className="text-title">Quest to earn Gold!</h3>
              <TimeBar time={10} maxTime={60} />
              <Image
                src={level}
                id="molde"
                className="relative -top-4 left-1 h-4"
                alt="level"
              />
              <p className="time -mt-3">
                {timer && (
                  <Countdown
                    date={Date.now() + 1000 * countdown} // 1sec * seconds
                    onComplete={() => {
                      setTimer(false);
                    }}
                    renderer={(props) => (
                      <>
                        0{props.minutes}:{props.seconds}
                      </>
                    )}
                  />
                )}
              </p>
              <div className="mt-3">
                <p className="text-describle">
                  Brace yourself for the ultimate <br />
                  challenge, a quest to slay the mighty <br />
                  dragon. Will you emerge as the <br />
                  legendary Dragon Slayer or be <br />
                  consumed by its fiery wrath?
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8 ml-44">
            <button
              className="w-32 mr-3 px-3 py-2 rounded bg-button text-button"
              onClick={handleBeginGold}
              disabled={endQuest}
            >
              {" "}
              Begin Quest
            </button>
            <button
              className="w-32 ml-3 px-3 py-2 rounded bg-button text-button"
              onClick={handleEndGold}
              disabled={timer || !endQuest}
            >
              {" "}
              End Quest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
