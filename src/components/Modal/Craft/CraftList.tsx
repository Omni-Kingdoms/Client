import "./index.css";
import {
  basicCraft as basicCraftQuery,
  advancedCraft as advancedCraftQuery,
} from "@/lib/Queries/CraftQuery";
import {
  BasicEquipmentStruct as Equip,
  CraftStruct as Craft,
  AdvancedCraftStruct as AdvancedCraft,
} from "@/types/DIAMOND1HARDHAT";
import { useSuspenseQuery } from "@apollo/client";
import Image from "next/image";
import CurrentEquipmentInfo from "../GridModal/CurrentEquipmentInfo";
import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";
import { toast } from "react-toastify";
import { useAccount, useNetwork, usePublicClient } from "wagmi";
import isCraft from "@/components/utils/type-guards/isCraft";
import isAdvancedCraft from "@/components/utils/type-guards/isAdvancedCraft";
import { abi } from "../../../utils/DiamondABI.json";

import { encodeFunctionData } from "viem";

type CraftListProps = {
  itemName: string;
  currentEquipment: Equip;
  currentCraft: Craft | AdvancedCraft | undefined;
  setCurrentCraft: (craft: Craft | AdvancedCraft | undefined) => void;
  updateEquipList: () => void;
  isEquipmentEquipped: (equip: Equip) => boolean;
};

export default function CraftList({
  itemName,
  currentEquipment,
  currentCraft,
  setCurrentCraft,
  updateEquipList,
  isEquipmentEquipped,
}: CraftListProps) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const { address: wagmiAddress } = useAccount();
  const { chain: wagmiChain } = useNetwork();
  const cyberWallet = contractStore((state) => state.cyberWallet);
  const contractAddress = contractStore((state) => state.contractAddress);
  let address: any;
  let chain: any;
  if (cyberWallet) {
    address = cyberWallet.cyberAccount.address;
    chain = cyberWallet;
  } else {
    address = wagmiAddress;
    chain = wagmiChain;
    console.log(cyberWallet);
  }

  const basicQuery = basicCraftQuery(chain?.id);
  const basicCraft: { data: any } = useSuspenseQuery(basicQuery.query, {
    variables: { search: itemName },
  });
  const advancedQuery = advancedCraftQuery(chain?.id);
  const advancedCraft: { data: any } = useSuspenseQuery(advancedQuery.query, {
    variables: { search: itemName },
  });

  const publicClient = usePublicClient();

  async function handleCraft() {
    if (isAdvancedCraft(currentCraft)) {
      handleAdvancedCraft();
    } else {
      handleBasicCraft();
    }
  }

  async function handleBasicCraft() {
    if (!currentCraft) return;

    try {
      let hash;
      if (cyberWallet) {
        const txdata = encodeFunctionData({
          abi,
          functionName: "basicCraft",
          args: [
            players[currentPlayerIndex!],
            Number(currentEquipment.id),
            Number(currentCraft.id),
          ],
        });

        hash = await cyberWallet
          .sendTransaction({
            to: contractAddress,
            value: "0",
            data: txdata,
          })
          .catch((err: Error) => console.log({ err }));
      } else {
        hash = await contract.write.basicCraft([
          players[currentPlayerIndex!],
          Number(currentEquipment.id),
          Number(currentCraft.id),
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
          autoClose: 5000,
          closeOnClick: true,
        });

        updateEquipList();
      } else {
        toast.update(loading, {
          render: "Failed: " + hash,
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
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

  async function handleAdvancedCraft() {
    if (!currentCraft || !isAdvancedCraft(currentCraft)) return;

    try {
      let hash;
      if (cyberWallet) {
        const txdata = encodeFunctionData({
          abi,
          functionName: "advancedCraft",
          args: [
            players[currentPlayerIndex!],
            Number(currentCraft.id),
            Number(currentEquipment.id),
          ],
        });

        hash = await cyberWallet
          .sendTransaction({
            to: contractAddress,
            value: "0",
            data: txdata,
          })
          .catch((err: Error) => console.log({ err }));
      } else {
        hash = await contract.write.advancedCraft([
          players[currentPlayerIndex!],
          Number(currentCraft.id),
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
          autoClose: 5000,
          closeOnClick: true,
        });

        updateEquipList();
      } else {
        toast.update(loading, {
          render: "Failed: " + hash,
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
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

  const crafts: (Craft | AdvancedCraft)[] = [
    ...basicCraft.data?.[basicQuery.name],
    ...advancedCraft.data?.[advancedQuery.name],
  ];

  if (currentCraft && CurrentEquipmentInfo) {
    return (
      <CurrentEquipmentInfo
        currentEquipment={currentEquipment}
        currentCraft={currentCraft}
        craftAction={handleCraft}
        goBack={() => setCurrentCraft(undefined)}
        buttonText="Craft"
        altButtonText="Not enough resources"
        type="craft"
        isEquipmentEquipped={isEquipmentEquipped}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-4 overflow-hidden">
      <p className="title text-center text-xl sm:text-2xl">
        {currentEquipment?.name} crafts
      </p>
      <div className="craft-list flex flex-col gap-4 flex-1 overflow-y-auto">
        {crafts.length > 0 ? (
          <>
            {crafts.map((craft) => (
              <button
                type="button"
                key={`${craft.newName}${craft.id}`}
                className={`
                      craft-item-button flex items-center p-1 gap-2 sm:p-2 px-4 ${
                        isEquipmentEquipped(currentEquipment) ? "gray-icon" : ""
                      }
                    `}
                onClick={() => setCurrentCraft(craft)}
                disabled={isEquipmentEquipped(currentEquipment)}
              >
                <Image
                  src={craft.uri}
                  width={60}
                  height={60}
                  alt="New item icon"
                  className="rounded-full max-w-[35%] max-[590px]:hidden"
                />
                <p className="text-sm sm:text-md text-bold">{craft.newName}</p>
              </button>
            ))}
          </>
        ) : (
          <p className="title text-center">No crafts available for this item</p>
        )}
      </div>
      {isEquipmentEquipped(currentEquipment) && (
        <p className="title text-center">Cannot craft equipped items</p>
      )}
    </div>
  );
}
