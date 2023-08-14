import Image from 'next/image';
import { useEffect, useState } from 'react';

import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import { BasicPotionStruct as Potion } from '@/types/DIAMOND1HARDHAT';
import { playerStore } from '@/store/playerStore';
import Loading from '@/app/play/loading';
import getSlotSmug from '@/components/utils/getSlotSmug';
import isEquip from '@/components/utils/type-guards/isEquip';
import coin from '@/assets/img/components/modal/gold-coin.png';
import getStatusIcon from '@/components/utils/getStatusIcon';

type ItemProps = {
  buyAction: (cost: number) => Promise<void>,
  loadingCount: number,
  load: () => Promise<Equip | Potion>,
  cols?: number
}

export default function Item({ buyAction, loadingCount, load, cols }: ItemProps) {
  const currentPlayerGold = playerStore((state) => state.gold);

  const [item, setItem] = useState<Equip | Potion>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const item = await load();

      setItem(item);
    })()
  }, [load]);

  if (!item || !item?.name || loadingCount) return <></>;

  async function handleBuyAction() {
    setIsLoading(true);

    await buyAction(Number(item?.cost) || 0);

    setIsLoading(false);
  }

  const playerCanBuyItem = currentPlayerGold >= Number(item?.cost);
  const itemCols = cols || 4;
  const itemIcon = isEquip(item) ? getStatusIcon(Number(item.stat)) : getStatusIcon(item.isHealth ? 1 : 5);

  console.log(itemIcon);

  return (
    <div className={`col-span-full custom-list-item grid grid-cols-${itemCols} w-[100%] place-items-center p-3 rounded`}>
      <div className="item-name flex place-self-start self-center items-center gap-4">
        <Image src={item?.uri!} width={40} height={40} alt="item icon" className="rounded-full" />
        <p>{item?.name}</p>
      </div>
      <div className="item-value flex gap-2 items-center">
        <Image src={String(itemIcon)} width={25} height={25} alt="player statistic icon" />
        <p className="light-text-more">+ {Number(item?.value)}</p></div>
      <div className="item-cost flex gap-2 items-center">
        <Image src={coin} width={25} height={25} alt="coin" />
        <p>{Number(item?.cost)}</p>
      </div>
      {
        isEquip(item) && (
          <div className="item-slot">{getSlotSmug(Number(item.slot))}</div>
        )
      }
      <div className="item-action place-self-end self-center">
        <button
          type="button"
          className="p-3 rounded bg-button"
          onClick={handleBuyAction}
          disabled={!playerCanBuyItem}
        >{
          isLoading ? <Loading color="#d1d5db" /> : 'Buy'
        }</button>
      </div>
    </div>
  )
}