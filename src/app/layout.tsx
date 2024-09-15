import type { Metadata } from 'next';

import './globals.css';
import SaveUserStore from '@/components/client/SaveUserStore';
import Sidebar from '@/components/server/Sidebar';
import { getSession } from '@/helpers/auth/server';
import Topbar from '@/components/server/Topbar';

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
        <div className="grid grid-cols-1 xl:grid-cols-12">
          <div className="col-span-1 xl:col-span-3 2xl:col-span-2">
            <div className="xl:hidden">
              <Topbar />
            </div>
            <div className="hidden xl:block">
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
      <body>{session ? <SessionView /> : <AuthView />}</body>
    </html>
  );
}
