"use client";

import { redirect } from 'next/navigation'
import { useAccount } from "wagmi";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import { useIsWrongNetworkChain } from "@/components/Custom/useIsWrongNetworkChain";
import { playerStore } from '@/store/playerStore';

export default async function Page() {
  const { address } = useAccount();
  const isWrongNetworkChain = useIsWrongNetworkChain();
  const players = playerStore((state) => state.players);

  if (!address || isWrongNetworkChain) {
    return (
      <div className="relative min-h-[85vh] bg-connect min-w-full flex flex-col items-center justify-center">
        <h2 className="font-bold text-black m-4">Connect to play</h2>
        <ConnectWallet />
      </div>
    );
  } else if(players.length == 0 || address || !isWrongNetworkChain){
    redirect('/mint');
  } else {
    redirect('/play');
  }
  
  
}
