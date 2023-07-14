"use client";

import { useAccount } from "wagmi";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import Character from "@/components/Character/Character";

export default function Mint() {
  const { address } = useAccount();

  if (!address) {
    return (
      <div className="relative min-h-[85vh] bg-connect min-w-full flex flex-col items-center justify-center">
        <h2 className="font-bold text-black m-4">Connect to play</h2>
        <ConnectWallet />
      </div>
    );
  } else {
    return <Character />;
  }
}
