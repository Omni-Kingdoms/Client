import Image from "next/image";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import equipmentButtonIcon from "@/assets/img/components/Play/equip.png";
import closeIcon from "@/assets/img/components/modal/X.png";
import paperback1 from "@/assets/img/components/Equipment/paperback1.png";
import CurrentEquipmentInfo from "./CurrentEquipmentInfo";
import EquipmentGrid from "./EquipmentGrid";
import Loading from "@/app/play/loading";
import {
  AdvancedCraftStruct as AdvancedCraft,
  CraftStruct as Craft,
  BasicEquipmentStruct as Equip,
} from "@/types/DIAMOND1HARDHAT";
import CraftList from '../Craft/CraftList';
import { playerStore } from '@/store/playerStore';

type EquipmentListProps = {
  back?: () => void;
  close: () => void;
  handleGatherEquipInfo: () => Promise<Equip[] | undefined>;
  title: string;
  buttonText: string;
  altButtonText?: string;
  altButtonCondition?: boolean | (() => boolean) | ((param: any) => boolean);
  action?: (item: any, item2?: any) => Promise<void>;
  additionalLoading?: boolean;
  type: "equipment" | "craft";
};

export default function EquipmentList({
  back,
  close,
  handleGatherEquipInfo,
  title,
  buttonText,
  altButtonText,
  action,
  additionalLoading,
  type,
}: EquipmentListProps) {
  const currentPlayer = playerStore((state) => state.currentPlayer);

  const [currentCraft, setCurrentCraft] = useState<Craft | AdvancedCraft>();
  const [currentEquipment, setCurrentEquipment] = useState<Equip>();
  const [equipmentToGatherList, setEquipmentToGatherList] = useState<Equip>();
  const [playerEquipments, setPlayerEquipments] = useState<Equip[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const equipmentListRef = useRef(null);

  useOnClickOutside(equipmentListRef, close);

  function handleSetCurrentEquipment(equipment: Equip) {
    setCurrentEquipment(equipment);

    if (type === 'craft') {
      setEquipmentToGatherList(equipment);
    }
  }

  function handleSetCurrentCraft(craft: Craft | AdvancedCraft | undefined) {
    setCurrentCraft(craft);
  }

  const isEquipmentEquipped = useCallback((currentEquipment: Equip) => (
    Boolean(Object.values(currentPlayer?.slot!).find((slot) => slot == currentEquipment?.id))
  ), [currentPlayer?.slot]);

  const handleGetEquip = useCallback(async () => {
    try {
      const value: Equip[] | undefined = await handleGatherEquipInfo();

      setPlayerEquipments(value || []);

      if (type === 'equipment') {
        setCurrentEquipment(value?.[0]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [handleGatherEquipInfo, type]);

  useEffect(() => {
    if (type === 'equipment') return;

    setCurrentCraft(undefined);
  }, [equipmentToGatherList, type])

  useEffect(() => {
    handleGetEquip();
  }, [handleGetEquip, type]);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div ref={equipmentListRef} className="bg-equip relative flex flex-col">
          <Image src={paperback1} width={1000} alt="Textbook background" className="invisible min-w-[450px] max-w-[100vw]" />
          <div className="content absolute inset-0 p-24 flex gap-6 p-[15%] sm:gap-10">
            {back && (
              <button
                type="button"
                onClick={back}
                className="absolute top-[6%] left-[8%]"
              >
                <Image
                  src={equipmentButtonIcon}
                  width={55}
                  alt="Equipment List Icon"
                />
              </button>
            )}
            <button
              type="button"
              onClick={close}
              className="absolute top-[12%] right-[6%] z-20"
            >
              <Image src={closeIcon} alt="close icon" />
            </button>
            {isLoading || additionalLoading ? (
              <Loading />
            ) : (
              <>
                {
                  !equipmentToGatherList && !currentCraft ? (
                    <CurrentEquipmentInfo
                      currentEquipment={currentEquipment!}
                      buttonText={buttonText}
                      altButtonText={altButtonText}
                      action={action}
                      type={type}
                      isEquipmentEquipped={isEquipmentEquipped}
                    />
                  ) : equipmentToGatherList && currentEquipment && (
                    <Suspense fallback={<div className="flex-1 flex justify-center items-center"><Loading /></div>}>
                      <CraftList
                        itemName={equipmentToGatherList.name}
                        currentCraft={currentCraft}
                        currentEquipment={currentEquipment}
                        setCurrentCraft={handleSetCurrentCraft}
                        updateEquipList={handleGetEquip}
                        isEquipmentEquipped={isEquipmentEquipped}
                      />
                    </Suspense>
                  )
                }
                <EquipmentGrid
                  playerEquipments={playerEquipments}
                  currentEquipment={currentEquipment}
                  setCurrentEquipment={handleSetCurrentEquipment}
                  title={title}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
