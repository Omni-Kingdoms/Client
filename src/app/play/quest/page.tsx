"use client";
import "./index.css"
import Image from "next/image";
import { useState } from "react";
import GoldQuest from "@/components/Modal/Quest/goldQuest";
import GemQuest from "@/components/Modal/Quest/gemQuest";

//Image
import gold from "@/assets/img/components/Quest/coin.png"
import gem from "@/assets/img/components/Quest/diamond.png"
import { Tooltip } from "antd";

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
        <Tooltip title="Gold Quest">
          <button onClick={() => setshowModalGold(true)}>
            <Image
              src={gold}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="gold"
            />
          </button>
        </Tooltip>
        <Tooltip title="Gem Quest">
          <button onClick={() => setshowModalGem(true)}>
            <Image
              src={gem}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="gem"
            />
          </button>
        </Tooltip>
      </div>
      {showModalGold && <GoldQuest showModalGold={onModalGold} />}
      {showModalGem && <GemQuest showModalGem={onModalGem} />}
    </div>
  )
    
}