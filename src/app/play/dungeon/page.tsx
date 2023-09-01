"use client";
import Image from "next/image";
import { useState } from "react";
import Dungeons from "@/components/Modal/Dungeon/Dungeons";

//Image
import Dragon from "@/assets/img/components/Play/boss.png";
import map from "@/assets/img/components/Dungeon/map.png";
import { Tooltip } from "antd";

export default function Dungeon() {
  const [showModalDungeon, setShowModalDungeon] = useState(false);

  return (
    <>
      <div className="main-bg bg-dungeon flex justify-center items-center pointer-events-none mt-24">
        <div className="relative max-w-[700px]">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
        </div>
      </div>
      <div className="icon-right absolute top-0 right-10">
        <Tooltip title="Dungeons">
          <button onClick={() => setShowModalDungeon(true)}>
            <Image
              src={Dragon}
              className="icons-map icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
      </div>
      {showModalDungeon && (
        <Dungeons close={() => setShowModalDungeon(false)} />
      )}
    </>
  );
}
