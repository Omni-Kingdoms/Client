import { Table } from "@/components/Table";
import { rankingColumn } from "@/constants/leaderboard.constant";
import { gql } from "@apollo/client";

import "./style.css";

import { getClient } from "@/lib/apolloClient";
import { leaderboardQuery, TOTAL_PLAYERS, SEARCH_PLAYERS } from "@/lib/queries";

export default async function Leaderboard() {
  async function leaderboard(pagesize: number, selectedPage: number) {
    "use server";
    console.log(pagesize);
    console.log(selectedPage);

    return await getClient().query({
      query: leaderboardQuery,
      variables: {
        pagesize: pagesize,
        skip: pagesize * selectedPage,
      },
    });
  }
  async function handleSearch(
    name: string,
    pagesize: number,
    selectedPage: number
  ) {
    "use server";
    console.log(name);
    console.log(pagesize);
    console.log(selectedPage);
    const { data } = await getClient().query({
      query: SEARCH_PLAYERS,
      variables: {
        search: name,
        pagesize: pagesize,
        skip: pagesize * selectedPage,
      },
    });
    console.log(data.players);
    return data.players;
  }
  async function totalPlayers() {
    const players = await getClient().query({
      query: TOTAL_PLAYERS,
    });
    console.log(players.data.players[0].Player_id);
    return players.data.players[0].Player_id;
  }
  totalPlayers();

  return (
    <div className="leaderboard-container">
      <div className="flex justify-center">
        <Table
          column={rankingColumn}
          leaderboard={leaderboard}
          total={await totalPlayers()}
          searchbar={handleSearch}
        />
      </div>
    </div>
  );
}
