import Card from '@/app/components/Card';
import CurrentDate from '@/app/components/CurrentDate';
import FeatureHighlight from '@/app/components/FeatureContent';
import { scheduleItems } from '@/content/infoSection';

const styles = {
  infoSection:
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6',
  featureCard: 'col-span-2 bg-[#FFCCA8] md:bg-[#FFFFFF] px-0 md:px-0',
  scheduleCard: 'flex flex-col p-10',
  currentDateContainer: '',
  scheduleList: 'space-y-2 mt-2 text-lg font-medium overflow-y-auto h-32',
};

export default function InfoSection() {
  return (
    // <>
    <div className={styles.infoSection}>
      <Card className={styles.featureCard}>
        <FeatureHighlight />
      </Card>
      <Card className={styles.scheduleCard}>
        <div className={styles.currentDateContainer}>
          <CurrentDate />
        </div>
        <div className='w-full py-1'>
          <div className='h-0.5 bg-black mx-auto'></div>
        </div>
        <ul className={styles.scheduleList}>
          {scheduleItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Card>
    </div>
    // </>
  );
}
