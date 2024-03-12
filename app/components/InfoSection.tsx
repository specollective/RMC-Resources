import Card from '@/app/components/Card';
import CurrentDate from '@/app/components/CurrentDate';
import FeatureHighlight from '@/app/components/FeatureContent';
import { scheduleItems } from '@/app/constants/infoSection';

const styles = {
  infoSection: 'flex flex-col md:flex-row justify-between gap-6 w-full p-6',
  featureCard: 'basis-2/3',
  scheduleCard: 'h-full flex flex-col',
  currentDateContainer: 'basis-1/3',
  scheduleList: 'space-y-2 mt-2 text-lg font-semibold',
};

export default function InfoSection() {
  return (
    <div className={styles.infoSection}>
      <Card className={styles.featureCard}>
        <FeatureHighlight />
      </Card>
      <Card>
        <div className={styles.scheduleCard}>
          <div className={styles.currentDateContainer}>
            <CurrentDate />
          </div>
          <ul className={styles.scheduleList}>
            {scheduleItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}
