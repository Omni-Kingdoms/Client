import equipmentButtonIcon from "@/assets/img/components/Play/equip.png";
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
      <Slot bg={2} className="absolute w-[22%] md:w-[18%] md:top-[4%] top-0 left-[8%]" image={getUserEquipmentImage(0)} />
      <Slot bg={1} className="absolute w-[22%] md:w-[18%] md:top-[36%] top-[32%] left-[-4%] md:left-[0%]" image={getUserEquipmentImage(1)} />
      <Slot bg={2} className="absolute w-[16%] md:w-[12%] md:top-[72%] top-[66%] left-[8%]" image={getUserEquipmentImage(4)} />
      <Slot bg={2} className="absolute w-[22%] md:w-[18%] md:top-[5%] top-[1%] right-[6%] md:right-[15%]" image={getUserEquipmentImage(6)} />
      <Slot bg={1} className="absolute w-[14%] md:w-[10%] md:top-[38%] top-[36%] right-[18%] md:right-[23%]" image={getUserEquipmentImage(2)} />
      <Slot bg={1} className="absolute w-[14%] md:w-[10%] md:top-[50%] top-[46%] right-[2%] md:right-[11%]" image={getUserEquipmentImage(3)} />
      <Slot bg={2} className="absolute w-[16%] md:w-[12%] md:top-[75%] top-[71%] right-[18%]" image={getUserEquipmentImage(5)} />
      <button
        type="button"
        className="w-[8%] flex flex-col gap-2 items-center absolute bottom-[-10%] right-[0%] md:bottom-[0%] lg:bottom-[5%] lg:right-[5%] pointer-events-auto"
        onClick={openEquipmentList}
      >
        <Image src={equipmentButtonIcon} alt="Equipment list button icon" className="w-[100%]" />
        <p className="title text-md cursor-pointer invisible lg:visible">Equipment</p>
      </button>
    </div>
  )
}