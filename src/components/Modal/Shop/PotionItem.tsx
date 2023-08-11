import { contractStore } from '@/store/contractStore';
import { BasicPotionStruct as Potion } from '@/types/DIAMOND1HARDHAT';
import { useCallback, useEffect, useState } from 'react';

type PotionItemProps = {
  id: Number | BigInt,
  loadingCount: number,
  disableLoading: () => void,
}

export default function PotionItem({ id, loadingCount, disableLoading }: PotionItemProps) {
  const [potion, setPotion] = useState<Potion | null>();
  const contract = contractStore((state) => state.diamond);

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
    <div className="col-span-4">{potion.name}</div>
  )
}