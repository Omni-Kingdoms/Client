import Image from 'next/image';

import GridItemBox from './GridItemBox';
import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import { useEffect, useMemo, useState } from 'react';

type EquipmentGridProps = {
  playerEquipments: Equip[],
  currentEquipment?: Equip,
  setCurrentEquipment: (equip: Equip) => void,
  title: string
}

export default function EquipmentGrid({ playerEquipments, currentEquipment, setCurrentEquipment, title }: EquipmentGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [amountOfEquipmentsPerPage, setAmountOfEquipmentsPerPage] = useState(15);

  const amountOfPages = useMemo(() => {
    const newAmountOfPages = Math.ceil(playerEquipments.length / amountOfEquipmentsPerPage);

    if (currentPage > newAmountOfPages) {
      setCurrentPage(newAmountOfPages);
    }

    return newAmountOfPages;
  }, [playerEquipments.length, amountOfEquipmentsPerPage, currentPage]);

  function handlePageForwards() {
    if (currentPage >= amountOfPages) return;

    setCurrentPage((prev) => prev + 1);
  }

  function handlePageBackwards() {
    if (currentPage <= 1) return;

    setCurrentPage((prev) => prev - 1);
  }

  function isEquipmentSelected(equip?: Equip) {
    if (!currentEquipment || !currentEquipment?.id) return false;
    if (!equip || !equip?.id) return false;

    return equip.id === currentEquipment.id;
  }

  const playerEquipmentsToBeShown = useMemo(() => {
    const initialIndex = currentPage === 1
    ? 0
    : ((currentPage - 1) * amountOfEquipmentsPerPage)

    const finalIndex = currentPage * amountOfEquipmentsPerPage;

    return playerEquipments.slice(initialIndex, finalIndex);
  }, [currentPage, playerEquipments, amountOfEquipmentsPerPage]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        setAmountOfEquipmentsPerPage(8);
      } else if (window.innerWidth < 560) {
        setAmountOfEquipmentsPerPage(12);
      } else {
        setAmountOfEquipmentsPerPage(15);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="equipment-grid-container flex flex-col">
      <h1 className="title text-2xl mb-4 sm:text-3xl">{title}</h1>
      <div className="flex-1 grid grid-cols-6 gap-4">
        <button className="title choosen-button invisible">Head</button>
        <button className="title invisible">Neck</button>
        <button className="title invisible">Body</button>
        <button className="title invisible">Hands</button>
        <button className="title invisible">Pants</button>
        <button className="title invisible">Feet</button>
        <div className="col-span-6 grid grid-cols-4 grid-rows-2 min-[480px]:grid-rows-3 min-[560px]:grid-cols-5 gap-4 -mt-12 sm:-mt-8">
          {
            Array.from({ length: amountOfEquipmentsPerPage }, (_, i) => i + 1).map((i) => (
              <GridItemBox key={i} item={playerEquipmentsToBeShown[i - 1]} setCurrentEquipment={setCurrentEquipment} selected={isEquipmentSelected(playerEquipmentsToBeShown[i - 1])} />
            ))
          }
        </div>
      </div>
      <div className="h-32 flex items-center justify-center gap-8">
        <button
          type="button"
          className={currentPage <= 1 ? 'gray-icon' : ''}
          onClick={handlePageBackwards}
          disabled={currentPage <= 1}
        >
          <Image src={arrowLeft} width={40} alt="backwards page" />
        </button>
        <div className="pages flex items-center gap-3">
          {
            Array.from({ length: amountOfPages }, (_, i) => i + 1).map((i) => (
              <p key={i} className={`title text-2xl ${currentPage === i ? 'choosen-text' : ''}`}>{i}</p>
            ))
          }
        </div>
        <button
          type="button"
          className={currentPage >= amountOfPages ? 'gray-icon' : ''}
          onClick={handlePageForwards}
          disabled={currentPage >= amountOfPages}
        >
          <Image src={arrowRight} width={40} alt="forwards page" />
        </button>
      </div>
    </div>
  )
}