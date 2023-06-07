import { gql } from "@apollo/client";

export const leaderboardQuery = gql`
  query ($pagesize: Int!, $skip: Int!) {
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
