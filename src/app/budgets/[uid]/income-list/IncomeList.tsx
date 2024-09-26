import Link from 'next/link';

import Amount from '@/components/client/Amount';
import { MAIN_ROUTES } from '@/routes';
import { Income } from '@/types/transaction';

import NewIncomeButton from './NewIncomeButton';

export default function IncomeList({ incomeList }: { incomeList: Income[] }) {
  const mappedIncomeList = incomeList.map(income => (
    <li key={income.id}>
      <Link
        href={`${MAIN_ROUTES.BUDGETS}/${income.budgetUid}/income-list/${income.id}`}
        className="block py-1 px-2 bg-white rounded border border-slate-300 truncate">
        <div className="flex items-center justify-between">
          <Amount value={income.amount} asIncome />
          <span className="text-xs">{income.transactionType.name}</span>
        </div>
        <p className="text-xs text-gray-500 truncate">{income.description}</p>
      </Link>
    </li>
  ));

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="title">Income list</h2>
        <NewIncomeButton />
      </div>
      <ul className="mt-6 grid gap-1">{mappedIncomeList}</ul>
    </section>
  );
}
