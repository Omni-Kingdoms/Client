import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import equipmentButtonIcon from '@/assets/img/components/Equipment/equipment-button-icon.png';
import closeIcon from "@/assets/img/components/modal/X.png";
import paperback1 from '@/assets/img/components/Equipment/paperback1.png';
import CurrentEquipmentInfo from './CurrentEquipmentInfo';
import EquipmentGrid from './EquipmentGrid';
import Loading from '@/app/play/loading';
import { usePublicClient } from 'wagmi';
import { playerStore } from '@/store/playerStore';
import { contractStore } from '@/store/contractStore';
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';

type EquipmentListProps = {
  back: () => void,
  close: () => void,
}

export default function EquipmentList({ back, close }: EquipmentListProps) {
  const contract = contractStore((state) => state.diamond);
  const { players, currentPlayerIndex } = playerStore((state) => state);

  const [currentEquipment, setCurrentEquipment] = useState<Equip>();
  const [playerEquipments, setPlayerEquipments] = useState<Equip[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const publicClient = usePublicClient();
  const equipmentListRef = useRef(null);

  useOnClickOutside(equipmentListRef, close);

  const handleGatherPlayerEquipmentInformation = useCallback(async () => {
    try {
      const equipments: number[] = (await contract.read.getPlayerToEquipment([
        players[currentPlayerIndex],
      ])).map((equipItem: BigInt) => Number(equipItem));

      let equipmentList: Equip[] = []

      for (let i = 1; i <= equipments.length; i++) {
        const equipment = await contract.read.getEquipment([i]);

        equipmentList.push(equipment);
      }

      setPlayerEquipments(equipmentList);
      setCurrentEquipment(equipmentList[0]);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [contract.read, currentPlayerIndex, players]);

  useEffect(() => {
    handleGatherPlayerEquipmentInformation();
  }, [handleGatherPlayerEquipmentInformation])


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div ref={equipmentListRef} className="bg-equip relative flex flex-col">
          <Image src={paperback1} width={1000} alt="Textbook background" className="invisible max-w-[80vw]" />
          <div className="content absolute inset-0 p-24 flex gap-10 p-[15%]">
            <button type="button" onClick={back} className="absolute top-[6%] left-[8%]">
              <Image src={equipmentButtonIcon} width={55} alt="Equipment List Icon" />
            </button>
            <button type="button" onClick={close} className="absolute top-[12%] right-[6%] z-20">
              <Image src={closeIcon} alt="close icon" />
            </button>
            {
              isLoading ? <Loading /> : (
                <>
                  <CurrentEquipmentInfo currentEquipment={currentEquipment!} isEquipped={false} />
                  <EquipmentGrid
                    playerEquipments={playerEquipments}
                    setCurrentEquipment={(equip: Equip) => setCurrentEquipment(equip)}
                  />
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}