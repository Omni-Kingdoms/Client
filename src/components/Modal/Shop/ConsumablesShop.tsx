import ItemList from '@/components/Modal/ItemList/ItemList'
import { contractStore } from '@/store/contractStore';
import { paginate } from '@/utils/helper';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ShopItem from './ShopItem';
import Loading from '@/app/play/loading';
import PotionListing from '../ItemList/PotionListing';

type ConsumablesShopProps = {
  close: () => void,
}

export default function ConsumablesShop({ close }: ConsumablesShopProps) {
  const contract = contractStore((state) => state.diamond);

  const [shopCount, setShopCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingCount, setLoadingCount] = useState<number>(1);
  const pageSize = 10;

  async function createPotion() {
    await contract.write.createBasicPotion([
      2,
      1,
      true,
      "Small potion",
      "https://ipfs.io/ipfs/QmeEBQ7Gx3W9U8fnC8kk7yit7tEtNLhPgzPJvcLbbQPBHk"
    ]);
  }

  const minusLoadingCount = useCallback(() => {
    setLoadingCount((prevState) => prevState > 2 ? prevState - 1 : 0);
  }, []);

  useEffect(() => {
    (async () => {
      const count = await contract.read.getBasicPotionSchemaCount();
      setShopCount(Number(count));
      setLoadingCount(Number(count) + 1);
    })();
  }, [contract]);

  const potions = Array.from({ length: shopCount }, (_, i) => i + 1);
  const paginatedPotions = paginate(potions, currentPage, pageSize);

  return (
    <>
      <ItemList title="Consumables" close={close}>
        {/* <button onClick={createPotion}>Create potion</button> */}
        {
          loadingCount ? (
            <div className="loading-wrapper m-5">
              <Loading />
            </div>
          ) : ''
        }
        <PotionListing loadingCount={loadingCount}>
          {
            paginatedPotions.map((potion) => (
              <ShopItem
                key={Number(potion)}
                id={potion}
                loadingCount={loadingCount}
                disableLoading={minusLoadingCount}
              />
            ))
          }
        </PotionListing>
      </ItemList>
    </>
  )
}