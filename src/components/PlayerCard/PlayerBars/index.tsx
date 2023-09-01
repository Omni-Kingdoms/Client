"use client";

import Image from "next/image";
import { playerStore } from "@/store/playerStore";
import { useEffect, useState } from "react";
import LevelUP from "@/components/Modal/LevelUP/LevelUP";

//Image
import life from "@/assets/img/components/PlayerCard/life.png";
import mana from "@/assets/img/components/PlayerCard/mana.png";
import level from "@/assets/img/components/PlayerCard/xp.png";
import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png";
import manaIcon from "@/assets/img/components/PlayerCard/icons/Mana.png";
import levelIcon from "@/assets/img/components/PlayerCard/icons/XP.png";
import { Tooltip } from 'antd';

type PlayersBarsProps = {
  openLevelUpModal: () => void,
}

export const PlayerBars = ({ openLevelUpModal }: PlayersBarsProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 910);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const HealthBar = ({
    maxHp = Number(currentPlayer?.health),
    hp = 0,
  } = {}) => {
    const barWidth = (100 * hp) / maxHp;
    return (
      <div className="absolute w-[100%]">
        <div className="health-bar w-[100%]">
          <div className="bar" style={{ width: `${barWidth}%` }}></div>
          <div className="hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

  const ManaBar = ({
    maxMana = Number(currentPlayer?.maxMana),
    mana = 0,
  } = {}) => {
    const barWidth = (100 * mana) / maxMana;
    return (
      <div className="absolute w-[100%]">
        <div className="health-bar w-[100%]">
          <div className="mana-bar" style={{ width: `${barWidth}%` }}></div>
          <div className="mana-hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

  const XpBar = ({
    maxXP = Number(currentPlayer?.level) * 10,
    xp = 0,
  } = {}) => {
    let barWidth = (100 * xp) / maxXP;

    return (
      <div className="absolute w-[100%]">
        <div className="health-bar w-[100%]">
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
        <p className="text-xs stats">
          Level: {Number(currentPlayer?.level)}
        </p>
        <div className="flex flex-col stats">
          <div className="flex items-center text-center mt-2">
            <Image src={lifeIcon} id="molde" className="w-6" alt="lifeIcon" />
            {!isSmallScreen && (
              <div className="relative">
                <HealthBar
                  hp={Number(currentPlayer?.currentHealth)}
                  maxHp={Number(currentPlayer?.health)}
                />
                <Tooltip title="Life">
                  <Image
                    src={life}
                    id="molde"
                    className="h-4"
                    alt="life"
                  />
                </Tooltip>
              </div>
            )}
            <p className="text-xs ml-2">
              {Number(currentPlayer?.currentHealth)} /{" "}
              {Number(currentPlayer?.health)}
            </p>
          </div>
          <div className="flex items-center text-center">
            <Image src={manaIcon} id="molde" className="w-6" alt="manaIcon" />
            {!isSmallScreen && (
              <div className="relative">
                <ManaBar
                  mana={Number(currentPlayer?.mana)}
                  maxMana={Number(currentPlayer?.maxMana)}
                />
                <Tooltip title="Mana">
                  <Image
                    src={mana}
                    id="molde"
                    className="h-4"
                    alt="mana"
                  />
                </Tooltip>
              </div>
            )}
            <p className="text-xs ml-2">
              {Number(currentPlayer?.mana)} / {Number(currentPlayer?.maxMana)}
            </p>
          </div>
          <div className="flex items-center text-center mb-2">
            <Image src={levelIcon} id="molde" className="w-6" alt="levelIcon" />
            {!isSmallScreen && (
              <div className="relative">
                <XpBar
                  xp={Number(currentPlayer?.xp)}
                  maxXP={Number(currentPlayer?.level) * 10}
                />
                <Tooltip title="Experience">
                  <Image
                    src={level}
                    id="molde"
                    className="h-4"
                    alt="level"
                  />
                </Tooltip>
              </div>
            )}
            {Number(currentPlayer?.xp) < Number(currentPlayer?.level) * 10 ? (
              <p className="text-xs ml-2">
                {Number(currentPlayer?.xp)}/{Number(currentPlayer?.level) * 10}
              </p>
            ) : (
              <button
                className="swiper-button-next ml-2"
                onClick={openLevelUpModal}
              >
                <div className="top-0 absolute w-20 text-center text-xs quest cursor-pointer">
                  <p className="cursor-pointer">LevelUp</p>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
