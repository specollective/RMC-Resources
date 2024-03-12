import Image from 'next/image';
import Link from 'next/link';

import ArroyoLogo from '@/public/ArroyoVillageLogo.svg';

const styles = {
  container: 'flex justify-between items-center py-6 text-black text-lg ',
  logo: 'flex flex-col gap-2 items-center font-semibold hover:underline ',
};

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src={ArroyoLogo} alt='Arroyo_Logo' />
        <span>Resident Resources</span>
      </Link>
      <div>
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
