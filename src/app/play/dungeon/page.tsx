"use client";
import "./index.css"
import Image from "next/image";
import { useState } from "react";
import Dragon from "@/components/Modal/Dungeon/Dragon";

//Image
import dragon from "@/assets/img/components/Play/boss.png";


export default function Dungeon() {
  const [showModalDragon, setshowModalDragon] = useState(false);

  async function onModalDragon() {
    setshowModalDragon(false);
  }

  return(
    <div className="div-father">
      <div className="bg-dungeon h-971"></div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <button onClick={() => setshowModalDragon(true)}>
          <Image
            src={dragon}
            className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
            alt="mapa"
          />
        </button>
      </div>
      {showModalDragon && <Dragon showModalDragon={onModalDragon} />}
    </div>
  )
    
}