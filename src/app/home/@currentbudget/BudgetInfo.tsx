import { FullBudget } from '@/types/budget';

export default function BudgetInfo({ budget }: { budget: FullBudget }) {
  return (
    <section>
      <h2>{budget.month}/{budget.year}</h2>
      <p>{budget.balance}</p>
    </section>
  );
}
