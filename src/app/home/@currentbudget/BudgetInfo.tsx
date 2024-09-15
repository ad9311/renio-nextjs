import Link from 'next/link';

import { MAIN_ROUTES } from '@/routes';
import { FullBudget } from '@/types/budget';

export default function BudgetInfo({ budget }: { budget: FullBudget }) {
  return (
    <section>
      <h2>
        {budget.month}/{budget.year}
      </h2>
      <Link href={`${MAIN_ROUTES.BUDGETS}/${budget.uid}`}>Go to</Link>
      <p>{budget.balance}</p>
    </section>
  );
}
