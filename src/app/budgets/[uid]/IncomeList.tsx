import Image from 'next/image';

import Amount from '@/components/client/Amount';
import { FullBudget } from '@/types/budget';

export default function IncomeList({ budget }: { budget: FullBudget }) {
  const mappedIncomeList = budget.incomeList.map(income => (
    <li key={income.id} className="py-1 px-2 bg-white rounded border border-slate-300 truncate">
      <div className="flex items-center justify-between">
        <Amount value={income.amount} asIncome />
        <span className="text-xs">{income.transactionType.name}</span>
      </div>
      <p className="text-xs text-gray-500 truncate">{income.description}</p>
    </li>
  ));

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="title">Income list</h2>
        <button type="button">
          <Image src="/img/plus.svg" alt="new-income" width={1} height={1} className="w-6" />
        </button>
      </div>
      <ul className="mt-6 grid gap-1">{mappedIncomeList}</ul>
    </section>
  );
}
