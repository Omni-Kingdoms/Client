"use client";

import { useAccount } from "wagmi";
import { useIsWrongNetworkChain } from "@/components/Custom/useIsWrongNetworkChain";
import { redirect } from "next/navigation";
import { playerStore } from "@/store/playerStore";
import { Player } from "@/components/PlayerCard";

export default function Mint() {
  const { address } = useAccount();
  const isWrongNetworkChain = useIsWrongNetworkChain();
  const players = playerStore((state) => state.players);

  if (!address || isWrongNetworkChain) {
    redirect('/');
  } else if(players.length == 0){
    redirect('/mint');
  } else {
    return <Player/>
  }
}
