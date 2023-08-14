import "./index.css";

import { useRef } from 'react'
import Image from 'next/image';
import { useOnClickOutside } from 'usehooks-ts';

import fechar from "@/assets/img/components/modal/X.png";
import paperback1 from '@/assets/img/components/Equipment/paperback1.png';
import paperback2 from '@/assets/img/components/Equipment/paperback2.png';

type EquipmentProps = {
  close: () => void
}

export default function Equipment({ close }: EquipmentProps) {
  const equipmentRef = useRef(null);

  useOnClickOutside(equipmentRef, close);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm">
        <div className="relative h-[100vh]">
          <button type="button" className="absolute top-22 right-16" onClick={close}>
            <Image src={fechar} alt="Fechar lista" />
          </button>
          <div className="bg-equip z-10 absolute flex flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Image src={paperback1} width={1000} alt="Equipment1 background" className="invisible" />
            <div className="content absolute inset-0 p-24 flex flex-col">
              {/* Content goes here */}
            </div>
          </div>
          <div className="bg-equip2 z-8 absolute flex flex-col top-[50%] left-[50%] translate-x-[-46%] translate-y-[-48%]">
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