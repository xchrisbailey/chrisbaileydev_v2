import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { MDXRemote } from 'next-mdx-remote';

import Nav from '../../components/nav';
import { getFileBySlug, getFiles } from '../../lib/mdx';
import MDXComponents from '../../components/MDXComponents';

const PostTemplate = ({ mdxSource, frontMatter }) => {
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
      <article className="m-2 mt-8 prose dark:prose-dark prose-purple lg:prose-xl md:m-0 md:mx-auto md:mt-8">
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...mdxSource} />
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
