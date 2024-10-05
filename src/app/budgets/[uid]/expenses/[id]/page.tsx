'use client';

import { useEffect } from 'react';

import { getResource } from '@/helpers/fetch';
import { useBudgetStore } from '@/stores/budget';
import { FullBudget } from '@/types/budget';

import ExpenseDetails from './ExpenseDetails';

// import IncomeDetails from './IncomeDetails';

export default function ExpensePage({ params }: { params: { uid: string; id: string } }) {
  const { budget, expense, setBudget, setExpense } = useBudgetStore(state => ({
    budget: state.budget,
    expense: state.expense,
    setBudget: state.setBudget,
    setExpense: state.setExpense,
  }));

  function findIncome(budget: FullBudget) {
    const expense = budget.expenses.find(i => i.id.toString() === params.id);
    if (expense) {
      setExpense(expense);
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

  if (!budget || !expense) {
    return <div>LOADING...</div>;
  }

  return <ExpenseDetails />;
}
