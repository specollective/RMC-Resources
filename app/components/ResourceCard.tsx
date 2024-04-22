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
      <div className='grid grid-cols-2 gap-x-10 leading-loose p-1'>
        <p>{resource.description}</p>
        <div className=''>
          <p id='location' className='font-bold'>
            Location: {resource.location}
          </p>
          <p id='phone' className='mb-4'>
            <span className='font-bold'>Phone: </span>
            {resource.phone}
          </p>
          <button
            id='link'
            className='bg-[#FFB47F] hover:bg-[#FF9244] text-center font-medium py-2 px-4 rounded'
          >
            {resource.link}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ResourceCard;
