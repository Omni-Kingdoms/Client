import Loading from '@/app/play/loading';
import { BasicPotionStruct as Potion } from '@/types/DIAMOND1HARDHAT';
import { contractStore } from '@/store/contractStore';
import { playerStore } from '@/store/playerStore';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts'
import mockImage from '@/assets/img/components/Play/craft.png';
import Image from 'next/image';
import { usePublicClient } from 'wagmi';
import { toast } from 'react-toastify';

type ConsumableBagProps = {
  close: () => void,
}

interface BagPotion extends Potion {
  qtd: number
}

export default function ConsumableBag({ close }: ConsumableBagProps) {
  const { diamond: contract } = contractStore((state) => state);
  const { players, currentPlayerIndex, setCurrentPlayer } = playerStore((state) => state);

  const [isPotionsLoading, setIsPotionsLoading] = useState<boolean>(true);
  const [potionActionLoading, setPotionActionLoading] = useState<number>(0);
  const [potions, setPotions] = useState<BagPotion[]>([]);
  const [currentScroll, setCurrentScroll] = useState(0);

  const publicClient = usePublicClient();
  const consumableBagRef = useRef(null);

  useOnClickOutside(consumableBagRef, close);

  const gatherUserPotions = useCallback(async () => {
    try { // Filter keeping only the potions that the user possesses
      const basicPotionsCount = await contract.read.getBasicPotionSchemaCount();
      let potions = Array.from({ length: Number(basicPotionsCount) }, (_, i) => i + 1);
      const potionsCount: { id: number, qtd: number }[] = [];

      for(let i = 0; i < potions.length; i++) {
        const userPossesses = await contract.read.getBaiscPotionCount([
          players[currentPlayerIndex!],
          potions[i]
        ]);

        if (userPossesses) {
          potionsCount.push({
            id: potions[i],
            qtd: Number(userPossesses)
          });
        }
      }

      const potionPromises = potions.map((potion) => contract.read.getBasicPotion([potion]))
      let potionsInfo: BagPotion[] = await Promise.all(potionPromises);

      potionsInfo = potionsInfo
        .filter((potion) => potionsCount.find((potionCount) => potionCount.id == potion.basicHealthPotionSchemaId))
        .map((potion, i) => ({
        ...potion,
        qtd: potionsCount[i].qtd
      }))

      setPotions(potionsInfo);
    }  finally {
      setIsPotionsLoading(false);
    }
  }, [contract.read, currentPlayerIndex, players])

  useEffect(() => {
    gatherUserPotions();
  }, [gatherUserPotions])

  async function handleDrinkPotion(potionId: number, potionIndex: number) {
    setPotionActionLoading(potionIndex + 1);

    try {
      const hash = await contract.write.consumeBasicHealthPotion([
        players[currentPlayerIndex],
        potionId
      ])
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

      setPotions((prevState) => prevState.map((potion, index) => (
        index === potionIndex ? ({
          ...potion,
          qtd: potion.qtd - 1
        }) : potion
      )))
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
      setPotionActionLoading(0);
    }
  }

  const potionsToBeShown = useMemo(() => potions.slice(currentScroll, currentScroll + 3), [potions, currentScroll]);

  console.log(potionsToBeShown);

  return (
    <div ref={consumableBagRef} className="consumable-bag z-50 w-72 h-[80%] absolute top-[50%] left-[100%] translate-y-[-50%]">
      <div className="w-[100%] h-[100%] flex items-center justify-center">
        {
          isPotionsLoading ? <Loading /> : potions.length > 0 ? (
            <>
              <button
                type="button"
                className={`w-12 h-12 flex items-center justify-center`}
                onClick={() => setCurrentScroll((prevState) => prevState - 1)}
                disabled={currentScroll === 0}
              >
                <p className="text-2xl name">{"<"}</p>
              </button>
              <div className="content flex-1 flex">
                {
                  potionsToBeShown.map((potion, i) => (
                    <button
                      type="button"
                      className="potion-item flex-1 max-w-[33%] mr-2 translate-y-[1rem]"
                      key={Number(potion.basicHealthPotionSchemaId)}
                      onClick={() => handleDrinkPotion(Number(potion.basicHealthPotionSchemaId), i)}
                    >
                      <div className="w-[100%] h-[100%] flex  flex-col items-center gap-3">
                        {
                          potionActionLoading === i + 1
                            ? <div className="w-[30px] h-[31.87px] translate-y-[16%]"><Loading /></div>
                            : <Image src={mockImage} alt="Potion icon" width={30} height={30} />
                        }
                        <p className="title">{potion.qtd}/100</p>
                      </div>
                    </button>
                  ))
                }
              </div>
              <button
                type="button"
                className="w-12 h-12 flex items-center justify-center"
                onClick={() => setCurrentScroll((prevState) => prevState + 1)}
                disabled={currentScroll + 3 >= potions.length}
              >
                <p className="text-2xl name cursor-pointer">{">"}</p>
              </button>
            </>
          ) : <p className="title">No potions</p>
        }
      </div>
    </div>
  )
}