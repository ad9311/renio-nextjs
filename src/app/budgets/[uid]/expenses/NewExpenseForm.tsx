'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import FormErrorsList from '@/components/client/FormErrorsList';
import { resetForm } from '@/helpers/forms';
import { createExpenseAction } from '@/server-actions/transaction/expense';
import { useBudgetStore } from '@/stores/budget';
import { ExpenseFormState } from '@/types/transaction';

import ExpenseForm from './ExpenseForm';

const initState: ExpenseFormState = {
  expense: null,
  errors: null,
};

export default function NewExpenseForm() {
  const { budget } = useBudgetStore(state => ({ budget: state.budget }));
  const [formState, formAction] = useFormState(createExpenseAction, initState);

  useEffect(() => {
    if (formState.expense) {
      resetForm('expense_form');
    }
  }, [formState]);

  if (!budget) {
    return null;
  }

  return (
    <>
      <FormErrorsList errors={formState.errors} />
      <ExpenseForm id="expense_form" budget={budget} formAction={formAction} />
    </>
  );
}
