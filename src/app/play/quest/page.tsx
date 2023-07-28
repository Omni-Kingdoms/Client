"use client";
import "./index.css"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GoldQuest from "@/components/Modal/Quest/GoldQuest";
import GemQuest from "@/components/Modal/Quest/GemQuest";

//Image
import gold from "@/assets/img/components/Quest/coin.png"
import gem from "@/assets/img/components/Quest/diamond.png"

export default function Quest() {
  const [showModalGold, setshowModalGold] = useState(false);
  const [showModalGem, setshowModalGem] = useState(false);

  async function onModalGold() {
    setshowModalGold(false);
  }

  async function onModalGem() {
    setshowModalGem(false);
  }

  return(
    <div className="div-father">
      <div className="bg-quest h-971"></div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <button onClick={() => setshowModalGold(true)}>
          <Image
            src={gold}
            className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
            alt="gold"
          />
        </button>
        <button onClick={() => setshowModalGem(true)}>
          <Image
            src={gem}
            className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
            alt="gem"
          />
        </button>
      </div>
      {showModalGold && <GoldQuest showModalGold={onModalGold} />}
      {showModalGem && <GemQuest showModalGem={onModalGem} />}
    </div>
  )
    
}
