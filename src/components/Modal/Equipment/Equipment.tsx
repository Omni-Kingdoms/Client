import "./index.css";

import { MouseEvent, useRef } from 'react'
import Image from 'next/image';

import closeIcon from "@/assets/img/components/modal/X.png";
import paperback1 from '@/assets/img/components/Equipment/paperback1.png';
import paperback2 from '@/assets/img/components/Equipment/paperback2.png';
import ItemSlots from './ItemSlots';

type EquipmentProps = {
  close: () => void
}

export default function Equipment({ close }: EquipmentProps) {
  function blockPropagation(e: MouseEvent) {
    e.stopPropagation();
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div onClick={close} className="fixed inset-0 backdrop-blur-sm">
        <div className="relative h-[100vh]">
          <div onClick={blockPropagation} className="bg-equip z-20 absolute flex flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Image src={paperback1} width={1000} alt="Equipment1 background" className="invisible" />
            <div className="content absolute inset-0 p-24 flex flex-col">
            <button type="button" className="absolute top-18 right-0 z-20" onClick={close}>
              <Image src={closeIcon} alt="closeIcon lista" />
            </button>
            <div className="content absolute inset-0 p-24">
              <ItemSlots />
            </div>
            </div>
          </div>
          <div onClick={blockPropagation} className="bg-equip2 z-0 absolute flex flex-col top-[50%] left-[50%] translate-x-[-42%] translate-y-[-48%]">
            <Image src={paperback2} width={950} alt="Equipment2 background" className="invisible" />
            <div className="content absolute inset-0 p-24 flex flex-col">
              {/* Content goes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}