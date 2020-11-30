import Head from 'next/head';

import { getAllPosts, getPostBySlug } from '../../lib/posts';
import markdownToHtml from '../../lib/markdown';

import Nav from '../../components/nav';

const PostTemplate = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
        />
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
