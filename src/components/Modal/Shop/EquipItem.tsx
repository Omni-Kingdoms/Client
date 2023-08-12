import { contractStore } from '@/store/contractStore';
import { playerStore } from '@/store/playerStore';
import { BasicEquipmentStruct as Equip } from '@/types/DIAMOND1HARDHAT';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { usePublicClient } from 'wagmi';

type EquipItemProps = {
  id: Number | BigInt,
  loadingCount: number,
  disableLoading: () => void,
}

export default function EquipItem({ id, loadingCount, disableLoading }: EquipItemProps) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const currentPlayerGold = playerStore((state) => state.gold);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const setGold = playerStore((state) => state.setGold);

  const [equip, setEquip] = useState<Equip | null>();

  const publicClient = usePublicClient();

  async function handleBuyEquip() {
    try {
      const hash = await contract.write.purchaseBasicEquipment([
        players[currentPlayerIndex!],
        id,
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
        });

        setGold(Number(currentPlayerGold) - Number(equip?.cost));

        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);

        setCurrentPlayer(player);
      } else {
        toast.update(loading, {
          render: "Failed: " + hash,
          type: "error",
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

  const loadEquip = useCallback(async () => {
    console.log(id);
    const equip = await contract.read.getBasicEquipmentSchema([id]);
    console.log(equip);

    disableLoading();
    setEquip(equip);
  }, [contract.read, disableLoading, id]);

  useEffect(() => {
    loadEquip();
  }, [loadEquip])

  if (!equip || !equip?.name || loadingCount) return <></>;

  const playerCanBuyItem = currentPlayerGold >= Number(equip.cost);

  return (
    <div className="col-span-full custom-list-item grid grid-cols-4 w-[100%] place-items-center p-4 rounded">
      <div className="equip-name place-self-start self-center flex items-center gap-4">
        <Image src={equip?.uri!} width={40} height={40} alt="Equip icon" className="rounded-full" />
        <p>{equip.name}</p>
      </div>
      <div className="equip-value">{Number(equip.value)}</div>
      <div className="equip-cost">{Number(equip.cost)}</div>
      <div className="equip-action place-self-end self-center">
        <button
          type="button"
          className="p-3 rounded bg-button"
          onClick={handleBuyEquip}
          disabled={!playerCanBuyItem}
        >Buy</button>
      </div>
    </div>
  )
}