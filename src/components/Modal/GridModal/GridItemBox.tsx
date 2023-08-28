import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT'
import { Tooltip } from 'antd';
import Image from 'next/image'

type GridItemBoxProps = {
  item?: any,
  setCurrentEquipment?: (equip: Equip) => void,
  selected?: boolean,
}

export default function GridItemBox({ item, setCurrentEquipment, selected }: GridItemBoxProps) {
  function setEquipment() {
    if (!item || !setCurrentEquipment) return;

    setCurrentEquipment(item);
  }

  return (
    <Tooltip title={item?.name}>
      <button
        className={`
          grid-item-box w-[100%] h-[100%]
          rounded flex items-center justify-center
          ${selected ? 'selected' : ''}
        `}
        onClick={setEquipment}
        disabled={!item || !setEquipment}
      >
        {
          item && (
            <Image src={item.uri} width={50} height={50} alt="Item icon" />
          )
        }
      </button>
    </Tooltip>
  )
}