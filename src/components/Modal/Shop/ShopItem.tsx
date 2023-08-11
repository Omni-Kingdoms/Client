import { contractStore } from '@/store/contractStore';
import { BasicPotionStruct as Potion } from '@/types/DIAMOND1HARDHAT';
import { useCallback, useEffect, useState } from 'react';
import { useIsMounted } from 'usehooks-ts';

type ShopItemProps = {
  id: Number | BigInt,
  disableLoading: () => void,
}

export default function ShopItem({ id, disableLoading }: ShopItemProps) {
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

  console.log(potion);

  if (!potion || !potion?.name) return <></>;

  return (
    <div>{potion.name}</div>
  )
}