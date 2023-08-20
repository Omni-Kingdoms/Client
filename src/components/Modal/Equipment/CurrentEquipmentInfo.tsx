import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import Slot from './Slot';
import getStatusInfo from '@/components/utils/getStatusInfo';
import { contractStore } from '@/store/contractStore';
import { playerStore } from '@/store/playerStore';
import { toast } from 'react-toastify';
import { usePublicClient } from 'wagmi';
import { useMemo, useState } from 'react';
import Loading from '@/app/play/loading';

type CurrentEquipmentInfoProps = {
  currentEquipment: Equip
}

export default function CurrentEquipmentInfo({ currentEquipment }: CurrentEquipmentInfoProps) {
  const contract = contractStore((state) => state.diamond);
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const { players, currentPlayerIndex, setCurrentPlayer } = playerStore((state) => state);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const publicClient = usePublicClient();

  const statInfo = getStatusInfo(Number(currentEquipment.stat));

  const isCurrentEquipmentEquipped = useMemo(() => (
    Boolean(Object.values(currentPlayer?.slot!).find((slot) => slot == currentEquipment.id))
  ), [currentPlayer?.slot, currentEquipment]);

  async function handleEquip() {
    try {
      setIsLoading(true);

      const method = isCurrentEquipmentEquipped ? contract.write.unequip : contract.write.equip;

      const hash = await method([
        players[currentPlayerIndex],
        Number(currentEquipment.id),
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
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col pb-14 flex-1">
      <div className="flex-1 flex flex-col text-center gap-4 items-center">
        <Slot bg={1} className="w-20 md:w-30 lg:w-40" />
        <h3 className="title text-2xl w-[100%]">{currentEquipment.name}</h3>
        <p className="title">+{Number(currentEquipment.value)} {statInfo?.short}</p>
      </div>
      <div>
        <button
          className={
            `${isCurrentEquipmentEquipped ? 'button-alternative-2' : 'button-alternative-1'}
            w-[100%] py-2 rounded font-bold tracking-wider`
          }
          type="button"
          onClick={handleEquip}
          disabled={isLoading}
        >
            {
              isLoading ? <Loading color="#d1d5db" /> : isCurrentEquipmentEquipped ? 'Unequip' : 'Equip'
            }
        </button>
      </div>
    </div>
  )
}