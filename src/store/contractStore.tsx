import { create } from "zustand";

interface ContractState {
  diamond: any | null;
  setDiamond: (diamond: any | null) => void;
  contractAddress: string | null;
  setContractAddress: (contractAddress: string | null) => void;
}

export const contractStore = create<ContractState>((set) => ({
  diamond: null,
  setDiamond: (diamond) => set(() => ({ diamond })),
  contractAddress: null,
  setContractAddress: (contractAddress) => set(() => ({ contractAddress })),
}));
