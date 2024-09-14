import { getResource } from '@/helpers/fetch';

export default async function CurrentBudgetPage() {
  const response = await getResource(`${process.env.API}/budgets/current?transactions=income:expenses`);
  if (response.ok) {
    const json = await response.json();
    return <div>{JSON.stringify(json)}</div>;
  }

  return null;
}
