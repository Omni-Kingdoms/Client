import "./index.css";
import {
  AdvancedCraftStruct as AdvancedCraft,
  CraftStruct as Craft,
  BasicEquipmentStruct as Equip,
  MaterialStruct,
} from "@/types/DIAMOND1HARDHAT";
import Slot from "../Equipment/components/Slot";
import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg";
import getStatusInfo from "@/components/utils/getStatusInfo";
import { playerStore } from "@/store/playerStore";
import { useState } from "react";
import Loading from "@/app/play/loading";
import Image from "next/image";
import gemCoin from "@/assets/img/components/modal/gema.png";
import isAdvancedCraft from "@/components/utils/type-guards/isAdvancedCraft";
import { UseSuspenseQueryResult, useSuspenseQuery } from "@apollo/client";
import { userHasRequiredTreasure } from "@/lib/Queries/treasureQuery";
import isCraft from "@/components/utils/type-guards/isCraft";
import { useAccount } from "wagmi";
import { contractStore } from "@/store/contractStore";

type CurrentEquipmentInfoProps = {
  currentEquipment: Equip;
  currentCraft?: Craft | AdvancedCraft;
  buttonText: string;
  altButtonText?: string;
  goBack?: () => void;
  action?: (equip: Equip) => Promise<void>;
  craftAction?: () => Promise<void>;
  type: "equipment" | "craft";
  isEquipmentEquipped: (equip: Equip) => boolean;
};

export default function CurrentEquipmentInfo({
  currentEquipment,
  currentCraft,
  buttonText,
  altButtonText,
  goBack,
  action,
  craftAction,
  type,
  isEquipmentEquipped,
}: CurrentEquipmentInfoProps) {
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const players = playerStore((state) => state.players);
  const gem = playerStore((state) => state.gem);

  const { address, chain } = useAccount();
  const bastion = contractStore((state) => state.bastion);
  const userHasRequiredTreasureQuery = userHasRequiredTreasure(chain?.id);

  const { data }: any = useSuspenseQuery(userHasRequiredTreasureQuery.query, {
    variables: {
      playerId: Number(players[currentPlayerIndex]),
      treasureId: Number((currentCraft as AdvancedCraft)?.treasure?.id) || -1,
    },
    skip: !(currentCraft as AdvancedCraft)?.treasure?.id,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleAction() {
    setIsLoading(true);

    action ? await action(currentEquipment) : await craftAction?.();

    setIsLoading(false);
  }

  const attributes =
    type === "equipment"
      ? {
          item: currentEquipment,
          name: currentEquipment?.name || "",
          value: currentEquipment?.value || 0,
          cost: null,
        }
      : {
          item: currentCraft,
          name: currentCraft?.newName || "",
          value: currentCraft?.value || 0,
          cost: (currentCraft as any)?.["cost"] || 0,
        };

  const statInfo = getStatusInfo(Number(currentEquipment?.stat));

  const canUserAffordCraft = Number(attributes.cost) <= gem;
  const userHasRequiredMaterial =
    (currentCraft && !isAdvancedCraft(currentCraft)) ||
    Boolean(data?.[userHasRequiredTreasureQuery.name]?.length);
  const isCraftDisabled = Boolean(
    type === "craft" &&
      (isEquipmentEquipped(currentEquipment) ||
        !canUserAffordCraft ||
        !userHasRequiredMaterial)
  );

  const altTextCondition =
    isEquipmentEquipped(currentEquipment) || isCraftDisabled;

  return (
    <div className="flex flex-col pb-14 flex-1 relative">
      {currentEquipment ? (
        <>
          <div className="flex-1 flex flex-col text-center gap-2 items-center max-[460px]:gap-1 sm:gap-4">
            <Slot
              bg={1}
              className={`w-20 max-[460px]:w-16 sm:w-28`}
              item={attributes.item}
            />
            <h3 className="title text-md sm:text-xl w-[100%]">
              {attributes.name}
            </h3>
            <div>
              <p className="title text-sm sm:text-md">
                +{Number(attributes.value)} {statInfo?.short}
              </p>
            </div>
            {type === "craft" ? (
              <>
                <div className="flex items-center gap-4">
                  {isCraft(currentCraft) && (
                    <div className="flex gap-2">
                      <Image
                        src={gemCoin}
                        width={24}
                        height={28}
                        alt="gem coin"
                      />
                      <p className="cost-text title text-md sm:text-xl">
                        -{Number(attributes.cost)}
                      </p>
                    </div>
                  )}
                  {isAdvancedCraft(currentCraft) && (
                    <div className="flex items-center gap-2 relative">
                      <Image
                        src={currentCraft.treasure.uri}
                        width={32}
                        height={32}
                        className="rounded"
                        alt="craft required treasure"
                      />
                      <p className="cost-text title text-md sm:text-xl">-1</p>
                    </div>
                  )}
                </div>
              </>
            ) : undefined}
          </div>
          <div>
            <button
              className={`${
                isEquipmentEquipped(currentEquipment)
                  ? "button-alternative-2"
                  : "button-alternative-1"
              }
                  w-[100%] py-1 rounded font-bold tracking-wider ${
                    isCraftDisabled ? "gray-icon" : ""
                  }`}
              type="button"
              onClick={handleAction}
              disabled={isLoading || isCraftDisabled}
            >
              {isLoading ? (
                <Loading color="#d1d5db" />
              ) : (
                <p className="text-sm">
                  {altTextCondition ? altButtonText : buttonText}
                </p>
              )}
            </button>
            {type === "craft" && (
              <button
                className="absolute top-[-5%] left-[-5%] max-[560px]:top-[-12%] max-[560px]:left-[-12%]"
                onClick={goBack}
              >
                <Image
                  src={arrowLeft}
                  width={35}
                  height={35}
                  alt="Go back icon"
                />
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center">
          <p className="title w-[60%] text-sm sm:text-md">No item selected.</p>
        </div>
      )}
    </div>
  );
}
