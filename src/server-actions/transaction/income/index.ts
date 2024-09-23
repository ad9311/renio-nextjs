'use server';

import { formatZodErrors } from '@/helpers/forms';
import { IncomeFormState } from '@/types/transaction';
import { incomeDataValidation } from '@/validations/income';

export async function createIncomeAction(
  initState: IncomeFormState,
  formData: FormData
): Promise<IncomeFormState> {
  const incomeData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const validation = incomeDataValidation.safeParse(incomeData);
  if (validation.error) {
    return { ...initState, errors: formatZodErrors(validation.error.issues) };
  }

  return initState;
}
