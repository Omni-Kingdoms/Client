import "./index.css";

import { MouseEvent, useState } from 'react'
import Image from 'next/image';

import closeIcon from "@/assets/img/components/modal/X.png";
import paperback1 from '@/assets/img/components/Equipment/paperback1.png';
import paperback2 from '@/assets/img/components/Equipment/paperback2.png';
import ItemSlots from './ItemSlots';
import PlayerStats from './PlayerStats';
import EquipmentList from './EquipmentList';

type EquipmentProps = {
  close: () => void
}

export default function Equipment({ close }: EquipmentProps) {
  const [isSubmodalOpen, setIsSubmodalOpen] = useState<boolean>(false);
  const [isEquipmentListOpen, setIsEquipmentListOpen] = useState<boolean>(false);

  function blockPropagation(e: MouseEvent) {
    e.stopPropagation();
  }

  if (isEquipmentListOpen) return (
    <EquipmentList
      back={() => setIsEquipmentListOpen(false)}
      close={close}
    />
  )

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div onClick={close} className="fixed inset-0 backdrop-blur-sm">
        <div className="relative h-[100vh]">
          <div onClick={blockPropagation} className="bg-equip z-20 absolute flex flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
            <Image src={paperback1} width={1000} alt="Equipment1 background" className="invisible max-w-[85vw]" />
            <div className="content absolute inset-0 p-24">
              <ItemSlots openEquipmentList={() => setIsEquipmentListOpen(true)} />
            </div>
          </div>
          <div
            onClick={blockPropagation}
            className={
              `animate-transform bg-equip2 z-0 absolute flex
              flex-col top-[50%] left-[50%] translate-x-[-42%]
              translate-y-[-48%]${isSubmodalOpen ? ' isOpen' : ''}`
            }
          >
            <Image src={paperback2} width={950} alt="Equipment2 background" className="invisible max-w-[85vw]" />
            <div className="content absolute inset-0 p-24 flex justify-end">
            <button type="button" className="absolute top-12 right-14 z-20" onClick={close}>
              <Image src={closeIcon} alt="close icon" />
            </button>
              <PlayerStats
                open={() => setIsSubmodalOpen(true)}
                close={() => setIsSubmodalOpen(false)}
                isOpen={isSubmodalOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}