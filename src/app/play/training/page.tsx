"use client";
import { useState } from "react";
import Image from "next/image";

//Image
import mainLife from "@/assets/img/components/Training/life-coin.png"
import lifeIcon from "@/assets/img/components/PlayerCard/icons/HP.png";
import mainMana from "@/assets/img/components/Training/mana-coin.png"
import manaIcon from "@/assets/img/components/PlayerCard/icons/Mana.png"
import map from "@/assets/img/components/Training/map.png"
import { Tooltip } from "antd";
import TrainingWrapper, { Condition } from '@/components/Modal/Training/TrainingWrapper';
import { contractStore } from '@/store/contractStore';
import { playerStore } from '@/store/playerStore';

export default function Training() {
  const contract = contractStore((state) => state.diamond);
  const currentPlayer = playerStore((state) => state.currentPlayer);

  const [showModalLife, setShowModalLife] = useState(false);
  const [showModalMana, setShowModalMana] = useState(false);

  const lifeTrainingCondition: Condition = {
    validate: currentPlayer?.currentHealth === currentPlayer?.health,
    text: 'Your life is full!',
  };

  const manaTrainingCondition: Condition = {} as Condition;

  return(
    <>
      <div className="main-bg bg-training flex justify-center items-center pointer-events-none mt-24">
        <div className="relative max-w-[700px]">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
        </div>
      </div>
      <div className="icon-right absolute top-0 right-10">
        <Tooltip title="Life Training">
          <button onClick={() => setShowModalLife(true)}>
            <Image
              src={mainLife}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
        <Tooltip title="Mana Training">
          <button onClick={() => setShowModalMana(true)}>
            <Image
              src={mainMana}
              className="icons-map hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </button>
        </Tooltip>
      </div>
      {showModalLife && (
        <TrainingWrapper
          close={() => setShowModalLife(false)}
          beginMethod={contract.write.startTrainingBasicHealth}
          endMethod={contract.write.endTrainingBasicHealth}
          getStart={contract.read.getHealthStart}
          timerConstant={20}
          mainIcon={mainLife.src}
          secondaryIcon={lifeIcon.src}
          condition={lifeTrainingCondition}
          smug="HP"
          text="Embark in a training regimen that will
          allow you heal 1 hp at a time. Health Training
          allows you to restore your current health in order
          to fight monsters, bosses and even other players
          in the legendary Arena! The faster you become,
          the shorter your wait duration becomes"
          mobileText="Embark in a training regimen that will
          allow you heal 1 hp at a time."
          title="Train to recover Health!"
        />
      )}
      {/* Checar os valores de timerConstant, métodos e texto antes de enviar para prod. */}
      {showModalMana && (
        <TrainingWrapper
        close={() => setShowModalMana(false)}
        beginMethod={contract.write.startTrainingMana}
        endMethod={contract.write.endTrainingMana}
        getStart={contract.read.getManaStart}
        timerConstant={20}
        mainIcon={mainMana.src}
        secondaryIcon={manaIcon.src}
        condition={manaTrainingCondition}
        smug="Mana"
        text="Brace yourself for the ultimate
        challenge, a quest to slay the mighty
        dragon. Will you emerge as the
        legendary Dragon Slayer or be
        consumed by its fiery wrath?"
        mobileText="Brace yourself for the ultimate
        challenge, a quest to slay the mighty
        dragon."
        title="Train to recover Mana!"
      />
      )}
    </>
  )

}