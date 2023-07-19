"use client";
import { playerStore } from "@/store/playerStore";
import { contractStore } from "@/store/contractStore";
import { parseEther } from "viem";

export default async function MarketplacePersonal() {
  const players = playerStore((state) => state.players);

  const contract = contractStore((state) => state.diamond);
  const contractAddress = contractStore((state) => state.contractAddress);
  console.log(players);
  console.log(contractAddress);
  async function handleList() {
    console.log(await contract.read.getAllPlayerListings());
    await contract.write.createPlayerListing([players[0], parseEther("1")]);
  }
  return (
    <div className=" w-full flex flex-col gap-11 ">
      <button onClick={handleList}>List</button>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
      <div>Player Personal List</div>
    </div>
  );
}
