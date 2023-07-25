"use client";

import PlayerProvider from "@/components/Common/Providers/PlayerProvider";
import { useIsWrongNetworkChain } from "@/components/Custom/useIsWrongNetworkChain";
import { playerStore } from "@/store/playerStore";
import { redirect } from "next/navigation";
import { useAccount } from "wagmi";

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { address } = useAccount();
  const isWrongNetworkChain = useIsWrongNetworkChain();
  const players = playerStore((state) => state.players);

  if (!address || isWrongNetworkChain) {
    redirect('/');
  } else if(players.length == 0){
    redirect('/mint');
  } else {
    return <>
    <PlayerProvider/>
    {children}
    </>
  }
    
}