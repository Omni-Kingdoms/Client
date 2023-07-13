"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import NavbarHome from "@/components/Navbar/NavbarHome";
import Navbar from "@/components/Navbar/NavbarHome";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify"

import { usePathname  } from "next/navigation"
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
  
  const router = usePathname();

  const getNavbar = () => {
    if (router == "/") {
      return <NavbarHome />;
    } else {
      return <Navbar />;
    }
  };

  const getFooter = () => {
    if (router == "/") {
      return <Footer />;
    } else {
      return <Footer />;
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider>
          {getNavbar()}
            <ContractProvider>{children}</ContractProvider>
          {getFooter()}
          <ToastContainer theme="dark" />
        </WagmiProvider>
      </body>
    </html>
  );
}