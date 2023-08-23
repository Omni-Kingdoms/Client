import Image from 'next/image';
import slotBackground1 from '../../../../assets/img/components/Equipment/itemMask1.png';
import slotBackground2 from '../../../../assets/img/components/Equipment/itemMask2.png';
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import closeIcon from "@/assets/img/components/modal/X.png";
import { useState } from 'react';
import Loading from '@/app/play/loading';

type SlotProps = {
  className?: string,
  bg: 1 | 2,
  item?: Equip,
  unequip?: (equip: Equip) => Promise<void>
}

function Slot({ className, bg, item, unequip }: SlotProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleUnequip() {
    if (!unequip || !item || !item?.name) return;

    setIsLoading(true);

    await unequip(item);

    setIsLoading(false);
  }

  return (
    <div className={`slot-bg inline-block slot-bg-${bg}${className ? ` ${className}` : ''}`}>
      <div className="relative w-[100%] h-[100%]">
        <Image
          src={bg === 1 ? slotBackground1 : slotBackground2}
          alt="Slot background"
          className="invisible w-[100%] pointer-events-none"
        />
        {
          item?.uri && (
            (
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[80%]">
                <Image src={item.uri} layout="fill" objectFit="contain" alt="Item image" className="rounded-full pointer-events-none" />
              </div>
            )
          )
        }
        {
          unequip && item?.uri && (
            <button type="button" className="absolute top-0 right-0 z-20 pointer-events-auto" onClick={handleUnequip} disabled={isLoading}>
              {
                isLoading ? <Loading /> : <Image src={closeIcon} width={20} height={20} alt="Close" />
              }
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Slot