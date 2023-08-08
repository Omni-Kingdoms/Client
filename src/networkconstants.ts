import { Chain } from "viem";

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
      url: "https://explorer.mantle.xyz/",
    },
  },
} as const satisfies Chain;

export const scrollSepolia = {
  id: 534351,
  name: "Scroll Sepolia",
  network: "Scroll Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rpc.scroll.io/"],
    },
    public: {
      http: ["https://sepolia-rpc.scroll.io/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Scroll Sepolia Explorer",
      url: "https://sepolia-blockscout.scroll.io/",
    },
  },
} as const satisfies Chain;

export const SCROLL_ID = scrollSepolia.id;
export const MANTLE_ID = mantletestnet.id;
export const MANTLE_MAINNET_ID = mantlemainnet.id;
