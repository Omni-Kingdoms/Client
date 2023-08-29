"use client";
import { Table } from "@/components/Table";
import { rankingColumn } from "@/constants/leaderboard.constant";
import { useSuspenseQuery } from "@apollo/client";

import { S_TOTAL_PLAYERS } from "@/lib/Queries";

export default function Leaderboard() {
  //   async function leaderboard(pagesize: number, selectedPage: number) {
  //     "use server";
  //     console.log(pagesize);
  //     console.log(selectedPage);

  //     return await getClient().query({
  //       query: leaderboardQuery,
  //       variables: {
  //         pagesize: pagesize,
  //         skip: pagesize * selectedPage,
  //       },
  //     });
  //   }
  //   async function handleSearch(
  //     name: string,
  //     pagesize: number,
  //     selectedPage: number
  //   ) {
  //     "use server";
  //     console.log(name);
  //     console.log(pagesize);
  //     console.log(selectedPage);
  //     const { data } = await getClient().query({
  //       query: SEARCH_PLAYERS,
  //       variables: {
  //         search: name,
  //         pagesize: pagesize,
  //         skip: pagesize * selectedPage,
  //       },
  //     });
  //     console.log(data.players);
  //     return data.players;
  //   }
  //   async function totalPlayers() {
  const { data }: { data: any } = useSuspenseQuery(S_TOTAL_PLAYERS);
  console.log(data.S_players[0].Player_id);

  return (
    <div className="leaderboard-container">
      <div className="flex justify-center">
        <Table column={rankingColumn} total={data.S_players[0].Player_id} />
      </div>
    </div>
  );
}
