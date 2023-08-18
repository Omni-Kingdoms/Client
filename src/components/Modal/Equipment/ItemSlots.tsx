import equipmentButtonIcon from '@/assets/img/components/Equipment/equipment-button-icon.png';
import { playerStore } from '@/store/playerStore'
import Slot from './Slot';
import Image from 'next/image';

type ItemSlotsProps = {
  openEquipmentList: () => void,
}

export default function ItemSlots({ openEquipmentList }: ItemSlotsProps) {
  const player = playerStore((state) => state.currentPlayer);

  if (!player) return null;

  return (
    <div className={`h-[100%] w-[100%] base-bg relative`}>
      <Image src={player.uri} layout="fill" objectFit="contain" alt="Image" className="mask-2 absolute inset-0" />
      <Slot bg={2} className="w-[18%] absolute top-[4%] left-[8%]" />
      <Slot bg={1} className="w-[18%] absolute top-[36%] left-[0%]" />
      <Slot bg={2} className="w-[12%] absolute top-[72%] left-[8%]" />
      <Slot bg={2} className="w-[18%] absolute top-[5%] right-[15%]" />
      <Slot bg={1} className="w-[10%] absolute top-[38%] right-[23%]" />
      <Slot bg={1} className="w-[10%] absolute top-[50%] right-[11%]" />
      <Slot bg={2} className="w-[12%] absolute top-[75%] right-[18%]" />
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