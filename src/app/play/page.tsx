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
import { BASE_MAINNET_ID } from "@/networkconstants";

import Link from "next/link";

import Image from "next/image";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import { useAccount } from "wagmi";
import { Tooltip } from "antd";
import "./index.css";
import { Suspense, useState } from "react";
import LeaderboardModal from "@/components/Modal/LeaderboardModal/LeaderboardModal";
import ItemList from "@/components/Modal/ItemList/ItemList";
import Loading from "./loading";
import { contractStore } from "@/store/contractStore";

export default function Play() {
  const { address, chain } = useAccount();

  const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = useState(false);

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
      <div className="main-bg bg-map flex justify-center items-center pointer-events-none">
        <div className="relative">
          <Image src={map} alt="Mapa" className="invisible w-[100%]" />
          <Link href="play/training" className="pointer-events-auto">
            <Tooltip title="Training">
              <div className="map-url training-clickable absolute cursor-pointer animate-pulse" />
            </Tooltip>
          </Link>

          <Link href="" className="pointer-events-auto">
            <Tooltip title="Quest">
              <div className="map-url quest-clickable absolute cursor-pointer  animate-pulse" />
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
          {chain?.id === BASE_MAINNET_ID ? (
            <></>
          ) : (
            <Link href="play/arena" className="pointer-events-auto">
              <Tooltip title="Arena">
                <div className="map-url arena-clickable absolute cursor-pointer animate-pulse" />
              </Tooltip>
            </Link>
          )}
          {/* <Link href="play/craft" className="pointer-events-auto">
            <Tooltip title="Craft">
              <div className="map-url craft-clickable absolute cursor-pointer animate-pulse" />
            </Tooltip>
          </Link> */}

          <Link href="play/utility" className="pointer-events-auto">
            <Tooltip title="Utility">
              <div className="map-url utility-clickable absolute cursor-pointer animate-pulse" />
            </Tooltip>
          </Link>
        </div>
      </div>
      <div className="icon-right gap-4 ">
        <Tooltip title="Training">
          <Link href={"play/training"}>
            <Image
              src={training}
              className="cursor-pointer icons-map"
              alt="training icon"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Quest">
          <Link href={"/"}>
            <Image
              src={quest}
              className="cursor-pointer icons-map gray-icon"
              alt="quest icon"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Dungeons">
          <Link href={"/play/dungeon"}>
            <Image
              src={boss}
              className="cursor-pointer icons-map"
              alt="dungeons icon"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Shop">
          <Link href={"/play/shop"}>
            <Image
              src={shop}
              className="cursor-pointer icons-map "
              alt="shop icon"
            />
          </Link>
        </Tooltip>
        {chain?.id === BASE_MAINNET_ID ? (
          <Tooltip title="Arena">
            <Link href={"/"}>
              <Image
                src={arena}
                className="gray-icon icons-map "
                alt="arena icon"
              />
            </Link>
          </Tooltip>
        ) : (
          <Tooltip title="Arena">
            <Link href={"play/arena"}>
              <Image
                src={arena}
                className="cursor-pointer icons-map "
                alt="arena icon"
              />
            </Link>
          </Tooltip>
        )}
        <Tooltip title="Craft">
          <Link href={"/"}>
            <Image
              src={craft}
              className=" icons-map gray-icon"
              alt="craft icon"
            />
          </Link>
        </Tooltip>

        <Tooltip title="Leaderboard">
          <button type="button" onClick={() => setIsLeaderboardModalOpen(true)}>
            <Image
              src={leaderboard}
              className="icons-map cursor-pointer"
              alt="leaderboard icon"
            />
          </button>
        </Tooltip>

        <Tooltip title="Utility" className="relative">
          <Link href={"play/utility"}>
            <Image
              src={utility}
              className="cursor-pointer icons-map"
              alt="utility icon"
            />
          </Link>
        </Tooltip>
      </div>
      {isLeaderboardModalOpen && (
        <LeaderboardModal close={() => setIsLeaderboardModalOpen(false)} />
      )}
    </>
  );
}
