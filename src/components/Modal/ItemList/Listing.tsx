import { ReactNode } from 'react'

type PotionListingProps = {
  children: ReactNode,
  loadingCount: number,
  cols: number,
  headings: string[]
  lastEmptyHeading?: boolean,
}

export default function Listing({ children, cols, headings, loadingCount, lastEmptyHeading }: PotionListingProps) {
  return (
    <div className={`grid grid-cols-${cols} gap-4 w-[100%] place-items-center mt-[2rem]`}>
      {
        !loadingCount ? (
          <>
            {
              headings.map((heading) => (
                <div key={heading}>
                  <p className="title">{heading}</p>
                </div>
              ))
            }
            {
              lastEmptyHeading && <div />
            }
          </>
        ) : ''
      }
      {children}
    </div>
  )
}