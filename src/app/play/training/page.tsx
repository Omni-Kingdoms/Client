"use client";
import "./index.css"
import { useState } from "react";
import Image from "next/image";
import LifeTraining from "@/components/Modal/Training/LifeTraining";
import ManaTraining from "@/components/Modal/Training/ManaTraining";

//Image
import life from "@/assets/img/components/Training/life-coin.png"
import mana from "@/assets/img/components/Training/mana-coin.png"

export default function Training() {
  const [showModalLife, setshowModalLife] = useState(false);
  const [showModalMana, setshowModalMana] = useState(false);

  async function onModalLife() {
    setshowModalLife(false);
  }

  async function onModalMana() {
    setshowModalMana(false);
  }

  return(
    <div className="div-father">
      <div className="bg-training h-971"></div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <button onClick={() => setshowModalLife(true)}>
          <Image
            src={life}
            className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
            alt="mapa"
          />
        </button>
        <button onClick={() => setshowModalMana(true)}>
          <Image
            src={mana}
            className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
            alt="mapa"
          />
        </button>
      </div>
      {showModalLife && <LifeTraining showModalLife={onModalLife} />}
      {showModalMana && <ManaTraining showModalMana={onModalMana} />}
    </div>
  )
    
}