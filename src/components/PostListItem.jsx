import Link from 'next/link';
import dayjs from 'dayjs';

const PostListItem = ({ item }) => {
  return (
    <article className="flex flex-col justify-between mb-10">
      <div className="flex flex-col items-baseline justify-between">
        <h2>
          <Link href={`/posts/${item.slug}`}>
            <a className="text-2xl font-bold purple-link">{item.title}</a>
          </Link>
        </h2>
        <h3 className="text-sm text-gray-900 dark:text-gray-300">
          {dayjs(item.date).format('MMMM DD, YYYY')}{' '}
          <span className="px-3">☕️</span>
          {item.readingTime.text}
        </h3>
      </div>
      <p className="text-lg text-black dark:text-white">{item.excerpt}</p>
    </article>
  );
};

export default PostListItem;
