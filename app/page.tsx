import InfoSection from '@/app/components/InfoSection';
import Resources from '@/app/components/Resources';
import ContactResidentServices from '@/app/components/ContactResidentServices';

export default function Home() {
  return (
    <main className='space-y-20'>
      <InfoSection />
      <Resources />
      {<ContactResidentServices />}
    </main>
  );
}
