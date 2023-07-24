"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useAccount } from "wagmi";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import { useIsWrongNetworkChain } from "@/components/Custom/useIsWrongNetworkChain";
import { playerStore } from "@/store/playerStore";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address } = useAccount();
  const isWrongNetworkChain = useIsWrongNetworkChain();

  if (!address || isWrongNetworkChain) {
    return (
      <div className="relative min-h-[85vh] bg-connect min-w-full flex flex-col items-center justify-center">
        <h2 className="font-bold text-black m-4">Connect to play</h2>
        <ConnectWallet />
      </div>
    );
  }
  return (
    <div className="mx-auto  flex flex-col max-w-4xl items-center px-4 sm:px-6 lg:max-w-7xl lg:px-8 min-h-fit h-[78vh]">
      <div>
        <Link
          className="w-64 px-3 py-2 rounded bg-button text-white"
          href={"/marketplace"}
        >
          General Listing
        </Link>
        <Link
          className="w-64 px-3 py-2 rounded bg-button text-white"
          href={"/marketplace/personal"}
        >
          Personal Listing
        </Link>
      </div>
      <div className="flex items-center  w-full justify-between py-8 h-full">
        <div className="w-1/3 h-full flex justify-center items-center">
          <ul className=" flex flex-col gap-4">
            <li>
              <button className="w-64 px-3 py-2 rounded bg-button text-white">
                Player
              </button>
            </li>
            <li>
              <button className="w-64 px-3 py-2 rounded bg-button text-white">
                Weapon
              </button>
            </li>
            <li>
              <button className="w-64 px-3 py-2 rounded bg-button text-white">
                Gear
              </button>
            </li>
          </ul>
        </div>
        <div className="w-2/3  h-full flex items-center flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
