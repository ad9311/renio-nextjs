import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'en-US';

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
