import { useLocale } from 'next-intl';

type Currency = 'COP' | 'USD';

export function useFormatCurrency() {
  const format = useLocale();

  function formatCurrency(amount: number, currency: Currency = 'COP') {
    return amount.toLocaleString(format, {
      currencySign: 'standard',
      style: 'currency',
      currency,
    });
  }

  return formatCurrency;
}
