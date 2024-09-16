import Link from 'next/link';

import { MAIN_ROUTES } from '@/routes';
import { FullBudget } from '@/types/budget';

export default function BudgetInfo({ budget }: { budget: FullBudget }) {
  return (
    <section>
      <h2 className="title">Current budget</h2>
      <h3 className="mt-6 text-center text-2xl text-primary-700 font-bold number">
        <Link href={`${MAIN_ROUTES.BUDGETS}/${budget.uid}`} className="hover:underline">
          {budget.month}-{budget.year}
        </Link>
      </h3>
      <div className="max-w-96 mx-auto">
        <div className="my-4 text-center text-2xl">
          <p className="leading-4">
            <span className="text-base text-gray-400">Balance:</span>
            <p className="number">{budget.balance.toFixed(2)}</p>
          </p>
        </div>
        <div className="flex items-center justify-between text-xl text-center">
          <p className="leading-4">
            <span className="text-base text-gray-400">Income:</span>
            <p className="number">{budget.totalIncome.toFixed(2)}</p>
          </p>
          <p className="leading-4">
            <span className="text-base text-gray-400">Expenses:</span>
            <p className="number">{budget.totalExpenses.toFixed(2)}</p>
          </p>
        </div>
      </div>
    </section>
  );
}
