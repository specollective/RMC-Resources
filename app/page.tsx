import CommunitiesGrid from '@/app/components/CommunitiesGrid';
import ContactResidentServices from '@/app/components/ContactResidentServices';

export default function Home() {
  return (
    <main className='space-y-6'>
      <h1 className="font-bold text-[#FFB47F] text-xl tracking-wide leading-9">WELCOME TO RESIDENTS RESOURCE CENTER</h1>
      <CommunitiesGrid />
      <ContactResidentServices />
    </main>
  );
}
