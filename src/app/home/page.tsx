"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";

import { useAccount } from "wagmi";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import Character from "@/components/Character/Character";
import WagmiProvider from "@/components/Common/Providers/WagmiProvider";
import ContractProvider from "@/components/Common/Providers/ContractProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OmniKingdoms",
  description: "OmniKingdoms Co",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address } = useAccount();
  const getConnect = () => {
    if (!address) {
      return (
        <div className="relative min-h-[85vh] bg-connect min-w-full flex flex-col items-center justify-center">
          <h2 className="font-bold text-black m-4">Connect to play</h2>
          <ConnectWallet />
        </div>
      );
    } else {
      return <Character />;
    }
  };

  return (
    <div>
      {getConnect()}
    </div>
  );
}