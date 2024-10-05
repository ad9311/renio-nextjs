import { FormErrors } from '../error';

export type TransactionType = {
  id: number;
  uid: string;
  name: string;
  color: string;
};

export type Transaction = {
  id: number;
  description: string;
  amount: number;
  transactionType: TransactionType;
  budgetUid: string;
};

export type Income = Transaction;

export type Expense = Transaction;

export type IncomeFormState = {
  income: Income | null;
  errors: FormErrors;
};

export type ExpenseFormState = {
  expense: Expense | null;
  errors: FormErrors;
};

export type TransactionStore = {
  transactionTypes: TransactionType[];
  setTransactionTypes: (transactionTypes: TransactionType[]) => void;
  clearStore: () => void;
};
