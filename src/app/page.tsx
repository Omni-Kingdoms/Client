"use client";

import { redirect } from "next/navigation";
import { useAccount, useNetwork } from "wagmi";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import { isWrongNetworkChain } from "@/utils/chainvalidator";
import { playerStore } from "@/store/playerStore";
import Character from "@/components/Character";

export default function Page() {
  const { chain } = useNetwork();
  const players = playerStore((state) => state.players);
  const { address } = useAccount();
  console.log(players);

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
  } else if (players.length == 0) {
    return <Character />;
  } else {
    redirect("/play");
  }
}
