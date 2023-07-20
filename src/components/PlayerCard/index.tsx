"use client";

import "./style.css";
import Image from "next/image";
import { playerStore } from "@/store/playerStore";
import React, { useState, useRef, useEffect } from "react";

import molde from "@/assets/img/components/PlayerCard/molde.png";
import paper from "@/assets/img/components/PlayerCard/paper.png";

import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"

import { PlayerBars } from "./PlayerBars";
import { PlayerStatus } from "./PlayerStatus";

export const Player = () => {

  const currentPlayer = playerStore((state) => state.currentPlayer)
  let currentClass = ""
  const image = currentPlayer?.uri!

  if(currentPlayer?.playerClass == 0){
    currentClass = "Knight"
  } else if(currentPlayer?.playerClass == 1){
    currentClass ="Assassin"
  } else {
    currentClass = "Mage"
  }

  return (
   <>
      <div className="relative left-16 top-10">
        <div className="absolute max-h-8">
          <Image
            src={image}
            width={550}
            height={550}
            id="molde"
            className="mask relative -left-53"
            alt="mask"
          />
          <Image
            src={molde}
            id="molde"
            className="w-40 h-56 relative -top-100"
            alt="molde"
          />
          <div className="top-0.5 absolute w-38 text-center pb-8 stats">
            <p>{currentClass}</p>
          </div>
          <div className="absolute -left-4 flex top-60">
            <button>
              <Image
                src={arrowLeft}
                id="arrowLeft"
                className="swiper-button-prev gray-img"
                alt="arrowLeft"
              />
            </button>
            <Image
              src={paper}
              id="molde"
              className="w-36 h-10"
              alt="paper"
            />
            <div className="absolute top-2.5 name w-48 text-center">
              <p>{currentPlayer?.name}</p>
            </div>
            <button>
              <Image
                src={arrowRight}
                id="arrowRight"
                className="swiper-button-next"
                alt="arrowRight"
              />
            </button>
          </div>
        </div>
        <PlayerBars/>
        <PlayerStatus/>
      </div>
   </>
    
  );

  
};
