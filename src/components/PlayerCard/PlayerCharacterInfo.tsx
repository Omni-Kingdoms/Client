import Image from 'next/image';

import { playerStore } from '@/store/playerStore';

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
import paper from "@/assets/img/components/PlayerCard/paper.png";
import { useState } from 'react';

type PlayerCharacterInfoProps = {
  small?: boolean
}

export default function PlayerCharacterInfo({ small }: PlayerCharacterInfoProps) {
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const players = playerStore((state) => state.players);
  const setCurrentPlayerIndex = playerStore((state) => state.setCurrentPlayerIndex);

  const [index, setIndex] = useState(currentPlayerIndex);
  setCurrentPlayerIndex(index);

  let setImage;
  let currentClass = "";

  if(currentPlayer?.playerClass == 0 && currentPlayer?.male){
    setImage = Knight1;
  } else if(currentPlayer?.playerClass == 0 && !currentPlayer?.male){
    setImage = Knight0;
  } else if(currentPlayer?.playerClass == 1 && currentPlayer?.male){
    setImage = Assassin1;
  } else if(currentPlayer?.playerClass == 1 && !currentPlayer?.male){
    setImage = Assassin0;
  } else if(currentPlayer?.playerClass == 2 && currentPlayer?.male){
    setImage = Mage1;
  }else {
    setImage = Mage0;
  }

  if(currentPlayer?.playerClass == 0){
    currentClass = "Warrior";
  } else if(currentPlayer?.playerClass == 1){
    currentClass ="Assassin";
  } else {
    currentClass = "Mage";
  }

  const disableButtons = !(players.length > 1);

  return (
    <div className="flex flex-col items-center">
      <Image src={setImage} alt="Class image" className={`relative ${small ? 'w-32' : 'w-44'}`} />
      <div className={`absolute w-44 text-center stats ${small ? 'top-[4.6%]' : 'top-8'}`}>
        <p className={small ? 'text-xs' : ''}>{currentClass}</p>
      </div>
      <div className="relative">
        <Image
          src={paper}
          id="molde"
          className="w-38 mx-auto"
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
            <p>{currentPlayer?.name}</p>
            <p className="relative -top-1.5 text-xs">#{Number(players[currentPlayerIndex])}</p>
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
  )
}