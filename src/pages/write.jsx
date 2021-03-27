import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { getAllFilesFrontMatter } from '../lib/mdx';
import Nav from '../components/nav';
import PostListItem from '../components/PostListItem';

export const WritePage = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="chrisbailey.dev writings"
        description="collection of posts relating to web and software development"
      />
      <Head>
        <title>chris bailey . dev | writes</title>
      </Head>
      <Nav />
      <section className="container mx-2 md:mx-auto my-6">
        <h1 className="text-5xl font-bold uppercase text-pink-600 dark:text-pink-300 mb-2">
          writes
        </h1>
        {posts.map((post, i) => <PostListItem key={i} item={post} />)}
      </section>
    </>
  );
};

export async function getStaticProps() {
  const posts = (await getAllFilesFrontMatter('posts'))
    .sort((a, b) => (a.date > b.date ? '-1' : '1'))
    .filter((p) => p.published != false);

  return {
    props: { posts }
  };
}

export default WritePage;
