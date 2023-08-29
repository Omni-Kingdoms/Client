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
    <div className="div-father">
      <div className="bg-dungeon h-971">
        <Image src={map} alt="Mapa" />
      </div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
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
    </div>
  );
}
