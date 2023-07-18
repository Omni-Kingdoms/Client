"use client";

import "./style.css";
import Image from "next/image";
import { playerStore } from "@/store/playerStore";
import React, { useState, useRef, useEffect } from "react";

import molde from "@/assets/img/components/PlayerCard/molde.png";
import paper from "@/assets/img/components/PlayerCard/paper.png";

import { PlayerBars } from "./PlayerBars";
import { PlayerStatus } from "./PlayerStatus";

export const Player = () => {

  const currentPlayer = playerStore((state) => state.currentPlayer);
  const ImagePerson = currentPlayer?.uri;
  console.log(currentPlayer)

  return (
   <>
      <div className="relative left-16 top-32">
        <div className="absolute top-0 left-0">
          <Image
            src={molde}
            id="molde"
            className="w-40 h-56 flex-shrink-0"
            alt="moldee"
          />
          <div className="top-0.5 absolute left-12 pb-8 text-lg font-bold">
            <p>{currentPlayer?.name}</p>
          </div>
          <div className="absolute left-2">
            <Image
              src={paper}
              id="molde"
              className="w-full"
              alt="paper"
            />
            <div className="absolute left-11 -bottom-7 pb-8 text-lg font-bold text-black">
              <p>{currentPlayer?.name}</p>
            </div>
          </div>
        </div>
        <PlayerBars/>
        <PlayerStatus/>
      </div>
   </>
    
  );
};
