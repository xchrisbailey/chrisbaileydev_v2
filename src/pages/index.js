import { getAllPosts } from '../lib/posts';
import Nav from '../components/nav';
import { ListItem } from '../components/ListItem';

export default function IndexPage({ allPosts }) {
  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-6">
        {allPosts.map((post, i) => (
          <ListItem key={i} item={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug']);

  return {
    props: { allPosts },
  };
}
