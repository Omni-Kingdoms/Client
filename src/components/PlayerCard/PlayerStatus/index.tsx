"use client";

import "../style.css"
import Image from "next/image";
import { playerStore } from "@/store/playerStore";

import cube from "@/assets/img/components/PlayerCard/cube.png"

import ray from "@/assets/img/components/PlayerCard/icons/ray.png"
import sword from "@/assets/img/components/PlayerCard/icons/sword.png"
import coin from "@/assets/img/components/PlayerCard/icons/coin.png"
import diamond from "@/assets/img/components/PlayerCard/icons/diamond.png"
import shield from "@/assets/img/components/PlayerCard/icons/shield.png"
import magic from "@/assets/img/components/PlayerCard/icons/magic.png"

export const PlayerStatus = () => {

  const currentPlayer = playerStore((state) => state.currentPlayer);
  let currentQuest = "";

  if(currentPlayer?.status == 0){
    currentQuest = "idle"
  } else if(currentPlayer?.status == 1){
    currentQuest ="combatTrain"
  } else if(currentPlayer?.status == 2){
    currentQuest = "goldQuest"
  } else if(currentPlayer?.status == 3){
    currentQuest = "manaTrain"
  } else if(currentPlayer?.status == 4){
    currentQuest = "Arena"
  } else {
    currentQuest = "gemQuest"
  }

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
          <div className="top-4 absolute w-20 text-center text-xs quest">
            <p>{currentQuest}</p>
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
            src={magic}
            id="molde"
            className="w-8 h-8 mx-3"
            alt="level"
          />
        </div>
        <div>
          <Image
            src={shield}
            id="molde"
            className="w-8 h-8"
            alt="level"
          />
        </div>
      </div>
    </div>
    <div className="absolute left-52 top-36 flex flex-col text-min">
      <div className="flex my-2">
        <div className="ml-2 mr-2">
          <p>Status</p>
        </div>
        <div className="mx-10">
          <p>{Number(currentPlayer?.agility)}</p>
        </div>
        <div className="-mx-1.5">
          <p>{Number(currentPlayer?.strength)}</p>
        </div>
        <div className="mx-11">
          <p>{Number(currentPlayer?.magic)}</p>
        </div>
        <div className="-mx-3">
          <p>{Number(currentPlayer?.defense)}</p>
        </div>
      </div>
    </div>
   </>
    
  );
};
