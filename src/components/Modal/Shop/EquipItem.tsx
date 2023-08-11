import { contractStore } from '@/store/contractStore';
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type EquipItemProps = {
  id: Number | BigInt,
  loadingCount: number,
  disableLoading: () => void,
}

export default function EquipItem({ id, loadingCount, disableLoading }: EquipItemProps) {
  const [equip, setEquip] = useState<Equip | null>();
  const contract = contractStore((state) => state.diamond);

  async function handleBuyEquip() {

  }

  const loadEquip = useCallback(async () => {
    console.log(id);
    const equip = await contract.read.getBasicEquipmentSchema([id]);
    console.log(equip);

    disableLoading();
    setEquip(equip);
  }, [contract.read, disableLoading, id]);

  useEffect(() => {
    loadEquip();
  }, [loadEquip])

  if (!equip || !equip?.name || loadingCount) return <></>;

  return (
    <div className="col-span-full custom-list-item grid grid-cols-4 w-[100%] place-items-center p-4 rounded">
      <div className="equip-name place-self-start self-center flex items-center gap-4">
        <Image src={equip?.uri!} width={40} height={40} alt="Equip icon" className="rounded-full" />
        <p>{equip.name}</p>
      </div>
      <div className="equip-value">{Number(equip.value)}</div>
      <div className="equip-cost">{Number(equip.cost)}</div>
      <div className="equip-action place-self-end self-center">
        <button type="button" className="p-3 rounded" onClick={handleBuyEquip}>Buy</button>
      </div>
    </div>
  )
}