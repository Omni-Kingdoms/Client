"use client";
import Link from "next/link";
import { useAccount } from "wagmi";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import { isWrongNetworkChain } from "@/utils/chainvalidator";
import { contractStore } from "@/store/contractStore";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address, chain } = useAccount();

  if (!isWrongNetworkChain(chain?.id)) {
    return (
      <div className="relative min-h-[85vh] bg-connect min-w-full flex flex-col items-center justify-center">
        <h2 className="font-bold text-black m-4">Connect to play</h2>
        <ConnectWallet />
      </div>
    );
  }
  return (
    <div className="mx-auto flex flex-col max-w-full items-center px-4 sm:px-6 lg:px-8 min-h-fit  h-full">
      <div className="flex items-center justify-evenly w-1/2 ">
        <div>
          <Link
            className="w-64 px-3 py-2 rounded bg-button text-white"
            href={"/marketplace"}
          >
            General
          </Link>
        </div>
        <div>
          <Link
            className="w-64 px-3 py-2 rounded bg-button text-white"
            href={"/marketplace/personal"}
          >
            Personal
          </Link>
        </div>
      </div>
      <div className="flex items-center  w-full justify-between h-max">
        {children}
      </div>
    </div>
  );
}
