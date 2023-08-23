"use client";
import training from "@/assets/img/components/Play/training.png";
import boss from "@/assets/img/components/Play/boss.png";
import craft from "@/assets/img/components/Play/craft.png";
import quest from "@/assets/img/components/Play/quest.png";
import leaderboard from "@/assets/img/components/Play/leaderboard.png";
import map from "@/assets/img/components/Play/Map.png";
import arena from "@/assets/img/components/Play/arena.png";
import shop from "@/assets/img/components/Play/shop.png";
import utility from "@/assets/img/components/Utility/icon.png";
import { isWrongNetworkChain } from "@/utils/chainvalidator";

import Link from "next/link";

import Image from "next/image";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import { useAccount, useNetwork } from "wagmi";
import { Tooltip } from "antd";

import "./index.css";
import NotifierIcon from '@/components/Notifier/NotifierIcon';

export default function Play() {
  const { chain } = useNetwork();
  const { address } = useAccount();

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
            <div className="training-clickable absolute cursor-pointer animate-pulse" />
          </Tooltip>
        </Link>
        <Link href="play/quest">
          <Tooltip title="Quest">
            <div className="quest-clickable absolute cursor-pointer animate-pulse" />
          </Tooltip>
        </Link>
        <Link href="play/shop">
          <Tooltip title="Shop">
            <div className="shop-clickable absolute cursor-pointer animate-pulse" />
          </Tooltip>
        </Link>
        <Link href="play/dungeon">
          <Tooltip title="Dungeons">
            <div className="dungeon-clickable absolute cursor-pointer animate-pulse" />
          </Tooltip>
        </Link>
        {/* <Link href="play/arena">
          <Tooltip title="Arena">
            <div className="arena-clickable absolute cursor-pointer animate-pulse" />
          </Tooltip>
        </Link>
        <Link href="play/craft">
          <Tooltip title="Craft">
            <div className="craft-clickable absolute cursor-pointer animate-pulse" />
          </Tooltip>
        </Link>
        <Link href="play/utility">
          <Tooltip title="Utility">
            <div className="utility-clickable absolute cursor-pointer animate-pulse" />
          </Tooltip>
        </Link> */}
      </div>
      <div className="icon-right min-[2000px]:right-64 min-[3000px]:mr-96">
        <Tooltip title="Training">
          <Link href={"play/training"}>
            <Image
              src={training}
              className="cursor-pointer icons-map min-[400px]:m-5"
              alt="training icon"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Quest">
          <Link href={"play/quest"}>
            <Image
              src={quest}
              className="cursor-pointer icons-map min-[400px]:m-5"
              alt="quest icon"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Dungeons">
          <Link href={"play/dungeon"}>
            <Image
              src={boss}
              className="cursor-pointer icons-map min-[400px]:m-5"
              alt="dungeons icon"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Shop">
          <Link href={"play/shop"}>
            <Image
              src={shop}
              className="cursor-pointer icons-map min-[400px]:m-5"
              alt="shop icon"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Arena">
          <Link href={""}>
            <Image
              src={arena}
              className="gray-icon icons-map min-[400px]:m-5"
              alt="arena icon"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Craft">
          <Link href={""}>
            <Image
              src={craft}
              className="gray-icon icons-map min-[400px]:m-5"
              alt="craft icon"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Leaderboard">
          <Link href={""}>
            <Image
              src={leaderboard}
              className="gray-icon icons-map min-[400px]:m-5"
              alt="leaderboard icon"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Utility" className="relative">
          <Link href={""}>
            <Image
              src={utility}
              className="gray-icon icons-map min-[400px]:m-5"
              alt="utility icon"
            />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
}
