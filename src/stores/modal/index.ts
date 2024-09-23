import { create } from 'zustand';

import { ModalStore } from '@/types/modal';

const initState = {
  children: null,
};

export const useModalStore = create<ModalStore>(set => ({
  ...initState,
  setModal: children => set({ children }),
  clearModal: () => set({ ...initState }),
}));
