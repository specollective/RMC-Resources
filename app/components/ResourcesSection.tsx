import Card from './Card';
import { formatTitleToId } from '@/app/utils/wordFormat';
export interface Resource {
  title: string;
  link: string;
  description: string;
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
            <Card className=' p-5 text-black space-y-3'>
              <a
                href={resource.link}
                className='font-bold'
                target='_blank'
                rel='noopener noreferrer'
              >
                {resource.title}
              </a>
              <p>{resource.description}</p>
              <button className='hover:underline'> {resource.link} </button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
