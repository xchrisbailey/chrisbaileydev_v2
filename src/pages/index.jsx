import Head from 'next/head';
import { NextSeo } from 'next-seo';
import  Link  from 'next/link'

import Nav from '../components/nav';
import PostListItem from '../components/PostListItem';
import { getAllFilesFrontMatter } from '../lib/mdx';

export default function IndexPage({ posts }) {
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
        <section className="mb-5 md:m-0 md:mb-14">
          <div className="mb-2 prose dark:prose-dark prose-purple lg:prose-xl">
            <h1>chris bailey</h1>
          </div>
          <p className="text-xl">
            Full stack <strong>web developer</strong> from Michigan with a foundness for
            <br /> <strong>goldendoodles</strong>, <strong>border collies</strong> and <em>tennis</em>.
          </p>
        </section>
        <section className="md:m-0">
          <div className="mb-2 prose dark:prose-dark prose-purple lg:prose-xl">
            <h1>Writes..</h1>
          </div>
          <div>
            {posts.map((post, i) => (
              <PostListItem key={i} item={post} />
            ))}
            <Link href="write"><a className="text-purple-500 underline">more...</a></Link> 
          </div>

        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getAllFilesFrontMatter('posts'))
    .sort((a, b) => (a.date > b.date ? '-1' : '1'))
    .filter((p) => p.published != false)
    .slice(0, 7);

  return {
    props: { posts },
  };
}
