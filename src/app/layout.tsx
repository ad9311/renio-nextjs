import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import './globals.css';
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

  function SessionView() {
    return (
      <>
        <SaveUserStore />
        <div className="h-full grid grid-cols-1 xl:grid-cols-12 xl:gap-11">
          <div className="h-full col-span-1 xl:col-span-3 2xl:col-span-2">
            <div className="xl:hidden">
              <Topbar />
            </div>
            <div className="h-full hidden xl:block">
              <Sidebar />
            </div>
          </div>
          <main className="col-span-1 xl:col-span-9 2xl:col-span-10">{children}</main>
        </div>
      </>
    );
  }

  function AuthView() {
    return <main>{children}</main>;
  }

  return (
    <html lang="en">
      <body className={inter.className}>{session ? <SessionView /> : <AuthView />}</body>
    </html>
  );
}
