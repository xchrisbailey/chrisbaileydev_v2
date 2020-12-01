import { getAllPosts } from '../lib/posts';
import Nav from '../components/nav';
import ListItem from '../components/ListItem';

export const WritePage = ({ allPosts }) => {
  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-6 ">
        <div className="prose dark:prose-dark prose-purple lg:prose-xl">
          <h1>All Posts</h1>
        </div>
        {allPosts.map((post, i) => (
          <ListItem key={i} item={post} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug']);

  return {
    props: { allPosts },
  };
}

export default WritePage;
