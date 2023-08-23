import { BasicEquipmentStruct, BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import Slot from '../Equipment/components/Slot';
import getStatusInfo from '@/components/utils/getStatusInfo';
import { playerStore } from '@/store/playerStore';
import { useMemo, useState } from 'react';
import Loading from '@/app/play/loading';

type CurrentEquipmentInfoProps = {
  currentEquipment: Equip,
  buttonText: string,
  altButtonText?: string,
  action: (equip: BasicEquipmentStruct) => Promise<void>,
  type: 'equipment' | 'craft'
}

export default function CurrentEquipmentInfo({
  currentEquipment,
  buttonText,
  altButtonText,
  action,
  type
}: CurrentEquipmentInfoProps) {
  const currentPlayer = playerStore((state) => state.currentPlayer);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const statInfo = getStatusInfo(Number(currentEquipment?.stat));

  const isEquipmentEquipped = useMemo(() => (
    Boolean(Object.values(currentPlayer?.slot!).find((slot) => slot == currentEquipment?.id)) && type === 'equipment'
  ), [currentPlayer?.slot, currentEquipment?.id, type]);

  async function handleAction() {
    setIsLoading(true);

    await action(currentEquipment)

    setIsLoading(false);
  }

  return (
    <div className="flex flex-col pb-14 flex-1">
      {
        currentEquipment ? (
          <>
            <div className="flex-1 flex flex-col text-center gap-2 items-center sm:gap-4">
              <Slot bg={1} className="w-20 md:w-32 lg:w-40" item={currentEquipment} />
              <h3 className="title text-xl sm:text-2xl w-[100%]">{currentEquipment?.name}</h3>
              <p className="title">+{Number(currentEquipment?.value)} {statInfo?.short}</p>
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