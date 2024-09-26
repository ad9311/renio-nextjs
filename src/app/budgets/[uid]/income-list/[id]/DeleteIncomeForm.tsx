'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import SubmitFormButton from '@/components/client/SubmitFormButton';
import { MAIN_ROUTES } from '@/routes';
import { deleteIncomeAction } from '@/server-actions/transaction/income';
import { useBudgetStore } from '@/stores/budget';
import { useModalStore } from '@/stores/modal';

const initState = {
  income: null,
  errors: null,
};

export default function DeleteIncomeForm() {
  const { budget, income } = useBudgetStore(state => ({
    budget: state.budget,
    income: state.income,
  }));
  const { clearStore } = useModalStore(state => ({ clearStore: state.clearStore }));
  const [formState, formAction] = useFormState(deleteIncomeAction, initState);
  const router = useRouter();

  useEffect(() => {
    if (formState.income && budget) {
      router.push(`${MAIN_ROUTES.BUDGETS}/${budget.uid}`);
      clearStore();
    }
  }, [formState]);

  if (!budget || !income) {
    return null;
  }

  return (
    <form action={formAction}>
      <input type="hidden" name="budget_uid" value={budget.uid} />
      <input type="hidden" name="income_id" value={income.id} />
      <SubmitFormButton pendingChildren="Deleting...">Delete</SubmitFormButton>
    </form>
  );
}
