"use client";

import { useAccount, useNetwork } from "wagmi";
import Character from "@/components/Character";
import { playerStore } from "@/store/playerStore";
import { useIsWrongNetworkChain } from "@/components/Custom/useIsWrongNetworkChain";
import { redirect } from "next/navigation";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";

export default function Mint() {
  const isWrongNetworkChain = useIsWrongNetworkChain();
  const { chain } = useNetwork();
  const { address } = useAccount();

  if (isWrongNetworkChain || !chain) {
    return (
      <div className="relative min-h-[86.1vh] bg-connect min-w-full flex flex-col items-center justify-center">
        {!address ? (
          <h2 className="font-bold text-black m-4">Connect to play!</h2>
        ) : (
          <h2 className="font-bold text-black m-4">
            Wrong network, please reconnect.
          </h2>
        )}
        <ConnectWallet />
      </div>
    );
  } else {
    return <Character />;
  }
}
