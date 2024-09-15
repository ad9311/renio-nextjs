import type { Metadata } from 'next';

import './globals.css';
import Sidebar from '@/components/client/Sidebar';

export const metadata: Metadata = {
  title: 'Renio',
  description: 'Renio App',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
