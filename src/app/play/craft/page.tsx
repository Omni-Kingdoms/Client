"use client";
import Image from "next/image";
import { useCallback, useState } from 'react';
import { Tooltip } from 'antd';
import map from "@/assets/img/components/Craft/map.png";
import craft from "@/assets/img/components/Play/craft.png";
import EquipmentList from '@/components/Modal/GridModal/EquipmentList';
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import { contractStore } from '@/store/contractStore';
import { playerStore } from '@/store/playerStore';

export default function Craft() {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);

  const [isBasicCraftModalOpen, setIsBasicCraftModalOpen] = useState(false);

  const handleGatherPlayerEquipmentInformation = useCallback(async () => {
    try {
      const equipments: number[] = (await contract.read.getPlayerToEquipment([
        players[currentPlayerIndex],
      ])).map((equipItem: BigInt) => Number(equipItem));

      let equipmentList: Equip[] = [];

      for (let i = 1; i <= equipments.length; i++) {
        const equipment = await contract.read.getEquipment([i]);

        equipmentList.push(equipment);
      }

      return equipmentList;
    } catch (err) {
      console.log(err);
    }
  }, [contract.read, currentPlayerIndex, players]);

  async function handleBasicCraftUpgrade(currentEquipment: Equip) {
    console.log('basic craft: ', currentEquipment);
  }

  return(
    <>
      <div className="div-father">
        <div className="bg-dungeon h-971">
          <Image src={map} alt="Mapa" />
        </div>
        <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
          <Tooltip title="Basic craft">
            <button type="button" onClick={() => setIsBasicCraftModalOpen(true)}>
              <Image
                src={craft}
                className="cursor-pointer icons-map min-[400px]:m-5"
                alt="mapa"
              />
            </button>
          </Tooltip>
        </div>
      </div>
      {
        isBasicCraftModalOpen && (
          <EquipmentList
            handleGatherEquipInfo={handleGatherPlayerEquipmentInformation}
            close={() => setIsBasicCraftModalOpen(false)}
            title="Craft"
            buttonText="Upgrade"
            action={handleBasicCraftUpgrade}

          />
        )
      }
    </>
  )

}