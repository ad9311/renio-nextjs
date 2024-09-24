'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import FormErrorsList from '@/components/client/FormErrorsList';
import { resetForm } from '@/helpers/forms';
import { createIncomeAction } from '@/server-actions/transaction/income';
import { useBudgetStore } from '@/stores/budget';
import { IncomeFormState } from '@/types/transaction';

import IncomeForm from './IncomeForm';

const initState: IncomeFormState = {
  income: null,
  errors: null,
};

export default function NewIncomeForm() {
  const { budget } = useBudgetStore(state => ({ budget: state.budget }));
  const [formState, formAction] = useFormState(createIncomeAction, initState);

  useEffect(() => {
    if (formState.income) {
      resetForm('income_form');
    }
  }, [formState]);

  if (!budget) {
    return null;
  }

  return (
    <>
      <FormErrorsList errors={formState.errors} />
      <IncomeForm id="income_form" budget={budget} formAction={formAction} />
    </>
  );
}
