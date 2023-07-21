"use client";
import { playerStore } from "@/store/playerStore";
import { contractStore } from "@/store/contractStore";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import PlayerList from "@/components/PlayerList";
import { useEffect, useState } from "react";

export default async function MarketplacePersonal() {
  const players = playerStore((state) => state.players);
  const { address } = useAccount();
  const contract = contractStore((state) => state.diamond);
  const contractAddress = contractStore((state) => state.contractAddress);
  const [personalListing, setpersonalListing] = useState<BigInt[]>([]);

  useEffect(() => {
    const handleListing = async () => {
      const listing = await contract.read.getPlayerListingsByAddress([address]);
      console.log(listing);
      setpersonalListing(listing);
    };
    handleListing();
  }, [contract, address]);

  async function handleList() {
    console.log(await contract.read.getAllPlayerListings());
    console.log(await contract.read.getPlayerListingsByAddress([address]));
    console.log(await contract.read.getPlayerListing([1]));
    console.log(await contract.read.owners([1]));
    console.log(await contract.read.getApproved([1]));

    // await contract.write.createPlayerListing([1, parseEther("0.05")]);
    await contract.write.purchasePlayer([1], { value: 50000000000000000n });
    // await contract.write.approve([contractAddress, 1]);
    // await contract.write.setApprovalForAll([contractAddress, true]);
    // await contract.write.deListPlayer([1]);
  }
  return (
    <div className=" w-full flex flex-col gap-11 ">
      {personalListing.map((listing, index) => {
        return <PlayerList key={index} id={listing} personal />;
      })}
    </div>
  );
}
