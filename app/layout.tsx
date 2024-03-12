import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const mons = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aroyo Village Resident Resources',
  description: 'Brought to you by Rocky Mountain Communities',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${mons.className}`}>{children}</body>
    </html>
  );
}
