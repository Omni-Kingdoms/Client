"use client";

import "../style.css"
import Image from "next/image";
import { playerStore } from "@/store/playerStore";

import cube from "@/assets/img/components/PlayerCard/cube.png"

import ray from "@/assets/img/components/PlayerCard/icons/ray.png"
import sword from "@/assets/img/components/PlayerCard/icons/sword.png"
import coin from "@/assets/img/components/PlayerCard/icons/coin.png"
import diamond from "@/assets/img/components/PlayerCard/icons/diamond.png"

export const PlayerStatus = () => {

  const currentPlayer = playerStore((state) => state.currentPlayer);

  return (
   <>
    <div className="absolute left-48 top-28 flex flex-col">
      <div className="flex my-2">
        <div>
          <Image
            src={cube}
            id="molde"
            className="w-20 h-10"
            alt="levelIcon"
          />
          <div className="top-4 absolute left-5 pb-8 text-sm font-bold">
            <p>{Number(currentPlayer?.status)}</p>
          </div>
          
        </div>
        <div>
          <Image
            src={ray}
            id="molde"
            className="w-8 h-8 mx-3"
            alt="level"
          />
        </div>
        <div>
          <Image
            src={sword}
            id="molde"
            className="w-8 h-8"
            alt="level"
          />
        </div>
        <div>
          <Image
            src={coin}
            id="molde"
            className="w-8 h-8 mx-3"
            alt="level"
          />
        </div>
        <div>
          <Image
            src={diamond}
            id="molde"
            className="w-8 h-8"
            alt="level"
          />
        </div>
      </div>
    </div>
    <div className="absolute left-56 top-36 flex flex-col text-min">
      <div className="flex my-2">
        <div className="mr-4">
          <p>Status</p>
        </div>
        <div className="mx-6">
          <p>{Number(currentPlayer?.status)}/100</p>
        </div>
        <div>
          <p>{Number(currentPlayer?.status)}/100</p>
        </div>
        <div className="mx-6">
          <p>{Number(currentPlayer?.status)}/100</p>
        </div>
        <div>
          <p>{Number(currentPlayer?.status)}/100</p>
        </div>
      </div>
    </div>
   </>
    
  );
};
