import { formatTitleToId } from '@/app/utils/wordFormat';
import ResourceCard from '@/app/components/ResourceCard';
export interface Resource {
  title: string;
  link: string;
  description: string;
  phone: string;
  location: string;
}

export interface ResourcesSectionProps {
  title: string;
  resources: Resource[];
}

export default function ResourcesSection({
  title,
  resources,
}: ResourcesSectionProps) {
  return (
    <div>
      <h2 id={title} className='font-bold text-xl my-4'>
        {title}
      </h2>
      <div>
        {resources.map((resource) => (
          <div
            id={formatTitleToId(resource.title)}
            key={resource.title}
            className='my-8'
          >
            <ResourceCard resource={resource} />
          </div>
        ))}
      </div>
    </div>
  );
}
