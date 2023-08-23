"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

import WagmiProvider from "@/components/Common/Providers/WagmiProvider";
import ContractProvider from "@/components/Common/Providers/ContractProvider";
import { Suspense } from "react";
import Loading from "./loading";
import { usePathname } from 'next/navigation';
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
  const route = usePathname();

  console.log(route);

  return (
    <html lang="en">
      <body className={`${inter.className}${route === '/play/utility' ? ' utility-screen' : ''}`}>
        <WagmiProvider>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <ContractProvider>{children}</ContractProvider>
            <Footer />
          </Suspense>
        </WagmiProvider>
        <Analytics />
      </body>
    </html>
  );
}
