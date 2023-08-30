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
import ModalIcons from '@/components/ModalIcons/ModalIcons';

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
    <>
      <div className="bg-map flex justify-center items-center pointer-events-none mt-24">
        <div className="relative max-w-[800px]">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
          <Link href="play/training" className="pointer-events-auto">
            <Tooltip title="Training">
              <div className="map-url training-clickable absolute cursor-pointer animate-pulse" />
            </Tooltip>
          </Link>
          <Link href="play/quest" className="pointer-events-auto">
            <Tooltip title="Quest">
              <div className="map-url quest-clickable absolute cursor-pointer animate-pulse" />
            </Tooltip>
          </Link>
          <Link href="play/shop" className="pointer-events-auto">
            <Tooltip title="Shop">
              <div className="map-url shop-clickable absolute cursor-pointer animate-pulse" />
            </Tooltip>
          </Link>
          <Link href="play/dungeon" className="pointer-events-auto">
            <Tooltip title="Dungeons">
              <div className="map-url dungeon-clickable absolute cursor-pointer animate-pulse" />
            </Tooltip>
          </Link>
          {/* <Link href="play/arena" className="pointer-events-auto">
            <Tooltip title="Arena">
              <div className="map-url arena-clickable absolute cursor-pointer animate-pulse" />
            </Tooltip>
          </Link> */}
          <Link href="play/craft" className="pointer-events-auto">
            <Tooltip title="Craft">
              <div className="map-url craft-clickable absolute cursor-pointer animate-pulse" />
            </Tooltip>
          </Link>
          {/* <Link href="play/utility" className="pointer-events-auto">
            <Tooltip title="Utility">
              <div className="map-url utility-clickable absolute cursor-pointer animate-pulse" />
            </Tooltip>
          </Link> */}
        </div>
      </div>
      <div className="icon-right absolute top-0 right-10">
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
          <Link href={"play/craft"}>
            <Image
              src={craft}
              className="icons-map min-[400px]:m-5"
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
    </>
  );
}
