import Image from 'next/image';
import BG from '@/public/RMC-bg.png';
import Navbar from '@/app/components/Navbar';
import Card from '@/app/components/Card';
import InfoSection from '@/app/components/InfoSection';

export default function Home() {
  return (
    <main>
      <Image
        src={BG}
        alt='background-image'
        fill
        priority
        className='min-h-full -z-10 object-cover'
      />
      <Navbar />
      <div className='relative z-1  text-[#1C1C1C] flex flex-col items-center justify-between w-full py-10'>
        <InfoSection />
        <Card>
          <h2 className='font-bold text-xl mb-2'>Card Title 1</h2>
          <p>
            This is the content of card 1. You can place any information here.
          </p>
        </Card>
      </div>
    </main>
  );
}
