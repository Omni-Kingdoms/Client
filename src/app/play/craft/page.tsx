"use client";
import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "antd";
import map from "@/assets/img/components/Craft/map.png";
import craft from "@/assets/img/components/Play/craft.png";
import CraftModal from "@/components/Modal/Craft/CraftModal";
import CraftListItem from "@/components/Modal/Craft/CraftListItem";

export default function Craft() {
  const [isBasicCraftModalOpen, setIsBasicCraftModalOpen] = useState(false);

  return (
    <>
      <div className="div-father">
        <div className="bg-dungeon h-971">
          <Image src={map} alt="Mapa" />
        </div>
        <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
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
      </div>
      {isBasicCraftModalOpen && (
        <CraftModal close={() => setIsBasicCraftModalOpen(false)} />
      )}
    </>
  );
}
