import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

const mons = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RMC - Resident Resources',
  description: 'Brought to you by Rocky Mountain Communities',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`h-full ${mons.className} `}>
        <div className='relative z-1 text-[#1C1C1C] flex flex-col justify-between w-full py-5 px-5 md:px-40 space-y-20'>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
