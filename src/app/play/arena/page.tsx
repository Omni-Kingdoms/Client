"use client";
import map from "@/assets/img/components/Arena/map.png";
import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "antd";
import Arenas from "@/components/Modal/Arena/Arenas";

//Image
import Sword from "@/assets/img/components/Dungeon/sword.png";

export default function Arena() {
  const [showModalArena, setShowModalArena] = useState(false);

  return (
    <>
      <div className="main-bg bg-arena flex justify-center items-center pointer-events-none mt-24">
        <div className="relative max-w-[700px]">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
        </div>
      </div>
      <div className="icon-right absolute flex flex-col top-0 right-10">
        <Tooltip title="Arenas">
          <button onClick={() => setShowModalArena(true)}>
            <Image
              src={Sword}
              className="icons-map icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
      </div>
      {showModalArena && <Arenas close={() => setShowModalArena(false)} />}
    </>
  );
}
