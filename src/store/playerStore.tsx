import { create } from "zustand";
import { PlayerStruct as Player } from "@/types/DIAMOND1HARDHAT";
import { persist, createJSONStorage } from 'zustand/middleware'

interface PlayerState {
  players: BigInt[] | [];
  setPlayers: (players: BigInt[] | []) => void;
  currentPlayerIndex: number;
  setCurrentPlayerIndex: (currentPlayerIndex: number) => void;
  currentPlayer: Player | null;
  setCurrentPlayer: (currentPlayer: Player | null) => void;
}

export const playerStore = create<PlayerState>()(
  persist(
    (set) => ({
      players: [],
      setPlayers: (players) => set(() => ({ players })),
      currentPlayerIndex: 0,
      setCurrentPlayerIndex: (currentPlayerIndex) =>
        set(() => ({ currentPlayerIndex })),
      currentPlayer: null,
      setCurrentPlayer: (currentPlayer) => set(() => ({ currentPlayer })),
    }),
    {
      name: 'player-index',
      partialize: (state) => ({ currentPlayerIndex: state.currentPlayerIndex }),
      storage: createJSONStorage(() => localStorage),
    }
  )
  
);
