'use client';

import { useFormatCurrency } from '@/helpers/numbers/client';

export default function Amount({ value }: { value: number }) {
  const formatCurrency = useFormatCurrency();

  return <>{formatCurrency(value)}</>;
}
