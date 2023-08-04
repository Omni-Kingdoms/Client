"use client";
import Image from "next/image";
import { Tooltip } from "antd";
import Countdown from "react-countdown";
import { toast } from "react-toastify";
import { useIsMounted } from "usehooks-ts";
import { contractStore } from "@/store/contractStore";
import { useNetwork, usePublicClient } from "wagmi";
import { useEffect, useState, Suspense, useCallback, MutableRefObject } from "react";
import { BasicMonsterStruct as Monster } from "@/types/DIAMOND1HARDHAT";
import { playerStore } from "@/store/playerStore";

//Image
import ray from "@/assets/img/components/PlayerCard/icons/ray.png";
import sword from "@/assets/img/components/Dungeon/sword.png";
import levelIcon from "@/assets/img/components/PlayerCard/icons/XP.png";
import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png";

type Props = {
  id: Number | BigInt;
};

export default function DungeonList({ id }: Props) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const [timer, setTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const [dungeon, setDungeon] = useState<Monster | null>(null);
  const isMounted = useIsMounted();
  const publicClient = usePublicClient();
  const handleDungeon = useCallback(async () => {
    const dungeon = await contract.read.getBasicMonster([id]);

    const blockTimestamp = await contract.read.getBasicMonsterCooldown([
      players[currentPlayerIndex!],
      id,
    ]);
    console.log(blockTimestamp);
    const startTime = Number(blockTimestamp);
    const currentTimeStamp = await contract.read.getBlocktime();
    const curTime = Number(currentTimeStamp);
    const time = curTime - startTime;
    console.log(time);
    console.log(dungeon.cooldown);
    if (time < Number(dungeon.cooldown)) {
      setCountdown(Number(dungeon.cooldown) - time);
      setTimer(true);
      console.log(countdown);
    }
    setDungeon(dungeon);
  }, [contract, id, timer]);

  useEffect(() => {
    handleDungeon();
  }, [handleDungeon]);

  async function handleFight() {
    try {
      const fight = await contract.write.fightBasicMonster([
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

  return (
    <Suspense
      fallback={
        <div className="min-[1023px]:relative min-[1023px]:right-28">
          <span className="relative inset-0 inline-flex h-6 w-6 animate-spin items-center justify-center rounded-full border-2 border-gray-300 after:absolute after:h-8 after:w-8 after:rounded-full after:border-2 after:border-y-[#643A30] after:border-x-transparent"></span>
        </div>
      }
    >
      <div className="my-12 flex flex-col h-fit items-center stats rounded card">
        <div className="-mt-[5.6rem] ">
          <div className="">
            <Image
              src={dungeon?.uri!}
              width={100}
              height={100}
              alt="chest"
              className=" w-36 -mt-10  rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-center px-4 text-lg ">
          <p className="name">{dungeon?.name!}</p>
        </div>
        <div className="flex flex-col  justify-between items-center name mb-4">
          <div className="flex justify-center items-center mb-1">
            {" "}
            <Tooltip title="Life">
              <div className="flex">
                <Image
                  src={lifeIcon}
                  id="molde"
                  className="w-8 mx-1"
                  alt="levelIcon"
                />
                <p className="mt-2">{Number(dungeon?.hp!)}</p>
              </div>
            </Tooltip>
            <Tooltip title="Damage">
              <div className="flex">
                <Image
                  src={sword}
                  id="molde"
                  className="w-8 mx-1"
                  alt="levelIcon"
                />
                <p className="mt-2">{Number(dungeon?.damage!)}</p>
              </div>
            </Tooltip>
          </div>
          <div className="flex flex-col  items-center justify-center">
            <div className="flex justify-center items-center mb-2">
              <Tooltip title="Cooldown">
                <div className="flex">
                  <Image
                    src={ray}
                    id="molde"
                    className="w-8 h-8 mx-1"
                    alt="level"
                  />
                  <p className="mt-2">{Number(dungeon?.cooldown!)}</p>
                </div>
              </Tooltip>
            </div>
            <div className="flex justify-center px-4 text-sm ">
              <p className="name">{"rewards"}</p>
            </div>
            <div className="flex justify-center items-center ">
              <Tooltip title="XP">
                <div className="flex">
                  <Image
                    src={levelIcon}
                    id="molde"
                    className="w-8 h-8"
                    alt="level"
                  />
                  <p className="mt-2">{Number(dungeon?.xpReward!)}</p>
                </div>
              </Tooltip>

              {/* <Image
                src={shield}
                id="molde"
                className="w-8 h-8"
                alt="level"
              />
              <p className="">{"Item"}</p> */}
            </div>
          </div>
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
                  className="w-28 px-3 py-2 rounded bg-button text-white" disabled
                >
                  {props.minutes}:{props.seconds}
                </button>
                
              )}
            />
          ) : (
            <button
              className="w-fit px-3 py-2 rounded bg-button text-white"
              onClick={handleFight}
            >
              Begin Battle
            </button>
          )}
        </div>
      </div>
    </Suspense>
  );
}
