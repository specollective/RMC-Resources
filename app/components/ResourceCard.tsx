import Card from '@/app/components/Card';

interface ResourceCardProps {
  resource: {
    title: string;
    link: string;
    description: string;
    phone: string;
    location: string;
  };
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className='p-5 text-black space-y-3'>
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
            {resource.link}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ResourceCard;
