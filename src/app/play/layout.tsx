"use client";

import PlayerProvider from "@/components/Common/Providers/PlayerProvider";
import { isWrongNetworkChain } from "@/utils/chainvalidator";
import { playerStore } from "@/store/playerStore";
import { redirect, usePathname } from "next/navigation";
import { useNetwork } from "wagmi";
import { useEffect } from 'react';

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { chain } = useNetwork();
  const pathname = usePathname();

  const players = playerStore((state) => state.players);

  useEffect(() => {
    if (pathname === '/play/utility') {
      document.body.classList.add('utility-screen');
    } else {
      document.body.classList.remove('utility-screen');
    }
  }, [pathname]);

  if (!isWrongNetworkChain(chain?.id)) {
    redirect("/");
  } else if (players.length == 0) {
    redirect("/mint");
  } else {
    return (
      <div className="relative flex-1 flex justify-between px-10 max-[900px]:flex-col max-[900px]:items-center">
        <PlayerProvider />
        {children}
      </div>
    );
  }
}
