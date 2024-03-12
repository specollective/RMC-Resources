import Image from 'next/image';
import RMCLogo from '@/public/RMCLogo.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='relative bg-[#EB9A60] text-black px-5 md:px-40 py-8'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <Image src={RMCLogo} alt='Footer Logo' width={286} height={58} />
        </div>
        <div>&copy; Rocky Mountains Communities {year}</div>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-1/2 flex flex-row'>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/RMCPattern.svg')] bg-repeat">
          {/* This div uses a background image*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
