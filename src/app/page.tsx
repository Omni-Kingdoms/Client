import { gql } from "@apollo/client";
import { getClient } from "@/lib/apolloClient";

const leaderboardQuery = gql`
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

export default async function Home() {
  const ld = await getClient().query({
    query: leaderboardQuery,
  });
  console.log(ld);
  return (
    <main>
      {ld.data.players.map((player: any) => (
        <p key={player.Player_id}>{player.name}</p>
      ))}
    </main>
  );
}
