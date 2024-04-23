import Card from '@/app/components/Card';

interface ResourceCardProps {
  resource: {
    title: string;
    description: string;
    phone: string;
    location: string;
    button: {
      link: string;
      text: string;
    };
  };
}

const styles = {
  card: 'p-5 text-black space-y-3',
  linkTitle: 'font-bold hover:underline',
  grid: 'grid grid-cols-2 gap-x-10 leading-loose p-1',
  boldText: 'font-bold',
  phoneMargin: 'mb-4',
  button:
    'bg-[#FFB47F] hover:bg-[#FF9244] text-center font-medium py-2 px-4 rounded',
};

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className={styles.card}>
      <a
        href={resource.button.link}
        className={styles.linkTitle}
        target='_blank'
        rel='noopener noreferrer'
      >
        {resource.title}
      </a>
      <div className={styles.grid}>
        <p>{resource.description}</p>
        <div>
          <p id='location' className={styles.boldText}>
            Location: {resource.location}
          </p>
          <p id='phone' className={`${styles.boldText} ${styles.phoneMargin}`}>
            Phone: {resource.phone}
          </p>
          <a
            id='link'
            href={resource.button.link}
            target='_blank'
            className={styles.button}
          >
            {resource.button.text}
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ResourceCard;
