"use client";
import "../index.css";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
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

type GoldQuestProps = {
  close: () => void;
}

export default function GoldQuest({ close }: GoldQuestProps) {
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
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const setGold = playerStore((state) => state.setGold);

  const { address } = useAccount();

  const [endQuest, setEndQuest] = useState(false);
  const [timer, setTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    async function questTimer() {
      const blockTimestamp = await contract.read.getGoldStart([
        players[currentPlayerIndex!],
      ]);
      console.log(blockTimestamp);
      const startTime = Number(blockTimestamp);
      const currentTimeStamp = await contract.read.getBlocktime();
      const curTime = Number(currentTimeStamp);
      const time = curTime - startTime;
      console.log(time);
      let CD;
      if (Number(currentPlayer?.agility) >= 60) {
        CD = 60;
        setCooldown(CD);
      } else {
        CD = 130 - Number(currentPlayer?.agility);
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
  }, [currentPlayer, address, contract, timer]);

  async function handleBeginGold() {
    console.log("Begin");
    console.log(players[currentPlayerIndex!]);
    try {
      const start = await contract.write.startQuestGold([
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
        });
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        console.log(player);
        setCurrentPlayer(player);
        setEndQuest(true);
        setTimer(true);
      } else {
        toast.update(loading, {
          render: "Failed: " + start,
          type: "error",
          isLoading: false,
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
    }
  }

  const reload = () => window.location.reload();

  async function handleEndGold() {
    try {
      const end = await contract.write.endQuestGold([
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
    }
  }
  const TimeBar = ({ maxTime = cooldown * 1000, time = 0 } = {}) => {
    const barWidth = (time / maxTime) * 86;
    return (
      <div>
        <div className="bar-time mt-2">
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
        <div
          ref={ref}
          className="bg-modal inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6"
        >
          <button
            onClick={close}
            type="button"
            className="x-img cursor-pointer"
          >
            <Image src={fechar} id="gold" className="w-5" alt="gold" />
          </button>
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
                        {String(props.minutes).padStart(2, '0')}:{String(props.seconds).padStart(2, '0')}
                      </p>
                    </>
                  )}
                />
              )}
              <p className="time -mt-3"></p>
              <div className="mt-5">
                <p className="text-describle">
                  Embark on a quest to accumulate OK Gold! <br />
                  Gold can be used to purchase items at local shops, <br />
                  these items can later be used for status
                  <br /> boosts as well as crafting. Gold is also necessary{" "}
                  <br />
                  for PvP combat in the Arena!
                  <br /> Erc20 conversion coming soon <br />
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            {!timer && !endQuest ? (
              <button
                className="w-32 mx-64 px-3 py-2 rounded bg-button text-button"
                onClick={handleBeginGold}
              >
                {" "}
                Begin Quest
              </button>
            ) : (
              <button
                className="w-32 mx-64 px-3 py-2 rounded bg-button text-button"
                onClick={handleEndGold}
                disabled={timer}
              >
                {" "}
                End Quest
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
