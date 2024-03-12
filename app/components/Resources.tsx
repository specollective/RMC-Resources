import Card from './Card';
import { localResources } from '@/app/constants/localResources';
import { careerResources } from '@/app/constants/careerResources';
import { educationResources } from '@/app/constants/educationResources';

export interface Resource {
  title: string;
  link: string;
  description: string;
}

export interface ResourcesSectionProps {
  title: string;
  resources: Resource[];
}

const ResourcesSection = ({ title, resources }: ResourcesSectionProps) => (
  <div>
    <h2 className='font-bold text-xl mb-4'>{title}</h2>
    <ul>
      {resources.map((resource, index) => (
        <li key={index} className='hover:underline mb-2'>
          <a
            href={resource.link}
            className='font-bold'
            target='_blank'
            rel='noopener noreferrer'
          >
            {resource.title}
          </a>
          - {resource.description}
        </li>
      ))}
    </ul>
  </div>
);

export default function Resources() {
  return (
    <Card className='w-full'>
      <div className='p-8 space-y-6'>
        <ResourcesSection title='Local Resources' resources={localResources} />
        <ResourcesSection
          title='Career Resources'
          resources={careerResources}
        />
        <ResourcesSection
          title='Education Resources'
          resources={educationResources}
        />
      </div>
    </Card>
  );
}
