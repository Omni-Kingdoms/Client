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

export default function PlayerList({
  id,
  personal,
}: {
  id: BigInt;
  personal: boolean;
}) {
  const contract = contractStore((state) => state.diamond);
  const [player, setPlayer] = useState<Player | null>(null);
  const [playerPrice, setPlayerPrice] = useState<BigInt | 0>(0);
  const isMounted = useIsMounted();

  useEffect(() => {
    const handlePlayers = async () => {
      const playerObj = await contract.read.getPlayer([id]);
      console.log(playerObj);
      setPlayer(playerObj);
      const playerSell = await contract.read.getPlayerListing([id]);
      setPlayerPrice(await playerSell.price);
    };
    handlePlayers();
  }, [contract, id]);
  let setImage = (
    <Image src={Mage1} alt="chest" className=" w-36 -left-2.5 -top-7" />
  );

  let currentClass = "";

  if (player?.playerClass == 0 && player?.male) {
    setImage = (
      <Image src={Knight1} alt="Knight1" className=" w-36 -left-2.5 -top-7" />
    );
  } else if (player?.playerClass == 0 && !player?.male) {
    setImage = (
      <Image src={Knight0} alt="Knight0" className=" w-36 -left-2.5 -top-7" />
    );
  } else if (player?.playerClass == 1 && player?.male) {
    setImage = (
      <Image
        src={Assassin1}
        alt="Assassin1"
        className=" w-36 -left-2.5 -top-7"
      />
    );
  } else if (player?.playerClass == 1 && !player?.male) {
    setImage = (
      <Image
        src={Assassin0}
        alt="Assassin0"
        className=" w-36 -left-2.5 -top-7"
      />
    );
  } else if (player?.playerClass == 2 && player?.male) {
    setImage = (
      <Image src={Mage1} alt="Mage1" className=" w-36 -left-2.5 -top-7" />
    );
  } else {
    setImage = <Image src={Mage0} alt="Mage0" className=" w-36 " />;
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
      <div className="my-4 w-full flex h-fit items-center stats ">
        <div>
          <p className="stats relative top-10 left-8">{currentClass}</p>
          <div className="">{setImage}</div>
        </div>
        <div className="flex flex-col name w-full my-8  gap-2">
          <div className="w-full  flex justify-center px-4">
            <p className="text-white">
              {player?.name!} #{Number(id)}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col  items-start gap-2">
              <div className="flex justify-center items-center ">
                {" "}
                <Image
                  src={levelIcon}
                  id="molde"
                  className="w-8 mx-3"
                  alt="levelIcon"
                />
                <p className="text-white">{Number(player?.level)}</p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={ray}
                  id="molde"
                  className="w-8 h-8 mx-3"
                  alt="level"
                />
                <p className="text-white">{Number(player?.agility)}</p>
                <Image
                  src={sword}
                  id="molde"
                  className="w-8 h-8 mx-3"
                  alt="level"
                />
                <p className="text-white">{Number(player?.strength)}</p>
              </div>
              <div className="flex justify-center items-center ">
                <Image
                  src={magic}
                  id="molde"
                  className="w-8 h-8 mx-3"
                  alt="level"
                />
                <p className="text-white">{Number(player?.magic)}</p>
                <Image
                  src={shield}
                  id="molde"
                  className="w-8 h-8 mx-3"
                  alt="level"
                />
                <p className="text-white">{Number(player?.defense)}</p>
              </div>
            </div>
            <div className=" flex gap-4 mx-10 text-white justify-evenly items-center">
              <p>Price: {formatEther(playerPrice as any)} MNT</p>
              <button className="w-fit px-3 py-2 rounded bg-button text-white">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
