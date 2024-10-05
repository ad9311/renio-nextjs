'use server';

import { revalidatePath } from 'next/cache';

import { postResource } from '@/helpers/fetch';
import { formatZodErrors } from '@/helpers/forms';
import { toSnakeCaseObject } from '@/helpers/strings';
import { MAIN_ROUTES } from '@/routes';
import { ExpenseFormState } from '@/types/transaction';
import { transactionDataValidation } from '@/validations/transaction';

export async function createExpenseAction(
  initState: ExpenseFormState,
  formData: FormData
): Promise<ExpenseFormState> {
  const expenseData = {
    transactionTypeId: Number(formData.get('transaction_type_id')),
    description: formData.get('description'),
    amount: Number(formData.get('amount')),
  };
  const validation = transactionDataValidation.safeParse(expenseData);
  if (validation.error) {
    return { ...initState, errors: formatZodErrors(validation.error.issues) };
  }

  const budgetUid = formData.get('budget_uid');
  console.log({ budgetUid });
  const response = await postResource(
    `${process.env.API}/budgets/${budgetUid}/expenses`,
    JSON.stringify({ expense: toSnakeCaseObject(expenseData) })
  );
  const json = await response.json();
  if (response.ok && json.status === 'SUCCESS_CREATED') {
    revalidatePath(`${MAIN_ROUTES.BUDGETS}/${budgetUid}`);
    return { expense: json.data.expense, errors: null };
  }

  return { ...initState, errors: [] };
}
