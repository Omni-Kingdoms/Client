import "./index.css";
import { AdvancedCraftStruct as AdvancedCraft, CraftStruct as Craft, BasicEquipmentStruct as Equip, MaterialStruct } from '@/types/DIAMOND1HARDHAT';
import Slot from '../Equipment/components/Slot';
import getStatusInfo from '@/components/utils/getStatusInfo';
import { playerStore } from '@/store/playerStore';
import { useState } from 'react';
import Loading from '@/app/play/loading';
import Image from 'next/image';
import goldCoin from "@/assets/img/components/modal/gold-coin.png";
import isAdvancedCraft from '@/components/utils/type-guards/isAdvancedCraft';
import { UseSuspenseQueryResult, useSuspenseQuery } from '@apollo/client';
import { A_UserHasRequiredTreasure } from '@/lib/Queries';

type CurrentEquipmentInfoProps = {
  currentEquipment: Equip,
  currentCraft?: Craft | AdvancedCraft,
  buttonText: string,
  altButtonText?: string,
  action?: (equip: Equip) => Promise<void>,
  craftAction?: () => Promise<void>,
  type: 'equipment' | 'craft',
  isEquipmentEquipped: (equip: Equip) => boolean,
}

export default function CurrentEquipmentInfo({
  currentEquipment,
  currentCraft,
  buttonText,
  altButtonText,
  action,
  craftAction,
  type,
  isEquipmentEquipped
}: CurrentEquipmentInfoProps) {
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const players = playerStore((state) => state.players);
  const gold = playerStore((state) => state.gold);

  const { data }: UseSuspenseQueryResult<{ A_treasures: MaterialStruct[] } | undefined> = useSuspenseQuery(A_UserHasRequiredTreasure, {
    variables: {
      playerId: Number(players[currentPlayerIndex]),
      treasureId: Number((currentCraft as AdvancedCraft)?.treasure?.id) || -1
    },
    skip: !(currentCraft as AdvancedCraft)?.treasure?.id
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    cost: (currentCraft as any)?.['cost'] || 0,
  }

  const statInfo = getStatusInfo(Number(currentEquipment?.stat));

  const canUserAffordCraft = Number(attributes.cost) <= gold;
  const userHasRequiredMaterial = (currentCraft && !isAdvancedCraft(currentCraft)) || Boolean(data?.A_treasures?.length);
  const isCraftDisabled = Boolean((
    type === 'craft' &&
    (isEquipmentEquipped(currentEquipment) || !canUserAffordCraft || !userHasRequiredMaterial)
  ));

  const altTextCondition = (isEquipmentEquipped(currentEquipment) || isCraftDisabled);

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
                  <>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        <Image
                          src={goldCoin}
                          className="w-5"
                          alt="gold coin"
                        />
                        <p className="cost-text title text-md sm:text-xl">
                          -{Number(attributes.cost)}
                        </p>
                      </div>
                      {
                      isAdvancedCraft(currentCraft) && (
                        <div className="flex items-center gap-2 relative">
                          <Image
                            src={currentCraft.treasure.uri}
                            width={32}
                            height={32}
                            className="rounded"
                            alt="craft required treasure"
                          />
                          <p className="cost-text title text-md sm:text-xl">
                            -1
                          </p>
                        </div>
                      )
                    }
                    </div>
                  </>
                ) : undefined}
            </div>
            <div>
              <button
                className={
                  `${isEquipmentEquipped(currentEquipment) ? 'button-alternative-2' : 'button-alternative-1'}
                  w-[100%] py-2 rounded font-bold tracking-wider ${isCraftDisabled ? 'gray-icon' : ''}`
                }
                type="button"
                onClick={handleAction}
                disabled={isLoading || isCraftDisabled}
              >
                  {
                    isLoading ? <Loading color="#d1d5db" /> : altTextCondition ? altButtonText : buttonText
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