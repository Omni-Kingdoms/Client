"use client";

import { useAccount } from "wagmi";
import Character from "@/components/Character";
import { useIsWrongNetworkChain } from "@/components/Custom/useIsWrongNetworkChain";
import { redirect } from "next/navigation";
import { playerStore } from "@/store/playerStore";

export default function Mint() {
  const { address } = useAccount();
  const isWrongNetworkChain = useIsWrongNetworkChain();
  const players = playerStore((state) => state.players);

  return <Character />;
}
