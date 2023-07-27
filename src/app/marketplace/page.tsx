"use client";
import { playerStore } from "@/store/playerStore";
import { contractStore } from "@/store/contractStore";

import { useEffect, useState } from "react";
import PlayerList from "@/components/PlayerList";
import { paginate } from "@/utils/helper";
import Pagination from "@/components/Pagination";

export default async function Marketplace() {
  const [generalListing, setGeneralListing] = useState<BigInt[]>([]);
  const contract = contractStore((state) => state.diamond);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const handleListing = async () => {
      const listing = await contract.read.getAllPlayerListings();
      console.log(listing);
      setGeneralListing(listing);
    };
    handleListing();
  }, [contract]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(generalListing, currentPage, pageSize);

  return (
    <div className="w-full">
      <div className=" w-full flex-wrap flex h-full justify-center items-start my-32 gap-8  px-32 ">
        {paginatedPosts.map((listing, index) => {
          return <PlayerList key={Number(listing)} id={listing} />;
        })}
      </div>
      <Pagination
        items={generalListing.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}
