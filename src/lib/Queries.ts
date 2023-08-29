import { gql } from "@apollo/client";

export const S_leaderboardQuery = gql`
  query ($pagesize: Int, $skip: Int) {
    S_players(
      first: $pagesize
      skip: $skip
      orderBy: level
      orderDirection: desc
    ) {
      name
      strength
      level
      totalWins
      totalLosses
    }
  }
`;

export const S_TOTAL_PLAYERS = gql`
  query {
    S_players(first: 1, orderBy: Player_id, orderDirection: desc) {
      Player_id
    }
  }
`;

export const S_SEARCH_PLAYERS = gql`
  query ($search: String!, $pagesize: Int!, $skip: Int!) {
    S_players(
      first: $pagesize
      skip: $skip
      orderBy: level
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
`;

export const S_EquipmentInStores = gql`
  query {
    S_equipmentInStores {
      cost
      id
      name
      slot
      stat
      uri
      value
    }
  }
`;

export const T_EquipmentInStores = gql`
  query {
    T_equipmentInStores {
      cost
      id
      name
      slot
      stat
      uri
      value
    }
  }
`;

export const S_BasicCrafts = gql`
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
`;
export const A_BasicCrafts = gql`
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
`;
