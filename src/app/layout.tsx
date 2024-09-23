import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import ModalContainer from '@/components/client/ModalContainer';
import SaveUserStore from '@/components/client/SaveUserStore';
import Sidebar from '@/components/server/Sidebar';
import Topbar from '@/components/server/Topbar';
import { getSession } from '@/helpers/auth/server';

const inter = Rubik({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: 'Renio',
  description: 'Renio App',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session } = await getSession();
  const locale = await getLocale();
  const messages = await getMessages();

  function SessionView() {
    return (
      <>
        <SaveUserStore />
        <div className="xl:h-full grid grid-cols-1 xl:grid-cols-12 xl:gap-4">
          <div className="h-full col-span-1 xl:col-span-3 2xl:col-span-2">
            <div className="xl:hidden">
              <Topbar />
            </div>
            <div className="h-full hidden xl:block">
              <Sidebar />
            </div>
          </div>
          <main className="py-4 px-2 xl:px-4 col-span-1 xl:col-span-9 2xl:col-span-10">
            <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
          </main>
        </div>
        <ModalContainer />
      </>
    );
  }

  function AuthView() {
    return <main className="py-4 px-2">{children}</main>;
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>{session ? <SessionView /> : <AuthView />}</body>
    </html>
  );
}
