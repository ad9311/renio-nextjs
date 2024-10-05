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
  income: Income | null;
  expense: Expense | null;
  setBudget: (budget: FullBudget) => void;
  setIncome: (income: Income) => void;
  setExpense: (expense: Expense) => void;
  clearStore: () => void;
};
