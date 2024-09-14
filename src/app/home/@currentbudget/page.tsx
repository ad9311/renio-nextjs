import { getResource } from '@/helpers/fetch';

import BudgetInfo from './BudgetInfo';

export default async function CurrentBudgetPage() {
  const response = await getResource(
    `${process.env.API}/budgets/current?transactions=income:expenses`
  );
  const json = await response.json();

  if (!response.ok || json.status !== 'SUCCESS') {
    return null;
  }

  return <BudgetInfo budget={json.data.budget} />;
}
