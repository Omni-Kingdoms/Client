"use client";

import Image from "next/image";
import { playerStore } from "@/store/playerStore";

import life from "@/assets/img/components/PlayerCard/life.png"
import mana from "@/assets/img/components/PlayerCard/mana.png"
import level from "@/assets/img/components/PlayerCard/level.png"

import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png"
import manaIcon from "@/assets/img/components/PlayerCard/icons/Mana.png"
import levelIcon from "@/assets/img/components/PlayerCard/icons/XP.png"

export const PlayerBars = () => {

  const currentPlayer = playerStore((state) => state.currentPlayer);

  return (
   <>
    <div>
      <p className="absolute left-48 text-xs stats">Level: {Number(currentPlayer?.level)}</p>
      <div className="absolute left-48 top-8 flex flex-col stats">
        <div className="flex items-center text-center">
          <Image
            src={lifeIcon}
            id="molde"
            className="w-5"
            alt="lifeIcon"
          />
          <Image
            src={life}
            id="molde"
            className="w-72 h-4"
            alt="life"
          />
          <p className="px-2 text-xs">{Number(currentPlayer?.health)} / {Number(currentPlayer?.currentHealth)}</p>
        </div>
        <div className="flex items-center text-center">
          <Image
            src={manaIcon}
            id="molde"
            className="w-5"
            alt="manaIcon"
          />
          <Image
            src={mana}
            id="molde"
            className="w-56 h-4"
            alt="mana"
          />
          <p className="px-2 text-xs">{Number(currentPlayer?.mana)} / {Number(currentPlayer?.maxMana)}</p>
        </div>
        <div className="flex items-center text-center">
          <Image
            src={levelIcon}
            id="molde"
            className="w-5"
            alt="levelIcon"
          />
          <Image
            src={level}
            id="molde"
            className="w-44 h-4"
            alt="level"
          />
          <p className="px-2 text-xs">{Number(currentPlayer?.xp)} - Next Level </p>
        </div>
      </div>
    </div>
   </>
    
  );
};
