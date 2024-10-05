'use server';

import { revalidatePath } from 'next/cache';

import { patchResource, postResource } from '@/helpers/fetch';
import { deleteResource } from '@/helpers/fetch';
import { formatZodErrors } from '@/helpers/forms';
import { toSnakeCaseObject } from '@/helpers/strings';
import { MAIN_ROUTES } from '@/routes';
import { IncomeFormState } from '@/types/transaction';
import { transactionDataValidation } from '@/validations/transaction';

export async function createIncomeAction(
  initState: IncomeFormState,
  formData: FormData
): Promise<IncomeFormState> {
  const incomeData = {
    transactionTypeId: Number(formData.get('transaction_type_id')),
    description: formData.get('description'),
    amount: Number(formData.get('amount')),
  };
  const validation = transactionDataValidation.safeParse(incomeData);
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

export async function editIncomeAction(
  initState: IncomeFormState,
  formData: FormData
): Promise<IncomeFormState> {
  const incomeData = {
    transactionTypeId: Number(formData.get('transaction_type_id')),
    description: formData.get('description'),
    amount: Number(formData.get('amount')),
  };
  const validation = transactionDataValidation.safeParse(incomeData);
  if (validation.error) {
    return { ...initState, errors: formatZodErrors(validation.error.issues) };
  }

  const budgetUid = formData.get('budget_uid');
  const incomeId = formData.get('income_id');
  const response = await patchResource(
    `${process.env.API}/budgets/${budgetUid}/incomes/${incomeId}`,
    JSON.stringify({ income: toSnakeCaseObject(incomeData) })
  );
  const json = await response.json();
  if (response.ok && json.status === 'SUCCESS_UPDATED') {
    revalidatePath(`${MAIN_ROUTES.BUDGETS}/${budgetUid}`);
    return { income: json.data.income, errors: null };
  }

  return { ...initState, errors: json.errors };
}

export async function deleteIncomeAction(
  initState: IncomeFormState,
  formData: FormData
): Promise<IncomeFormState> {
  const budgetUid = formData.get('budget_uid');
  const incomeId = formData.get('income_id');
  const response = await deleteResource(
    `${process.env.API}/budgets/${budgetUid}/incomes/${incomeId}`
  );
  if (response.ok) {
    const json = await response.json();
    revalidatePath(`${MAIN_ROUTES.BUDGETS}/${budgetUid}`);
    return { ...initState, income: json.data.income };
  }

  return initState;
}
