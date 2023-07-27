"use client";
import training from "@/assets/img/components/Play/training.png";
import boss from "@/assets/img/components/Play/boss.png";
import craft from "@/assets/img/components/Play/craft.png";
import quest from "@/assets/img/components/Play/quest.png";
import leaderboard from "@/assets/img/components/Play/leaderboard.png";

import Link from "next/link";
import { redirect } from "next/navigation";
import { playerStore } from "@/store/playerStore";

import Image from "next/image";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import { useIsWrongNetworkChain } from "@/components/Custom/useIsWrongNetworkChain";
import { useAccount, useNetwork } from "wagmi";

export default function Play() {
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
  }

  return (
    <div className="div-father">
      <div className="bg-map h-971"></div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <Link href={"play/training"}>
          <Image
            src={training}
            className="hover:cursor-pointer icons-map min-[650px]:m-5"
            alt="mapa"
          />
        </Link>
        <Link href={"play/quest"}>
          <Image
            src={quest}
            className="hover:cursor-pointer icons-map min-[650px]:m-5"
            alt="mapa"
          />
        </Link>
        <Link href={"play/craft"}>
          <Image
            src={craft}
            className="hover:cursor-pointer icons-map min-[650px]:m-5"
            alt="mapa"
          />
        </Link>
        <Link href={"play/leaderboard"}>
          <Image
            src={leaderboard}
            className="hover:cursor-pointer icons-map min-[650px]:m-5"
            alt="mapa"
          />
        </Link>
        <Link href={"play/dungeon"}>
          <Image
            src={boss}
            className="hover:cursor-pointer icons-map min-[650px]:m-5"
            alt="mapa"
          />
        </Link>
      </div>
    </div>
  );
}
