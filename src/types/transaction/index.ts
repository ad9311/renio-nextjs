export type TransactionType = {
  id: number;
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
