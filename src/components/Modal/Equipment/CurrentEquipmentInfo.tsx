import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import Slot from './Slot';
import getStatusInfo from '@/components/utils/getStatusInfo';

type CurrentEquipmentInfoProps = {
  isEquipped: boolean,
  currentEquipment: Equip
}

export default function CurrentEquipmentInfo({ isEquipped, currentEquipment }: CurrentEquipmentInfoProps) {
  const statInfo = getStatusInfo(Number(currentEquipment.stat));

  return (
    <div className="flex flex-col pb-14 flex-1">
      <div className="flex-1 flex flex-col text-center gap-4 items-center">
        <Slot bg={1} className="w-20 md:w-30 lg:w-40" />
        <h3 className="title text-2xl w-[100%]">{currentEquipment.name}</h3>
        <p className="title">+{Number(currentEquipment.value)} {statInfo?.short}</p>
      </div>
      <div className="">
        {
          isEquipped
            ? <button className="button-alternative-2 w-[100%] py-2 rounded font-semibold tracking-wider" type="button">Unequip</button>
            : <button className="button-alternative-1 w-[100%] py-2 rounded font-semibold tracking-wider" type="button">Equip</button>
        }
      </div>
    </div>
  )
}