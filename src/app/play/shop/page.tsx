"use client";
import map from "@/assets/img/components/Shop/map.png";
import Image from 'next/image';

import shop from "@/assets/img/components/Play/shop.png"
import { Tooltip } from 'antd';

export default function Shop() {
  return (
    <div className="div-father">
      <div className="bg-training h-971">
        <Image src={map} alt="Mapa" />
      </div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <Tooltip title="Shop Items">
          <button type="button">
            <Image
              src={shop}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
      </div>
      {/* Modals */}
    </div>
  )
}