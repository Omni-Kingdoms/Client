import Image from "next/image";

import { playerStore } from "@/store/playerStore";

import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg";
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg";
import arrowLeftDisable from "@/assets/img/components/PlayerCard/icons/arrow-left-disable.svg";
import arrowRightDisable from "@/assets/img/components/PlayerCard/icons/arrow-right-disable.svg";
import Mage1 from "@/assets/img/personas/playerCard/Mage-1.png";
import Mage0 from "@/assets/img/personas/playerCard/Mage-0.png";
import Assassin1 from "@/assets/img/personas/playerCard/Assassin-1.png";
import Assassin0 from "@/assets/img/personas/playerCard/Assassin-0.png";
import Knight1 from "@/assets/img/personas/playerCard/Knight-1.png";
import Knight0 from "@/assets/img/personas/playerCard/Knight-0.png";
import paladin1 from "@/assets/img/personas/playerCard/paladin-1.png";
import paladin0 from "@/assets/img/personas/playerCard/paladin0.png";
import pirate1 from "@/assets/img/personas/playerCard/pirate-1.png";
import pirate0 from "@/assets/img/personas/playerCard/pirate-0.png";
import paper from "@/assets/img/components/PlayerCard/paper.png";
import { useEffect, useState } from "react";
import { BASE_MAINNET_ID } from "@/networkconstants";
import { useNetwork } from "wagmi";

type PlayerCharacterInfoProps = {
  equip?: boolean;
};

export default function PlayerCharacterInfo({
  equip,
}: PlayerCharacterInfoProps) {
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const players = playerStore((state) => state.players);
  const setCurrentPlayerIndex = playerStore(
    (state) => state.setCurrentPlayerIndex
  );
  const { chain } = useNetwork();

  const [index, setIndex] = useState(currentPlayerIndex);

  useEffect(() => {
    setCurrentPlayerIndex(index);
  }, [setCurrentPlayerIndex, index]);

  let setImage;
  let currentClass = "";
  console.log(currentPlayer?.playerClass);

  if (currentPlayer?.playerClass == 0 && currentPlayer?.male) {
    setImage = Knight1;
  } else if (currentPlayer?.playerClass == 0 && !currentPlayer?.male) {
    setImage = Knight0;
  } else if (currentPlayer?.playerClass == 1 && currentPlayer?.male) {
    setImage = Assassin1;
  } else if (currentPlayer?.playerClass == 1 && !currentPlayer?.male) {
    setImage = Assassin0;
  } else if (currentPlayer?.playerClass == 2 && currentPlayer?.male) {
    setImage = Mage1;
  } else if (currentPlayer?.playerClass == 2 && !currentPlayer?.male) {
    setImage = Mage0;
  } else if (currentPlayer?.playerClass == 3 && currentPlayer?.male) {
    if (chain?.id === BASE_MAINNET_ID) {
      setImage = pirate1;
    } else {
      setImage = paladin1;
    }
  } else {
    if (chain?.id === BASE_MAINNET_ID) {
      setImage = pirate0;
    } else {
      setImage = paladin0;
    }
  }

  if (currentPlayer?.playerClass == 0) {
    currentClass = "Warrior";
  } else if (currentPlayer?.playerClass == 1) {
    currentClass = "Assassin";
  } else if (currentPlayer?.playerClass == 2) {
    currentClass = "Mage";
  } else {
    if (chain?.id === BASE_MAINNET_ID) {
      currentClass = "Pirate";
    } else {
      currentClass = "Paladin";
    }
  }

  const disableButtons = !(players.length > 1);

  return (
    <div>
      <div className="flex flex-col items-center relative">
        <Image
          src={setImage}
          alt="Class image"
          className={`relative ${equip ? "w-24" : "w-32"}`}
        />
        <div
          className={`absolute w-44 text-center stats top-[10%] ${
            equip ? "top-[8.7%]" : ""
          }`}
        >
          <p className="text-xs">{currentClass}</p>
        </div>
        <div className={`relative ${equip ? "max-[520px]:hidden" : ""}`}>
          <Image
            src={paper}
            id="molde"
            className={`mx-auto ${equip ? "w-[8rem]" : "w-38"}`}
            alt="paper"
          />
          <div className="content absolute inset-0 flex items-center">
            <button disabled={disableButtons} className="-ml-[1rem]">
              <Image
                src={disableButtons ? arrowLeftDisable : arrowLeft}
                id="arrowLeft"
                onClick={() =>
                  index === 0
                    ? setIndex(players.length - 1)
                    : setIndex(index - 1)
                }
                width={40}
                className="button-left"
                alt="arrowLeft"
              />
            </button>
            <div className="name w-44 text-center mt-[.4rem]">
              <p className={`${equip ? "text-xs" : ""}`}>
                {currentPlayer?.name}
              </p>
              <p className="relative -top-1.5 text-xs">
                #{Number(players[currentPlayerIndex])}
              </p>
            </div>
            <button disabled={disableButtons} className="-mr-[.8rem]">
              <Image
                src={disableButtons ? arrowRightDisable : arrowRight}
                id="arrowRight"
                onClick={() =>
                  index === players.length - 1
                    ? setIndex(0)
                    : setIndex(index + 1)
                }
                width={40}
                className="button-next"
                alt="arrowRight"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
