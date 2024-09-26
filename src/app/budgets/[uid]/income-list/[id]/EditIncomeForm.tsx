'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import FormErrorsList from '@/components/client/FormErrorsList';
import { editIncomeAction } from '@/server-actions/transaction/income';
import { useBudgetStore } from '@/stores/budget';
import { useModalStore } from '@/stores/modal';
import { IncomeFormState } from '@/types/transaction';

import IncomeForm from '../IncomeForm';

const initState: IncomeFormState = {
  income: null,
  errors: null,
};

export default function EditIncomeForm() {
  const { budget, income, setIncome } = useBudgetStore(state => ({
    budget: state.budget,
    income: state.income,
    setIncome: state.setIncome,
  }));
  const { clearStore } = useModalStore(state => ({ clearStore: state.clearStore }));
  const [formState, formAction] = useFormState(editIncomeAction, initState);

  useEffect(() => {
    if (formState.income) {
      clearStore();
      setIncome(formState.income);
    }
  }, [formState]);

  if (!budget || !income) {
    return null;
  }

  return (
    <>
      <FormErrorsList errors={formState.errors} />
      <IncomeForm id="income_form" budget={budget} income={income} formAction={formAction} />
    </>
  );
}
