import { gql } from "@apollo/client";
import {
  MANTLE_MAINNET_ID,
  SCROLL_TESTNET_ID,
  MANTLE_TESTNET_ID,
  OPBNB_TESTNET_ID,
  TAIKO_TESTNET_ID,
  ARBITRUM_TESTNET_ID,
} from "@/networkconstants";

export const basicCraft = (chainID: number | undefined): any => {
  switch (chainID) {
    case SCROLL_TESTNET_ID:
      return {
        query: gql`
          query ($search: String!) {
            S_basicCrafts(where: { oldName: $search }) {
              id
              cost
              newName
              oldName
              slot
              uri
              value
            }
          }
        `,
        name: "S_basicCrafts",
      };
    case ARBITRUM_TESTNET_ID:
      return {
        query: gql`
          query ($search: String!) {
            A_basicCrafts(where: { oldName: $search }) {
              id
              cost
              newName
              oldName
              slot
              uri
              value
            }
          }
        `,
        name: "A_basicCrafts",
      };
    case TAIKO_TESTNET_ID:
      return {
        query: gql`
          query ($search: String!) {
            T_basicCrafts(where: { oldName: $search }) {
              id
              cost
              newName
              oldName
              slot
              uri
              value
            }
          }
        `,
        name: "T_basicCrafts",
      };
    default:
      return false;
  }
};
export const advancedCraft = (chainID: number | undefined): any => {
  switch (chainID) {
    case SCROLL_TESTNET_ID:
      return {
        query: gql`
          query ($search: String!) {
            S_advancedCrafts(where: { oldName: $search }) {
              id
              newName
              oldName
              slot
              stat
              uri
              value
              treasure {
                id
                name
                rank
                uri
              }
            }
          }
        `,
        name: "S_advancedCrafts",
      };
    case ARBITRUM_TESTNET_ID:
      return {
        query: gql`
          query ($search: String!) {
            A_advancedCrafts(where: { oldName: $search }) {
              id
              newName
              oldName
              slot
              stat
              uri
              value
              treasure {
                id
                name
                rank
                uri
              }
            }
          }
        `,
        name: "A_advancedCrafts",
      };
    case TAIKO_TESTNET_ID:
      return {
        query: gql`
          query ($search: String!) {
            T_advancedCrafts(where: { oldName: $search }) {
              id
              newName
              oldName
              slot
              stat
              uri
              value
              treasure {
                id
                name
                rank
                uri
              }
            }
          }
        `,
        name: "T_advancedCrafts",
      };
    default:
      return false;
  }
};
