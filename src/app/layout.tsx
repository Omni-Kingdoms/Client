import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Shared/Navbar/Navbar";
import WagmiProvider from "@/components/Common/Providers/WagmiProvider";
import { ConnectWallet } from "@/components/Shared/Navbar/ConnectWallet";

import ContractProvider from "@/components/Common/Providers/ContractProvider";
import Footer from "@/components/Shared/Navbar/footer";


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
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider>
          <Navbar/>
          <div className="relative min-h-[85vh] bg-connect min-w-full flex flex-col items-center justify-center">
            <h2 className="font-bold text-black m-4">Connect to play</h2>
            <ConnectWallet />
          </div>
          
          <ContractProvider>{children}</ContractProvider>
          <Footer/>
        </WagmiProvider>
      </body>
    </html>
  );
}
