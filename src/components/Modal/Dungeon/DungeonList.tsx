"use client";
import Image from "next/image";
import { formatEther } from "viem";
import { toast } from "react-toastify";
import { useIsMounted } from "usehooks-ts";
import { contractStore } from "@/store/contractStore";
import { useNetwork, usePublicClient } from "wagmi";
import { useEffect, useState, Suspense, useCallback } from "react";
import { PlayerStruct as Player } from "@/types/DIAMOND1HARDHAT";
import SellModal from "@/components/Modal/Marketplace/SellModal";

//Image
import dragon from "@/assets/img/components/Dungeon/dragon.png"
import ray from "@/assets/img/components/PlayerCard/icons/ray.png";
import sword from "@/assets/img/components/Dungeon/sword.png";
import shield from "@/assets/img/components/PlayerCard/icons/shield.png";
import magic from "@/assets/img/components/PlayerCard/icons/magic.png";
import levelIcon from "@/assets/img/components/PlayerCard/icons/XP.png";
import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png";
import manaIcon from "@/assets/img/components/PlayerCard/icons/Mana.png";
import { Tooltip } from "antd";

type Props = {
  id: BigInt;
};

export default function DungeonList({ id }: Props) {
  const contract = contractStore((state) => state.diamond);
  const [player, setPlayer] = useState<Player | null>(null);
  const [playerPrice, setPlayerPrice] = useState<BigInt | null>();
  const [showModalSell, setShowModalSell] = useState(false);
  const isMounted = useIsMounted();
  const publicClient = usePublicClient();
  const { chain } = useNetwork();

  const handlePlayers = useCallback(async () => {
    const playerObj = await contract.read.getPlayer([id]);
    setPlayer(playerObj);
    const playerSell = await contract.read.getPlayerListing([id]);
    if (playerSell.seller !== 0) {
      setPlayerPrice(await playerSell.price);
    }
  }, [contract, id]);

  useEffect(() => {
    handlePlayers();
  }, [handlePlayers]);

  async function onModalSell() {
    setShowModalSell(false);
  }

  async function handleDelist() {
    try {
      const delist = await contract.write.deListPlayer([id]);
      toast.promise(publicClient.waitForTransactionReceipt({ hash: delist }), {
        pending: "Tx pending: " + delist,
        success: {
          render() {
            setTimeout(() => {
              handlePlayers();
            }, 3000);
            return "Success: " + delist;
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
            <Image src={dragon} alt="chest" className=" w-36 -mt-10" />
          </div>
        </div>
        <div className="flex justify-center px-4 text-lg ">
          <p className="name">
            {"Dragon"}
          </p>
        </div>
        <div className="flex flex-col  justify-between items-center name mb-4">
          {/* <div className="flex justify-center items-center">
            <Image
              src={levelIcon}
              id="molde"
              className="w-8 mx-3"
              alt="levelIcon"
            />
            <p className="">{Number(player?.level)}</p>
          </div> */}
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
                <p className="mt-2">
                  {"20"}
                </p>
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
                <p className="mt-2">
                  {"5"}
                </p>
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
                  <p className="mt-2">{"08:00"}</p>
                </div>
              </Tooltip>
            </div>
            <div className="flex justify-center px-4 text-sm ">
              <p className="name">
                {"rewards"}
              </p>
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
                  <p className="mt-2">{"+20XP"}</p>
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
          <button
              className="w-fit px-3 py-2 rounded bg-button text-white"
              onClick={() => setShowModalSell(true)}
            >
              Begin Battle
            </button>
          {/* {showModalSell && (
            <SellModal
              id={id}
              showModalSell={onModalSell}
              handlePlayers={handlePlayers}
            />
          )} */}
        </div>
      </div>
    </Suspense>
  );
}
