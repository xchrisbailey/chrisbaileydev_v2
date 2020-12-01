import Link from 'next/link';
import dayjs from 'dayjs';

export const ListItem = ({ item }) => {
  return (
    <div className="my-1 p-3 rounded-sm bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 flex justify-between shadow-sm">
      <Link href={`/posts/${item.meta.slug}`}>
        <a className="text-purple-700 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-500 hover:underline">
          {item.meta.title}
        </a>
      </Link>
      <p className="text-black dark:text-white">
        {dayjs(item.meta.date).format('MM/DD/YYYY')}
      </p>
    </div>
  );
};
