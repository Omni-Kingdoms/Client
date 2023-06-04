import { create } from "zustand";
import { PlayerStruct as Player } from "@/types/DIAMOND1HARDHAT";

interface PlayerState {
  players: number[] | [];
  setPlayers: (players: number[]) => void;
  currentPlayer: Player | null;
  setCurrentPlayer: (currentPlayer: Player | null) => void;
}

export const playerStore = create<PlayerState>((set) => ({
  players: [],
  setPlayers: (players) => set(() => ({ players })),
  currentPlayer: null,
  setCurrentPlayer: (currentPlayer) => set(() => ({ currentPlayer })),
}));
