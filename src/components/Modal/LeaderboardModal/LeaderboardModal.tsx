"use client";
import { useQuery } from "@apollo/client";
import ItemList from "../ItemList/ItemList";

import { totalPlayers, searchPlayers } from "@/lib/Queries/leaderboardQuery";

import { useEffect, useMemo, useState } from "react";
import Loading from "@/app/play/loading";
import Listing from "../ItemList/Listing";
import { LeaderboardUserStruct } from "@/types/DIAMOND1HARDHAT";
import LeaderboardItem from "./LeaderboardItem";
import LeaderboardFooter from "./LeaderboardFooter";
import { useNetwork } from "wagmi";

type LeaderboardModalProps = {
  close: () => void;
};

export default function LeaderboardModal({ close }: LeaderboardModalProps) {
  const [pageSize, setPageSize] = useState<number>(10);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [loadingCount, setLoadingCount] = useState<number>(2);
  const [searchName, setSearchName] = useState<string>("");

  const { chain } = useNetwork();

  const playersData: { data: any } = useQuery(totalPlayers(chain?.id), {
    onCompleted: () => {
      setLoadingCount((prev) => (prev >= 1 ? prev - 1 : prev));
    },
  });
  const searchQuery = searchPlayers(chain?.id);
  const leaderboardData: { data: any } = useQuery(searchQuery.query, {
    variables: {
      pagesize: Number(pageSize),
      skip: pageSize * (selectedPage - 1),
      search: searchName,
    },
    onCompleted: () => {
      setLoadingCount((prev) => (prev >= 1 ? prev - 1 : prev));
    },
  });

  const leaderboardUsers: LeaderboardUserStruct[] = useMemo(
    () => leaderboardData.data?.[searchQuery.name],
    [leaderboardData]
  );

  const amountOfPages = useMemo(() => {
    if (!playersData.data?.[searchQuery.name][0].Player_id) return 0;

    const newAmountOfPages = Math.ceil(
      playersData.data?.[searchQuery.name][0].Player_id / pageSize
    );

    if (selectedPage > newAmountOfPages) {
      setSelectedPage(newAmountOfPages);
    }

    return newAmountOfPages;
  }, [playersData.data?.[searchQuery.name], pageSize, selectedPage]);

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

  return (
    <>
      <ItemList
        title="Leaderboard"
        close={close}
        footer={
          <LeaderboardFooter
            pageSize={pageSize}
            setPageSize={handleChangePageSize}
            selectedPage={selectedPage}
            amountOfPages={amountOfPages}
            handlePageBackwards={handlePageBackwards}
            handlePageForwards={handlePageForwards}
            search={searchName}
            setSearch={handleChangeSearchName}
          />
        }
      >
        {loadingCount ? (
          <div className="loading-wrapper m-5">
            <Loading />
          </div>
        ) : (
          <>
            <Listing cols={4} headings={["Name", "Level", "Wins", "Losses"]}>
              {leaderboardUsers &&
                leaderboardUsers?.map((user) => (
                  <LeaderboardItem user={user} key={user.name} />
                ))}
            </Listing>
          </>
        )}
      </ItemList>
    </>
  );
}
