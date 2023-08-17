import Loading from '@/app/play/loading';
import { BasicPotionStruct as Potion } from '@/types/DIAMOND1HARDHAT';
import { contractStore } from '@/store/contractStore';
import { playerStore } from '@/store/playerStore';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts'
import mockImage from '@/assets/img/components/Play/craft.png';
import Image from 'next/image';

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

  const consumableBagRef = useRef(null);

  useOnClickOutside(consumableBagRef, close);

  const gatherUserPotions = useCallback(async () => {
    try { // Filter keeping only the potions that the user possesses
      const basicPotionsCount = await contract.read.getBasicPotionSchemaCount();
      let potions = Array.from({ length: Number(basicPotionsCount) }, (_, i) => i + 1);
      const potionsCount: number[] = [];

      for(let i = 0; i < potions.length; i++) {
        const userPossesses = await contract.read.getBaiscPotionCount([
          players[currentPlayerIndex!],
          potions[i]
        ]);

        if (!userPossesses) {
          potions.splice(i, 1);
        } else {
          potionsCount.push(Number(userPossesses));
        }
      }

      const potionPromises = potions.map((potion) => contract.read.getBasicPotion([potion]))
      let potionsInfo: BagPotion[] = await Promise.all(potionPromises);

      potionsInfo = potionsInfo.map((potion, i) => ({
        ...potion,
        qtd: potionsCount[i]
      }))

      setPotions(potionsInfo);
    } catch (err: any) {
      console.log(err);
    } finally {
      setIsPotionsLoading(false);
    }
  }, [contract.read, currentPlayerIndex, players])

  useEffect(() => {
    gatherUserPotions();
  }, [gatherUserPotions])

  async function handleDrinkPotion(potionId: number, potionIndex: number) {
    setPotionActionLoading(potionIndex + 1);

    try {
      await contract.write.consumeBasicHealthPotion([
        players[currentPlayerIndex],
        potionId
      ])

      const player = await contract.read.getPlayer([
        players[currentPlayerIndex!],
      ]);
      setCurrentPlayer(player);

      setPotions((prevState) => prevState.map((potion, index) => (
        index === potionIndex ? ({
          ...potion,
          qtd: potion.qtd - 1
        }) : potion
      )))

    } finally {
      setPotionActionLoading(0);
    }
  }

  const potionsToBeShown = useMemo(() => potions.slice(currentScroll, currentScroll + 3), [potions, currentScroll]);

  return (
    <div ref={consumableBagRef} className="consumable-bag z-50 w-72 h-[80%] absolute top-[50%] left-[100%] translate-y-[-50%]">
      <div className="w-[100%] h-[100%] flex items-center">
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
          ) : 'No potions'
        }
      </div>
    </div>
  )
}