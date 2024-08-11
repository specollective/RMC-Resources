'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import RMCLogoWhite from '@/public/RMCLogoWhite.png';

const styles = {
  container: 'flex justify-between items-center text-white text-lg ',
  logo: 'flex flex-col gap-2 justify-self-center md:items-center font-semibold hover:underline ',
  languageContainer: 'ml-[15px] md:block',
};

const Navbar = () => {
  const getInitialScreenWidth = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(min-width: 768px)').matches ? false : true;
    }
    return true;
  };

  const [abbreviateLang, setAbbreviateLang] = useState(getInitialScreenWidth);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleAbbreviateLang = () => {
      setAbbreviateLang(!mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleAbbreviateLang);

    return () => {
      mediaQuery.removeEventListener('change', handleAbbreviateLang);
    };
  }, []);

  return (
    <nav className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src={RMCLogoWhite} alt='RMCLogoWhite' width={300} height={80} />
      </Link>
      <div className={styles.languageContainer}>
        <Link className='mr-3' href='#' locale='en'>
          {abbreviateLang ? 'EN' : 'English'}
        </Link>
        |
        <Link className='ml-3' href='#' locale='es'>
          {abbreviateLang ? 'ESP' : 'Spanish'}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
