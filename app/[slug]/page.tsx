import { redirect } from 'next/navigation';
import { getResources } from '@/app/utils/getResources';

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

  return (
    <main>
      <h1>{category.name}</h1>
      <div>
        {category.resources.map((resource) => (
          <li key={resource.name}>{resource.name}</li>
        ))}
      </div>
    </main>
  );
}
