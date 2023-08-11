import { contractStore } from '@/store/contractStore';
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import { useCallback, useEffect, useState } from 'react';

type EquipItemProps = {
  id: Number | BigInt,
  loadingCount: number,
  disableLoading: () => void,
}

export default function EquipItem({ id, loadingCount, disableLoading }: EquipItemProps) {
  const [equip, setEquip] = useState<Equip | null>();
  const contract = contractStore((state) => state.diamond);

  const loadEquip = useCallback(async () => {
    console.log(id);
    const equip = await contract.read.getEquipment([id]);
    console.log(equip);

    disableLoading();
    setEquip(equip);
  }, [contract.read, disableLoading, id]);

  useEffect(() => {
    loadEquip();
  }, [loadEquip])

  console.log(equip);

  if (!equip || !equip?.name || loadingCount) return <></>;

  return (
    <div className="col-span-4">{equip.name}</div>
  )
}