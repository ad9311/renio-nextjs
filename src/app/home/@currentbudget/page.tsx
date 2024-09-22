import { redirect } from 'next/navigation';

import BudgetInfo from '@/components/client/BudgetInfo';
import { getResource, postResource } from '@/helpers/fetch';
import { MAIN_ROUTES } from '@/routes';

export default async function CurrentBudgetPage() {
  const response = await getResource(
    `${process.env.API}/budgets/current?transactions=income:expenses`
  );
  const json = await response.json();

  if (!response.ok && json.status === 'ERROR_NOT_FOUND') {
    const currentDate = new Date();
    const body = JSON.stringify({
      budget: {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
      },
    });
    const response = await postResource(`${process.env.API}/budgets`, body);
    const json = await response.json();
    if (response.ok && json.status === 'SUCCESS_CREATED') {
      redirect(MAIN_ROUTES.HOME);
    }
  }

  if (!response.ok) {
    return null;
  }

  return <BudgetInfo title="Current budget" budget={json.data.budget} />;
}
