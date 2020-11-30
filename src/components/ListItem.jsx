import Link from 'next/link';
import dayjs from 'dayjs';

export const ListItem = ({ item }) => {
  return (
    <div className="my-1 p-3 rounded-sm bg-gray-50 hover:bg-gray-100 flex justify-between">
      <Link href={`/posts/${item.slug}`}>
        <a className="text-purple-700 hover:text-purple-900 hover:underline">
          {item.title}
        </a>
      </Link>
      <p>{dayjs(item.date).format('DD/MM/YYYY')}</p>
    </div>
  );
};
