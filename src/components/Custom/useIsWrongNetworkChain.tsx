"use client";
import { useEffect, useState } from "react";
import { useNetwork } from "wagmi";
import { MANTLE_MAINNET_ID } from "@/networkconstants";

export function useIsWrongNetworkChain() {
  const { chain } = useNetwork();
  const [isWrongNetworkChain, setIsWrongNetworkChain] = useState(false);

  useEffect(() => {
    if (chain?.id !== MANTLE_MAINNET_ID) {
      setIsWrongNetworkChain(true);
    } else {
      setIsWrongNetworkChain(false);
    }
  }, [chain]);

  return isWrongNetworkChain;
}
