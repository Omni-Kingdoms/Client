import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import equipmentButtonIcon from "@/assets/img/components/Play/equip.png";
import closeIcon from "@/assets/img/components/modal/X.png";
import paperback1 from "@/assets/img/components/Equipment/paperback1.png";
import CurrentEquipmentInfo from "./CurrentEquipmentInfo";
import EquipmentGrid from "./EquipmentGrid";
import Loading from "@/app/play/loading";
import {
  BasicEquipmentStruct,
  BasicEquipmentStruct as Equip,
} from "@/types/DIAMOND1HARDHAT";

type EquipmentListProps = {
  back?: () => void;
  close: () => void;
  handleGatherEquipInfo: () => Promise<Equip[] | undefined>;
  title: string;
  buttonText: string;
  altButtonText?: string;
  altButtonCondition?: boolean | (() => boolean) | ((param: any) => boolean);
  action: (equip: BasicEquipmentStruct) => Promise<void>;
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
  const [currentEquipment, setCurrentEquipment] = useState<Equip>();
  const [playerEquipments, setPlayerEquipments] = useState<Equip[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const equipmentListRef = useRef(null);

  useOnClickOutside(equipmentListRef, close);

  useEffect(() => {
    async function handleGetEquip() {
      try {
        const value: Equip[] | undefined = await handleGatherEquipInfo();

        setPlayerEquipments(value || []);
        setCurrentEquipment(value?.[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    handleGetEquip();
  }, [handleGatherEquipInfo]);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div ref={equipmentListRef} className="bg-equip relative flex flex-col">
          <Image
            src={paperback1}
            width={1000}
            alt="Textbook background"
            className="invisible max-w-[95vw]"
          />
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
                <CurrentEquipmentInfo
                  currentEquipment={currentEquipment!}
                  buttonText={buttonText}
                  altButtonText={altButtonText}
                  action={action}
                  type={type}
                />
                <EquipmentGrid
                  playerEquipments={playerEquipments}
                  setCurrentEquipment={(equip: Equip) =>
                    setCurrentEquipment(equip)
                  }
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
