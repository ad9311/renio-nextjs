import { create } from 'zustand';

import { BudgetStore } from '@/types/budget';

const initState = {
  budget: null,
};

export const useBudgetStore = create<BudgetStore>(set => ({
  ...initState,
  setBudget: budget => set({ budget }),
  clearBudget: () => set({ budget: null }),
}));
