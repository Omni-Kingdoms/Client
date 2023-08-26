import "./index.css";
import { CraftStruct as Craft, BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import Slot from '../Equipment/components/Slot';
import getStatusInfo from '@/components/utils/getStatusInfo';
import { playerStore } from '@/store/playerStore';
import { useMemo, useState } from 'react';
import Loading from '@/app/play/loading';
import Image from 'next/image';
import goldCoin from "@/assets/img/components/modal/gold-coin.png";

type CurrentEquipmentInfoProps = {
  currentEquipment: Equip,
  currentCraft?: Craft,
  buttonText: string,
  altButtonText?: string,
  action?: (equip: Equip) => Promise<void>,
  craftAction?: () => Promise<void>,
  type: 'equipment' | 'craft'
}

export default function CurrentEquipmentInfo({
  currentEquipment,
  currentCraft,
  buttonText,
  altButtonText,
  action,
  craftAction,
  type
}: CurrentEquipmentInfoProps) {
  const currentPlayer = playerStore((state) => state.currentPlayer);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isEquipmentEquipped = useMemo(() => (
    Boolean(Object.values(currentPlayer?.slot!).find((slot) => slot == currentEquipment?.id)) && type === 'equipment'
  ), [currentPlayer?.slot, currentEquipment?.id, type]);

  async function handleAction() {
    setIsLoading(true);

    action
      ? await action(currentEquipment)
      : await craftAction?.();

    setIsLoading(false);
  }

  const attributes = type === 'equipment' ? {
    item: currentEquipment,
    name: currentEquipment?.name || '',
    value: currentEquipment?.value || 0,
    cost: null,
  } : {
    item: currentCraft,
    name: currentCraft?.newName || '',
    value: currentCraft?.value || 0,
    cost: currentCraft?.cost,
  }

  const statInfo = getStatusInfo(Number(currentEquipment?.stat));

  return (
    <div className="flex flex-col pb-14 flex-1">
      {
        currentEquipment ? (
          <>
            <div className="flex-1 flex flex-col text-center gap-2 items-center sm:gap-4">
              <Slot bg={1} className="w-20 md:w-32 lg:w-40" item={attributes.item} />
              <h3 className="title text-xl sm:text-2xl w-[100%]">{attributes.name}</h3>
              <div>
                <p className="title text-md sm:text-xl">+{Number(attributes.value)} {statInfo?.short}</p>
              </div>
                {type === 'craft' ? (
                      <div className="flex items-center gap-2">
                        <Image
                          src={goldCoin}
                          className="w-5"
                          alt="gold coin"
                        />
                        <p className="cost-text title text-md sm:text-xl">
                          -{Number(attributes.cost)}
                        </p>
                      </div>
                ) : undefined}
            </div>
            <div>
              <button
                className={
                  `${isEquipmentEquipped ? 'button-alternative-2' : 'button-alternative-1'}
                  w-[100%] py-2 rounded font-bold tracking-wider`
                }
                type="button"
                onClick={handleAction}
                disabled={isLoading}
              >
                  {
                    isLoading ? <Loading color="#d1d5db" /> : isEquipmentEquipped ? altButtonText : buttonText
                  }
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center">
            <p className="title w-[60%]">No item selected.</p>
          </div>
        )
      }
    </div>
  )
}