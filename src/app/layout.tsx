import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "@/components/Common/Providers/WagmiProvider";
import ContractProvider from "@/components/Common/Providers/ContractProvider";
import { Suspense } from "react";
import Loading from "./loading";
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
        <Providers>
          <div className="min-h-[100vh] flex flex-col overflow-y-hidden">
            <Navbar />
            <Suspense fallback={<Loading />}>
              <ContractProvider>{children}</ContractProvider>
              <Footer />
            </Suspense>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
