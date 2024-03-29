import { gql } from "@apollo/client";
import {
  MANTLE_MAINNET_ID,
  SCROLL_MAINNET_ID,
  SCROLL_TESTNET_ID,
  MANTLE_TESTNET_ID,
  OPBNB_TESTNET_ID,
  TAIKO_TESTNET_ID,
  ARBITRUM_TESTNET_ID,
  BASE_MAINNET_ID,
} from "@/networkconstants";

export const totalPlayers = (chainID: number | undefined): any => {
  switch (chainID) {
    case SCROLL_MAINNET_ID:
      return gql`
        query {
          S_players(first: 1, orderBy: Player_id, orderDirection: desc) {
            Player_id
          }
        }
      `;
    case BASE_MAINNET_ID:
      return gql`
        query {
          B_players(first: 1, orderBy: Player_id, orderDirection: desc) {
            Player_id
          }
        }
      `;
    case ARBITRUM_TESTNET_ID:
      return gql`
        query {
          A_players(first: 1, orderBy: Player_id, orderDirection: desc) {
            Player_id
          }
        }
      `;
    case TAIKO_TESTNET_ID:
      return gql`
        query {
          T_players(first: 1, orderBy: Player_id, orderDirection: desc) {
            Player_id
          }
        }
      `;
    default:
      return false;
  }
};

export const searchPlayers = (chainID: number | undefined): any => {
  switch (chainID) {
    case SCROLL_MAINNET_ID:
      return {
        query: gql`
          query (
            $search: String!
            $pagesize: Int!
            $skip: Int!
            $order: String!
          ) {
            S_players(
              first: $pagesize
              skip: $skip
              orderBy: $order
              orderDirection: desc
              where: { name_contains_nocase: $search }
            ) {
              name
              strength
              level
              totalWins
              totalLosses
            }
          }
        `,
        name: "S_players",
      };
    case BASE_MAINNET_ID:
      return {
        query: gql`
          query (
            $search: String!
            $pagesize: Int!
            $skip: Int!
            $order: String!
          ) {
            B_players(
              first: $pagesize
              skip: $skip
              orderBy: $order
              orderDirection: desc
              where: { name_contains_nocase: $search }
            ) {
              name
              strength
              level
              totalWins
              totalLosses
            }
          }
        `,
        name: "B_players",
      };
    case ARBITRUM_TESTNET_ID:
      return {
        query: gql`
          query (
            $search: String!
            $pagesize: Int!
            $skip: Int!
            $order: String!
          ) {
            A_players(
              first: $pagesize
              skip: $skip
              orderBy: $order
              orderDirection: desc
              where: { name_contains_nocase: $search }
            ) {
              name
              strength
              level
              totalWins
              totalLosses
            }
          }
        `,
        name: "A_players",
      };
    case TAIKO_TESTNET_ID:
      return {
        query: gql`
          query (
            $search: String!
            $pagesize: Int!
            $skip: Int!
            $order: String!
          ) {
            T_players(
              first: $pagesize
              skip: $skip
              orderBy: $order
              orderDirection: desc
              where: { name_contains_nocase: $search }
            ) {
              name
              strength
              level
              totalWins
              totalLosses
            }
          }
        `,
        name: "T_players",
      };

    default:
      return false;
  }
};
