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

import { abi } from "../../../../mantle-deployment/artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DIAMOND-1-HARDHAT.json";
import { useEffectOnce, useIsMounted } from "usehooks-ts";
import { useEffect } from "react";
import Link from "next/link";

export default function PlayerProvider() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect();
  const publicClient = usePublicClient();
  const isMounted = useIsMounted();
  const playerStoresss = playerStore();
  const contract = contractStore((state) => state.diamond);
  const setContract = contractStore((state) => state.setDiamond);
  const contractAddress = contractStore((state) => state.contractAddress);
  const setPlayers = playerStore((state) => state.setPlayers);
  const players = playerStore((state) => state.players);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  useEffect(() => {
    const handlePlayers = async () => {
      console.log("players", players);
      if (players[currentPlayerIndex!]) {
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        setCurrentPlayer(player);
      }
    };
    handlePlayers();
  }, [currentPlayerIndex, players]);
  if (!isMounted()) {
  }
  console.log(players);
  console.log(currentPlayer);
  return <></>;
}
