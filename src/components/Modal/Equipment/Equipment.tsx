import "./index.css";

import { useRef } from 'react'
import Image from 'next/image';
import { useOnClickOutside } from 'usehooks-ts';

import fechar from "@/assets/img/components/modal/X.png";
import paperback1 from '@/assets/img/components/Equipment/paperback1.png';

type EquipmentProps = {
  close: () => void
}

export default function Equipment({ close }: EquipmentProps) {
  const equipmentRef = useRef(null);

  useOnClickOutside(equipmentRef, close);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div ref={equipmentRef} className="bg-equip relative flex flex-col">
          <Image src={paperback1} width={1000} alt="Equipment background" className="invisible" />
          <div className="content absolute inset-0 p-24 flex flex-col">
            <button type="button" className="absolute top-22 right-16" onClick={close}>
              <Image src={fechar} alt="Fechar lista" />
            </button>
            {/* Content goes here */}
          </div>
        </div>
      </div>
    </div>
  )
}