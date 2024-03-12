import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 shadow-md'>
      <div className='flex items-center'>
        {/* Logo Image: adjust the src and size as needed */}
        <Image src='/logo.png' alt='Logo' width={50} height={50} />
        <span className='ml-2 text-lg font-semibold'>Your Logo Text</span>
      </div>
      <div>
        {/* Language Links */}
        <Link href='#' locale='en'>
          <a className='mr-2'>English</a>
        </Link>
        |
        <Link href='#' locale='es'>
          <a className='ml-2'>Spanish</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
