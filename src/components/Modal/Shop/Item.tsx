import Image from "next/image";
import { useEffect, useState } from "react";

import { BasicEquipmentStruct as Equip } from "@/types/DIAMOND1HARDHAT";
import { BasicPotionStruct as Potion } from "@/types/DIAMOND1HARDHAT";
import { playerStore } from "@/store/playerStore";
import Loading from "@/app/play/loading";
import getSlotSmug from "@/components/utils/getSlotSmug";
import isEquip from "@/components/utils/type-guards/isEquip";
import coin from "@/assets/img/components/modal/gold-coin.png";
import getStatusIcon from "@/components/utils/getStatusInfo";
import { Tooltip } from "antd";

type ItemProps = {
  buyAction: (cost: number) => Promise<void>;
  loadingCount: number;
  load: () => Promise<Equip | Potion>;
  cols?: number;
};

export default function Item({
  buyAction,
  loadingCount,
  load,
  cols,
}: ItemProps) {
  const currentPlayerGold = playerStore((state) => state.gold);

  const [item, setItem] = useState<Equip | Potion>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return (() => {
      window.removeEventListener('resize', handleResize)
    });
  }, [])

  useEffect(() => {
    (async () => {
      const item = await load();

      setItem(item);
    })();
  }, [load]);

  if (!item || !item?.name || loadingCount) return <></>;

  async function handleBuyAction() {
    if (!item) return;

    setIsLoading(true);

    await buyAction(Number(item.cost));

    setIsLoading(false);
  }

  const playerCanBuyItem = currentPlayerGold >= Number(item?.cost);
  const itemCols = cols || 4;
  const itemIcon = isEquip(item)
    ? getStatusIcon(Number(item.stat))
    : getStatusIcon(item.isHealth ? 1 : 5);

  let gridTemplateColumns = width > 520 ? '2fr' : '1fr';

  for(let i = 0; i < itemCols - 1; i++) {
    gridTemplateColumns += ' 1fr';
  }

  return (
    <div
      className="col-span-full custom-list-item grid w-[100%] place-items-center p-3 rounded gap-4 max-[520px]:p-2"
      style={{ gridTemplateColumns }}
    >
      <div className="item-name flex place-self-start self-center items-center gap-4">
        { width > 520 ? (
          <Image
            src={item?.uri!}
            width={30}
            height={30}
            alt="item icon"
            className="rounded-full"
          />
        ) : (
          <Tooltip title={item?.name}>
            <Image
              src={item?.uri!}
              width={30}
              height={30}
              alt="item icon"
              className="rounded-full"
            />
          </Tooltip>
        )}
        {
          width > 520 && (
            <p className="text-xs">{item?.name}</p>
          )
        }
      </div>
      <div className="item-value">
        <Tooltip title={itemIcon?.smug} className="flex gap-2 items-center max-[380px]:gap-1">
          <Image
            src={String(itemIcon?.icon?.src)}
            width={25}
            height={25}
            alt="player statistic icon"
          />
          <p className="light-text-more text-xs">+{Number(item?.value)}</p>
        </Tooltip>
      </div>
      <div className="item-cost">
        <Tooltip title="Gold" className="flex gap-2 items-center max-[380px]:gap-1">
          <Image src={coin} width={20} height={20} alt="coin" />
          <p className="text-xs">{Number(item?.cost)}</p>
        </Tooltip>
      </div>
      {isEquip(item) && (
        <div className="item-slot text-xs">{getSlotSmug(Number(item.slot))}</div>
      )}
      <div className="item-action place-self-end self-center">
        <button
          type="button"
          className="p-3 rounded bg-button"
          onClick={handleBuyAction}
          disabled={!playerCanBuyItem}
        >
          {isLoading ? <Loading color="#d1d5db" /> : <p className="text-xs">Buy</p>}
        </button>
      </div>
    </div>
  );
}
