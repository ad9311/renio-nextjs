'use client';

import { useEffect } from 'react';

import SubmitFormButton from '@/components/client/SubmitFormButton';
import { getResource } from '@/helpers/fetch';
import { useTransactionStore } from '@/stores/transaction';
import { Budget } from '@/types/budget';
import { Expense } from '@/types/transaction';

type ExpenseFormProps = React.HTMLAttributes<HTMLFormElement> & {
  budget: Budget;
  expense?: Expense;
  formAction: (payload: FormData) => void;
};

export default function ExpenseForm({ budget, expense, formAction, ...props }: ExpenseFormProps) {
  const { transactionTypes, setTransactionTypes } = useTransactionStore(state => ({
    transactionTypes: state.transactionTypes,
    setTransactionTypes: state.setTransactionTypes,
  }));

  async function getTransactionTypes() {
    const response = await getResource(`${process.env.NEXT_PUBLIC_API}/transaction_types`);
    if (response.ok) {
      const json = await response.json();
      setTransactionTypes(json.data.transactionTypes);
    }
  }

  const mappedTransactionTypes = transactionTypes.map(transactionType => (
    <option key={transactionType.uid} value={transactionType.id}>
      {transactionType.name}
    </option>
  ));

  useEffect(() => {
    console.log({ budget });
    if (!transactionTypes.length) {
      getTransactionTypes();
    }
  }, []);

  return (
    <form action={formAction} {...props} className="form">
      <input type="hidden" name="budget_uid" value={budget.uid} />
      {expense && <input type="hidden" name="expense_id" value={expense.id} />}
      <fieldset>
        <label htmlFor="transaction_type_id">Category</label>
        <select
          name="transaction_type_id"
          id="transaction_type_id"
          defaultValue={expense?.transactionType.id}>
          {mappedTransactionTypes}
        </select>
      </fieldset>
      <fieldset>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" defaultValue={expense?.description} />
      </fieldset>
      <fieldset>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          defaultValue={expense?.amount}
          step={0.01}
          min={1}
        />
      </fieldset>
      <fieldset className="actions">
        <SubmitFormButton pendingChildren="Submitting...">Submit</SubmitFormButton>
      </fieldset>
    </form>
  );
}
