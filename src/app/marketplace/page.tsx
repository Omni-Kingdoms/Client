"use client";
import { playerStore } from "@/store/playerStore";
import { contractStore } from "@/store/contractStore";

import { useEffect, useState } from "react";
import PlayerList from "@/components/PlayerList";

export default async function Marketplace() {
  const [generalListing, setGeneralListing] = useState<BigInt[]>([]);
  const contract = contractStore((state) => state.diamond);
  useEffect(() => {
    const handleListing = async () => {
      const listing = await contract.read.getAllPlayerListings();
      console.log(listing);
      setGeneralListing(listing);
    };
    handleListing();
  }, [contract]);
  return (
    <div className=" w-full flex flex-col  h-full justify-start items-start	">
      {" "}
      {generalListing.map((listing, index) => {
        return <PlayerList key={index} id={listing} personal={false} />;
      })}
    </div>
  );
}
