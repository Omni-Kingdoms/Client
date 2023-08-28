import { gql } from "@apollo/client";

export const leaderboardQuery = gql`
  query ($pagesize: Int, $skip: Int) {
    players(
      first: $pagesize
      skip: $skip
      orderBy: wins
      orderDirection: desc
    ) {
      name
      strength
      health
      wins
      losses
    }
  }
`;

export const TOTAL_PLAYERS = gql`
  query {
    players(first: 1, orderBy: Player_id, orderDirection: desc) {
      Player_id
    }
  }
`;

export const SEARCH_PLAYERS = gql`
  query ($search: String!, $pagesize: Int!, $skip: Int!) {
    players(
      first: $pagesize
      skip: $skip
      orderBy: wins
      orderDirection: desc
      where: { name_contains_nocase: $search }
    ) {
      name
      strength
      health
      wins
      losses
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

export const A_UserHasRequiredTreasure = gql`
  query ($treasureId: Int!, $playerId: Int!) {
    A_treasures(where: {treasureInStore_: {id: $treasureId}, player_: {Player_id: $playerId}}) {
      id
      name
      rank
      uri
    }
  }
`;

export const A_AdvancedCrafts = gql`
  query ($oldName: String!) {
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
`;

export const A_Treasures = gql`
  query ($playerId: Int!) {
    A_treasures(where: { player_: { Player_id: $playerId }}) {
      id
      name
      rank
      uri
    }
  }
`;