import Link from 'next/link';
import dayjs from 'dayjs';

const PostListItem = ({ item }) => {
  return (
    <div className="flex flex-col justify-between mb-8 border-b-2 border-gray-100  dark:border-gray-900">
      <div className="flex items-baseline">
        <Link href={`/posts/${item.slug}`}>
          <a className="mr-4 text-2xl font-bold purple-link">{item.title}</a>
        </Link>
        <p className="px-2 text-sm text-gray-900 dark:text-gray-300">
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
