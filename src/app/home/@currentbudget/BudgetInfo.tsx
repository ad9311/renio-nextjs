import Link from 'next/link';

import Amount from '@/components/client/Amount';
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
            <span className="block number">
              <Amount value={budget.balance} />
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between text-xl text-center">
          <p className="leading-4">
            <span className="text-base text-gray-400">Income:</span>
            <span className="block number">
              <Amount value={budget.totalIncome} />
            </span>
          </p>
          <p className="leading-4">
            <span className="text-base text-gray-400">Expenses:</span>
            <span className="block number">
              <Amount value={budget.totalExpenses} />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
