import "./index.css";

import { useQuery } from '@apollo/client';
import ItemList from '../ItemList/ItemList'
import { S_SEARCH_PLAYERS, S_TOTAL_PLAYERS, S_leaderboardQuery } from '@/lib/Queries';
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
  const [searchName, setSearchName] = useState<string>('');

  const playersData: { data: any } = useQuery(S_TOTAL_PLAYERS, {
    onCompleted: () => {
      setLoadingCount((prev => prev >= 1 ? prev - 1 : prev));
    }
  });

  const leaderboardData: { data: any } = useQuery(S_SEARCH_PLAYERS, {
    variables: {
      pagesize: Number(pageSize),
      skip: pageSize * (selectedPage - 1),
      search: searchName
    },
    onCompleted: () => {
      setLoadingCount((prev) => prev >= 1 ? prev - 1 : prev);
    },
  });

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

    setLoadingCount(1);
    setSelectedPage((prev) => prev + 1);
  }

  function handlePageBackwards() {
    if (selectedPage <= 1) return;

    setLoadingCount(1);
    setSelectedPage((prev) => prev - 1);
  }

  function handleChangeSearchName(value: string) {
    setLoadingCount(1);

    setSearchName(value);
  }

  function handleChangePageSize(value: number) {
    setLoadingCount(1);
    setPageSize(value);
  }

  const Header = (
    <div>
      <label className="flex flex-col gap-1">
        <input
          type="text"
          className="w-[100%] max-w-[200px] text-xs mt-3 mb-1 p-1 custom-input"
          placeholder="Search by name..."
          value={searchName}
          onChange={(e) => handleChangeSearchName(e.target.value)}
        />
      </label>
    </div>
  )

  const Footer = (
    <LeaderboardFooter
      pageSize={pageSize}
      setPageSize={handleChangePageSize}
      selectedPage={selectedPage}
      amountOfPages={amountOfPages}
      handlePageBackwards={handlePageBackwards}
      handlePageForwards={handlePageForwards}
    />
  )

  return (
    <>
      <ItemList
        title="Leaderboard"
        close={close}
        header={Header}
        footer={Footer}
      >
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