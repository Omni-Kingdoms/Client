import Loading from "@/app/play/loading";
import { BasicPotionStruct as Potion } from "@/types/DIAMOND1HARDHAT";
import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import mockImage from "@/assets/img/components/Play/craft.png";
import Image from "next/image";
import { usePublicClient } from "wagmi";
import { toast } from "react-toastify";
import { Tooltip } from "antd";
import { abi } from "../../utils/DiamondABI.json";
import { encodeFunctionData } from "viem";

type ConsumableBagProps = {
  close: () => void;
};

interface BagPotion extends Potion {
  qtd: number;
}

export default function ConsumableBag({ close }: ConsumableBagProps) {
  const { diamond: contract } = contractStore((state) => state);
  const { players, currentPlayerIndex, setCurrentPlayer } = playerStore(
    (state) => state
  );

  const [isPotionsLoading, setIsPotionsLoading] = useState<boolean>(true);
  const [potionActionLoading, setPotionActionLoading] = useState<number>(0);
  const [potions, setPotions] = useState<BagPotion[]>([]);
  const [currentScroll, setCurrentScroll] = useState(0);
  const cyberWallet = contractStore((state) => state.cyberWallet);
  const contractAddress = contractStore((state) => state.contractAddress);

  const publicClient = usePublicClient();
  const consumableBagRef = useRef(null);

  useOnClickOutside(consumableBagRef, close);

  const gatherUserPotions = useCallback(async () => {
    try {
      // Filter keeping only the potions that the user possesses
      const basicPotionsCount = await contract.read.getBasicPotionSchemaCount();
      let potions = Array.from(
        { length: Number(basicPotionsCount) },
        (_, i) => i + 1
      );
      const potionsCount: { id: number; qtd: number }[] = [];

      for (let i = 0; i < potions.length; i++) {
        const userPossesses = await contract.read.getBaiscPotionCount([
          players[currentPlayerIndex!],
          potions[i],
        ]);

        if (userPossesses) {
          potionsCount.push({
            id: potions[i],
            qtd: Number(userPossesses),
          });
        }
      }

      const potionPromises = potions.map((potion) =>
        contract.read.getBasicPotion([potion])
      );
      let potionsInfo: BagPotion[] = await Promise.all(potionPromises);

      potionsInfo = potionsInfo
        .filter((potion) =>
          potionsCount.find(
            (potionCount) => potionCount.id == potion.basicHealthPotionSchemaId
          )
        )
        .map((potion, i) => ({
          ...potion,
          qtd: potionsCount[i].qtd,
        }));

      setPotions(potionsInfo);
    } finally {
      setIsPotionsLoading(false);
    }
  }, [contract.read, currentPlayerIndex, players]);

  useEffect(() => {
    gatherUserPotions();
  }, [gatherUserPotions]);

  async function handleDrinkPotion(potionId: number, potionIndex: number) {
    setPotionActionLoading(potionIndex + 1);

    try {
      let hash;
      if (cyberWallet) {
        const txdata = encodeFunctionData({
          abi,
          functionName: "consumeBasicHealthPotion",
          args: [players[currentPlayerIndex], potionId],
        });

        hash = await cyberWallet
          .sendTransaction({
            to: contractAddress,
            value: "0",
            data: txdata,
          })
          .catch((err: Error) => console.log({ err }));
      } else {
        hash = await contract.write.consumeBasicHealthPotion([
          players[currentPlayerIndex],
          potionId,
        ]);
      }
      const loading = toast.loading(
        <a href={`https://scroll.l2scan.co/tx/${hash}`} target="_blank">
          {hash}
        </a>
      );
      const result = await publicClient.waitForTransactionReceipt({
        hash,
      });

      if (result.status === "success") {
        toast.update(loading, {
          render: (
            <a href={`https://scroll.l2scan.co/tx/${hash}`} target="_blank">
              {hash}
            </a>
          ),
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
          render: (
            <a href={`https://scroll.l2scan.co/tx/${hash}`} target="_blank">
              {hash}
            </a>
          ),
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }

      setPotions((prevState) =>
        prevState.map((potion, index) =>
          index === potionIndex
            ? {
                ...potion,
                qtd: potion.qtd - 1,
              }
            : potion
        )
      );
    } catch (error: any) {
      toast.error(error.shortMessage as string, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setPotionActionLoading(0);
    }
  }

  const potionsToBeShown = useMemo(
    () => potions.slice(currentScroll, currentScroll + 3),
    [potions, currentScroll]
  );

  return (
    <div
      ref={consumableBagRef}
      className={`
        consumable-bag z-40 w-72 h-[80%] absolute top-[50%] translate-y-[-50%]
        min-[900px]:left-[100%] max-[900px]:right-[100%] max-[460px]:right-[50%]
        max-[460px]:top-[100%] max-[460px]:translate-x-[25%] max-[460px]:translate-y-0
      `}
    >
      <div className="w-[100%] h-[100%] flex items-center justify-center">
        {isPotionsLoading ? (
          <Loading />
        ) : potions.length > 0 ? (
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
              {potionsToBeShown.map((potion, i) => (
                <Tooltip
                  title={potion.name}
                  key={Number(potion.basicHealthPotionSchemaId)}
                >
                  <button
                    type="button"
                    className="potion-item flex-1 max-w-[33%] mr-2 translate-y-[1rem]"
                    onClick={() =>
                      handleDrinkPotion(
                        Number(potion.basicHealthPotionSchemaId),
                        i
                      )
                    }
                  >
                    <div className="w-[100%] h-[100%] flex  flex-col items-center justify-center">
                      {potionActionLoading === i + 1 ? (
                        <div className="w-[30px] h-[31.87px] translate-y-[16%]">
                          <Loading />
                        </div>
                      ) : (
                        <Image
                          src={potion.uri}
                          alt="Potion icon"
                          width={50}
                          height={50}
                        />
                      )}
                      <p className="title">{potion.qtd}/100</p>
                    </div>
                  </button>
                </Tooltip>
              ))}
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
        ) : (
          <p className="title">No potions</p>
        )}
      </div>
    </div>
  );
}
