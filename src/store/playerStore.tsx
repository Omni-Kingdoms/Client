import { create } from "zustand";
import { PlayerStruct as Player } from "@/types/DIAMOND1HARDHAT";

interface PlayerState {
  players: BigInt[] | [];
  setPlayers: (players: BigInt[] | []) => void;
  currentPlayerIndex: number | null;
  setCurrentPlayerIndex: (currentPlayerIndex: number | null) => void;
  currentPlayer: Player | null;
  setCurrentPlayer: (currentPlayer: Player | null) => void;
}

export const playerStore = create<PlayerState>((set) => ({
  players: [],
  setPlayers: (players) => set(() => ({ players })),
  currentPlayerIndex: null,
  setCurrentPlayerIndex: (currentPlayerIndex) =>
    set(() => ({ currentPlayerIndex })),
  currentPlayer: null,
  setCurrentPlayer: (currentPlayer) => set(() => ({ currentPlayer })),
}));
