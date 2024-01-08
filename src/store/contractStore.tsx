import { create } from "zustand";

interface ContractState {
  diamond: any | null;
  setDiamond: (diamond: any | null) => void;
  contractAddress: string | null;
  setContractAddress: (contractAddress: string | null) => void;
  cyberWallet: any | null;
  setCyberWallet: (cyberWallet: any | null) => void;
  bastion: any | null;
  setBastion: (bastion: any | null) => void;
  smartAccountAddress: string | null;
  setSmartAccountAddress: (smartAccountAddress: string | null) => void;
}

export const contractStore = create<ContractState>((set) => ({
  diamond: null,
  setDiamond: (diamond) => set(() => ({ diamond })),
  contractAddress: null,
  setContractAddress: (contractAddress) => set(() => ({ contractAddress })),
  cyberWallet: null,
  setCyberWallet: (cyberWallet) => set(() => ({ cyberWallet })),
  bastion: null,
  setBastion: (bastion) => set(() => ({ bastion })),
  smartAccountAddress: null,
  setSmartAccountAddress: (smartAccountAddress) =>
    set(() => ({ smartAccountAddress })),
}));
