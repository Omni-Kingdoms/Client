"use client";

import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "antd";
import React, { useRef, useState} from "react";
import { PlayerBars } from "./PlayerBars";
import { PlayerStatus } from "./PlayerStatus";
import { usePathname } from 'next/navigation'
import { playerStore } from "@/store/playerStore";

//Image
import paper from "@/assets/img/components/PlayerCard/paper.png";
import back from "@/assets/img/components/Play/back.png"
import items from "@/assets/img/components/Play/itens.png"
import equip from "@/assets/img/components/Play/equip.png"
import bag from "@/assets/img/components/Play/bag.png"
import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"
import arrowLeftDisable from "@/assets/img/components/PlayerCard/icons/arrow-left-disable.svg"
import arrowRightDisable from "@/assets/img/components/PlayerCard/icons/arrow-right-disable.svg"
import Mage1 from "@/assets/img/personas/playerCard/Mage-1.png"
import Mage0 from "@/assets/img/personas/playerCard/Mage-0.png"
import Assassin1 from "@/assets/img/personas/playerCard/Assassin-1.png"
import Assassin0 from "@/assets/img/personas/playerCard/Assassin-0.png"
import Knight1 from "@/assets/img/personas/playerCard/Knight-1.png"
import Knight0 from "@/assets/img/personas/playerCard/Knight-0.png"
import { useOnClickOutside } from 'usehooks-ts';
import Equipment from '../Modal/Equipment/Equipment';

export const Player = () => {
  const route = usePathname()
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const players = playerStore((state) => state.players);
  const setCurrentPlayerIndex = playerStore(
    (state) => state.setCurrentPlayerIndex
  );
  let setImage = (
    <Image src={Mage1} alt="chest" className="relative w-44" />
  );

  const [isConsumableBagOpen, setIsConsumableBagOpen] = useState<boolean>(false);
  const consumableBagRef = useRef(null);

  const [isEquipmentOpen, setIsEquipmentOpen] = useState<boolean>(false);

  useOnClickOutside(consumableBagRef, () => setIsConsumableBagOpen(false));

  const [index, setIndex] = useState(currentPlayerIndex);
  setCurrentPlayerIndex(index);

  const currentPlayer = playerStore((state) => state.currentPlayer);
  let currentClass = "";

  if(currentPlayer?.playerClass == 0 && currentPlayer?.male){
    setImage = (<Image src={Knight1} alt="Knight1" className="relative w-44"/>);
  } else if(currentPlayer?.playerClass == 0 && !currentPlayer?.male){
    setImage = (<Image src={Knight0} alt="Knight0" className="relative w-44"/>);
  } else if(currentPlayer?.playerClass == 1 && currentPlayer?.male){
    setImage = (<Image src={Assassin1} alt="Assassin1" className="relative w-44"/>);
  } else if(currentPlayer?.playerClass == 1 && !currentPlayer?.male){
    setImage = (<Image src={Assassin0} alt="Assassin0" className="relative w-44"/>);
  } else if(currentPlayer?.playerClass == 2 && currentPlayer?.male){
    setImage = (<Image src={Mage1} alt="Mage1" className="relative w-44"/>);
  }else {
    setImage = (<Image src={Mage0} alt="Mage0" className="relative w-44"/>);
  }

  if(currentPlayer?.playerClass == 0){
    currentClass = "Warrior";
  } else if(currentPlayer?.playerClass == 1){
    currentClass ="Assassin";
  } else {
    currentClass = "Mage";
  }

  function toggleConsumableBagOpen() {
    setIsConsumableBagOpen((prevState) => !prevState);
  }

  return (
   <>
    <div className="absolute">
      <div className="relative left-12 min-[2000px]:left-1/3 min-[3000px]:left-2/3">
        <div className=" flex">
          <div >
            {setImage}
            <div className="absolute w-44 text-center stats top-8">
              <p>{currentClass}</p>
            </div>
            <Image
              src={paper}
              id="molde"
              className="w-38 mx-auto"
              alt="paper"
            />
            <div className="absolute name w-44 top-35 text-center">
              <p>{currentPlayer?.name}</p>
              <p className="relative -top-1.5 text-xs">#{Number(players[currentPlayerIndex])}</p>
            </div>
            {players.length > 1 ? (
                <>
                <div className="absolute top-35 ">
                  <button>
                    <Image
                      src={arrowLeft}
                      id="arrowLeft"
                      onClick={() =>
                        index === 0
                          ? setIndex(players.length - 1)
                          : setIndex(index - 1)
                      }
                      className="button-left -left-1 mr-29"
                      alt="arrowLeft"
                    />
                  </button>
                  <button>
                    <Image
                      src={arrowRight}
                      id="arrowRight"
                      onClick={() =>
                        index === players.length - 1
                          ? setIndex(0)
                          : setIndex(index + 1)
                      }
                      className="button-next"
                      alt="arrowRight"
                    />
                  </button>
                </div>
                </>
              ) : (
                <>
                <div className="absolute top-35 ">
                  <button disabled>
                    <Image
                      src={arrowLeftDisable}
                      id="arrowLeft"
                      className="button-left -left-1 mr-29"
                      alt="arrowLeft"
                    />
                  </button>
                  <button disabled>
                    <Image
                      src={arrowRightDisable}
                      id="arrowRight"
                      onClick={() =>
                        index === players.length - 1
                          ? setIndex(0)
                          : setIndex(index + 1)
                      }
                      className="button-next"
                      alt="arrowRight"
                    />
                  </button>
                </div>

                </>
              )}
          </div>
          <div>
            <PlayerBars/>
            <PlayerStatus/>
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
              <button type="button" onClick={() => setIsEquipmentOpen(true)} className="w-14 h-14">
                <Image
                  src={equip}
                  className="hover:cursor-pointer w-14 h-14"
                  alt="equip"
                />
              </button>
            </Tooltip>
            <div className="relative">
              <Tooltip title="Bag">
                <button  className="w-14 h-14" onClick={toggleConsumableBagOpen}>
                  <Image
                    src={bag}
                    className="hover:cursor-pointer w-14 h-14 rotate-6"
                    alt="bag"
                  />
                </button>
              </Tooltip>
              {
                  isConsumableBagOpen && (
                    <div ref={consumableBagRef} className="consumable-bag w-60 h-[80%] absolute top-[50%] left-[100%] translate-y-[-50%]">
                      <div className="w-[100%] h-[100%] relative">
                        <button type="button" className="w-12 h-12 absolute translate-y-[-50%] left-0 top-[50%] flex items-center justify-center">
                          <p className="text-2xl name">{"<"}</p>
                        </button>
                        <button type="button" className="w-12 h-12 absolute translate-y-[-50%] right-0 top-[50%] flex items-center justify-center">
                          <p className="text-2xl name">{">"}</p>
                        </button>
                      </div>
                    </div>
                  )
                }
            </div>
          </div>
        </div>
      </div>
    </div>
    {
      isEquipmentOpen && (
        <Equipment close={() => setIsEquipmentOpen(false)} />
      )
    }
   </>
  );

};