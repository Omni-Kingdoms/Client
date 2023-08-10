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
} from "../../../networkconstants";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const { chains, publicClient } = configureChains(
  [mantlemainnet, scrollSepolia, mantletestnet, opbnbtestnet, taikotestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "OmniKingdoms",
  projectId: projectId,
  chains,
});

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
  React.useEffect(() => setMounted(true), []);
  return (
    <>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>
          {mounted && children}
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
