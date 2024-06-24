"use client";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { MANTLE_MAINNET_ID, SCROLL_TESTNET_ID } from "@/networkconstants";
import { contractStore } from "@/store/contractStore";

export function useIsWrongNetworkChain() {
  const { address, chain } = useAccount();

  const [isWrongNetworkChain, setIsWrongNetworkChain] = useState(false);

  useEffect(() => {
    if (chain?.id !== MANTLE_MAINNET_ID && chain?.id !== SCROLL_TESTNET_ID) {
      setIsWrongNetworkChain(true);
    } else {
      setIsWrongNetworkChain(false);
    }
  }, [chain]);

  return isWrongNetworkChain;
}
