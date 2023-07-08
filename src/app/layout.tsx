import { ConnectWallet } from "@/components/Shared/Navbar/ConnectWallet";
import "./globals.css";
import { Inter } from "next/font/google";
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider>
          <ConnectWallet />

          <ContractProvider>{children}</ContractProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
