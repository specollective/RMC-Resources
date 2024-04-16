import { formatTitleToId } from '@/app/utils/wordFormat';

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

export default function ResourcesSidebar({ resources }: ResourcesSectionProps) {
  return (
    <ul>
      {resources.map((category) => (
        <li key={category.name} className='py-2'>
          <h3>{category.name}</h3>
          <ul className='px-5'>
            {category.data.map((resource, index) => (
              <li key={index}>
                <a href={`#${formatTitleToId(resource.title)}`}>
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
