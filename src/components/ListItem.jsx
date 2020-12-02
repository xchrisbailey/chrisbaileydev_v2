import Link from 'next/link';
import dayjs from 'dayjs';

const ListItem = ({ item }) => {
  return (
    <div className="my-1 p-3 rounded-md bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 flex justify-between shadow-sm ease-in-out duration-300">
      <Link href={`/posts/${item.meta.slug}`}>
        <a className="purple-link">{item.meta.title}</a>
      </Link>
      <p className="text-gray-700 dark:text-gray-300">
        {dayjs(item.meta.date).format('MM/DD/YYYY')}
      </p>
    </div>
  );
};

export default ListItem;
