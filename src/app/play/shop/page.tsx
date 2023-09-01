"use client";
import map from "@/assets/img/components/Shop/Map.png";
import Image from "next/image";

import consumables from "@/assets/img/components/Shop/consumables_shop.png";
import equipments from "@/assets/img/components/Shop/equipments_shop.png";
import { Tooltip } from "antd";
import { useState } from "react";
import EquipmentStore from "../../../components/Modal/Shop/EquipmentShop";
import ConsumablesStore from "../../../components/Modal/Shop/ConsumablesShop";

export default function Shop() {
  const [isConsumablesStoreOpen, setIsConsumablesStoreOpen] =
    useState<boolean>(false);
  const [isEquipmentStoreOpen, setIsEquipmentStoreOpen] =
    useState<boolean>(false);

  return (
    <>
      <div className="main-bg bg-shop flex justify-center items-center pointer-events-none mt-24">
        <div className="relative max-w-[700px]">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
        </div>
      </div>
      <div className="icon-right absolute top-0 right-10">
        <Tooltip title="Equipment">
          <button
            type="button"
            onClick={() => setIsEquipmentStoreOpen(true)}
          >
            <Image
              src={equipments}
              className="icons-map icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
        <Tooltip title="Consumables">
          <button type="button" onClick={() => setIsConsumablesStoreOpen(true)}>
            <Image
              src={consumables}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
      </div>
      {isEquipmentStoreOpen && (
        <EquipmentStore close={() => setIsEquipmentStoreOpen(false)} />
      )}
      {isConsumablesStoreOpen && (
        <ConsumablesStore close={() => setIsConsumablesStoreOpen(false)} />
      )}
    </>
  );
}
