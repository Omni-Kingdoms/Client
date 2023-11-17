"use client";
import Image from "next/image";
import { useState } from "react";

//Image
import Dragon from "@/assets/img/components/Play/boss.png";
import map from "@/assets/img/components/Dungeon/map.png";
import { Tooltip } from "antd";
import DungeonsBasic from "@/components/Modal/Dungeon/DungeonsBasic";
import DungeonsMagic from "@/components/Modal/Dungeon/DungeonsMagic";

export default function Dungeon() {
  const [showModalBasic, setShowModalBasic] = useState(false);
  const [showModalMagic, setShowModalMagic] = useState(false);

  return (
    <>
      <div className="main-bg bg-dungeon flex justify-center items-center pointer-events-none mt-24">
        <div className="relative max-w-[700px]">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
        </div>
      </div>
      <div className="icon-right gap-4">
        <Tooltip title="Monster">
          <button onClick={() => setShowModalBasic(true)}>
            <Image
              src={Dragon}
              className="icons-map icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
        <Tooltip title="Magic Monsters">
          <button onClick={() => setShowModalMagic(true)}>
            <Image
              src={Dragon}
              className="icons-map icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
      </div>
      {showModalBasic && (
        <DungeonsBasic close={() => setShowModalBasic(false)} />
      )}
      {showModalMagic && (
        <DungeonsMagic close={() => setShowModalMagic(false)} />
      )}
    </>
  );
}
