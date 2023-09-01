import equipmentButtonIcon from "@/assets/img/components/Play/equip.png";
import { playerStore } from '@/store/playerStore'
import Slot from './Slot';
import Image from 'next/image';
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import slots from '../utils/slotScheme';

type ItemSlotsProps = {
  openEquipmentList: () => void,
  userEquipments: Equip[],
  unequipItem: (item: Equip) => Promise<void>
}

export default function ItemSlots({ openEquipmentList, userEquipments, unequipItem }: ItemSlotsProps) {
  const player = playerStore((state) => state.currentPlayer);

  if (!player) return null;

  function getUserEquipmentImage(slot: number) {
    return userEquipments.find((equip) => equip.slot == slot);
  }

  // slots {
    //     0: head;
    //     1: body;
    //     2: lefthand;
    //     3: rightHand;
    //     4: pants;
    //     5: feet;
    //     6: neck;
    // }

  return (
    <div className={`h-[100%] w-[100%] base-bg relative`}>
      <Image src={player.uri} layout="fill" objectFit="contain" alt="Image" className="mask-2 absolute inset-0" />
      {
        slots.map((slot) => (
          <Slot
            key={slot.equipId}
            bg={slot.bg as 1 | 2}
            className={slot.className}
            item={getUserEquipmentImage(slot.equipId)}
            unequip={unequipItem}
          />
        ))
      }
      <button
        type="button"
        className="w-[8%] flex flex-col gap-2 items-center absolute right-[0%] bottom-[0%] lg:bottom-[5%] lg:right-[5%] pointer-events-auto"
        onClick={openEquipmentList}
      >
        <Image src={equipmentButtonIcon} alt="Equipment list button icon" className="w-[100%] pointer-events-none" />
        <p className="title text-xs cursor-pointer invisible sm:visible">Equipment</p>
      </button>
    </div>
  )
}