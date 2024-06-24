"use client";

import { useAccount } from "wagmi";
import Character from "@/components/Character";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import { isWrongNetworkChain } from "@/utils/chainvalidator";
import { contractStore } from "@/store/contractStore";

export default function Mint() {
  const { address, chain } = useAccount();

  if (!isWrongNetworkChain(chain?.id)) {
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
