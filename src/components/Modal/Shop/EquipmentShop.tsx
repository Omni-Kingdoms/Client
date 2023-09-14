import ItemList from "@/components/Modal/ItemList/ItemList";
import Loading from "@/app/play/loading";
import { paginate } from "@/utils/helper";
import { useCallback, useEffect, useState } from "react";
import { BasicEquipmentStruct as Equip } from "@/types/DIAMOND1HARDHAT";
import { contractStore } from "@/store/contractStore";
import Listing from "../ItemList/Listing";
import { playerStore } from "@/store/playerStore";
import { usePublicClient } from "wagmi";
import { toast } from "react-toastify";
import Item from "./Item";

type EquipmentShopProps = {
  close: () => void;
};

export default function EquipmentShop({ close }: EquipmentShopProps) {
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  const currentPlayerGold = playerStore((state) => state.gold);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const setGold = playerStore((state) => state.setGold);

  const [shopCount, setShopCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingCount, setLoadingCount] = useState<number>(1);
  /* const pageSize = 10; */

  const publicClient = usePublicClient();

  /**
   * Handles the purchase of an equipment item from the shop.
   *
   * @param id - The ID of the equipment item to purchase.
   * @param cost - The cost of the equipment item.
   */
  async function handleBuyEquip(id: number, cost: number) {
    try {
      // Call the contract to purchase the equipment item
      const hash = await contract.write.purchaseBasicEquipment([
        players[currentPlayerIndex!],
        id,
      ]);
      const loading = toast.loading("Tx pending: " + hash);
      const result = await publicClient.waitForTransactionReceipt({
        hash,
      });

      if (result.status === "success") {
        // Display a success toast message
        toast.update(loading, {
          render: "Success: " + hash,
          type: "success",
          closeOnClick: true,
          isLoading: false,
          autoClose: 5000,
        });

        // Update the player's gold balance
        setGold(Number(currentPlayerGold) - Number(cost));

        // Call the contract to get the updated player information
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);

        // Update the current player state
        setCurrentPlayer(player);
      } else {
        // Display a failure toast message
        toast.update(loading, {
          render: "Failed: " + hash,
          type: "error",
          isLoading: false,
          closeOnClick: true,
          autoClose: 5000,
        });
      }
    } catch (error: any) {
      // Display an error toast message
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
  const loadEquip = useCallback(
    async (id: number) => {
      const equip: Equip = await contract.read.getBasicEquipmentSchema([id]);

      setLoadingCount((prevState) => (prevState > 2 ? prevState - 1 : 0));

      return equip;
    },
    [contract.read]
  );

  async function createEquipment() {
    // await contract.write.createBasicEquipment([
    //   2,
    //   2,
    //   2,
    //   0,
    //   "Sword",
    //   "https://ipfs.io/ipfs/QmVFPdhwynn5ZtxhyYVzRzybU5C6AzWHbsQo2UdxGzxBkB",
    // ]);
    console.log(await contract.read.getAdvancedCraft([1]));
  }

  useEffect(() => {
    (async () => {
      try {
        const count = await contract.read.getBasicEquipmentCount();

        if (count == 0) {
          throw "";
        }

        setShopCount(Number(count));
        setLoadingCount(Number(count) + 1);
      } catch {
        setLoadingCount(0);
        setShopCount(0);
      }
    })();
  }, [contract]);

  const equipments = Array.from({ length: shopCount }, (_, i) => i + 1);
  /* const paginatedEquipments = paginate(equipments, currentPage, pageSize); */

  return (
    <>
      <ItemList title="Equipments" close={close}>
        <button onClick={createEquipment}>Create equipment</button>
        {loadingCount ? (
          <div className="loading-wrapper m-5">
            <Loading />
          </div>
        ) : (
          ""
        )}
        {equipments.length > 0 ? (
          <Listing
            loadingCount={loadingCount}
            cols={5}
            headings={["Potion", "Value", "Cost", "Slot"]}
            lastEmptyHeading={true}
          >
            {equipments.map((equip) => (
              <Item
                key={Number(equip)}
                loadingCount={loadingCount}
                load={() => loadEquip(Number(equip))}
                buyAction={(cost: number) =>
                  handleBuyEquip(Number(equip), cost)
                }
                cols={5}
              />
            ))}
          </Listing>
        ) : (
          loadingCount === 0 && (
            <p className="title text-center mt-4">
              No equipments available on shop.
            </p>
          )
        )}
      </ItemList>
    </>
  );
}
