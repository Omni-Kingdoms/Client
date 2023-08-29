"use client";
import Image from "next/image";
import { Tooltip } from "antd";
import Countdown from "react-countdown";
import { toast } from "react-toastify";
import { useIsMounted } from "usehooks-ts";
import { contractStore } from "@/store/contractStore";
import { usePublicClient } from "wagmi";
import { useEffect, useState, useCallback } from "react";
import { BasicArenaStruct as Arena } from "@/types/DIAMOND1HARDHAT";
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

export default function ArenaList({ id, disableLoading }: Props) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const currentPlayer = playerStore((state) => state.currentPlayer);

  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const [timer, setTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [cooldown, setCooldown] = useState(0);
  const [gold, setCoin] = useState(0);

  const [arena, setArena] = useState<Arena | null>(null);
  const [playerName, setPlayerName] = useState(null);
  const isMounted = useIsMounted();
  const publicClient = usePublicClient();

  const handleArena = useCallback(async () => {
    const arena = await contract.read.getBasicArena([id]);
    if (!arena.open) {
      const name = await contract.read.getPlayer([arena.hostId]);
      setPlayerName(name.name);
    }
    const blockTimestamp = await contract.read.getBasicArenaCooldowns([
      players[currentPlayerIndex!],
      id,
    ]);
    console.log(blockTimestamp);
    const startTime = Number(blockTimestamp);
    const currentTimeStamp = await contract.read.getBlocktime();
    const curTime = Number(currentTimeStamp);
    const time = curTime - startTime;
    console.log(time);
    console.log(arena.cooldown);
    const CD = Number(arena.cooldown) + 10 - Number(currentPlayer?.agility);
    const COIN = Number(arena.cost);
    console.log(CD);
    setCooldown(CD);
    setCoin(COIN);
    if (time < CD) {
      setCountdown(CD - time);
      setTimer(true);
      console.log(countdown);
    }
    setArena(arena);
    disableLoading();
  }, [contract, id, timer]);

  useEffect(() => {
    handleArena();
  }, [handleArena]);

  async function enterBasicArena() {
    try {
      const enter = await contract.write.enterBasicArena([
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

  async function fightBasicArena() {
    try {
      const fight = await contract.write.fightBaiscArena([
        players[currentPlayerIndex!],
        id,
      ]);
      const loading = toast.loading("Tx pending: " + fight);
      const result = await publicClient.waitForTransactionReceipt({
        hash: fight,
      });
      console.log(result.status);
      if (result.status === "success") {
        toast.update(loading, {
          render: "Success: " + fight,
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
          render: "Failed: " + fight,
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

  async function leaveBasicArena() {
    try {
      const fight = await contract.write.leaveBasicArena([
        players[currentPlayerIndex!],
        id,
      ]);
      const loading = toast.loading("Tx pending: " + fight);
      const result = await publicClient.waitForTransactionReceipt({
        hash: fight,
      });
      console.log(result.status);
      if (result.status === "success") {
        toast.update(loading, {
          render: "Success: " + fight,
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
          render: "Failed: " + fight,
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

  return arena && arena?.name ? (
    <div className="my-12 flex flex-col h-fit items-center stats rounded card w-52">
      <div className="-mt-[5.6rem] ">
        <div className="">
          <Image
            src={arena?.uri!}
            width={100}
            height={100}
            alt="chest"
            className=" w-36 -mt-10  rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-center px-4 text-lg ">
        <p className="name">{arena?.name!}</p>
      </div>
      {arena.open ? (
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
                  onClick={enterBasicArena}
                  disabled={isPlayerNotIdle}
                >
                  {isPlayerNotIdle ? "Player not idle" : "Enter Arena"}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          {arena.hostId == players[currentPlayerIndex!] ? (
            <div>
              <div className="flex justify-center px-4 text-lg ">
                <p className="name">Leave Arena</p>
              </div>
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
                      onClick={leaveBasicArena}
                    >
                      {isPlayerNotIdle ? "Leave Arena" : "Fight Arena"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-center px-4 text-lg ">
                <p className="name">Fight {playerName}</p>
              </div>
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
                      onClick={fightBasicArena}
                      disabled={isPlayerNotIdle}
                    >
                      {isPlayerNotIdle ? "Player not idle" : "Fight Arena"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col  justify-between items-center name mb-4">
        <div className="flex justify-center items-center mb-1">
          {" "}
          {/* <Tooltip title="Life">
              <div className="flex">
                <Image
                  src={lifeIcon}
                  id="molde"
                  className="w-8 mx-1"
                  alt="levelIcon"
                />
                <p className="mt-2">{Number(dungeon?.hp!)}</p>
              </div>
            </Tooltip> */}
          {/* <Tooltip title="Damage">
              <div className="flex">
                <Image
                  src={sword}
                  id="molde"
                  className="w-8 mx-1"
                  alt="levelIcon"
                />
                <p className="mt-2">{Number(dungeon?.damage!)}</p>
              </div>
            </Tooltip> */}
        </div>
        <div className="flex flex-col  items-center justify-center">
          <div className="flex justify-center items-center mb-2">
            <Tooltip title="Cooldown">
              <div className="flex">
                <Image
                  src={clock}
                  id="molde"
                  className="w-8 h-8 mx-1"
                  alt="level"
                />
                <p className="mt-2">{cooldown}</p>
              </div>
            </Tooltip>
            <Tooltip title="gold">
              <div className="flex">
                <Image
                  src={coin}
                  id="molde"
                  className="w-8 h-8 mx-1"
                  alt="level"
                />
                <p className="mt-2">{gold}</p>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}