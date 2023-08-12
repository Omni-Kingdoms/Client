import { contractStore } from '@/store/contractStore';
import { playerStore } from '@/store/playerStore';
import { BasicPotionStruct as Potion } from '@/types/DIAMOND1HARDHAT';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { usePublicClient } from 'wagmi';

type PotionItemProps = {
  id: Number | BigInt,
  loadingCount: number,
  disableLoading: () => void,
}

export default function PotionItem({ id, loadingCount, disableLoading }: PotionItemProps) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const currentPlayerGold = playerStore((state) => state.gold);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const setGold = playerStore((state) => state.setGold);

  const [potion, setPotion] = useState<Potion | null>();

  const publicClient = usePublicClient();

  async function handleBuyPotion() {
    try {
      const hash = await contract.write.purchaseBasicPotion([
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

        setGold(Number(currentPlayerGold) - Number(potion?.cost));

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

  const loadPotion = useCallback(async () => {
    const potion = await contract.read.getBasicPotion([id]);

    disableLoading();
    setPotion(potion);
  }, [contract.read, disableLoading, id]);

  useEffect(() => {
    loadPotion();
  }, [loadPotion])

  if (!potion || !potion?.name || loadingCount) return <></>;

  const playerCanBuyItem = currentPlayerGold >= Number(potion.cost);

  return (
    <div className="col-span-full custom-list-item grid grid-cols-4 w-[100%] place-items-center p-4 rounded">
      <div className="potion-name flex place-self-start self-center items-center gap-4">
        <Image src={potion?.uri!} width={40} height={40} alt="Potion icon" className="rounded-full" />
        <p>{potion.name}</p>
      </div>
      <div className="potion-value">{Number(potion.value)}</div>
      <div className="potion-cost">{Number(potion.cost)}</div>
      <div className="potion-action place-self-end self-center">
        <button
          type="button"
          className="p-3 rounded bg-button"
          onClick={handleBuyPotion}
          disabled={!playerCanBuyItem}
        >Buy</button>
      </div>
    </div>
  )
}