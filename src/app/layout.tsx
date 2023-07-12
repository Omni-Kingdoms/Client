import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Shared/Navbar/Navbar";
import WagmiProvider from "@/components/Common/Providers/WagmiProvider";
import { ConnectWallet } from "@/components/Shared/Navbar/ConnectWallet";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider>
        <Navbar/>
          <ConnectWallet />
            
          <ContractProvider>{children}</ContractProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
