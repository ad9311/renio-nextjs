'use client';

import { useEffect } from 'react';

import { useBudgetStore } from '@/stores/budget';
import { FullBudget } from '@/types/budget';

export default function SaveBudgetStore({ budget }: { budget: FullBudget }) {
  const { setBudget } = useBudgetStore(state => ({ setBudget: state.setBudget }));

  useEffect(() => {
    setBudget(budget);
  }, []);

  return null;
}
