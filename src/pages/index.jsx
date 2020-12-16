import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Nav from '../components/nav';
import PostListItem from '../components/PostListItem';
import MakeCard from '../components/MakeCard';
import { getAllFilesFrontMatter } from '../lib/mdx';

export default function IndexPage({ allPosts, posts }) {
  return (
    <>
      <NextSeo
        title="chrisbailey.dev"
        description="personal blog and portfolio site for web and software development"
      />
      <Head>
        <title>chris bailey . dev</title>
      </Head>
      <Nav />
      <div className="container mx-auto mt-6 ">
        <section className="m-2 mb-5 md:m-0 md:mb-14">
          <div className="prose dark:prose-dark prose-purple lg:prose-xl mb-8">
            <h1>makes...</h1>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <MakeCard
              image="/make/tcloc.png"
              title="Toni and Chris Location Notebook"
              desc="notebook of possible locations for residency.  built using nextjs, typescript, vercel and sanity.io"
              date="September 20, 2020"
              github="https://github.com/xchrisbailey/tcloc"
              view="https://tcloc.vercel.app/"
            />
            <MakeCard
              image="/make/chrisbaileydevv2.png"
              title="chrisbailey.dev v2"
              desc="personal blog and portfolio, built with nextjs and tailwindcss"
              date="December 1, 2020"
              github="https://github.com/xchrisbailey/chrisbaileydev_v2"
              view="https://chrisbailey.dev"
            />
          </div>
        </section>
        <section className="m-2 md:m-0">
          <div className="prose dark:prose-dark prose-purple lg:prose-xl">
            <h1>Writes...</h1>
          </div>
          <div>
            {posts.map((post, i) => (
              <PostListItem key={i} item={post} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getAllFilesFrontMatter('posts'))
    .sort((a, b) => (a.date > b.date ? '-1' : '1'))
    .slice(0, 5);

  return {
    props: { posts },
  };
}
