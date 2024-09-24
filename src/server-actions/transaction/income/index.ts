'use server';

import { revalidatePath } from 'next/cache';

import { postResource } from '@/helpers/fetch';
import { formatZodErrors } from '@/helpers/forms';
import { toSnakeCaseObject } from '@/helpers/strings';
import { MAIN_ROUTES } from '@/routes';
import { IncomeFormState } from '@/types/transaction';
import { incomeDataValidation } from '@/validations/income';

export async function createIncomeAction(
  initState: IncomeFormState,
  formData: FormData
): Promise<IncomeFormState> {
  const incomeData = {
    transactionTypeId: Number(formData.get('transaction_type_id')),
    description: formData.get('description'),
    amount: Number(formData.get('amount')),
  };
  const validation = incomeDataValidation.safeParse(incomeData);
  if (validation.error) {
    return { ...initState, errors: formatZodErrors(validation.error.issues) };
  }

  const budgetUid = formData.get('budget_uid');
  const response = await postResource(
    `${process.env.API}/budgets/${budgetUid}/incomes`,
    JSON.stringify({ income: toSnakeCaseObject(incomeData) })
  );
  const json = await response.json();
  if (response.ok && json.status === 'SUCCESS_CREATED') {
    revalidatePath(`${MAIN_ROUTES.BUDGETS}/${budgetUid}`);
    return { income: json.data.income, errors: null };
  }

  return { ...initState, errors: json.errors };
}
