import "./index.css";

import { MouseEvent, useCallback, useEffect, useState } from "react";
import Image from "next/image";

import closeIcon from "@/assets/img/components/modal/X.png";
import paperback1 from "@/assets/img/components/Equipment/paperback1.png";
import paperback2 from "@/assets/img/components/Equipment/paperback2.png";
import { playerStore } from "@/store/playerStore";
import { contractStore } from "@/store/contractStore";
import { BasicEquipmentStruct as Equip } from "@/types/DIAMOND1HARDHAT";
import Loading from "@/app/play/loading";
import ItemSlots from "./components/ItemSlots";
import PlayerStats from "./components/PlayerStats";
import EquipmentList from "../GridModal/EquipmentList";
import { toast } from "react-toastify";
import { usePublicClient } from "wagmi";
import { abi } from "../../../utils/DiamondABI.json";
import { encodeFunctionData } from "viem";

type EquipmentProps = {
  close: () => void;
};

export default function Equipment({ close }: EquipmentProps) {
  const contract = contractStore((state) => state.diamond);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const cyberWallet = contractStore((state) => state.cyberWallet);
  const contractAddress = contractStore((state) => state.contractAddress);

  const [isSubmodalOpen, setIsSubmodalOpen] = useState<boolean>(false);
  const [isEquipmentListOpen, setIsEquipmentListOpen] =
    useState<boolean>(false);
  const [userEquipments, setUserEquipments] = useState<Equip[]>();
  const [isLoading, setIsLoading] = useState(true);

  const publicClient = usePublicClient();

  function blockPropagation(e: MouseEvent) {
    e.stopPropagation();
  }

  const gatherEquippedItems = useCallback(async () => {
    try {
      const equipmentIds = Object.values(currentPlayer?.slot!);
      const promises = equipmentIds.map((equipmentId) =>
        contract.read.getEquipment([equipmentId])
      );

      let equipments: Equip[] = await Promise.all(promises);

      equipments = equipments.filter((equipment) => equipment.id != 0);

      setUserEquipments(equipments);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPlayer?.slot, contract.read]);

  const handleGatherPlayerEquipmentInformation = useCallback(async () => {
    try {
      const equipments: number[] = (
        await contract.read.getPlayerToEquipment([players[currentPlayerIndex]])
      ).map((equipItem: BigInt) => Number(equipItem));
      let equipmentList: Equip[] = [];

      for (let i = 0; i < equipments.length; i++) {
        const equipment = await contract.read.getEquipment([equipments[i]]);
        equipmentList.push(equipment);
      }

      return equipmentList;
    } catch (err) {
      console.log(err);
    }
  }, [contract.read, currentPlayerIndex, players]);

  const isEquipmentEquipped = useCallback(
    (currentEquipment: Equip) =>
      Boolean(
        Object.values(currentPlayer?.slot!).find(
          (slot) => slot == currentEquipment?.id
        )
      ),
    [currentPlayer?.slot]
  );

  async function handleEquip(currentEquipment: Equip) {
    try {
      let hash;
      if (cyberWallet) {
        const txdata = isEquipmentEquipped(currentEquipment)
          ? encodeFunctionData({
              abi,
              functionName: "unequip",
              args: [players[currentPlayerIndex], Number(currentEquipment.id)],
            })
          : encodeFunctionData({
              abi,
              functionName: "equip",
              args: [players[currentPlayerIndex], Number(currentEquipment.id)],
            });

        hash = await cyberWallet
          .sendTransaction({
            to: contractAddress,
            value: "0",
            data: txdata,
          })
          .catch((err: Error) => console.log({ err }));
      } else {
        const method = isEquipmentEquipped(currentEquipment)
          ? contract.write.unequip
          : contract.write.equip;

        hash = await method([
          players[currentPlayerIndex],
          Number(currentEquipment.id),
        ]);
      }

      const loading = toast.loading("Tx pending: " + hash);
      const result = await publicClient.waitForTransactionReceipt({
        hash,
      });

      if (result.status === "success") {
        toast.update(loading, {
          render: "Success: " + hash,
          type: "success",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });

        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);

        setCurrentPlayer(player);
      } else {
        toast.update(loading, {
          render: "Failed: " + hash,
          type: "error",
          closeOnClick: true,
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error: any) {
      toast.error(error.shortMessage as string, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  useEffect(() => {
    gatherEquippedItems();
  }, [gatherEquippedItems]);

  return (
    <>
      <div
        className={`fixed z-50 inset-0 overflow-y-auto ${
          isEquipmentListOpen ? "hidden" : ""
        }`}
      >
        <div onClick={close} className="fixed inset-0 backdrop-blur-sm">
          <div
            className={`relative h-[100vh] ${isSubmodalOpen ? " isOpen" : ""}`}
          >
            <div
              onClick={blockPropagation}
              className={`
                animate-transform bg-equip z-50 absolute flex
                flex-col top-[50%] left-[50%] translate-x-[-50%]
                translate-y-[-50%] max-[1200px]:translate-y-[-60%]
                pointer-events-none
              `}
            >
              <Image
                src={paperback1}
                width={1000}
                alt="Equipment1 background"
                className="invisible min-w-[420px] w-[100vw] max-w-[800px]"
              />
              <div className="content absolute inset-0 p-16 sm:p-20">
                <button
                  type="button"
                  className="close-icon absolute right-[3rem] top-[4rem] z-50 min-[1200px]:hidden"
                  onClick={close}
                >
                  <Image src={closeIcon} alt="close icon" />
                </button>
                {isLoading || !userEquipments ? (
                  <div className="w-[100%] h-[100%] flex items-center justify-center">
                    <Loading />
                  </div>
                ) : (
                  <ItemSlots
                    openEquipmentList={() => setIsEquipmentListOpen(true)}
                    unequipItem={handleEquip}
                    userEquipments={userEquipments}
                  />
                )}
              </div>
            </div>
            <div
              onClick={blockPropagation}
              className={`
                animate-transform bg-equip2 z-0 absolute
                flex top-[50%] left-[50%] translate-x-[-45%]
                translate-y-[-48%] max-[1200px]:translate-x-[-50%]
                max-[600px]:translate-y-[-45%]
              `}
            >
              <Image
                src={paperback2}
                width={950}
                alt="Equipment2 background"
                className="invisible min-w-[420px] w-[100vw] max-w-[800px]"
              />
              <div className="content absolute inset-0 p-16 sm:p-20 md:p-24 flex justify-end max-[1200px]:flex-col">
                <button
                  type="button"
                  className="close-icon absolute top-12 right-14 z-20 max-[1200px]:hidden"
                  onClick={close}
                >
                  <Image src={closeIcon} alt="close icon" />
                </button>
                {!isLoading && userEquipments && (
                  <PlayerStats
                    open={() => setIsSubmodalOpen(true)}
                    close={() => setIsSubmodalOpen(false)}
                    userEquipments={userEquipments}
                    isOpen={isSubmodalOpen}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEquipmentListOpen && (
        <EquipmentList
          back={() => setIsEquipmentListOpen(false)}
          close={close}
          handleGatherEquipInfo={handleGatherPlayerEquipmentInformation}
          title="Equipment"
          buttonText="Equip"
          altButtonText="Unequip"
          action={handleEquip}
          type="equipment"
        />
      )}
    </>
  );
}
