import "./index.css";

import { MouseEvent, useCallback, useEffect, useState } from 'react'
import Image from 'next/image';

import closeIcon from "@/assets/img/components/modal/X.png";
import paperback1 from '@/assets/img/components/Equipment/paperback1.png';
import paperback2 from '@/assets/img/components/Equipment/paperback2.png';
import { playerStore } from '@/store/playerStore';
import { contractStore } from '@/store/contractStore';
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import Loading from '@/app/play/loading';
import ItemSlots from './components/ItemSlots';
import PlayerStats from './components/PlayerStats';
import EquipmentList from './components/EquipmentList';

type EquipmentProps = {
  close: () => void
}

export default function Equipment({ close }: EquipmentProps) {
  const contract = contractStore((state) => state.diamond);
  const currentPlayer = playerStore((state) => state.currentPlayer);

  const [isSubmodalOpen, setIsSubmodalOpen] = useState<boolean>(false);
  const [isEquipmentListOpen, setIsEquipmentListOpen] = useState<boolean>(false);

  const [userEquipments, setUserEquipments] = useState<Equip[]>();

  const [isLoading, setIsLoading] = useState(true);

  function blockPropagation(e: MouseEvent) {
    e.stopPropagation();
  }

  const gatherEquippedItems = useCallback(async () => {
    try {
      const equipmentIds = Object.values(currentPlayer?.slot!);
      const promises = equipmentIds.map((equipmentId) => contract.read.getEquipment([equipmentId]));

      let equipments: Equip[] = await Promise.all(promises);

      equipments = equipments.filter((equipment) => equipment.id != 0);

      setUserEquipments(equipments);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPlayer?.slot, contract.read]);

  useEffect(() => {
    gatherEquippedItems()
  }, [gatherEquippedItems]);

  return (
    <>
      <div className={`fixed z-10 inset-0 overflow-y-auto ${isEquipmentListOpen ? 'hidden' : ''}`}>
        <div onClick={close} className="fixed inset-0 backdrop-blur-sm">
          <div className="relative h-[100vh]">
            <div onClick={blockPropagation} className="bg-equip z-20 absolute flex flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
              <Image src={paperback1} width={1000} alt="Equipment1 background" className="invisible max-w-[85vw]" />
              <div className="content absolute inset-0 p-24">
                {
                  isLoading || !userEquipments
                    ? (
                      <div className="w-[100%] h-[100%] flex items-center justify-center">
                        <Loading />
                      </div>
                    )
                    : (
                      <ItemSlots
                        openEquipmentList={() => setIsEquipmentListOpen(true)}
                        userEquipments={userEquipments}
                      />
                    )
                }
              </div>
            </div>
            <div
              onClick={blockPropagation}
              className={
                `animate-transform bg-equip2 z-0 absolute flex
                flex-col top-[50%] left-[50%] translate-x-[-42%]
                translate-y-[-48%]${isSubmodalOpen ? ' isOpen' : ''}`
              }
            >
              <Image src={paperback2} width={950} alt="Equipment2 background" className="invisible max-w-[85vw]" />
              <div className="content absolute inset-0 p-24 flex justify-end">
              <button type="button" className="absolute top-12 right-14 z-20" onClick={close}>
                <Image src={closeIcon} alt="close icon" />
              </button>
                {
                  !isLoading && userEquipments && (
                    <PlayerStats
                      open={() => setIsSubmodalOpen(true)}
                      close={() => setIsSubmodalOpen(false)}
                      userEquipments={userEquipments}
                      isOpen={isSubmodalOpen}
                    />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        isEquipmentListOpen && (
          <EquipmentList
            back={() => setIsEquipmentListOpen(false)}
            close={close}
          />
        )
      }
    </>
  )
}