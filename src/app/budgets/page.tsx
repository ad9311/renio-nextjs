import { getResource } from '@/helpers/fetch';

export default async function BudgetsPage() {
  const response = await getResource(`${process.env.API}/budgets/?transactions=expenses:income`);
  const json = await response.json();
  if (!response.ok) {
    return null;
  }

  return <div>{json.status}</div>;
}
