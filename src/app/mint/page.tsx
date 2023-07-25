"use client";

import { useAccount } from "wagmi";
import Character from "@/components/Character";
import { useIsWrongNetworkChain } from "@/components/Custom/useIsWrongNetworkChain";
import { redirect } from "next/navigation";

export default function Mint() {
  const { address } = useAccount();
  const isWrongNetworkChain = useIsWrongNetworkChain();

  if (!address || isWrongNetworkChain) {
    redirect('/')
  } else {
    return <Character />;
  }
}
