"use client";
import "./style.css";

import Image from "next/image";
import Mage1 from "@/assets/img/personas/playerCard/Mage-1.png";
import Mage0 from "@/assets/img/personas/playerCard/Mage-0.png";
import Assassin1 from "@/assets/img/personas/playerCard/Assassin-1.png";
import Assassin0 from "@/assets/img/personas/playerCard/Assassin-0.png";
import Knight1 from "@/assets/img/personas/playerCard/Knight-1.png";
import Knight0 from "@/assets/img/personas/playerCard/Knight-0.png";
import { contractStore } from "@/store/contractStore";
import { useEffect, useState, Suspense } from "react";
import { PlayerStruct as Player } from "@/types/DIAMOND1HARDHAT";
import cube from "@/assets/img/components/PlayerCard/cube.png";
import { formatEther } from "viem";
import ray from "@/assets/img/components/PlayerCard/icons/ray.png";
import sword from "@/assets/img/components/PlayerCard/icons/sword.png";
import shield from "@/assets/img/components/PlayerCard/icons/shield.png";
import magic from "@/assets/img/components/PlayerCard/icons/magic.png";
import { useIsMounted } from "usehooks-ts";
import levelIcon from "@/assets/img/components/PlayerCard/icons/XP.png";
import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png";
import manaIcon from "@/assets/img/components/PlayerCard/icons/Mana.png";
import { toast } from "react-toastify";
import { usePublicClient } from "wagmi";
import Link from "next/link";
import SellModal from "@/components/Modal/Marketplace/SellModal";

export default function PlayerListPersonal({
  id,
  searchParams,
}: {
  id: BigInt;
  searchParams: Record<string, string> | null | undefined;
}) {
  const contract = contractStore((state) => state.diamond);
  const [player, setPlayer] = useState<Player | null>(null);
  const [playerPrice, setPlayerPrice] = useState<BigInt | null>();
  const isMounted = useIsMounted();
  const publicClient = usePublicClient();

  console.log(searchParams);

  const showModalSell = searchParams?.sell;
  console.log(showModalSell);

  useEffect(() => {
    const handlePlayers = async () => {
      const playerObj = await contract.read.getPlayer([id]);
      console.log(playerObj);
      setPlayer(playerObj);
      const playerSell = await contract.read.getPlayerListing([id]);
      console.log(playerSell.seller == false);
      if (playerSell.seller !== 0) {
        setPlayerPrice(await playerSell.price);
      }
    };
    handlePlayers();
  }, [contract, id]);

  async function handleDelist() {
    try {
      const delist = await contract.write.deListPlayer([id]);
      toast.promise(publicClient.waitForTransactionReceipt({ hash: delist }), {
        pending: "Tx pending: " + delist,
        success: {
          render() {
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

  async function handleSell() {}
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
    setImage = <Image src={Mage0} alt="Mage1" className=" w-36 -mt-10" />;
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
            <Image src={ray} id="molde" className="w-8 h-8 mx-3" alt="level" />
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
        <p>Price: {playerPrice && formatEther(playerPrice as any)}0 MNT</p>
        {playerPrice ? (
          <button
            className="w-fit px-3 py-2 rounded bg-button text-white"
            onClick={handleDelist}
          >
            Delist
          </button>
        ) : (
          <Link
            href={"/marketplace/personal/?sell=true"}
            className="w-fit px-3 py-2 rounded bg-button text-white"
            onClick={handleSell}
          >
            Sell
          </Link>
        )}
        {showModalSell && <SellModal id={id} />}
      </div>
    </div>
  );
}
