'use client';

import { useState } from 'react';
import { capitalizeWords, formatTitleToId } from '@/app/utils/wordFormat';

export interface Resource {
  title: string;
  link: string;
  description: string;
}

export interface Category {
  name: string;
  data: Resource[];
}

export interface ResourcesSectionProps {
  resources: Category[];
}

const styles = {
  list: 'py-5 space-y-2',
  listItem: '',
  heading: (isOpen: boolean) =>
    `flex items-center py-2 cursor-pointer select-none ${isOpen ? 'underline underline-offset-4' : ''}`,
  caretSpan: (isOpen: boolean) =>
    `transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`,
  svgIcon: 'w-4 h-4 fill-current',
  nestedList: (isOpen: boolean) =>
    `px-5 py-1.5 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`,
  link: 'hover:text-[#FF9244] transition-colors duration-200',
  listItemInner: 'py-2',
};

export default function ResourcesSidebar({ resources }: ResourcesSectionProps) {
  const [openCategory, setOpenCategory] = useState('');

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? '' : name);
  };

  return (
    <ul className={styles.list}>
      {resources.map((category) => (
        <li key={category.name}>
          <h3
            onClick={() => toggleCategory(category.name)}
            className={styles.heading(openCategory === category.name)}
          >
            <span className={styles.caretSpan(openCategory === category.name)}>
              <svg
                className={styles.svgIcon}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            {capitalizeWords(category.name)}
          </h3>
          <ul className={styles.nestedList(openCategory === category.name)}>
            {category.data.map((resource, index) => (
              <li key={index} className={styles.listItemInner}>
                <a
                  href={`#${formatTitleToId(resource.title)}`}
                  className={styles.link}
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
