import "./index.css";
import { A_BasicCrafts } from '@/lib/Queries';
import { BasicEquipmentStruct as Equip, CraftStruct as Craft } from '@/types/DIAMOND1HARDHAT';
import { useSuspenseQuery } from '@apollo/client';
import Image from 'next/image';
import CurrentEquipmentInfo from '../GridModal/CurrentEquipmentInfo';
import { contractStore } from '@/store/contractStore';
import { playerStore } from '@/store/playerStore';
import { toast } from 'react-toastify';
import { usePublicClient } from 'wagmi';
import Slot from '../Equipment/components/Slot';

type CraftListProps = {
  itemName: string,
  currentEquipment: Equip,
  currentCraft: Craft | undefined,
  setCurrentCraft: (craft: Craft) => void,
  updateEquipList: () => void,
  isEquipmentEquipped: (equip: Equip) => boolean,
}

export default function CraftList({
  itemName, currentEquipment, currentCraft, setCurrentCraft, updateEquipList, isEquipmentEquipped
}: CraftListProps) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);

  const { data }: { data: { A_BasicCrafts: Craft[] } } = useSuspenseQuery(
    A_BasicCrafts,
    {
      variables: { search: itemName },
    }
  );

  const publicClient = usePublicClient();

  async function handleBasicCraft() {
    if (!currentCraft) return;

    try {
      const hash = await contract.write.basicCraft([
        players[currentPlayerIndex!],
        Number(currentEquipment.id),
        Number(currentCraft.id),
      ]);
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

  if (currentCraft && CurrentEquipmentInfo) {
    return (
      <CurrentEquipmentInfo
        currentEquipment={currentEquipment}
        currentCraft={currentCraft}
        craftAction={handleBasicCraft}
        buttonText="Craft"
        altButtonText="Cannot craft equipped items"
        type="craft"
        isEquipmentEquipped={isEquipmentEquipped}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-8 overflow-hidden">
      <Slot bg={1} item={currentEquipment} className="self-center w-20 md:w-32 lg:w-40" />
      <div className="craft-list flex flex-col gap-4 flex-1 overflow-y-auto">
        {
          data.A_BasicCrafts?.length > 0 ? (
            data.A_BasicCrafts.map((craft) => (
              <button
                type="button"
                key={craft.id}
                className="craft-item-button flex items-center gap-6 p-2 px-4"
                onClick={() => setCurrentCraft(craft)}
              >
                <Image src={craft.uri} width={60} height={60} alt="New item icon" className="rounded-full" />
                <p className="text-md text-bold">{craft.newName}</p>
              </button>
            ))
          ) : (
            <p className="title text-center">No crafts available for this item</p>
          )
        }
      </div>
    </div>
  );
}
