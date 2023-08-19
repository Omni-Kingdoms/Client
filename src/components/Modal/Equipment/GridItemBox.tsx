import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT'
import Image from 'next/image'

type GridItemBoxProps = {
  item?: Equip
}

export default function GridItemBox({ item }: GridItemBoxProps) {
  console.log(item);

  return (
    <button className="grid-item-box w-[100%] h-[100%] rounded" disabled={!item}>
      {
        item && (
          <Image src={item.uri} width={50} height={50} alt="Item icon" />
        )
      }
    </button>
  )
}