import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import equipmentButtonIcon from '@/assets/img/components/Equipment/equipment-button-icon.png';
import closeIcon from "@/assets/img/components/modal/X.png";
import paperback1 from '@/assets/img/components/Equipment/paperback1.png';
import CurrentEquipmentInfo from './CurrentEquipmentInfo';
import EquipmentGrid from './EquipmentGrid';
import Loading from '@/app/play/loading';

type EquipmentListProps = {
  close: () => void,
}

export default function EquipmentList({ close }: EquipmentListProps) {
  const [playerEquipments, setPlayerEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const equipmentListRef = useRef(null);

  useOnClickOutside(equipmentListRef, close);

  async function handleGatherPlayerEquipmentInformation() {

  }

  useEffect(() => {
    handleGatherPlayerEquipmentInformation();
  }, [])


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div ref={equipmentListRef} className="bg-equip relative flex flex-col">
          <Image src={paperback1} width={1000} alt="Textbook background" className="invisible max-w-[80vw]" />
          <div className="content absolute inset-0 p-24 flex">
            <figure className="absolute top-12 left-[4.5rem]">
              <Image src={equipmentButtonIcon} width={55} alt="Equipment List Icon" />
            </figure>
            <button type="button" className="absolute top-18 right-16 z-20" onClick={close}>
              <Image src={closeIcon} alt="close icon" />
            </button>
            {
              isLoading ? <Loading /> : (
                <>
                  <CurrentEquipmentInfo />
                  <EquipmentGrid />
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}