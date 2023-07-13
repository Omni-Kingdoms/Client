"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import NavbarHome from "@/components/Navbar/NavbarHome";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify"

import { usePathname  } from "next/navigation"
import Character from "@/components/Character/Character";
import WagmiProvider from "@/components/Common/Providers/WagmiProvider";
import ContractProvider from "@/components/Common/Providers/ContractProvider";
import Home from "@/components/Home/Home";

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
  console.log(router)
  const getHome = () => {
    if (router === "/") {
      return (
        <>
          <div>
            <NavbarHome />
            <Home/>
            <Footer />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <Navbar />
            <ContractProvider>{children}</ContractProvider>
            <Footer />;
          </div>
        </>
      );
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider>
          {getHome()}
          <ToastContainer theme="dark" />
        </WagmiProvider>
      </body>
    </html>
  );
}