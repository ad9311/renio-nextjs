export function setBalanceColorClass(value: number) {
  if (value === 0) {
    return 'text-gray-600';
  }

  if (value > 0) {
    return 'text-emerald-600';
  }

  return 'text-rose-600';
}

export function setIncomeColorClass(value: number) {
  if (value > 0) {
    return 'text-emerald-600';
  }

  return 'text-gray-600';
}

export function setExpenseColorClass(value: number) {
  if (value > 0) {
    return 'text-rose-600';
  }

  return 'text-gray-600';
}
