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
    console.log(await contract.read.getPlayerListing([3]));
    console.log(await contract.read.owners([3]));
    console.log(await contract.read.getApproved([2]));
    console.log(players);
    console.log(await contract.read.getPlayers([address]));
    // await contract.write.createPlayerListing([3, parseEther("0.005")]);
    // await contract.write.purchasePlayer([3], { value: parseEther("0.005") });
    // await contract.write.approve([contractAddress, 1]);
    // await contract.write.setApprovalForAll([contractAddress, true]);
    // await contract.write.deListPlayer([1]);
  }
  return (
    <div className=" w-full flex flex-col   h-full overflow-y-auto overflow-hidden	">
      <button onClick={handleList}> listar</button>
      {personalListing.map((listing, index) => {
        return (
          <>
            <PlayerList key={index} id={listing} personal />
            <PlayerList key={index} id={listing} personal />
            <PlayerList key={index} id={listing} personal />
            <PlayerList key={index} id={listing} personal />
          </>
        );
      })}
    </div>
  );
}
