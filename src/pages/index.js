import matter from 'gray-matter';
import Nav from '../components/nav';
import Link from 'next/link';

export default function IndexPage(props) {
  let posts = props.posts.map((post) => matter(post));
  posts = posts.map((post) => post.data);

  return (
    <div>
      <Nav />
      <div className="py-20">
        {posts.map((post, i) => (
          <Link href={`/posts/${post.slug}`} key={i}>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const fs = require('fs');
  const files = fs.readdirSync(`${process.cwd()}/content/posts`, 'utf-8');
  const posts = files.filter((fn) => fn.endsWith('.md'));

  const data = posts.map((post) => {
    const path = `${process.cwd()}/content/posts/${post}`;
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8',
    });

    return rawContent;
  });

  return {
    props: {
      posts: data,
    },
  };
}
