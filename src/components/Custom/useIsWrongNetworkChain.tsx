"use client";
import { useEffect, useState } from "react";
import { useNetwork } from "wagmi";
import { MANTLE_MAINNET_ID, SCROLL_ID } from "@/networkconstants";

export function useIsWrongNetworkChain() {
  const { chain } = useNetwork();
  const [isWrongNetworkChain, setIsWrongNetworkChain] = useState(false);

  useEffect(() => {
    if (chain?.id !== MANTLE_MAINNET_ID && chain?.id !== SCROLL_ID) {
      setIsWrongNetworkChain(true);
    } else {
      setIsWrongNetworkChain(false);
    }
  }, [chain]);

  return isWrongNetworkChain;
}
