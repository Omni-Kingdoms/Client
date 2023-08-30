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

export const taikotestnet = {
  id: 167005,
  name: "Taiko Grimsvotn L2",
  network: "Taiko Grimsvotn L2",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.test.taiko.xyz"],
    },
    public: {
      http: ["https://rpc.test.taiko.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Taiko Grimsvotn L2 Explorer",
      url: "https://explorer.test.taiko.xyz",
    },
  },
} as const satisfies Chain;

export const opbnbtestnet = {
  id: 5611,
  name: "	opBNB testnet",
  network: "	opBNB testnet",
  nativeCurrency: {
    decimals: 18,
    name: "tBNB",
    symbol: "tBNB",
  },
  rpcUrls: {
    default: {
      http: ["https://opbnb-testnet-rpc.bnbchain.org/"],
    },
    public: {
      http: ["https://opbnb-testnet-rpc.bnbchain.org/"],
    },
  },
  blockExplorers: {
    default: {
      name: "opBNB testnet Explorer",
      url: "	https://opbnbscan.com/",
    },
  },
} as const satisfies Chain;

export const omnitestnet = {
  id: 165,
  name: "	omni testnet",
  network: "	omni testnet",
  nativeCurrency: {
    decimals: 18,
    name: "omni",
    symbol: "omni",
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.omni.network/"],
    },
    public: {
      http: ["https://testnet.omni.network/"],
    },
  },
  blockExplorers: {
    default: {
      name: "opBNB testnet Explorer",
      url: "	https://opbnbscan.com/",
    },
  },
} as const satisfies Chain;

export const arbgtestnet = {
  id: 421613,
  name: "	arbg testnet",
  network: "	arbg testnet",
  nativeCurrency: {
    decimals: 18,
    name: "eth",
    symbol: "eth",
  },
  rpcUrls: {
    default: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"],
    },
    public: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "opBNB testnet Explorer",
      url: "	https://opbnbscan.com/",
    },
  },
} as const satisfies Chain;

export const opgtestnet = {
  id: 420,
  name: "	opg testnet",
  network: "	opg testnet",
  nativeCurrency: {
    decimals: 18,
    name: "eth",
    symbol: "eth",
  },
  rpcUrls: {
    default: {
      http: ["https://goerli.optimism.io"],
    },
    public: {
      http: ["https://goerli.optimism.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "opBNB testnet Explorer",
      url: "	https://opbnbscan.com/",
    },
  },
} as const satisfies Chain;

export const OPBNB_TESTNET_ID = opbnbtestnet.id;
export const TAIKO_TESTNET_ID = taikotestnet.id;
export const SCROLL_TESTNET_ID = scrollSepolia.id;
export const MANTLE_TESTNET_ID = mantletestnet.id;
export const OMNI_TESTNET_ID = omnitestnet.id;
export const ARBG_TESTNET_ID = arbgtestnet.id;
export const OPG_TESTNET_ID = opgtestnet.id;
export const MANTLE_MAINNET_ID = mantlemainnet.id;
