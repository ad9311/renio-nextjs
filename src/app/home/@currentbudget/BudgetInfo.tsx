import { FullBudget } from "@/types/budget";

export default function BudgetInfo({ budget }: { budget: FullBudget }) {
  return (
    <div>
      {budget.month}/{budget.year}
    </div>
  )
}
