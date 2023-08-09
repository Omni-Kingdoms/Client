"use client";
import Image from "next/image";
import { useState } from "react";
import GoldQuest from "@/components/Modal/Quest/goldQuest";
import GemQuest from "@/components/Modal/Quest/gemQuest";

//Image
import gold from "@/assets/img/components/Quest/coin.png"
import gem from "@/assets/img/components/Quest/diamond.png"
import map from "@/assets/img/components/Quest/quest.png"
import { Tooltip } from "antd";

export default function Quest() {
  const [showModalGold, setShowModalGold] = useState(false);
  const [showModalGem, setShowModalGem] = useState(false);

  return(
    <div className="div-father">
      <div className="bg-quest h-971">
        <Image src={map} alt="Mapa" />
      </div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <Tooltip title="Gold Quest">
          <button className="cursor-pointer" onClick={() => setShowModalGold(true)}>
            <Image
              src={gold}
              className="icons-map icons-map min-[400px]:m-5"
              alt="gold"
            />
          </button>
        </Tooltip>
        <Tooltip title="Gem Quest">
          <button className="cursor-pointer" onClick={() => setShowModalGem(true)}>
            <Image
              src={gem}
              className="icons-map icons-map min-[400px]:m-5"
              alt="gem"
            />
          </button>
        </Tooltip>
      </div>
      {showModalGold && <GoldQuest close={() => setShowModalGold(false)} />}
      {showModalGem && <GemQuest close={() => setShowModalGem(false)} />}
    </div>
  )

}