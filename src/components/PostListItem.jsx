import Link from 'next/link';
import dayjs from 'dayjs';

const PostListItem = ({ item }) => {
  return (
    <div className="my-8 flex flex-col justify-between  border-b-2 border-gray-100 dark:border-gray-900">
      <div className="flex items-baseline">
        <Link href={`/posts/${item.slug}`}>
          <a className="purple-link text-2xl font-bold mr-4">{item.title}</a>
        </Link>
        <p className="text-gray-900 dark:text-gray-300 text-sm px-2">
          {dayjs(item.date).format('MMMM DD, YYYY')}{' '}
          <span className="px-3">☕️</span>
          {item.readingTime.text}
        </p>
      </div>
      <p className="text-lg text-black dark:text-white">{item.excerpt}</p>
    </div>
  );
};

export default PostListItem;
