import { create } from 'zustand';

import { BudgetStore } from '@/types/budget';

const initState = {
  budget: null,
  income: null,
  expense: null,
};

export const useBudgetStore = create<BudgetStore>(set => ({
  ...initState,
  setBudget: budget => set({ budget }),
  setIncome: income => set({ income }),
  setExpense: expense => set({ expense }),
  clearStore: () => set({ budget: null }),
}));
