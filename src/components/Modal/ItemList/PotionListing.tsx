import { ReactNode } from 'react'

type PotionListingProps = {
  children: ReactNode,
  loadingCount: number
}

export default function PotionListing({ children, loadingCount }: PotionListingProps) {
  return (
    <div className="grid grid-cols-4 gap-4 w-[100%] place-items-center mt-[2rem]">
      {
        !loadingCount ? (
          <>
            <div>
              <p className="title">Potion</p>
            </div>
            <div>
              <p className="title">Value</p>
            </div>
            <div>
              <p className="title">Cost</p>
            </div>
            <div />
          </>
        ) : ''
      }
      {children}
    </div>
  )
}