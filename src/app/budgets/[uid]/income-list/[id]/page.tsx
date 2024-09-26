'use client';

import { useEffect } from 'react';

import { getResource } from '@/helpers/fetch';
import { useBudgetStore } from '@/stores/budget';
import { FullBudget } from '@/types/budget';

import IncomeDetails from './IncomeDetails';

export default function IncomePage({ params }: { params: { uid: string; id: string } }) {
  const { budget, income, setBudget, setIncome } = useBudgetStore(state => ({
    budget: state.budget,
    income: state.income,
    setBudget: state.setBudget,
    setIncome: state.setIncome,
  }));

  function findIncome(budget: FullBudget) {
    const income = budget.incomeList.find(i => i.id.toString() === params.id);
    if (income) {
      setIncome(income);
    }
  }

  async function fetchBudget() {
    const response = await getResource(
      `${process.env.NEXT_PUBLIC_API}/budgets/${params.uid}?transactions=income:expenses`
    );
    if (response.ok) {
      const json = await response.json();
      setBudget(json.data.budget);
    }
  }

  useEffect(() => {
    if (budget) {
      findIncome(budget);
    } else {
      fetchBudget();
    }
  }, [budget]);

  if (!budget || !income) {
    return <div>LOADING...</div>;
  }

  return <IncomeDetails />;
}
