import { create } from "zustand";
import { DIAMOND1HARDHAT as DiamondContract } from "@/types/DIAMOND1HARDHAT";

interface ContractState {
  diamond: DiamondContract | null;
  setDiamond: (diamond: DiamondContract) => void;
}

export const contractStore = create<ContractState>((set) => ({
  diamond: null,
  setDiamond: (diamond) => set(() => ({ diamond })),
}));
