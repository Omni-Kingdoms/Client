import ItemList from '@/components/Modal/ItemList/ItemList'
import Loading from '@/app/play/loading';
import { paginate } from '@/utils/helper';
import { useCallback, useEffect, useState } from 'react';
import { contractStore } from '@/store/contractStore';
import Listing from '../ItemList/Listing';
import EquipItem from './EquipItem';

type EquipmentShopProps = {
  close: () => void,
}

export default function EquipmentShop({ close }: EquipmentShopProps) {
  const contract = contractStore((state) => state.diamond);

  const [shopCount, setShopCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingCount, setLoadingCount] = useState<number>(1);
  const pageSize = 10;

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
  const paginatedEquipments = paginate(equipments, currentPage, pageSize);

  return (
    <>
      <ItemList title="Equipments" close={close}>
        {/* <button onClick={createEquipment}>Create equipment</button> */}
        {
          loadingCount ? (
            <div className="loading-wrapper m-5">
              <Loading />
            </div>
          ) : ''
        }
        <Listing
          loadingCount={loadingCount}
          cols={4}
          headings={['Potion', 'Value', 'Cost']}
          lastEmptyHeading={true}
        >
          {
            paginatedEquipments.map((equip) => (
              <EquipItem
                key={Number(equip)}
                id={equip}
                loadingCount={loadingCount}
                disableLoading={minusLoadingCount}
              />
            ))
          }
        </Listing>
      </ItemList>
    </>
  )
}