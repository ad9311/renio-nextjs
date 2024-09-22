import Link from 'next/link';

import Amount from '@/components/client/Amount';
import { MAIN_ROUTES } from '@/routes';
import { FullBudget } from '@/types/budget';

export default function BudgetInfo({
  budget,
  extended,
}: {
  budget: FullBudget;
  extended?: boolean;
}) {
  return (
    <section>
      <h2 className="title">Current budget</h2>
      <h3 className="mt-6 text-center text-2xl xl:text-3xl text-primary-700 font-bold number">
        <Link href={`${MAIN_ROUTES.BUDGETS}/${budget.uid}`} className="hover:underline">
          {budget.month}-{budget.year}
        </Link>
      </h3>
      <div className="max-w-96 mx-auto">
        <div className="my-4 text-center text-xl xl:text-2xl">
          <p className="leading-4">
            <span className="text-base text-gray-500">Balance:</span>
            <Amount value={budget.balance} />
          </p>
        </div>
        <div className="flex items-center justify-between text-lg xl:text-xl text-center">
          <p className="leading-4">
            <span className="text-base text-gray-500">Income:</span>
            <Amount value={budget.totalIncome} asIncome />
          </p>
          <p className="leading-4">
            <span className="text-base text-gray-500">Expenses:</span>
            <Amount value={budget.totalExpenses} asExpense />
          </p>
        </div>
      </div>
      <>
        {extended && (
          <>
            <hr className="my-4 border-t border-gray-300" />
            <div>
              <p className="leading-4">
                <span className="text-sm text-gray-500">Transactions:</span>
                <span className="number text-gray-600">&nbsp;{budget.transactionCount}</span>
              </p>
              <p className="mt-1 leading-4">
                <span className="text-sm text-gray-500">Income count:</span>
                <span className="number text-gray-600">&nbsp;{budget.incomeCount}</span>
              </p>
              <p className="mt-1 leading-4">
                <span className="text-sm text-gray-500">Expense count:</span>
                <span className="number text-gray-600">&nbsp;{budget.expenseCount}</span>
              </p>
            </div>
          </>
        )}
      </>
    </section>
  );
}
