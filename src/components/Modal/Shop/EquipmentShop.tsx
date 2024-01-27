import ItemList from "@/components/Modal/ItemList/ItemList";
import Loading from "@/app/play/loading";
import { paginate } from "@/utils/helper";
import { useCallback, useEffect, useState } from "react";
import { BasicEquipmentStruct as Equip } from "@/types/DIAMOND1HARDHAT";
import { contractStore } from "@/store/contractStore";
import Listing from "../ItemList/Listing";
import { playerStore } from "@/store/playerStore";
import { useAccount, usePublicClient } from "wagmi";
import { toast } from "react-toastify";
import Item from "./Item";
import { abi } from "../../../utils/BaseDiamondABI.json";
import { encodeFunctionData } from "viem";

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
  const bastion = contractStore((state) => state.bastion);
  const contractAddress = contractStore((state) => state.contractAddress);
  const { address } = useAccount();

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
      let hash;
      if (bastion) {
        hash = await bastion
          .writeContract({
            account: address,
            address: contractAddress,
            abi,
            functionName: "purchaseBasicEquipment",
            args: [players[currentPlayerIndex!], id],
          })
          .catch((err: Error) => console.log({ err }));
      } else {
        hash = await contract.write.purchaseBasicEquipment([
          players[currentPlayerIndex!],
          id,
        ]);
      }
    } catch (error: any) {
      // Display an error toast message
      toast.error(error.shortMessage as string, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
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
      const currentSupply = await contract.read.getBasicEquipmentSupply([id]);
      equip.currentSupply = Number(equip.supply) - Number(currentSupply);
      setLoadingCount((prevState) => (prevState > 2 ? prevState - 1 : 0));
      if (equip.currentSupply == 0) {
        return;
      }

      return equip;
    },
    [contract.read]
  );

  async function createEquipment() {
    //uint256 _slot,
    // uint256 _value,
    // uint256 _stat,
    // uint256 _cost,
    // uint256 _supply,
    // string memory _name,
    // string memory _uri
    await contract.write.createBasicEquipment([
      0,
      4,
      3,
      500,
      100,
      "Crown",
      "https://ipfs.io/ipfs/QmPLRtLxdstFE5z2N9CYSKe1D6JUZRu8Fb2jhVfhVH6ttd",
    ]);
    // await contract.write.equip([1, 1]);
    // console.log(
    //   await contract.read.getGoldBalance([
    //     "0x08d8E680A2d295Af8CbCD8B8e07f900275bc6B8D",
    //   ])
    // );
    // console.log(await contract.read.getBasicEquipmentSupply(["2"]));
    // await contract.write.freeGold();
    // console.log(await contract.read.getAdvancedCraft([1]));
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
        {/* <button onClick={createEquipment}>Create equipment</button> */}
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
            headings={["Equip", "Value", "Cost", "Supply"]}
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
