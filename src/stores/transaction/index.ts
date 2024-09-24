import { create } from 'zustand';

import { TransactionStore } from '@/types/transaction';

const initState = {
  transactionTypes: [],
};

export const useTransactionStore = create<TransactionStore>(set => ({
  ...initState,
  setTransactionTypes: transactionTypes => set({ transactionTypes }),
  clearStore: () => set({ ...initState }),
}));
