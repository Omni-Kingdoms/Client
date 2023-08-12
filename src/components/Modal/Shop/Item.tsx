import Image from 'next/image';
import { useEffect, useState } from 'react';

import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import { BasicPotionStruct as Potion } from '@/types/DIAMOND1HARDHAT';
import { playerStore } from '@/store/playerStore';

type ItemProps = {
  buyAction: (cost: number) => void,
  loadingCount: number,
  load: () => Promise<Equip | Potion>,
}

export default function Item({ buyAction, loadingCount, load }: ItemProps) {
  const currentPlayerGold = playerStore((state) => state.gold);

  const [item, setItem] = useState<Equip | Potion>();

  useEffect(() => {
    (async () => {
      const item = await load();

      setItem(item);
    })()
  }, [load]);

  const playerCanBuyItem = currentPlayerGold >= Number(item?.cost);

  if (!item || !item?.name || loadingCount) return <></>;

  return (
    <div className="col-span-full custom-list-item grid grid-cols-4 w-[100%] place-items-center p-4 rounded">
      <div className="item-name flex place-self-start self-center items-center gap-4">
        <Image src={item?.uri!} width={40} height={40} alt="item icon" className="rounded-full" />
        <p>{item?.name}</p>
      </div>
      <div className="item-value">{Number(item?.value)}</div>
      <div className="item-cost">{Number(item?.cost)}</div>
      <div className="item-action place-self-end self-center">
        <button
          type="button"
          className="p-3 rounded bg-button"
          onClick={() => buyAction(Number(item.cost))}
          disabled={!playerCanBuyItem}
        >Buy</button>
      </div>
    </div>
  )
}