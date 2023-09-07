"use client";
import Image from "next/image";
import { Tooltip } from "antd";
import Countdown from "react-countdown";
import { toast } from "react-toastify";
import { useIsMounted } from "usehooks-ts";
import { contractStore } from "@/store/contractStore";
import { usePublicClient } from "wagmi";
import { useEffect, useState, useCallback } from "react";
import { ChainDataStruct as Bridge } from "@/types/DIAMOND1HARDHAT";
import { playerStore } from "@/store/playerStore";

//Image
import clock from "@/assets/img/components/Play/cooldown-clock.png";
import sword from "@/assets/img/components/Dungeon/sword.png";
import levelIcon from "@/assets/img/components/PlayerCard/icons/XP.png";
import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png";
import coin from "@/assets/img/components/PlayerCard/icons/coin.png";

type Props = {
  id: Number | BigInt;
  disableLoading: () => void;
};

export default function BridgeList({ id, disableLoading }: Props) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const currentPlayer = playerStore((state) => state.currentPlayer);

  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const [timer, setTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [cooldown, setCooldown] = useState(0);
  const [gold, setCoin] = useState(0);

  const [bridge, setBridge] = useState<Bridge | null>(null);
  const [playerName, setPlayerName] = useState(null);
  const isMounted = useIsMounted();
  const publicClient = usePublicClient();

  const handleBridge = useCallback(async () => {
    const bridge = await contract.read.getChainDataByCountId([id]);
    // if (!arena.open) {
    //   const name = await contract.read.getPlayer([arena.hostId]);
    //   setPlayerName(name.name);
    // }
    // const blockTimestamp = await contract.read.getBasicArenaCooldowns([
    //   players[currentPlayerIndex!],
    //   id,
    // ]);
    // console.log(blockTimestamp);
    // const startTime = Number(blockTimestamp);
    // const currentTimeStamp = await contract.read.getBlocktime();
    // const curTime = Number(currentTimeStamp);
    // const time = curTime - startTime;
    // console.log(time);
    // console.log(arena.cooldown);
    // const CD = Number(arena.cooldown) + 10 - Number(currentPlayer?.agility);
    // const COIN = Number(arena.cost);
    // console.log(CD);
    // setCooldown(CD);
    // setCoin(COIN);
    // if (time < CD) {
    //   setCountdown(CD - time);
    //   setTimer(true);
    //   console.log(countdown);
    // }
    setBridge(bridge);
    disableLoading();
  }, [contract, id, timer]);

  useEffect(() => {
    handleBridge();
  }, [handleBridge]);

  async function bridgePlayer() {
    try {
      const enter = await contract.write.bridgePlayer([
        players[currentPlayerIndex!],
        id,
      ]);
      const loading = toast.loading("Tx pending: " + enter);
      const result = await publicClient.waitForTransactionReceipt({
        hash: enter,
      });
      console.log(result.status);
      if (result.status === "success") {
        toast.update(loading, {
          render: "Success: " + enter,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        console.log(player);
        setCurrentPlayer(player);
        setTimer(true);
      } else {
        toast.update(loading, {
          render: "Failed: " + enter,
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

  if (!isMounted()) {
    return <></>;
  }

  const isPlayerNotIdle = currentPlayer?.status != 0;

  return bridge && bridge?.name ? (
    <div className="my-12 flex flex-col h-fit items-center stats rounded card w-52">
      <div className="-mt-[5.6rem] ">
        <div className=""></div>
      </div>
      <div className="flex justify-center px-4 text-lg ">
        <p className="name">{bridge?.name!}</p>
      </div>
      <div>
        <div className="flex justify-center px-4 text-lg "></div>
        <div className=" flex gap-4 mx-10 name justify-evenly items-center mb-4">
          {timer ? (
            <Countdown
              date={Date.now() + 1000 * countdown} // 1sec * seconds
              onComplete={() => {
                setTimer(false);
              }}
              renderer={(props) => (
                <button
                  className="w-28 px-3 py-2 rounded bg-button text-white"
                  disabled
                >
                  {String(props.minutes).padStart(2, "0")}:
                  {String(props.seconds).padStart(2, "0")}
                </button>
              )}
            />
          ) : (
            <div className="flex flex-col items-center gap-2 mb-2">
              <button
                className="w-fit px-3 py-2 rounded bg-button text-white"
                onClick={bridgePlayer}
                disabled={isPlayerNotIdle}
              >
                {isPlayerNotIdle ? "Player not idle" : "Enter Arena"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;
}
