import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import Loading from './loading';
const inter = Inter({ subsets: ['latin'] });

import './globals.scss';

export const metadata: Metadata = {
  title: 'Wingie Frontend Case',
  description: 'WE blend technology and travel, to shape the future.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <main className='application'>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
