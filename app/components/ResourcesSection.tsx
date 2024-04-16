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
}
