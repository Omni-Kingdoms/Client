import { useSuspenseQuery } from '@apollo/client';
import GridItemBox from '../GridModal/GridItemBox';
import { playerStore } from '@/store/playerStore';
import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"
import { A_Treasures } from '@/lib/Queries';
import { contractStore } from '@/store/contractStore';
import { MaterialBalanceStruct, MaterialStruct } from '@/types/DIAMOND1HARDHAT';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

export default function MaterialsGrid() {
  const players = playerStore((state) => state.players);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);

  const [currentPage, setCurrentPage] = useState(1);
  const [amountOfMaterialsPerPage, setAmountOfMaterialsPerPage] = useState(15);

  const { data }: { data: { A_treasureBalances: MaterialBalanceStruct[] } } = useSuspenseQuery(A_Treasures, {
    variables: { playerId: Number(players[currentPlayerIndex]) }
  });

  const amountOfPages = useMemo(() => {
    const newAmountOfPages = Math.ceil(data.A_treasureBalances.length / amountOfMaterialsPerPage);

    if (currentPage > newAmountOfPages) {
      setCurrentPage(newAmountOfPages);
    }

    return newAmountOfPages;
  }, [data.A_treasureBalances.length, amountOfMaterialsPerPage, currentPage]);

  function handlePageForwards() {
    if (currentPage >= amountOfPages) return;

    setCurrentPage((prev) => prev + 1);
  }

  function handlePageBackwards() {
    if (currentPage <= 1) return;

    setCurrentPage((prev) => prev - 1);
  }

  const materialsToBeShown = useMemo(() => {
    const initialIndex = currentPage === 1
    ? 0
    : ((currentPage - 1) * amountOfMaterialsPerPage)

    const finalIndex = currentPage * amountOfMaterialsPerPage;

    return data.A_treasureBalances.slice(initialIndex, finalIndex);
  }, [currentPage, data.A_treasureBalances, amountOfMaterialsPerPage]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 560) {
        setAmountOfMaterialsPerPage(8);
      } else {
        setAmountOfMaterialsPerPage(15);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <div className="grid gap-3 px-12 grid-cols-4 grid-rows-2 min-[560px]:grid-cols-5 min-[560px]:grid-rows-3">
        {
          Array.from({ length: amountOfMaterialsPerPage }, (_, i) => i + 1).map((i) => (
            <GridItemBox item={materialsToBeShown[i - 1]?.treasure} key={i} count={materialsToBeShown[i - 1]?.balance} />
          ))
        }
      </div>
      <div className="flex items-center justify-center gap-8 translate-y-[-15%]">
        <button
          type="button"
          className={currentPage <= 1 ? 'gray-icon' : ''}
          onClick={handlePageBackwards}
          disabled={currentPage <= 1}
        >
          <Image src={arrowLeft} width={40} alt="backwards page" />
        </button>
        <div className="pages flex items-center gap-3">
          {
            Array.from({ length: amountOfPages }, (_, i) => i + 1).map((i) => (
              <p key={i} className={`title text-2xl ${currentPage === i ? 'choosen-text' : ''}`}>{i}</p>
            ))
          }
        </div>
        <button
          type="button"
          className={currentPage >= amountOfPages ? 'gray-icon' : ''}
          onClick={handlePageForwards}
          disabled={currentPage >= amountOfPages}
        >
          <Image src={arrowRight} width={40} alt="forwards page" />
        </button>
      </div>
    </>
  )
}