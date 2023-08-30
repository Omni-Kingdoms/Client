"use client";
import Image from "next/image";
import { useState } from "react";

//Image
import gold from "@/assets/img/components/Quest/coin.png";
import gem from "@/assets/img/components/Quest/diamond.png";
import goldCoin from "@/assets/img/components/modal/gold-coin.png";
import gemCoin from "@/assets/img/components/modal/gema-coin.png";
import map from "@/assets/img/components/Quest/quest.png"
import { Tooltip } from "antd";
import QuestWrapper from '@/components/Modal/Quest/QuestWrapper';
import { contractStore } from '@/store/contractStore';

export default function Quest() {
  const contract = contractStore((state) => state.diamond);

  const [showModalGold, setShowModalGold] = useState(false);
  const [showModalGem, setShowModalGem] = useState(false);

  return(
    <>
      <div className="main-bg bg-quest flex justify-center items-center pointer-events-none mt-24">
        <div className="relative max-w-[700px]">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
        </div>
      </div>
      <div className="icon-right flex flex-col absolute top-0 right-10">
        <Tooltip title="Gold Quest">
          <button className="cursor-pointer" onClick={() => setShowModalGold(true)}>
            <Image
              src={gold}
              className="icons-map icons-map min-[400px]:m-5"
              alt="gold"
            />
          </button>
        </Tooltip>
        <Tooltip title="Gem Quest">
          <button className="cursor-pointer" onClick={() => setShowModalGem(true)}>
            <Image
              src={gem}
              className="icons-map icons-map min-[400px]:m-5"
              alt="gem"
            />
          </button>
        </Tooltip>
      </div>
      {showModalGold && (
        <QuestWrapper
          agilityTimerConstant={60}
          questStartTimer={contract.read.getGoldStart}
          beginMethod={contract.write.startQuestGold}
          endMethod={contract.write.endQuestGold}
          close={() => setShowModalGold(false)}
          text="Embark on a quest to accumulate OK Gold!
          Gold can be used to purchase items at local shops,
          these items can later be used for status
          boosts as well as crafting. Gold is also necessary
          for PvP combat in the Arena!
          Erc20 conversion coming soon"
          type="Gold"
          mainIcon={gold.src}
          secondaryIcon={goldCoin.src}
        />
      )}
      {
        showModalGem && (
          <QuestWrapper
            agilityTimerConstant={300}
            questStartTimer={contract.read.getGemStart}
            beginMethod={contract.write.startQuestGem}
            endMethod={contract.write.endQuestGem}
            close={() => setShowModalGem(false)}
            type="Gem"
            text="Recover ancient Ok Gem via Gem questing!
            Gems are one of the core resources in the OmniKingdom,
            a necessary catalyst for crafting recipes.
            Rumor has it that gems may be required
            for land instillations in the future"
            mainIcon={gemCoin.src}
            secondaryIcon={gem.src}
          />
        )
      }
    </>
  )

}