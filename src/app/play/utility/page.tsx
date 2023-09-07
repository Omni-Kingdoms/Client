"use client";
import Image from "next/image";
import { useState } from "react";
import map from "@/assets/img/components/Craft/map.png";
import switchNetworkIcon from "@/assets/img/components/Utility/switch-network.png";
import changeNameIcon from "@/assets/img/components/Utility/change-name.png";
import { Tooltip } from "antd";
import Utilities from "@/components/Modal/Utilty/Utilities";

export default function Utility() {
  const [showModalArena, setShowModalArena] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center pointer-events-none mt-24">
        <div className="relative max-w-[40px]">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
        </div>
      </div>
      <div className="icon-right flex flex-col absolute top-0 right-10">
        {/* <Tooltip title="Change name">
          <button>
            <Image
              src={changeNameIcon}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="change name icon"
            />
          </button>
        </Tooltip> */}
        <Tooltip title="Switch network">
          <button onClick={() => setShowModalArena(true)}>
            <Image
              src={switchNetworkIcon}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
      </div>
      {showModalArena && <Utilities close={() => setShowModalArena(false)} />}
    </>
  );
}
