"use client";
import { contractStore } from "@/store/contractStore";
import { playerStore } from "@/store/playerStore";
import {
  useAccount,
  useNetwork,
  useDisconnect,
  usePublicClient,
  useContractRead,
} from "wagmi";

import { abi } from "../../../../OmniKingdoms/deployment/artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DIAMOND-1-HARDHAT.json";
import { useEffectOnce } from "usehooks-ts";
import { useEffect } from "react";

export default function PlayerProvider() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect();
  const publicClient = usePublicClient();

  const contract = contractStore((state) => state.diamond);
  const setContract = contractStore((state) => state.setDiamond);
  const contractAddress = contractStore((state) => state.contractAddress);
  const setPlayers = playerStore((state) => state.setPlayers);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const currentPlayer = playerStore((state) => state.currentPlayer);

  useEffect(() => {
    const setPlayers = async () => {
      if (address && contract) {
        const players = await contract.read.getPlayers([address]);
        console.log(players);
      }
    };
    setPlayers();
  }, [address, contract, currentPlayer, setCurrentPlayer]);
  useContractRead;
  return (
    <>
      <>oi:{currentPlayer}</>
    </>
  );
}
