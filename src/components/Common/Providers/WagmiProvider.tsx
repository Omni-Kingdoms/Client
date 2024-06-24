"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "../../../lib/wagmi-config";
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  DynamicWagmiConnector,
} from "../../../lib/dynamic";

const queryClient = new QueryClient();

export function Providers(props: { children: ReactNode }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "6e5e3e01-f685-4fac-9d68-265233330a67",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{props.children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
