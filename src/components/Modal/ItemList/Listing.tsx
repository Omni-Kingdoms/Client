import { ReactNode, useEffect, useState } from 'react'

type PotionListingProps = {
  children: ReactNode,
  loadingCount?: number,
  cols: number,
  headings: string[]
  lastEmptyHeading?: boolean,
}

export default function Listing({ children, cols, headings, loadingCount, lastEmptyHeading }: PotionListingProps) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return (() => {
      console.log('disable el');
      window.removeEventListener('resize', handleResize)
    });
  }, [])

  let gridTemplateColumns = width > 520 ? '2fr' : '1fr';

  for(let i = 0; i < cols - 1; i++) {
    gridTemplateColumns += ' 1fr';
  }

  return (
    <div className={`grid gap-2 w-[100%] place-items-center mt-[1rem]`} style={{ gridTemplateColumns }}>
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