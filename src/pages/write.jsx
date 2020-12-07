import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { getAllPosts } from '../lib/posts';
import Nav from '../components/nav';
import ListItem from '../components/ListItem';

export const WritePage = ({ allPosts }) => {
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
        {allPosts.map((post, i) => (
          <ListItem key={i} item={post} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug']);

  return {
    props: { allPosts },
  };
}

export default WritePage;
