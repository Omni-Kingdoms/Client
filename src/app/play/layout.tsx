"use client";

import PlayerProvider from "@/components/Common/Providers/PlayerProvider";
import { isWrongNetworkChain } from "@/utils/chainvalidator";
import { playerStore } from "@/store/playerStore";
import { redirect } from "next/navigation";
import { useAccount, useNetwork } from "wagmi";

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const players = playerStore((state) => state.players);

  if (!isWrongNetworkChain(chain?.id)) {
    redirect("/");
  } else if (players.length == 0) {
    redirect("/mint");
  } else {
    return (
      <>
        <PlayerProvider />
        {children}
      </>
    );
  }
}
