"use client";
import "../style.css"
import Image from "next/image";
import { Tooltip } from "antd";
import { playerStore } from "@/store/playerStore";

//Image
import cube from "@/assets/img/components/PlayerCard/cube.png"
import ray from "@/assets/img/components/PlayerCard/icons/ray.png"
import sword from "@/assets/img/components/PlayerCard/icons/sword.png"
import coin from "@/assets/img/components/PlayerCard/icons/coin.png"
import diamond from "@/assets/img/components/PlayerCard/icons/diamond.png"
import shield from "@/assets/img/components/PlayerCard/icons/shield.png"
import magic from "@/assets/img/components/PlayerCard/icons/magic.png"

export const PlayerStatus = () => {

  const currentPlayer = playerStore((state) => state.currentPlayer);
  const gold = playerStore((state) => state.gold);
  const gem = playerStore((state) => state.gem);
  let currentQuest = "";

  if(currentPlayer?.status == 0){
    currentQuest = "idle"
  } else if(currentPlayer?.status == 1 || currentPlayer?.status == 3){
    currentQuest ="Train"
  } else if(currentPlayer?.status == 2 || currentPlayer?.status == 5){
    currentQuest = "Quest"
  }  else if(currentPlayer?.status == 4){
    currentQuest = "Arena"
  } else if (currentPlayer?.status == 100){
    currentQuest = "Bridge"
  } else {
    currentQuest = "on Sale"
  }

  return (
   <>
    <div className="absolute top-36 flex flex-col">
      <div className="min-[530px]:flex my-2">
        <div>
          <Image
            src={cube}
            id="molde"
            className="w-20 h-10  max-[915px]:max-w-none"
            alt="levelIcon"
          />
          <div className="top-4 absolute w-20 text-center text-xs quest">
            <p>{currentQuest}</p>
          </div>
          <div className="stats ml-6 -mt-2 text-min">
            <p>Status</p>
          </div>

        </div>
        <div className="flex max-[530px]:mt-2 ml-2 text-min stats">
          <div>
            <Tooltip title="Agility">
              <Image
                src={ray}
                id="molde"
                className="w-8 h-8"
                alt="level"
              />
              <p className="mx-3">{Number(currentPlayer?.agility)}</p>
            </Tooltip>
          </div>
          <div>
            <Tooltip title="Strength">
              <Image
                src={sword}
                id="molde"
                className="w-8 h-8"
                alt="level"
              />
              <p className="mx-3">{Number(currentPlayer?.strength)}</p>
            </Tooltip>
          </div>
          <div>
            <Tooltip title="Magic">
              <Image
                src={magic}
                id="molde"
                className="w-8 h-8"
                alt="level"
              />
              <p className="mx-3">{Number(currentPlayer?.magic)}</p>
            </Tooltip>
          </div>
          <div>
            <Tooltip title="Defense">
              <Image
                src={shield}
                id="molde"
                className="w-8 h-8"
                alt="level"
              />
              <p className="mx-3">{Number(currentPlayer?.defense)}</p>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex ml-2 text-min stats">
        <div>
          <Tooltip title="Gold">
            <Image
              src={coin}
              id="molde"
              className="w-8 h-8"
              alt="level"
            />
            <p className="mx-3">{gold}</p>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Gem">
            <Image
              src={diamond}
              id="molde"
              className="w-8 h-8"
              alt="level"
            />
            <p className="mx-3">{gem}</p>
          </Tooltip>
        </div>
      </div>
    </div>
   </>
  );

};