import {
  MANTLE_MAINNET_ID,
  SCROLL_TESTNET_ID,
  MANTLE_TESTNET_ID,
  OPBNB_TESTNET_ID,
  TAIKO_TESTNET_ID,
} from "@/networkconstants";

export const isWrongNetworkChain = (chainID: number | undefined) => {
  switch (chainID) {
    case MANTLE_MAINNET_ID:
      return process.env.NEXT_PUBLIC_MANTLE_MAINNET_ADDRESS;
    case OPBNB_TESTNET_ID:
      return process.env.NEXT_PUBLIC_OPBNB_TESTNET_ADDRESS;
    case TAIKO_TESTNET_ID:
      return process.env.NEXT_PUBLIC_TAIKO_TESTNET_ADDRESS;

    default:
      return false;
  }
};
