import Image from 'next/image';

import GridItemBox from './GridItemBox';
import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"

export default function EquipmentGrid() {
  return (
    <div className="equipment-grid-container flex flex-col">
      <h1 className="title text-4xl mb-4">Equipment</h1>
      <div className="flex-1 grid grid-cols-6 gap-4">
        <button className="title choosen-button">Head</button>
        <button className="title">Neck</button>
        <button className="title">Body</button>
        <button className="title">Hands</button>
        <button className="title">Pants</button>
        <button className="title">Feet</button>
        <div className="col-span-6 grid grid-rows-4 grid-cols-6 gap-4">
          {
            Array.from({ length: 24 }, (_, i) => i + 1).map((i) => (
              <GridItemBox key={i} />
            ))
          }
        </div>
      </div>
      <div className="h-32 flex items-center justify-center gap-8">
        <button type="button" className="gray-icon" disabled>
          <Image src={arrowLeft} width={40} alt="backwards page" />
        </button>
        <div className="pages flex items-center gap-3">
          <p className="title text-2xl choosen-text">1</p>
          <p className="title text-2xl">2</p>
          <p className="title text-2xl">3</p>
        </div>
        <button type="button">
          <Image src={arrowRight} width={40} alt="forwards page" />
        </button>
      </div>
    </div>
  )
}