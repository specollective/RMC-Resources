import Image from 'next/image';
import BG from '@/public/RMC-bg.png';
import Navbar from '@/app/components/Navbar';
import InfoSection from '@/app/components/InfoSection';
import Resources from '@/app/components/Resources';

export default function Home() {
  return (
    <main className='relative min-h-fill w-full'>
      <Image
        src={BG}
        alt='background-image'
        fill
        priority
        className='absolute w-full h-full object-cover -z-10'
      />
      <div className='relative z-1 text-[#1C1C1C] flex flex-col justify-between w-full py-10 px-5 md:px-40 space-y-4'>
        <Navbar />
        <InfoSection />
        <h5>Resources</h5>
        <Resources />
      </div>
    </main>
  );
}
