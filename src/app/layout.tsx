import type { Metadata } from 'next';

import './globals.css';
import SaveUserStore from '@/components/client/SaveUserStore';
import Sidebar from '@/components/client/Sidebar';
import { getSession } from '@/helpers/auth/server';

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

  return (
    <html lang="en">
      <body>
        {session && (
          <>
            <SaveUserStore />
            <Sidebar />
          </>
        )}
        <main>{children}</main>
      </body>
    </html>
  );
}
