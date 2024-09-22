import BudgetInfo from '@/components/client/BudgetInfo';
import { getResource } from '@/helpers/fetch';

import IncomeList from './IncomeList';

export default async function BudgetPage({ params }: { params: { uid: string } }) {
  const response = await getResource(
    `${process.env.API}/budgets/${params.uid}?transactions=expenses:income`
  );
  if (!response.ok) {
    return null;
  }

  const json = await response.json();
  return (
    <div className="grid gap-4">
      <div className="card">
        <BudgetInfo title="Budget" budget={json.data.budget} extended />
      </div>
      <div className="card">
        <IncomeList budget={json.data.budget} />
      </div>
    </div>
  );
}
