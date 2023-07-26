"use client";

import "./style.css";
import Image from "next/image";
import { playerStore } from "@/store/playerStore";
import React, { useState, useRef, useEffect } from "react";

import molde from "@/assets/img/components/PlayerCard/molde.png";
import paper from "@/assets/img/components/PlayerCard/paper.png";

import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"
import arrowLeftDisable from "@/assets/img/components/PlayerCard/icons/arrow-left-disable.svg"
import arrowRightDisable from "@/assets/img/components/PlayerCard/icons/arrow-right-disable.svg"

import Mage1 from "@/assets/img/personas/playerCard/Mage-1.png"
import Mage0 from "@/assets/img/personas/playerCard/Mage-0.png"
import Assassin1 from "@/assets/img/personas/playerCard/Assassin-1.png"
import Assassin0 from "@/assets/img/personas/playerCard/Assassin-0.png"
import Knight1 from "@/assets/img/personas/playerCard/Knight-1.png"
import Knight0 from "@/assets/img/personas/playerCard/Knight-0.png"

import { PlayerBars } from "./PlayerBars";
import { PlayerStatus } from "./PlayerStatus";

export const Player = () => {

  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const players = playerStore((state) => state.players);
  const setCurrentPlayerIndex = playerStore(
    (state) => state.setCurrentPlayerIndex
  );
  let setImage = (
    <Image src={Mage1} alt="chest" className="relative w-44" />
  );

  const [index, setIndex] = useState(currentPlayerIndex);
  setCurrentPlayerIndex(index);

  const currentPlayer = playerStore((state) => state.currentPlayer);
  let currentClass = "";

  if(currentPlayer?.playerClass == 0 && currentPlayer?.male){
    setImage = (<Image src={Knight1} alt="Knight1" className="relative w-44"/>);
  } else if(currentPlayer?.playerClass == 0 && !currentPlayer?.male){
    setImage = (<Image src={Knight0} alt="Knight0" className="relative w-44"/>);
  } else if(currentPlayer?.playerClass == 1 && currentPlayer?.male){
    setImage = (<Image src={Assassin1} alt="Assassin1" className="relative w-44"/>);
  } else if(currentPlayer?.playerClass == 1 && !currentPlayer?.male){
    setImage = (<Image src={Assassin0} alt="Assassin0" className="relative w-44"/>);
  } else if(currentPlayer?.playerClass == 2 && currentPlayer?.male){
    setImage = (<Image src={Mage1} alt="Mage1" className="relative w-44"/>);
  }else {
    setImage = (<Image src={Mage0} alt="Mage0" className="relative w-44"/>);
  }

  if(currentPlayer?.playerClass == 0){
    currentClass = "Warrior";
  } else if(currentPlayer?.playerClass == 1){
    currentClass ="Assassin";
  } else {
    currentClass = "Mage";
  }

  return (
   <>
    <div className="absolute">
      <div className="relative left-12 min-[2000px]:left-1/3 min-[3000px]:left-2/3">
        <div className=" flex">
          <div >
            {setImage}
            <div className="absolute w-44 text-center stats top-8">
              <p>{currentClass}</p>
            </div>
            <Image
              src={paper}
              id="molde"
              className="w-38 mx-auto"
              alt="paper"
            />
            <div className="absolute name w-44 top-35 text-center">
              <p>{currentPlayer?.name}</p>
              <p className="relative -top-1.5 text-xs">#{Number(players[currentPlayerIndex])}</p>
            </div>
            {players.length > 1 ? (
                <>
                <div className="absolute top-35 ">
                  <button>
                    <Image
                      src={arrowLeft}
                      id="arrowLeft"
                      onClick={() =>
                        index === 0
                          ? setIndex(players.length - 1)
                          : setIndex(index - 1)
                      }
                      className="button-left -left-1 mr-29"
                      alt="arrowLeft"
                    />
                  </button>
                  <button>
                    <Image
                      src={arrowRight}
                      id="arrowRight"
                      onClick={() =>
                        index === players.length - 1
                          ? setIndex(0)
                          : setIndex(index + 1)
                      }
                      className="button-next"
                      alt="arrowRight"
                    />
                  </button>
                </div>
                </>
              ) : (
                <>
                <div className="absolute top-35 ">
                  <button disabled>
                    <Image
                      src={arrowLeftDisable}
                      id="arrowLeft"
                      className="button-left -left-1 mr-29"
                      alt="arrowLeft"
                    />
                  </button>
                  <button disabled>
                    <Image
                      src={arrowRightDisable}
                      id="arrowRight"
                      onClick={() =>
                        index === players.length - 1
                          ? setIndex(0)
                          : setIndex(index + 1)
                      }
                      className="button-next"
                      alt="arrowRight"
                    />
                  </button>
                </div>
                
                </>
              )}
          </div>
          <div className="top-3">
            <PlayerBars/>
            <PlayerStatus/>
          </div>
        </div>
      </div>
    </div>
      
   </>
    
  );

  
};

