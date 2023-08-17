"use client";
import "./style.css";
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
import Mage1 from "@/assets/img/personas/playerCard/Mage-1.png";
import Mage0 from "@/assets/img/personas/playerCard/Mage-0.png";
import Assassin1 from "@/assets/img/personas/playerCard/Assassin-1.png";
import Assassin0 from "@/assets/img/personas/playerCard/Assassin-0.png";
import Knight1 from "@/assets/img/personas/playerCard/Knight-1.png";
import Knight0 from "@/assets/img/personas/playerCard/Knight-0.png";
import ray from "@/assets/img/components/PlayerCard/icons/ray.png";
import sword from "@/assets/img/components/PlayerCard/icons/sword.png";
import shield from "@/assets/img/components/PlayerCard/icons/shield.png";
import magic from "@/assets/img/components/PlayerCard/icons/magic.png";
import levelIcon from "@/assets/img/components/PlayerCard/icons/XP.png";
import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png";
import manaIcon from "@/assets/img/components/PlayerCard/icons/Mana.png";
import TransferModal from "../Modal/Marketplace/TransferModal";
type Props = {
  id: BigInt | Number;
};

export default function PlayerListPersonal({ id }: Props) {
  const contract = contractStore((state) => state.diamond);
  const [player, setPlayer] = useState<Player | null>(null);
  const [playerPrice, setPlayerPrice] = useState<BigInt | null>();
  const [showModalSell, setShowModalSell] = useState(false);
  const [showModalTransfer, setShowModalTransfer] = useState(false);
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
  async function onModalTransfer() {
    setShowModalTransfer(false);
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

  let setImage = <Image src={Mage1} alt="chest" className=" w-36 -mt-10" />;

  let currentClass = "";

  if (player?.playerClass == 0 && player?.male) {
    setImage = <Image src={Knight1} alt="Knight1" className=" w-36 -mt-10" />;
  } else if (player?.playerClass == 0 && !player?.male) {
    setImage = <Image src={Knight0} alt="Knight0" className=" w-36 -mt-10" />;
  } else if (player?.playerClass == 1 && player?.male) {
    setImage = (
      <Image src={Assassin1} alt="Assassin1" className=" w-36 -mt-10" />
    );
  } else if (player?.playerClass == 1 && !player?.male) {
    setImage = (
      <Image src={Assassin0} alt="Assassin0" className=" w-36 -mt-10" />
    );
  } else if (player?.playerClass == 2 && player?.male) {
    setImage = <Image src={Mage1} alt="Mage1" className=" w-36 -mt-10" />;
  } else {
    setImage = <Image src={Mage0} alt="Mage0" className=" w-36 -mt-10" />;
  }

  if (player?.playerClass == 0) {
    currentClass = "Warrior";
  } else if (player?.playerClass == 1) {
    currentClass = "Assassin";
  } else {
    currentClass = "Mage";
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
      <div className="my-12  flex flex-col h-fit items-center stats  rounded card">
        <div className="-mt-[5.6rem] ">
          <div className="relative  top-1 text-center">
            <p className="stats">{currentClass}</p>
          </div>
          <div className="">{setImage}</div>
        </div>
        <div className="flex justify-center px-4 text-lg ">
          <p className="name">
            {player?.name!} #{Number(id)}
          </p>
        </div>
        <div className="flex flex-col  justify-between items-center name mb-4">
          <div className="flex justify-center items-center">
            <Image
              src={levelIcon}
              id="molde"
              className="w-8 mx-3"
              alt="levelIcon"
            />
            <p className="">{Number(player?.level)}</p>
          </div>
          <div className="flex justify-center items-center mb-1">
            {" "}
            <Image
              src={lifeIcon}
              id="molde"
              className="w-8 mx-1"
              alt="levelIcon"
            />
            <p className="">
              {Number(player?.currentHealth)}/{Number(player?.health)}
            </p>
            <Image
              src={manaIcon}
              id="molde"
              className="w-8 mx-1"
              alt="levelIcon"
            />
            <p className="">
              {Number(player?.mana)}/{Number(player?.maxMana)}
            </p>
          </div>
          <div className="flex flex-col  items-center justify-center">
            <div className="flex justify-center items-center mb-2">
              <Image
                src={ray}
                id="molde"
                className="w-8 h-8 mx-3"
                alt="level"
              />
              <p className="">{Number(player?.agility)}</p>
              <Image
                src={sword}
                id="molde"
                className="w-8 h-8 mx-3"
                alt="level"
              />
              <p className="">{Number(player?.strength)}</p>
            </div>
            <div className="flex justify-center items-center ">
              <Image
                src={magic}
                id="molde"
                className="w-8 h-8 mx-3"
                alt="level"
              />
              <p className="">{Number(player?.magic)}</p>
              <Image
                src={shield}
                id="molde"
                className="w-8 h-8 mx-3"
                alt="level"
              />
              <p className="">{Number(player?.defense)}</p>
            </div>
          </div>
        </div>
        <div className=" flex gap-4 mx-10 name justify-evenly items-center mb-4">
          {playerPrice ? (
            <p>
              Price: {playerPrice && formatEther(playerPrice as any)}{" "}
              {chain?.nativeCurrency.symbol}
            </p>
          ) : (
            <button
              className="w-fit px-3 py-2 rounded bg-button text-white"
              onClick={() => setShowModalTransfer(true)}
            >
              Transfer
            </button>
          )}
          {playerPrice ? (
            <button
              className="w-fit px-3 py-2 rounded bg-button text-white"
              onClick={handleDelist}
            >
              Delist
            </button>
          ) : (
            <button
              className="w-fit px-3 py-2 rounded bg-button text-white"
              onClick={() => setShowModalSell(true)}
            >
              Sell
            </button>
          )}
          {showModalSell && (
            <SellModal
              id={id}
              showModalSell={onModalSell}
              handlePlayers={handlePlayers}
            />
          )}
          {showModalTransfer && (
            <TransferModal
              id={id}
              showModalTransfer={onModalTransfer}
              handlePlayers={handlePlayers}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
}
