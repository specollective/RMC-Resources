import { formatDate } from '@/app/utils/date';

const stylesDate = {
  container: 'h-full grid grid-cols-2 grid-rows-2 items-center',
  day: 'col-span-1 row-span-2 justify-self-center text-7xl font-bold text-[#EB9A60]',
  month: 'col-span-1 row-span-1 text-3xl font-bold',
  dayOfWeek: 'text-2xl row-span-2',
};

const CurrentDate = () => {
  const { day, month, dayOfWeek } = formatDate();

  return (
    <div className={stylesDate.container}>
      <div className={stylesDate.day}>{day}</div>
      <h1 className={stylesDate.month}>{month}</h1>
      <div className={stylesDate.dayOfWeek}>{dayOfWeek}</div>
    </div>
  );
};

export default CurrentDate;
