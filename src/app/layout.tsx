import { Topbar } from '@/components/Topbar';
import { Player } from '@/components/Player';
import './globals.css';
import "./globals.css";
import { Inter } from "next/font/google";
import WagmiProvider from "@/components/Common/Providers/WagmiProvider";
import ContractProvider from "@/components/Common/Providers/ContractProvider";
import Navbar from "@/components/Shared/Navbar/Navbar";

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
          <Topbar />
          {/* <Navbar /> */}

          <ContractProvider>{children}</ContractProvider>
          <Player />
        </WagmiProvider>
      </body>
    </html>
  );
}
