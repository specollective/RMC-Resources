import { redirect } from 'next/navigation';
import { getResources } from '@/app/utils/getResources';
import Link from 'next/link';

export async function generateStaticParams() {
  const categories = await getResources();

  const paths = categories
    .filter((category) => category.slug !== undefined)
    .map((category) => ({ slug: category.slug }));
  return paths;
}

export default async function CategoriesPage({
  params,
}: {
  params: { slug: string };
}) {
  const categories = await getResources();
  const category = categories.find((category) => category.slug === params.slug);

  if (!category) {
    redirect('/');
  }
  // console.log(category.resources)

  return (
    <main className='text-white space-y-5'>
      <Link href='/' className='hover:underline'>
        Back to Resources
      </Link>
      <h1 className='text-2xl font-bold'>{category.name}</h1>
      <div>
        {category.resources.map((resource) => (
          <li key={resource.name}>{resource.name}</li>
        ))}
      </div>
    </main>
  );
}
