import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { getAllPosts, getPostBySlug } from '../../lib/posts';
import markdownToHtml from '../../lib/markdown';

import Nav from '../../components/nav';

const PostTemplate = ({ post }) => {
  return (
    <>
      <NextSeo title={post.meta.title} />
      <Head>
        <title>chris bailey (.) dev{post.meta.title}</title>
      </Head>
      <Nav />
      <article className="prose dark:prose-dark prose-purple lg:prose-xl mx-auto mt-8">
        <h1>{post.meta.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default PostTemplate;
