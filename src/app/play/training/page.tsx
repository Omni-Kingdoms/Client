"use client";
import { useState } from "react";
import Image from "next/image";
import LifeTraining from "@/components/Modal/Training/LifeTraining";
import ManaTraining from "@/components/Modal/Training/ManaTraining";

//Image
import life from "@/assets/img/components/Training/life-coin.png"
import mana from "@/assets/img/components/Training/mana-coin.png"
import map from "@/assets/img/components/Training/map.png"
import { Tooltip } from "antd";

export default function Training() {
  const [showModalLife, setShowModalLife] = useState(false);
  const [showModalMana, setShowModalMana] = useState(false);

  async function onModalLife() {
    setShowModalLife(false);
  }

  async function onModalMana() {
    setShowModalMana(false);
  }

  return(
    <>
      <div className="main-bg bg-training flex justify-center items-center pointer-events-none mt-24">
        <div className="relative max-w-[700px]">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
        </div>
      </div>
      <div className="icon-right flex flex-col absolute top-0 right-10">
        <Tooltip title="Life Training">
          <button onClick={() => setShowModalLife(true)}>
            <Image
              src={life}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
        {/* <Tooltip title="Mana Training">
          <button onClick={() => setShowModalMana(true)}>
            <Image
              src={mana}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip> */}
      </div>
      {showModalLife && <LifeTraining showModalLife={onModalLife} />}
      {showModalMana && <ManaTraining showModalMana={onModalMana} />}
    </>
  )

}