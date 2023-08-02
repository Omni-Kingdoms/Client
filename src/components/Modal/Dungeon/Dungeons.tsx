"use client";
import "../index.css"
import Image from "next/image";
import { Suspense, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { playerStore } from "@/store/playerStore";
import PlayerListPersonal from "@/components/PlayerListPersonal";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { paginate } from "@/utils/helper";

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
import dragon from "@/assets/img/components/Dungeon/dragon.png"
import level from "@/assets/img/components/PlayerCard/xp.png"
import fechar from "@/assets/img/components/modal/X.png"
import xp from "@/assets/img/components/PlayerCard/icons/XP.png"
import mana from "@/assets/img/components/PlayerCard/icons/Mana.png"
import Dungeon from "@/app/play/dungeon/page";
import DungeonList from "@/components/Modal/Dungeon/DungeonList";

export default function Dungeons({
  showModalDungeons
}: {
  showModalDungeons: () => void;
}) {
  const ref = useRef(null);
  const handleClickOutside = () => {
    showModalDungeons();
  }

  useOnClickOutside(ref, handleClickOutside);

  const players = playerStore((state) => state.players);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(players, currentPage, pageSize);
  
  const TimeBar = ({ maxTime = 100, time = 0 } = {}) => {
    const barWidth = (time / maxTime) * 69;
    return (
      <div>
        <div className="bar-time">
          <div className="time-bar" style={{ width: `${barWidth}%` }}></div>
          <div className="time-hit" style={{ width: `${0}%` }}></div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 backdrop-blur-sm bg-transparent bg-opacity-40"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          ref={ref}
          className="bg-boss inline-block transform transition-all sm:my-8 sm:align-middle sm:p-6"
        >
          <div className=" w-full flex-wrap flex h-full justify-center items-start my-32 gap-8  px-32 ">
            {paginatedPosts.map((listing, index) => {
              return <DungeonList key={Number(listing)} id={listing} />;
            })}
          </div>
          <Pagination
            items={players.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />

        </div>
      </div>

      
    </div>
  );
}