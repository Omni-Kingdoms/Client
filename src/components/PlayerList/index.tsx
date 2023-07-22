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
import paper from "@/assets/img/components/PlayerCard/paper.png";
import { useEffect, useState } from "react";
import { PlayerStruct as Player } from "@/types/DIAMOND1HARDHAT";

export default function PlayerList({
  id,
  personal,
}: {
  id: BigInt;
  personal: boolean;
}) {
  const contract = contractStore((state) => state.diamond);
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    const handlePlayers = async () => {
      const playerObj = await contract.read.getPlayer([id]);
      console.log(playerObj);
      setPlayer(playerObj);
    };
    handlePlayers();
  }, [contract, id]);
  let setImage = (
    <Image src={Mage1} alt="chest" className=" w-28 -left-2.5 -top-7" />
  );

  let currentClass = "";

  if (player?.playerClass == 0 && player?.male) {
    setImage = (
      <Image src={Knight1} alt="Knight1" className=" w-28 -left-2.5 -top-7" />
    );
  } else if (player?.playerClass == 0 && !player?.male) {
    setImage = (
      <Image src={Knight0} alt="Knight0" className=" w-28 -left-2.5 -top-7" />
    );
  } else if (player?.playerClass == 1 && player?.male) {
    setImage = (
      <Image
        src={Assassin1}
        alt="Assassin1"
        className=" w-28 -left-2.5 -top-7"
      />
    );
  } else if (player?.playerClass == 1 && !player?.male) {
    setImage = (
      <Image
        src={Assassin0}
        alt="Assassin0"
        className=" w-28 -left-2.5 -top-7"
      />
    );
  } else if (player?.playerClass == 2 && player?.male) {
    setImage = (
      <Image src={Mage1} alt="Mage1" className=" w-28 -left-2.5 -top-7" />
    );
  } else {
    setImage = <Image src={Mage0} alt="Mage0" className=" w-28 " />;
  }

  if (player?.playerClass == 0) {
    currentClass = "Knight";
  } else if (player?.playerClass == 1) {
    currentClass = "Assassin";
  } else {
    currentClass = "Mage";
  }
  return (
    <div className="my-4 w-full flex h-screen">
      <div className=" pb-4">{setImage}</div>
      <p className="stats">{currentClass}</p>
      <div className="flex items-center name   bg-red-400">
        <p>{player?.name!}</p>
        <p className="">#{Number(id)}</p>
      </div>
    </div>
  );
}
