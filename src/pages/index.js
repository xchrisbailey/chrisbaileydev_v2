import matter from 'gray-matter';
import Nav from '../components/nav';
import { ListItem } from '../components/ListItem';

export default function IndexPage(props) {
  let posts = props.posts.map((post) => matter(post));
  posts = posts.map((post) => post.data);
  posts.sort(function compare(a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-6">
        {posts.map((post, i) => (
          <ListItem key={i} item={post} />
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
