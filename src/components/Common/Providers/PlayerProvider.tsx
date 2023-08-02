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
  const { address } = useAccount();
  const contract = contractStore((state) => state.diamond);
  const players = playerStore((state) => state.players);
  const setCurrentPlayer = playerStore((state) => state.setCurrentPlayer);
  const setGold = playerStore((state) => state.setGold);
  const setGem = playerStore((state) => state.setGem);
  const currentPlayer = playerStore((state) => state.currentPlayer);
  const currentPlayerIndex = playerStore((state) => state.currentPlayerIndex);
  
  useEffect(() => {
    const handlePlayers = async () => {
      if (players[currentPlayerIndex!]) {
        const player = await contract.read.getPlayer([
          players[currentPlayerIndex!],
        ]);
        const gold = await contract.read.getGoldBalance([address]);
        const gem = await contract.read.getGemBalance([address]);
        setGold(Number(gold));
        setGem(Number(gem));
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