import Link from 'next/link';

import Amount from '@/components/client/Amount';
import { MAIN_ROUTES } from '@/routes';
import { Expense } from '@/types/transaction';

import NewExpenseButton from './NewExpenseButton';

export default function Expenses({ expenses }: { expenses: Expense[] }) {
  const mappedexpenses = expenses.map(expense => (
    <li key={expense.id}>
      <Link
        href={`${MAIN_ROUTES.BUDGETS}/${expense.budgetUid}/expenses/${expense.id}`}
        className="block py-1 px-2 bg-white rounded border border-slate-300 truncate">
        <div className="flex items-center justify-between">
          <Amount value={expense.amount} asExpense />
          <span className="text-xs">{expense.transactionType.name}</span>
        </div>
        <p className="text-xs text-gray-500 truncate">{expense.description}</p>
      </Link>
    </li>
  ));

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="title">Expenses</h2>
        <NewExpenseButton />
      </div>
      <ul className="mt-6 grid gap-1">{mappedexpenses}</ul>
    </section>
  );
}
