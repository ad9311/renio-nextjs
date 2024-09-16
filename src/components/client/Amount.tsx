'use client';

import { setBalanceColorClass, setExpenseColorClass, setIncomeColorClass } from '@/helpers/numbers';
import { useFormatCurrency } from '@/helpers/numbers/client';

export default function Amount({
  value,
  asIncome,
  asExpense,
}: {
  value: number;
  asIncome?: boolean;
  asExpense?: boolean;
}) {
  const formatCurrency = useFormatCurrency();

  function setColorClass() {
    if (asIncome) {
      return setIncomeColorClass(value);
    }

    if (asExpense) {
      return setExpenseColorClass(value);
    }

    return setBalanceColorClass(value);
  }

  return <span className={`block number ${setColorClass()}`}>{formatCurrency(value)}</span>;
}
