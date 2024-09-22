import BudgetInfo from '@/components/client/BudgetInfo';
import { getResource } from '@/helpers/fetch';

export default async function BudgetPage({ params }: { params: { uid: string } }) {
  const response = await getResource(
    `${process.env.API}/budgets/${params.uid}?transactions=expenses:income`
  );
  if (!response.ok) {
    return null;
  }

  const json = await response.json();
  return (
    <div>
      <div className="card">
        <BudgetInfo budget={json.data.budget} extended />
      </div>
    </div>
  );
}
