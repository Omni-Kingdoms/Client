import Image from 'next/image';

import GridItemBox from './GridItemBox';
import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import { useEffect, useMemo, useState } from 'react';

type EquipmentGridProps = {
  playerEquipments: Equip[],
  setCurrentEquipment: (equip: Equip) => void,
  title: string
}

export default function EquipmentGrid({ playerEquipments, setCurrentEquipment, title }: EquipmentGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [amountOfEquipmentsPerPage, setAmountOfEquipmentsPerPage] = useState(24);

  const amountOfPages = useMemo(() => (
    Math.ceil(playerEquipments.length / amountOfEquipmentsPerPage)
  ), [playerEquipments.length, amountOfEquipmentsPerPage]);

  console.log(playerEquipments);

  function handlePageForwards() {
    if (currentPage >= amountOfPages) return;

    setCurrentPage((prev) => prev + 1);
  }

  function handlePageBackwards() {
    if (currentPage <= 1) return;

    setCurrentPage((prev) => prev - 1);
  }

  const playerEquipmentsToBeShown = useMemo(() => {
    const initialIndex = currentPage === 1
    ? 0
    : ((currentPage - 1) * amountOfEquipmentsPerPage)

    const finalIndex = currentPage * amountOfEquipmentsPerPage;

    console.log(initialIndex);
    console.log(amountOfEquipmentsPerPage)
    console.log(playerEquipments.slice(initialIndex, finalIndex));

    return playerEquipments.slice(initialIndex, finalIndex);
  }, [currentPage, playerEquipments, amountOfEquipmentsPerPage]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setAmountOfEquipmentsPerPage(12);
      } else if (window.innerWidth <= 1024) {
        setAmountOfEquipmentsPerPage(15);
      } else {
        setAmountOfEquipmentsPerPage(24);
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
      <h1 className="title text-2xl mb-4 sm:text-4xl">{title}</h1>
      <div className="flex-1 grid grid-cols-6 gap-4">
        <button className="title choosen-button invisible">Head</button>
        <button className="title invisible">Neck</button>
        <button className="title invisible">Body</button>
        <button className="title invisible">Hands</button>
        <button className="title invisible">Pants</button>
        <button className="title invisible">Feet</button>
        <div className="col-span-6 grid grid-rows-3 grid-cols-4 gap-4 -mt-12 sm:-mt-8 md:grid-cols-5 lg:grid-rows-4 lg:grid-cols-6 ">
          {
            Array.from({ length: amountOfEquipmentsPerPage }, (_, i) => i + 1).map((i) => (
              <GridItemBox key={i} item={playerEquipmentsToBeShown[i - 1]} setCurrentEquipment={setCurrentEquipment} />
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