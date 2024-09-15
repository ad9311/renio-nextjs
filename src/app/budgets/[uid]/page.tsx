import { getResource } from '@/helpers/fetch';

export default async function BudgetPage({ params }: { params: { uid: string } }) {
  const response = await getResource(
    `${process.env.API}/budgets/${params.uid}?transactions=expenses:income`
  );
  const json = await response.json();
  if (!response.ok) {
    return null;
  }

  return <div>{json.data.budget.balance}</div>;
}
