import Head from 'next/head';
import { getAllPosts } from '../lib/posts';
import Nav from '../components/nav';
import { ListItem } from '../components/ListItem';
import { MakeCard } from '../components/MakeCard';

export default function IndexPage({ allPosts }) {
  return (
    <>
      <Head>
        <title>chris bailey . dev</title>
      </Head>
      <Nav />
      <div className="container mx-auto mt-6 ">
        <section className="mb-10">
          <div className="prose dark:prose-dark prose-purple lg:prose-xl">
            <h1>makes</h1>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <MakeCard
              image="/make/tcloc_ss.png"
              title="Toni and Chris Location Notebook"
              desc="notebook of possible locations for residency.  built using nextjs, typescript, vercel and sanity.io"
              date="September 20, 2020"
              github="https://github.com/xchrisbailey/tcloc"
              view="https://tcloc.vercel.app/"
            />
            <MakeCard
              image="/make/tcloc_ss.png"
              title="Toni and Chris Location Notebook"
              desc="notebook of possible locations for residency.  built using nextjs, typescript, vercel and sanity.io"
              date="September 20, 2020"
              github="https://github.com/xchrisbailey/tcloc"
              view="https://tcloc.vercel.app/"
            />
          </div>
        </section>
        <div>
          <div className="prose dark:prose-dark prose-purple lg:prose-xl">
            <h1>Writes</h1>
          </div>
          {allPosts.map((post, i) => (
            <ListItem key={i} item={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug']).slice(0, 9);

  return {
    props: { allPosts },
  };
}
