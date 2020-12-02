import Link from 'next/link';
import dayjs from 'dayjs';

const ListItem = ({ item }) => {
  return (
    <div className="mx-2 my-1 p-3  flex flex-col justify-between  border-b-2 border-gray-100 dark:border-gray-900">
      <div className="flex items-baseline">
        <Link href={`/posts/${item.meta.slug}`}>
          <a className="purple-link text-xl font-bold mr-4">
            {item.meta.title}
          </a>
        </Link>
        <p className="text-gray-700 dark:text-gray-500 text-sm">
          {dayjs(item.meta.date).format('MM/DD/YYYY')}
        </p>
      </div>
      <p className="text-lg text-black dark:text-white">{item.meta.excerpt}</p>
    </div>
  );
};

export default ListItem;
