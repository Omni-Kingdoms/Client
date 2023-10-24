"use client";
import * as React from "react";

import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {
  mantlemainnet,
  scrollSepolia,
  mantletestnet,
  opbnbtestnet,
  taikotestnet,
  scroll,
} from "../../../networkconstants";
import { foxWallet, okxWallet } from "@rainbow-me/rainbowkit/wallets";
import { arbitrumGoerli } from "viem/chains";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { CyberApp } from "@cyberlab/cyber-app-sdk";
import { contractStore } from "@/store/contractStore";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;
const { chains, publicClient } = configureChains([scroll], [publicProvider()]);

const { wallets } = getDefaultWallets({
  appName: "OmniKingdoms",
  projectId: projectId,
  chains,
});

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      okxWallet({ projectId, chains }),
      // foxWallet({ projectId, chains }),
    ],
  },
  ...wallets,
]);
const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function WagmiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);
  const setCyberWallet = contractStore((state) => state.setCyberWallet);
  const contract = contractStore((state) => state.setDiamond);

  React.useEffect(
    () => setMounted(true),

    []
  );
  // const app = new CyberApp({ name: "Example", icon: "icon.png" });

  // app.start().then((cyberAccount) => {
  //   if (cyberAccount) {
  //     console.log(cyberAccount);
  //     console.log("Connected to CyberWallet");
  //     setCyberWallet(app.cyberWallet.scrollSepolia);
  //   } else {
  //     console.log("Failed to connect to CyberWallet");
  //   }
  // });
  return (
    <>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains} initialChain={scroll}>
          {mounted && children}
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
