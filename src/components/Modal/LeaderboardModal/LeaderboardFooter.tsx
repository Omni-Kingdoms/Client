import Image from 'next/image'

import { Select } from '@/components/Select'

import arrowLeft from "@/assets/img/components/PlayerCard/icons/arrow-left.svg"
import arrowRight from "@/assets/img/components/PlayerCard/icons/arrow-right.svg"
import createIntervalArray from '@/components/utils/createIntervalArray'

type LeaderboardFooterProps = {
  pageSize: number,
  setPageSize: (pageSize: number) => void,
  selectedPage: number,
  handlePageBackwards: () => void,
  handlePageForwards: () => void,
  amountOfPages: number,
}

const pageOptions = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "50", value: 50 },
]

export default function LeaderboardFooter(
  { pageSize, setPageSize, selectedPage, handlePageBackwards, handlePageForwards, amountOfPages }: LeaderboardFooterProps
) {

  const pagesArray = createIntervalArray(selectedPage, amountOfPages);

  return (
    <footer className="py-2 flex justify-between gap-2 items-center">
      {
        amountOfPages && (
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              className={selectedPage <= 1 ? 'gray-icon' : ''}
              onClick={handlePageBackwards}
              disabled={selectedPage <= 1}
            >
              <Image src={arrowLeft} width={30} alt="backwards page" />
            </button>
            <div className="pages flex items-center gap-1 overflow-hidden min-w-[40px]">
                {
                  pagesArray.map((i) => (
                    <div key={i} className="flex items-center justify-center">
                      <p className={`title text-md ${selectedPage === i ? 'choosen-text' : ''}`}>{i}</p>
                    </div>
                  ))
                }
            </div>
            <button
              type="button"
              className={selectedPage >= amountOfPages ? 'gray-icon' : ''}
              onClick={handlePageForwards}
              disabled={selectedPage >= amountOfPages}
            >
              <Image src={arrowRight} width={30} alt="forwards page" />
            </button>
          </div>
        )
      }
      <Select
        options={pageOptions}
        defaultOption={pageSize}
        onChange={setPageSize}
      />
    </footer>
  )
}