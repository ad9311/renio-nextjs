import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import SubmitFormButton from '@/components/client/SubmitFormButton';
import { MAIN_ROUTES } from '@/routes';
import { deleteIncomeAction } from '@/server-actions/transaction/income';
import { useModalStore } from '@/stores/modal';
import { FullBudget } from '@/types/budget';
import { Income } from '@/types/transaction';

const initState = {
  income: null,
  errors: null,
};

export default function DeleteIncomeForm({
  budget,
  income,
}: {
  budget: FullBudget;
  income: Income;
}) {
  const { clearStore } = useModalStore(state => ({ clearStore: state.clearStore }));
  const [formState, formAction] = useFormState(deleteIncomeAction, initState);
  const router = useRouter();

  useEffect(() => {
    if (formState.income) {
      router.push(`${MAIN_ROUTES.BUDGETS}/${budget.uid}`);
      clearStore();
    }
  }, [formState]);

  return (
    <form action={formAction}>
      <input type="hidden" name="budget_uid" value={budget.uid} />
      <input type="hidden" name="income_id" value={income.id} />
      <SubmitFormButton pendingChildren="Deleting...">Delete</SubmitFormButton>
    </form>
  );
}
