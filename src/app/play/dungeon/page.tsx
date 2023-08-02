"use client";
import "./index.css"
import Image from "next/image";
import { useState } from "react";
import Dungeons from "@/components/Modal/Dungeon/Dungeons";

//Image
import Dragon from "@/assets/img/components/Play/boss.png";


export default function Dungeon() {
  const [showModalDungeon, setshowModalDungeon] = useState(false);

  async function onModalDungeon() {
    setshowModalDungeon(false);
  }

  return(
    <div className="div-father">
      <div className="bg-dungeon h-971"></div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <button onClick={() => setshowModalDungeon(true)}>
          <Image
            src={Dragon}
            className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
            alt="mapa"
          />
        </button>
      </div>
      {showModalDungeon && <Dungeons showModalDungeons={onModalDungeon} />}
    </div>
  )
    
}