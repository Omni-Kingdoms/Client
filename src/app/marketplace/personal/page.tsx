"use client";
import { playerStore } from "@/store/playerStore";
import PlayerListPersonal from "@/components/PlayerListPersonal";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { paginate } from "@/utils/helper";
import { on } from "events";
export default async function MarketplacePersonal() {
  const players = playerStore((state) => state.players);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(players, currentPage, pageSize);
  // async function handleList() {
  //   console.log(await contract.read.getAllPlayerListings());
  //   console.log(await contract.read.getPlayerListingsByAddress([address]));
  //   console.log(await contract.read.getPlayerListing([1]));
  //   console.log(await contract.read.owners([1]));
  //   console.log(players);
  //   console.log(await contract.read.getPlayers([address]));
  //   await contract.write.createPlayerListing([1, parseEther("0.005")]);
  //   // await contract.write.purchasePlayer([1], { value: parseEther("0.005") });
  //   // await contract.write.setApprovalForAll([contractAddress, true]);
  //   // await contract.write.deListPlayer([1]);
  // }
  return (
    <div className="w-full">
      <div className=" w-full flex-wrap flex h-full justify-center items-start my-32 gap-8  px-32 ">
        {paginatedPosts.map((listing, index) => {
          {
          }
          return (
            <>
              <PlayerListPersonal key={Number(listing)} id={listing} />
            </>
          );
        })}
      </div>
      <Pagination
        items={players.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}
