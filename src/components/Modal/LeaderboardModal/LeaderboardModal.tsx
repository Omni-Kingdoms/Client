import { useQuery, useSuspenseQuery } from '@apollo/client';
import ItemList from '../ItemList/ItemList'
import { S_TOTAL_PLAYERS, S_leaderboardQuery } from '@/lib/Queries';
import { Table } from '@/components/Table';
import { rankingColumn } from '@/constants/leaderboard.constant';
import { useState } from 'react';
import Loading from '@/app/play/loading';
import Listing from '../ItemList/Listing';
import { LeaderboardUserStruct } from '@/types/DIAMOND1HARDHAT';
import LeaderboardItem from './LeaderboardItem';
import LeaderboardFooter from './LeaderboardFooter';

type LeaderboardModalProps = {
  close: () => void,
}

export default function LeaderboardModal({ close }: LeaderboardModalProps) {
  const [pageSize, setPageSize] = useState<number>(10);
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [rowsToRender, setRowsToRender] = useState<any>();
  const [loadingCount, setLoadingCount] = useState<number>(2);

  const playersData: { data: any } = useQuery(S_TOTAL_PLAYERS, {
    onCompleted: () => {
      setLoadingCount((prev => prev >= 1 ? prev - 1 : prev));
    }
  });

  const leaderboardData: { data: any } = useQuery(S_leaderboardQuery, {
    variables: {
      pagesize: Number(pageSize),
      skip: pageSize * selectedPage,
    },
    onCompleted: () => {
      setRowsToRender(playersData.data.S_players);
      setLoadingCount((prev) => prev >= 1 ? prev - 1 : prev);
    },
  });

  const leaderboardUsers: LeaderboardUserStruct[] = leaderboardData.data?.S_players;

  console.log(loadingCount);

  return (
    <>
      <ItemList title="Leaderboard" close={close} footer={(
        <LeaderboardFooter
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      )}>
        {loadingCount ? (
          <div className="loading-wrapper m-5">
            <Loading />
          </div>
        ) : (
          <>
            <Listing cols={4} headings={['Name', 'Level', 'Wins', 'Losses']}>
              {
                leaderboardUsers && leaderboardUsers?.map((user) => (
                  <LeaderboardItem user={user} key={user.name} />
                ))
              }
            </Listing>
          </>
        )}
      </ItemList>
    </>
  )
}