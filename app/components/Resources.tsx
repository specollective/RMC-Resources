import Card from '@/app/components/Card';
import { resourceCategories } from '@/constants/resourcesCategories';
import Link from 'next/link';

type TopLinkType = {
  name: string;
  link: string;
};

type CategoryType = {
  id: string;
  name: string;
  topLinks: TopLinkType[];
};

type CategoriesCardProps = {
  category: CategoryType;
};

const CategoriesCard = ({ category }: CategoriesCardProps) => {
  const { id, name, topLinks } = category;

  return (
    <Card className='flex flex-col w-fit p-8'>
      <h2 className='font-bold text-xl mb-4'> {name} </h2>
      {topLinks.map((link: TopLinkType) => (
        <a
          key={`${name}-${link.name}`}
          href={link.link}
          target='_blank'
          className='p-2 hover:underline'
        >
          {' '}
          {link.name}{' '}
        </a>
      ))}
      <Link
        href={`/${id}`}
        className='bg-[#FFB47F] rounded-lg p-2.5 hover:underline'
      >
        {' '}
        View More Resources{' '}
      </Link>
    </Card>
  );
};

export default function Resources() {
  return (
    <section id='Resources' className='space-y-6'>
      <h1 className='text-white'> RESOURCES </h1>
      {resourceCategories.map((category) => (
        <div key={category.id}>
          <CategoriesCard category={category} />
        </div>
      ))}
    </section>
  );
}
