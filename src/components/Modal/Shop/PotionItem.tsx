import { contractStore } from '@/store/contractStore';
import { BasicPotionStruct as Potion } from '@/types/DIAMOND1HARDHAT';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type PotionItemProps = {
  id: Number | BigInt,
  loadingCount: number,
  disableLoading: () => void,
}

export default function PotionItem({ id, loadingCount, disableLoading }: PotionItemProps) {
  const [potion, setPotion] = useState<Potion | null>();
  const contract = contractStore((state) => state.diamond);

  async function handleBuyPotion() {}

  const loadPotion = useCallback(async () => {
    const potion = await contract.read.getBasicPotion([id]);

    disableLoading();
    setPotion(potion);
  }, [contract.read, disableLoading, id]);

  useEffect(() => {
    loadPotion();
  }, [loadPotion])

  if (!potion || !potion?.name || loadingCount) return <></>;

  return (
    <div className="col-span-full custom-list-item grid grid-cols-4 w-[100%] place-items-center p-4 rounded">
      <div className="potion-name flex place-self-start self-center items-center gap-4">
        <Image src={potion?.uri!} width={40} height={40} alt="Potion icon" className="rounded-full" />
        <p>{potion.name}</p>
      </div>
      <div className="potion-value">{Number(potion.value)}</div>
      <div className="potion-cost">{Number(potion.cost)}</div>
      <div className="potion-action place-self-end self-center">
        <button type="button" className="p-3 rounded" onClick={handleBuyPotion}>Buy</button>
      </div>
    </div>
  )
}