"use client";
import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { MANTLE_MAINNET_ID, SCROLL_TESTNET_ID } from "@/networkconstants";
import { contractStore } from "@/store/contractStore";

export function useIsWrongNetworkChain() {
  const { address: wagmiAddress } = useAccount();
  const { chain: wagmiChain } = useNetwork();
  const cyberWallet = contractStore((state) => state.cyberWallet);
  let address: any;
  let chain: any;
  if (cyberWallet) {
    address = cyberWallet.cyberAccount.address;
    chain = cyberWallet;
  } else {
    address = wagmiAddress;
    chain = wagmiChain;
    console.log(cyberWallet);
  }
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
