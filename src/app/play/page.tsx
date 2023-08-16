"use client";
import training from "@/assets/img/components/Play/training.png"
import boss from "@/assets/img/components/Play/boss.png"
import craft from "@/assets/img/components/Play/craft.png"
import quest from "@/assets/img/components/Play/quest.png"
import leaderboard from "@/assets/img/components/Play/leaderboard.png"
import map from "@/assets/img/components/Play/Map.png"
import arena from "@/assets/img/components/Play/arena.png"
import shop from "@/assets/img/components/Play/shop.png"
import { isWrongNetworkChain } from "@/utils/chainvalidator";

import Link from "next/link";

import Image from "next/image";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import { useAccount, useNetwork } from "wagmi";
import { Tooltip } from "antd";

import "./index.css";

export default function Play() {
  const { chain } = useNetwork();
  const { address } = useAccount();
  console.log(isWrongNetworkChain(chain?.id));
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
  }

  return (
    <div className="div-father">
      <div className="bg-map h-971 relative">
        <Image src={map} alt="Mapa" />
        <Link href="play/training">
          <Tooltip title="Training">
            <div className="training-clickable absolute cursor-pointer" />
          </Tooltip>
        </Link>
        <Link href="play/quest">
          <Tooltip title="Quest">
            <div className="quest-clickable absolute cursor-pointer" />
          </Tooltip>
        </Link>
        <Link href="play/shop">
          <Tooltip title="Shop">
            <div className="shop-clickable absolute cursor-pointer" />
          </Tooltip>
        </Link>
        <Link href="play/dungeon">
          <Tooltip title="Dungeons">
            <div className="dungeon-clickable absolute cursor-pointer" />
          </Tooltip>
        </Link>
      </div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <Tooltip title="Training">
          <Link href={"play/training"}>
            <Image
              src={training}
              className="hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Quest">
          <Link href={"play/quest"}>
            <Image
              src={quest}
              className="hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Dungeons">
          <Link href={"play/dungeon"}>
            <Image
              src={boss}
              className="hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Shop">
          <Link href={"play/shop"}>
            <Image
              src={shop}
              className="hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Arena">
          <Link href={"play/arena"}>
            <Image
              src={arena}
              className="hover:cursor-pointer icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Craft">
          <Link href={""}>
            <Image
              src={craft}
              className="gray-icon icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Leaderboard">
          <Link href={""}>
            <Image
              src={leaderboard}
              className="gray-icon icons-map min-[400px]:m-5"
              alt="mapa"
            />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
}
