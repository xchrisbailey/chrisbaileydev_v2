import Head from 'next/head';
import { NextSeo } from 'next-seo';
import hydrate from 'next-mdx-remote/hydrate';

import Nav from '../../components/nav';
import { getFileBySlug, getFiles } from '../../lib/mdx';
import MDXComponents from '../../components/MDXComponents';

const PostTemplate = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, { components: MDXComponents });
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.excerpt}
        canonical={`https://chrisbailey.dev/posts/${frontMatter.slug}`}
      />
      <Head>
        <title>chris bailey (.) dev{frontMatter.title}</title>
      </Head>
      <Nav />
      <article className="prose dark:prose-dark prose-purple lg:prose-xl m-2 mt-8 md:m-0 md:mx-auto md:mt-8">
        <h1>{frontMatter.title}</h1>
        {content}
      </article>
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('posts', params.slug);
  return { props: post };
}

export async function getStaticPaths() {
  const posts = await getFiles('posts');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export default PostTemplate;
