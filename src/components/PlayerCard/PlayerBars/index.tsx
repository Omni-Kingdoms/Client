"use client";

import Image from "next/image";
import { playerStore } from "@/store/playerStore";

import life from "@/assets/img/components/PlayerCard/life.png"
import mana from "@/assets/img/components/PlayerCard/mana.png"
import level from "@/assets/img/components/PlayerCard/xp.png"

import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png"
import manaIcon from "@/assets/img/components/PlayerCard/icons/Mana.png"
import levelIcon from "@/assets/img/components/PlayerCard/icons/XP.png"
import { useEffect, useState } from "react";

export const PlayerBars = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 925);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const HealthBar = ({ maxHp = 100, hp = 0 } = {}) => {
    const barWidth = (hp / maxHp) * 116;
    return (
      <div>
        <div className="health-bar">
          <div className="bar" style={{ width: `${barWidth}%` }}></div>
          <div className="hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

  const ManaBar = ({ maxMana = 100, mana = 0 } = {}) => {
    const barWidth = (mana / maxMana) * 86.5;
    return (
      <div>
        <div className="health-bar">
          <div className="mana-bar" style={{ width: `${barWidth}%` }}></div>
          <div className="mana-hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

  const XpBar = ({ maxXP = 100, xp = 0 } = {}) => {
    const barWidth = (xp / maxXP) * 69;
    return (
      <div>
        <div className="health-bar">
          <div className="xp-bar" style={{ width: `${barWidth}%` }}></div>
          <div className="xp-hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

  const currentPlayer = playerStore((state) => state.currentPlayer);

  return (
   <>
    <div>
      <p className="relative top-11 text-xs stats">Level: {Number(currentPlayer?.level)}</p>
      <div className="relative top-12 flex flex-col stats">
        <div className="flex items-center text-center mt-2">
          <Image
            src={lifeIcon}
            id="molde"
            className="w-5"
            alt="lifeIcon"
          />
          {!isSmallScreen && 
            <>
              <HealthBar hp={Number(currentPlayer?.health)} maxHp={Number(currentPlayer?.currentHealth)} />
              <Image
                src={life}
                id="molde"
                className="relative h-4 -left-73"
                alt="life"
              />
            </>
          }
          <p className="relative max-[925px]:left-1 -left-72 text-xs">{Number(currentPlayer?.health)} / {Number(currentPlayer?.currentHealth)}</p>
        </div>
        <div className="flex items-center text-center my-2">
          <Image
            src={manaIcon}
            id="molde"
            className="w-5"
            alt="manaIcon"
          />  
          {!isSmallScreen && 
            <>
              <ManaBar mana={Number(currentPlayer?.mana)} maxMana={Number(currentPlayer?.maxMana)} />
              <Image
                src={mana}
                id="molde"
                className="relative h-4 -left-73"
                alt="mana"
              />
            </>
          }
          <p className="relative max-[925px]:left-1 -left-72 text-xs">{Number(currentPlayer?.mana)} / {Number(currentPlayer?.maxMana)}</p>
        </div>
        <div className="flex items-center text-center mb-2">
          <Image
            src={levelIcon}
            id="molde"
            className="w-5"
            alt="levelIcon"
          />
          {!isSmallScreen && 
            <>
              <XpBar xp={Number(currentPlayer?.xp)} maxXP={Number(currentPlayer?.level) * 10} />
              <Image
                src={level}
                id="molde"
                className="relative h-4 -left-73"
                alt="level"
              />
            </>
          }
          <p className="relative max-[925px]:left-1 -left-72 text-xs">{Number(currentPlayer?.xp)} - Next Level </p>
        </div>
      </div>
    </div>
   </>
    
  );
};
