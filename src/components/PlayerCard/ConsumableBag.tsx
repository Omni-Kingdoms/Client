import Loading from '@/app/play/loading';
import { BasicPotionStruct as Potion } from '@/types/DIAMOND1HARDHAT';
import { contractStore } from '@/store/contractStore';
import { playerStore } from '@/store/playerStore';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts'
import Image from 'next/image';

type ConsumableBagProps = {
  close: () => void,
}

interface BagPotion extends Potion {
  qtd: number
}

export default function ConsumableBag({ close }: ConsumableBagProps) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);

  const [isPotionsLoading, setIsPotionsLoading] = useState<boolean>(true);
  const [potions, setPotions] = useState<BagPotion[]>([]);

  const consumableBagRef = useRef(null);

  useOnClickOutside(consumableBagRef, close);

  const gatherUserPotions = useCallback(async () => {
    console.log('a');

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

  return (
    <div ref={consumableBagRef} className="consumable-bag z-50 w-60 h-[80%] absolute top-[50%] left-[100%] translate-y-[-50%]">
      <div className="w-[100%] h-[100%] flex items-center">
        {
          isPotionsLoading ? <Loading /> : potions.length > 0 ? (
            <>
              <button type="button" className="w-12 h-12 flex items-center justify-center">
                <p className="text-2xl name">{"<"}</p>
              </button>
              <div className="content flex-1">
                {
                  potions.map((potion) => (
                    <div className="potion-item" key={Number(potion.basicHealthPotionSchemaId)}>
                      <Image src={potion.uri} alt="Potion icon" width={30} height={30} />
                      <p>{potion.qtd}/100</p>
                    </div>
                  ))
                }
              </div>
              <button type="button" className="w-12 h-12 flex items-center justify-center">
                <p className="text-2xl name cursor-pointer">{">"}</p>
              </button>
            </>
          ) : 'No potions'
        }
      </div>
    </div>
  )
}