import { Expense, Income } from '../transaction';

export type Budget = {
  id: number;
  uid: string;
  year: number;
  month: number;
  balance: number;
  totalIncome: number;
  totalExpenses: number;
  transactionCount: number;
  incomeCount: number;
  expenseCount: number;
};

export type FullBudget = Budget & {
  incomeList: Income[];
  expenses: Expense[];
};

export type BudgetStore = {
  budget: FullBudget | null;
  setBudget: (budget: FullBudget) => void;
  clearBudget: () => void;
};
