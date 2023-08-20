import equipmentButtonIcon from '@/assets/img/components/Equipment/equipment-button-icon.png';
import { playerStore } from '@/store/playerStore'
import Slot from './Slot';
import Image from 'next/image';
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';

type ItemSlotsProps = {
  openEquipmentList: () => void,
  userEquipments: Equip[],
}

export default function ItemSlots({ openEquipmentList, userEquipments }: ItemSlotsProps) {
  const player = playerStore((state) => state.currentPlayer);

  if (!player) return null;

  function getUserEquipmentImage(slot: number) {
    return userEquipments.find((equip) => equip.slot == slot)?.uri || '';
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
      <Slot bg={2} className="w-[18%] absolute top-[4%] left-[8%]" image={getUserEquipmentImage(0)} />
      <Slot bg={1} className="w-[18%] absolute top-[36%] left-[0%]" image={getUserEquipmentImage(1)} />
      <Slot bg={2} className="w-[12%] absolute top-[72%] left-[8%]" image={getUserEquipmentImage(4)} />
      <Slot bg={2} className="w-[18%] absolute top-[5%] right-[15%]" image={getUserEquipmentImage(6)} />
      <Slot bg={1} className="w-[10%] absolute top-[38%] right-[23%]" image={getUserEquipmentImage(2)} />
      <Slot bg={1} className="w-[10%] absolute top-[50%] right-[11%]" image={getUserEquipmentImage(3)} />
      <Slot bg={2} className="w-[12%] absolute top-[75%] right-[18%]" image={getUserEquipmentImage(5)} />
      <button
        type="button"
        className="w-[8%] flex flex-col gap-2 items-center absolute bottom-2 right-10 pointer-events-auto"
        onClick={openEquipmentList}
      >
        <Image src={equipmentButtonIcon} alt="Equipment list button icon" className="w-[100%]" />
        <p className="title text-md cursor-pointer invisible lg:visible">Equipment</p>
      </button>
    </div>
  )
}