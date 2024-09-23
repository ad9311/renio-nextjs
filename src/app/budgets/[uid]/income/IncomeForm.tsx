'use client';

import SubmitFormButton from '@/components/client/SubmitFormButton';
import { Budget } from '@/types/budget';

type IncomeFormProps = React.HTMLAttributes<HTMLFormElement> & {
  budget: Budget;
  formAction: (payload: FormData) => void;
};

export default function IncomeForm({ budget, formAction, ...props }: IncomeFormProps) {
  return (
    <form action={formAction} {...props} className="form">
      <input type="hidden" name="budgetUid" value={budget.uid} />
      <fieldset>
        <label htmlFor="transaction_type">Category</label>
      </fieldset>
      <fieldset>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" />
      </fieldset>
      <fieldset>
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" />
      </fieldset>
      <fieldset className="actions">
        <SubmitFormButton pendingChildren="Submitting...">Submit</SubmitFormButton>
      </fieldset>
    </form>
  );
}
