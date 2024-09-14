import { getResource } from '@/helpers/fetch';
import { FullBudget } from '@/types/budget';

export default async function LastBudgets() {
  const response = await getResource(`${process.env.API}/budgets?transactions=income:expenses`);
  const json = await response.json();

  if (!response.ok && json.status !== 'SUCCESS') {
    return null;
  }

  return (
    <ul>
      {(json.data.budgets as FullBudget[]).map(budget => (
        <li key={budget.uid}>{budget.balance}</li>
      ))}
    </ul>
  );
}
