import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT'
import Image from 'next/image'

type GridItemBoxProps = {
  item?: Equip,
  setCurrentEquipment: (equip: Equip) => void,
  selected: boolean,
}

export default function GridItemBox({ item, setCurrentEquipment, selected }: GridItemBoxProps) {
  function setEquipment() {
    if (!item) return;

    setCurrentEquipment(item);
  }

  return (
    <button
      className={`
        grid-item-box w-[100%] h-[100%]
        rounded flex items-center justify-center
        ${selected ? 'selected' : ''}
      `}
      onClick={setEquipment}
      disabled={!item}
    >
      {
        item && (
          <Image src={item.uri} width={50} height={50} alt="Item icon" />
        )
      }
    </button>
  )
}