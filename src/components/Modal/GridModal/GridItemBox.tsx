import "./index.css";

import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT'
import { Tooltip } from 'antd';
import Image from 'next/image'

type GridItemBoxProps = {
  item?: any,
  setCurrentEquipment?: (equip: Equip) => void,
  selected?: boolean,
  count?: number
}

export default function GridItemBox({ item, setCurrentEquipment, selected, count }: GridItemBoxProps) {
  function setEquipment() {
    if (!item || !setCurrentEquipment) return;

    setCurrentEquipment(item);
  }

  return (
    <Tooltip title={item?.name}>
      <button
        className={`
          grid-item-box w-[100%] h-[100%] max-h-[70px]
          rounded flex items-center justify-center relative
          ${selected ? 'selected' : ''} overflow-hidden
        `}
        onClick={setEquipment}
        disabled={!item || !setEquipment}
      >
        {
          item && (
            <Image src={item.uri} width={240} height={240} className="rounded" alt="Item icon" />
          )
        }
        {
          count && (
            <span className="absolute bottom-[.2rem] left-[.2rem] px-1 rounded cursor-pointer">{count}</span>
          )
        }
      </button>
    </Tooltip>
  )
}