import { ReactNode, useEffect, useState } from "react";

type PotionListingProps = {
  children: ReactNode;
  loadingCount?: number;
  cols: number;
  headings: string[];
  lastEmptyHeading?: boolean;
  refetch: (variables: { order: string }) => void;
};

export default function Listing({
  children,
  cols,
  headings,
  loadingCount,
  lastEmptyHeading,
  refetch,
}: PotionListingProps) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let gridTemplateColumns = width > 520 ? "2fr" : "1fr";

  for (let i = 0; i < cols - 1; i++) {
    gridTemplateColumns += " 1fr";
  }

  return (
    <div
      className="grid gap-2 w-[100%] place-items-center"
      style={{ gridTemplateColumns }}
    >
      {!loadingCount ? (
        <>
          {headings.map((heading) => (
            <button
              className=""
              onClick={() => {
                if (heading === "Level") {
                  refetch({ order: "level" });
                }
                if (heading === "Wins") {
                  console.log("dido");
                  refetch({ order: "totalWins" });
                }
                if (heading === "Losses") {
                  console.log("dida");
                  refetch({ order: "totalLosses" });
                }
              }}
              key={heading}
            >
              <p className="title max-[460px]:text-sm cursor-pointer">
                {heading}
              </p>
            </button>
          ))}
          {lastEmptyHeading && <div />}
        </>
      ) : (
        ""
      )}
      {children}
    </div>
  );
}
