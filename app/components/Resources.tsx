import Card from './Card';

export interface Resource {
  title: string;
  link: string;
  description: string;
}

export interface ResourcesSectionProps {
  title: string;
  // resources: Resource[];
}

const ResourcesSection = ({ title }: ResourcesSectionProps) => (
  <div>
    <h2 className='font-bold text-xl mb-4'>{title}</h2>
    {/* <ul>
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
    </ul> */}
  </div>
);

export default function Resources() {
  return (
    <section id='Resources' className='space-y-6'>
      <h1 className='text-white'>RESOURCES</h1>
      <Card className='w-fit p-8'>
        <ResourcesSection title='Local Resources' />
      </Card>
      <Card className='w-fit p-8'>
        <ResourcesSection title='Career Resources' />
      </Card>
      <Card className='w-fit p-8'>
        <ResourcesSection title='Education Resources' />
      </Card>
    </section>
  );
}
