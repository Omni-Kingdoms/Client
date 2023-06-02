"use client";
import * as React from "react";

import { scrollTestnet } from "viem/chains";
import { WagmiConfig, createConfig, configureChains } from "wagmi";

import { mantletestnet } from "../../../networkconstants";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

const projectId = process.env.PROJECT_ID!;
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [scrollTestnet, mantletestnet],
  [w3mProvider({ projectId })]
);

const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(config, chains);

export default function WagmiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <>
      <WagmiConfig config={config}> {mounted && children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
