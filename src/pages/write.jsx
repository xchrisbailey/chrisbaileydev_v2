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
      <div className="container mx-auto mt-6 ">
        <div className="prose dark:prose-dark prose-purple lg:prose-xl m-2 md:m-0">
          <h1>writes</h1>
        </div>
        {posts.map((post, i) => (
          <PostListItem key={i} item={post} />
        ))}
      </div>
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
