import "./index.css";
import { S_BasicCrafts } from '@/lib/Queries';
import { BasicEquipmentStruct as Equip, CraftStruct as Craft } from '@/types/DIAMOND1HARDHAT';
import { useSuspenseQuery } from '@apollo/client';
import Image from 'next/image';
import CurrentEquipmentInfo from '../GridModal/CurrentEquipmentInfo';

type CraftListProps = {
  itemName: string,
  currentEquipment: Equip,
  currentCraft: Craft | undefined,
  setCurrentCraft: (craft: Craft) => void,
  setCurrentEquipment: (equip: Equip) => void,
}

export default function CraftList({ itemName, currentEquipment, currentCraft, setCurrentCraft, setCurrentEquipment }: CraftListProps) {
  const { data }: { data: { S_basicCrafts: Craft[] } } = useSuspenseQuery(S_BasicCrafts, {
    variables: { search: itemName },
  });

  async function handleBasicCraft() {
    console.log(currentCraft)
  }

  if(currentCraft && CurrentEquipmentInfo) {
    return (
      <CurrentEquipmentInfo
        currentEquipment={currentEquipment}
        currentCraft={currentCraft}
        craftAction={handleBasicCraft}
        buttonText="Craft"
        type="craft"
      />
    )
  }

  return (
    <div className="flex-1 flex flex-col gap-8">
      <h2 className="title text-2xl">{itemName} crafts</h2>
      {
        data.S_basicCrafts.map((craft) => (
          <button
            type="button"
            key={craft.id}
            className="craft-item-button flex items-center gap-6 p-2 px-4"
            onClick={() => setCurrentCraft(craft)}
          >
            <Image src={craft.uri} width={60} height={60} alt="New item icon" className="rounded-full" />
            <p className="text-md text-bold">{craft.newName}</p>
          </button>
        ))
      }
    </div>
  )
}