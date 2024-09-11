import { Expense, Income } from "../transaction";

export type Budget = {
  id: number;
  uid: string;
  year: number;
  month: number;
  balance: number;
  total_income: number;
  total_expenses: number;
  transaction_count: number;
  income_count: number;
  expense_count: number;
};

export type FullBudget = Budget & {
  incomeList: Income[];
  expenses: Expense[];
};
