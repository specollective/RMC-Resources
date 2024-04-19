import Card from './Card';
import { formatTitleToId } from '@/app/utils/wordFormat';
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
            <Card className=' p-5 text-black space-y-3'>
              <a
                href={resource.link}
                className='font-bold'
                target='_blank'
                rel='noopener noreferrer'
              >
                {resource.title}
              </a>
              <div className='bg-blue-700'>
                <p>{resource.description}</p>
                <div className='bg-red-500'>
                  <p id='location' className='font-bold'>
                    Location: {resource.location}
                  </p>
                  <p id='phone'>
                    <span className='font-bold'>Phone: </span>
                    {resource.phone}
                  </p>
                  <button id='link' className='hover:underline'>
                    {' '}
                    {resource.link}{' '}
                  </button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
