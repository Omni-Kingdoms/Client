"use client";
import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "antd";
import map from "@/assets/img/components/Craft/map.png";
import craft from "@/assets/img/components/Play/craft.png";
import CraftModal from "@/components/Modal/Craft/CraftModal";

export default function Craft() {
  const [isBasicCraftModalOpen, setIsBasicCraftModalOpen] = useState(false);

  return (
    <>
     <div className="main-bg bg-craft flex justify-center items-center pointer-events-none mt-24">
        <div className="relative max-w-[700px]">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
        </div>
      </div>
      <div className="icon-right absolute flex flex-col top-0 right-10">
        <Tooltip title="Basic craft">
          <button
            type="button"
            onClick={() => setIsBasicCraftModalOpen(true)}
          >
            <Image
              src={craft}
              className="cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
      </div>
      {isBasicCraftModalOpen && (
        <CraftModal close={() => setIsBasicCraftModalOpen(false)} />
      )}
    </>
  );
}
