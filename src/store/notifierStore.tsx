import { create } from 'zustand';

interface NotifierStore {
  notifierText: string | null,
  setNotifierText: (value: string) => void,
}

export const notifierStore = create<NotifierStore>((set) => ({
  notifierText: null,
  setNotifierText: (notifierText: string) => set({ notifierText })
}));
