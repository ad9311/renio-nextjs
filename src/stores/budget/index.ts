import { create } from 'zustand';

import { BudgetStore } from '@/types/budget';

const initState = {
  budget: null,
  income: null,
};

export const useBudgetStore = create<BudgetStore>(set => ({
  ...initState,
  setBudget: budget => set({ budget }),
  setIncome: income => set({ income }),
  clearStore: () => set({ budget: null }),
}));
