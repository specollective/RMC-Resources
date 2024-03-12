import Image from 'next/image';
import BG from '@/public/RMC-bg.png';

export default function Home() {
  return (
    <main>
      <Image
        src={BG}
        alt='background-image'
        objectFit='cover'
        fill
        priority
        className='min-h-full -z-10 object-cover'
      />
      <div className='bg-[#FEFFFF] relative z-1 text-red-500 flex flex-col items-center justify-between w-full'>
        <div className=''>
          <h2 className='font-bold text-xl mb-2'>Card Title 1</h2>
          <p>
            This is the content of card 1. You can place any information here.
          </p>
        </div>
        <div className=''>
          <h2 className='font-bold text-xl mb-2'>Card Title 2</h2>
          <p>
            This is the content of card 2. You can place any information here.
          </p>
        </div>
        <div className=''>
          <h2 className='font-bold text-xl mb-2'>Card Title 3</h2>
          <p>
            This is the content of card 3. You can place any information here.
          </p>
        </div>
      </div>
    </main>
  );
}
