import { gql } from "@apollo/client";
import {
  MANTLE_MAINNET_ID,
  SCROLL_TESTNET_ID,
  MANTLE_TESTNET_ID,
  OPBNB_TESTNET_ID,
  TAIKO_TESTNET_ID,
  ARBITRUM_TESTNET_ID,
} from "@/networkconstants";

export const treasures = (chainID: number | undefined): any => {
  switch (chainID) {
    case SCROLL_TESTNET_ID:
      return {
        query: gql`
          query ($playerId: Int!) {
            S_treasureBalances(where: { player_: { Player_id: $playerId } }) {
              id
              balance
              player {
                id
              }
              treasure {
                id
                name
                rank
                uri
              }
            }
          }
        `,
        name: "S_treasureBalances",
      };
    case ARBITRUM_TESTNET_ID:
      return {
        query: gql`
          query ($playerId: Int!) {
            A_treasureBalances(where: { player_: { Player_id: $playerId } }) {
              id
              balance
              player {
                id
              }
              treasure {
                id
                name
                rank
                uri
              }
            }
          }
        `,
        name: "A_treasureBalances",
      };
    case TAIKO_TESTNET_ID:
      return {
        query: gql`
          query ($playerId: Int!) {
            T_treasureBalances(where: { player_: { Player_id: $playerId } }) {
              id
              balance
              player {
                id
              }
              treasure {
                id
                name
                rank
                uri
              }
            }
          }
        `,
        name: "T_treasureBalances",
      };
    default:
      return false;
  }
};
export const userHasRequiredTreasure = (chainID: number | undefined): any => {
  switch (chainID) {
    case SCROLL_TESTNET_ID:
      return {
        query: gql`
          query ($treasureId: Int!, $playerId: Int!) {
            S_treasures(
              where: {
                treasureInStore_: { id: $treasureId }
                player_: { Player_id: $playerId }
              }
            ) {
              id
              name
              rank
              uri
            }
          }
        `,
        name: "S_treasures",
      };
    case ARBITRUM_TESTNET_ID:
      return {
        query: gql`
          query ($treasureId: Int!, $playerId: Int!) {
            A_treasures(
              where: {
                treasureInStore_: { id: $treasureId }
                player_: { Player_id: $playerId }
              }
            ) {
              id
              name
              rank
              uri
            }
          }
        `,
        name: "A_treasures",
      };
    case TAIKO_TESTNET_ID:
      return {
        query: gql`
          query ($treasureId: Int!, $playerId: Int!) {
            T_treasures(
              where: {
                treasureInStore_: { id: $treasureId }
                player_: { Player_id: $playerId }
              }
            ) {
              id
              name
              rank
              uri
            }
          }
        `,
        name: "T_treasures",
      };
    default:
      return false;
  }
};
