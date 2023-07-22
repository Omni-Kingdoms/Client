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
import { useIsMounted } from "usehooks-ts";
import { useEffect } from "react";
import { Player } from "@/components/PlayerCard";

export default function PlayerProvider() {
  const isMounted = useIsMounted();
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);

  useEffect(() => {
    const handlePlayers = async () => {
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
    return <></>;
  }

  if (currentPlayer) {
    return <Player />;
  }

  return <></>;
}
