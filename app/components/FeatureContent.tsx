import Image from 'next/image';

import { FeatureHighlightContent } from '@/content/infoSection';

const styles = {
  section: 'flex flex-row gap-4',
  imageContainer: 'basis-1/2 h-full',
  contentContainer: 'basis-1/2 p-10',
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
