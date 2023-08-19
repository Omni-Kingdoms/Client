"use client";

import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "antd";
import React, { useRef, useState } from "react";
import { PlayerBars } from "./PlayerBars";
import { PlayerStatus } from "./PlayerStatus";
import { usePathname } from "next/navigation";

import back from "@/assets/img/components/Play/back.png";
import items from "@/assets/img/components/Play/itens.png";
import equip from "@/assets/img/components/Play/equip.png";
import bag from "@/assets/img/components/Play/bag.png";
import { useOnClickOutside } from "usehooks-ts";
import Equipment from "../Modal/Equipment/Equipment";
import ConsumableBag from "./ConsumableBag";
import PlayerCharacterInfo from "./PlayerCharacterInfo";

export const Player = () => {
  const route = usePathname();

  const [isConsumableBagOpen, setIsConsumableBagOpen] =
    useState<boolean>(false);
  const consumableBagRef = useRef(null);

  const [isEquipmentOpen, setIsEquipmentOpen] = useState<boolean>(false);

  useOnClickOutside(consumableBagRef, () => setIsConsumableBagOpen(false));

  function toggleConsumableBagOpen() {
    setIsConsumableBagOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className="absolute">
        <div className="relative left-12 min-[2000px]:left-1/3 min-[3000px]:left-2/3">
          <div className=" flex">
            <PlayerCharacterInfo />
            <div>
              <PlayerBars />
              <PlayerStatus />
            </div>
          </div>
          <div className="icon-back">
            <div className="-mt-4 flex flex-col items-start gap-6">
              {route != "/play" && (
                <button className="flex items-center gap-4 w-30 h-14">
                  <Link href={"/play"}>
                    <Image
                      src={back}
                      className="hover:cursor-pointer w-14 h-14"
                      alt="mapa"
                    />
                  </Link>
                  <p className="back-text">Back</p>
                </button>
              )}
              <Tooltip title="Items">
                <button type="button" className="w-14 h-14">
                  <Image
                    src={items}
                    className="hover:cursor-pointer w-14 h-14"
                    alt="items"
                  />
                </button>
              </Tooltip>
              <Tooltip title="Equipment">
                <button
                  type="button"
                  onClick={() => setIsEquipmentOpen(true)}
                  className="w-14 h-14"
                >
                  <Image
                    src={equip}
                    className="hover:cursor-pointer w-14 h-14"
                    alt="equip"
                  />
                </button>
              </Tooltip>
              <div className="relative">
                <Tooltip title="Bag">
                  <button
                    className="w-14 h-14"
                    onClick={toggleConsumableBagOpen}
                  >
                    <Image
                      src={bag}
                      className="hover:cursor-pointer w-14 h-14 rotate-6"
                      alt="bag"
                    />
                  </button>
                </Tooltip>
                {isConsumableBagOpen && (
                  <ConsumableBag close={() => setIsConsumableBagOpen(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEquipmentOpen && <Equipment close={() => setIsEquipmentOpen(false)} />}
    </>
  );
};
