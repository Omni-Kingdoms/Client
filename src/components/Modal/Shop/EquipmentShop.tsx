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

  async function handleBuyEquip(id: number, cost: number) {
    console.log(id);
    console.log(cost);

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
          closeOnClick: true,
          isLoading: false,
          autoClose: 5000,
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
          closeOnClick: true,
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

  const loadEquip = useCallback(
    async (id: number) => {
      const equip: Equip = await contract.read.getBasicEquipmentSchema([id]);

      setLoadingCount((prevState) => (prevState > 2 ? prevState - 1 : 0));

      return equip;
    },
    [contract.read]
  );

  /*
  async function createEquipment() {
    await contract.write._createBasicEquipment([
      1,
      1,
      1,
      1,
      "Copper elm",
      "https://ipfs.io/ipfs/QmeEBQ7Gx3W9U8fnC8kk7yit7tEtNLhPgzPJvcLbbQPBHk"
    ]);
  }
  */

  const minusLoadingCount = useCallback(() => {
    setLoadingCount((prevState) => prevState - 1);
  }, []);

  useEffect(() => {
    (async () => {
      const count = await contract.read.getBasicEquipmentCount();
      setShopCount(Number(count));
      setLoadingCount(Number(count));
    })();
  }, [contract]);

  const equipments = Array.from({ length: shopCount }, (_, i) => i + 1);
  /* const paginatedEquipments = paginate(equipments, currentPage, pageSize); */

  return (
    <>
      <ItemList
        title="Equipments"
        close={close}
        changeCurrentPage={setCurrentPage}
      >
        {/* <button onClick={createEquipment}>Create equipment</button> */}
        {loadingCount ? (
          <div className="loading-wrapper m-5">
            <Loading />
          </div>
        ) : (
          ""
        )}
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
              buyAction={(cost: number) => handleBuyEquip(Number(equip), cost)}
              cols={5}
            />
          ))}
        </Listing>
      </ItemList>
    </>
  );
}
