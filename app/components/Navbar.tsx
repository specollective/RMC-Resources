import Image from 'next/image';
import Link from 'next/link';

import RMCLogoWhite from '@/public/RMCLogoWhite.png';

const styles = {
  container: 'flex justify-between items-center text-white text-lg ',
  logo: 'flex flex-col gap-2 justify-self-center md:items-center font-semibold hover:underline ',
  languageContainer: 'hidden md:block',
};

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src={RMCLogoWhite} alt='RMCLogoWhite' width={300} height={80} />
      </Link>
      <div className={styles.languageContainer}>
        <Link className='mr-3' href='#' locale='en'>
          English
        </Link>
        |
        <Link className='ml-3' href='#' locale='es'>
          Spanish
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
