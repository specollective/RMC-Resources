import Image from 'next/image';

import { FeatureHighlightContent } from '@/app/constants/infoSection';

const styles = {
  section: 'flex flex-row p-4 gap-4 bg-[#F1F1F1] rounded',
  imageContainer: 'basis-2/3',
  contentContainer: 'basis-1/3 py-4',
  title: 'text-xl font-bold py-4',
  description: '',
};

export default function FeatureHighlight() {
  return (
    <section className={styles.section}>
      <Image
        src={FeatureHighlightContent.imagePath}
        alt={FeatureHighlightContent.imageAlt}
        width={281}
        height={187}
        className={styles.imageContainer}
      />
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{FeatureHighlightContent.featureTitle}</h2>
        <p className={styles.description}>
          {FeatureHighlightContent.description}
        </p>
      </div>
    </section>
  );
}
