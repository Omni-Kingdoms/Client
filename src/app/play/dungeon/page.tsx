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

  return(
    <div className="div-father">
      <div className="bg-dungeon h-971">
        <Image src={map} alt="Mapa" />
      </div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
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
      {showModalDungeon && <Dungeons close={() => setShowModalDungeon(false)} />}
    </div>
  )

}