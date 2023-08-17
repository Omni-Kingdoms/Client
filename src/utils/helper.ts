import { useState, useEffect } from "react";

export const useResize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isResponsive: false,
  });

  const updateSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 768,
      isResponsive: window.innerWidth < 1024,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return screenSize;
};

export const paginate = (
  items: BigInt[] | Number[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize); // 0, 9
};
