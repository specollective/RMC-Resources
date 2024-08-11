'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { FeatureHighlightContent } from '@/content/infoSection';

const styles = {
  section: 'flex flex-row gap-4',
  imageContainer: 'md:basis-1/2 h-full hidden md:block object-cover',
  contentContainer:
    'md:flex items-center justify-center md:block md:basis-1/2 p-10',
  title: 'text-xl font-bold md:text-2xl md:text-center',
  description: '',
};

export default function FeatureHighlight() {
  const [title, setTitle] = useState(FeatureHighlightContent.featureTitle);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const updateDescription = () => {
      if (window.innerWidth < 768) {
        setTitle(FeatureHighlightContent.mobileFeatureTitle);
        setDescription(FeatureHighlightContent.mobileDescription);
      } else {
        setTitle(FeatureHighlightContent.featureTitle);
        setDescription('');
      }
    };

    updateDescription();

    window.addEventListener('resize', updateDescription);

    return () => window.removeEventListener('resize', updateDescription);
  }, []);

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
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
