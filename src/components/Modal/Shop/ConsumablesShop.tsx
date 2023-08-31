import ItemList from "@/components/Modal/ItemList/ItemList";
import { contractStore } from "@/store/contractStore";
import { BasicPotionStruct as Potion } from "@/types/DIAMOND1HARDHAT";
import { paginate } from "@/utils/helper";
import { useCallback, useEffect, useState } from "react";
import Loading from "@/app/play/loading";
import Listing from "../ItemList/Listing";
import Item from "./Item";
import { playerStore } from "@/store/playerStore";
import { usePublicClient } from "wagmi";
import { toast } from "react-toastify";

type ConsumablesShopProps = {
  close: () => void;
};

export default function ConsumablesShop({ close }: ConsumablesShopProps) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const currentPlayerGold = playerStore((state) => state.gold);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const setGold = playerStore((state) => state.setGold);

  const [shopCount, setShopCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingCount, setLoadingCount] = useState<number>(1);

  const publicClient = usePublicClient();

  async function createPotion() {
    await contract.write.createBasicPotion([
      10,
      5,
      true,
      "Large Health Potion",
      "https://ipfs.io/ipfs/QmUgcrNrY2TYmn3JYaCTHMacemxNAfXEYA4tUKBqwZLtqJ/1.png",
    ]);
  }

  const loadPotion = useCallback(
    async (id: number) => {
      const potion: Potion = await contract.read.getBasicPotion([id]);

      setLoadingCount((prevState) => (prevState > 2 ? prevState - 1 : 0));

      return potion;
    },
    [contract.read]
  );

  async function handleBuyPotion(id: number, cost: number) {
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
          closeOnClick: true,
        });

        setGold(Number(currentPlayerGold) - Number(cost));

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

  useEffect(() => {
    (async () => {
      try {
        const count = await contract.read.getBasicPotionSchemaCount();

        if (count == 0) {
          throw '';
        }

        setShopCount(Number(count));
        setLoadingCount(Number(count) + 1);
      } catch {
        setLoadingCount(0);
        setShopCount(0);
      }
    })();
  }, [contract]);

  const potions = Array.from({ length: shopCount }, (_, i) => i + 1);
  /* const paginatedPotions = paginate(potions, currentPage, pageSize); */

  return (
    <>
      <ItemList
        title="Consumables"
        close={close}
        changeCurrentPage={setCurrentPage}
      >
        {/* <button onClick={createPotion}>Create potion</button> */}
        {loadingCount ? (
          <div className="loading-wrapper m-5">
            <Loading />
          </div>
        ) : (
          ""
        )}
        {
          potions.length > 0 ? (
            <Listing
              loadingCount={loadingCount}
              cols={4}
              headings={["Potion", "Value", "Cost"]}
              lastEmptyHeading={true}
            >
              {potions.map((potion) => (
                <Item
                  key={Number(potion)}
                  loadingCount={loadingCount}
                  load={() => loadPotion(Number(potion))}
                  buyAction={(cost: number) =>
                    handleBuyPotion(Number(potion), cost)
                  }
                />
              ))}
            </Listing>
          ) : loadingCount === 0 && (
            <p className="title text-center mt-4">No potions available on shop.</p>
          )
        }
      </ItemList>
    </>
  );
}
