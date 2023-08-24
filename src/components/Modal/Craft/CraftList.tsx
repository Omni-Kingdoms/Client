import "./index.css";

import { S_BasicCrafts } from '@/lib/Queries';
import { CraftStruct as Craft } from '@/types/DIAMOND1HARDHAT';
import { useSuspenseQuery } from '@apollo/client';
import Image from 'next/image';

type CraftListProps = {
  itemName: string
}

export default function CraftList({ itemName }: CraftListProps) {
  const { data }: { data: { S_basicCrafts: Craft[] } } = useSuspenseQuery(S_BasicCrafts, {
    variables: { search: itemName },
  });

  return (
    <div className="flex-1 flex flex-col gap-8">
      <h2 className="title text-2xl">{itemName} crafts</h2>
      {
        data.S_basicCrafts.map((craft) => (
          <button type="button" key={craft.id} className="craft-item-button flex items-center gap-6 p-2 px-4">
            <Image src={craft.uri} width={60} height={60} alt="New item icon" className="rounded-full" />
            <p className="text-md text-bold">{craft.newName}</p>
          </button>
        ))
      }
    </div>
  )
}