import { Chain, createPublicClient, http } from "viem";
import { scrollTestnet } from "viem/chains";

export const mantletestnet = {
  id: 5001,
  name: "Mantle Testnet",
  network: "Mantle Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.mantle.xyz"],
    },
    public: {
      http: ["https://rpc.testnet.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.testnet.mantle.xyz",
    },
  },
  testnet: true,
} as const satisfies Chain;

export const mantlemainnet = {
  id: 5000,
  name: "Mantle Mainnet",
  network: "Mantle Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mantle.xyz"],
    },
    public: {
      http: ["https://rpc.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Mantle Mainnet Explorer",
      url: "http://explorer.mantle.xyz/",
    },
  },
} as const satisfies Chain;

export const scrolltestnet = scrollTestnet;

export const SCROLL_ID = scrollTestnet.id;
export const MANTLE_ID = mantletestnet.id;
export const MANTLE_MAINNET_ID = mantlemainnet.id;
