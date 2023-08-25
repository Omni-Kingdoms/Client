"use client";
import { useCallback } from "react";
import EquipmentList from "../GridModal/EquipmentList";
import { playerStore } from "@/store/playerStore";
import { contractStore } from "@/store/contractStore";
import { BasicEquipmentStruct as Equip } from "@/types/DIAMOND1HARDHAT";

type CraftModalProps = {
  close: () => void;
};

export default function CraftModal({ close }: CraftModalProps) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);

  const handleGatherPlayerEquipmentInformation = useCallback(async () => {
    try {
      const equipments: number[] = (
        await contract.read.getPlayerToEquipment([players[currentPlayerIndex]])
      ).map((equipItem: BigInt) => Number(equipItem));

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
    console.log("basic craft: ", currentEquipment);
  }

  return (
    <>
      <EquipmentList
        handleGatherEquipInfo={handleGatherPlayerEquipmentInformation}
        close={close}
        title="Craft"
        buttonText="Upgrade"
        action={handleBasicCraftUpgrade}
        type="craft"
      ></EquipmentList>
    </>
  );
}
