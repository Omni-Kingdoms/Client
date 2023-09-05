import { useQuery } from '@apollo/client';
import ItemList from '../ItemList/ItemList'
import { S_TOTAL_PLAYERS, S_leaderboardQuery } from '@/lib/Queries';
import { useMemo, useState } from 'react';
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
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [loadingCount, setLoadingCount] = useState<number>(2);

  const playersData: { data: any } = useQuery(S_TOTAL_PLAYERS, {
    onCompleted: () => {
      setLoadingCount((prev => prev >= 1 ? prev - 1 : prev));
    }
  });

  const leaderboardData: { data: any } = useQuery(S_leaderboardQuery, {
    variables: {
      pagesize: Number(pageSize),
      skip: pageSize * (selectedPage - 1),
    },
    onCompleted: () => {
      setLoadingCount((prev) => prev >= 1 ? prev - 1 : prev);
    },
  });

  console.log('Players DATA: ', playersData);

  const leaderboardUsers: LeaderboardUserStruct[] = useMemo(() => leaderboardData.data?.S_players, [leaderboardData]);

  const amountOfPages = useMemo(() => {
    if (!playersData.data?.S_players[0].Player_id) return 0;

    const newAmountOfPages = Math.ceil(playersData.data?.S_players[0].Player_id / pageSize);

    if (selectedPage > newAmountOfPages) {
      setSelectedPage(newAmountOfPages);
    }

    return newAmountOfPages;
  }, [playersData.data?.S_players, pageSize, selectedPage]);

  function handlePageForwards() {
    if (selectedPage >= amountOfPages) return;

    setSelectedPage((prev) => prev + 1);
  }

  function handlePageBackwards() {
    if (selectedPage <= 1) return;

    setSelectedPage((prev) => prev - 1);
  }

  return (
    <>
      <ItemList title="Leaderboard" close={close} footer={(
        <LeaderboardFooter
          pageSize={pageSize}
          setPageSize={setPageSize}
          selectedPage={selectedPage}
          amountOfPages={amountOfPages}
          handlePageBackwards={handlePageBackwards}
          handlePageForwards={handlePageForwards}
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