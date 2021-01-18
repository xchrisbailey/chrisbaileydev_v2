import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Nav from '../components/nav';
import PostListItem from '../components/PostListItem';
import MakeCard from '../components/MakeCard';
import { getAllFilesFrontMatter } from '../lib/mdx';

export default function IndexPage({ projects, posts }) {
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
            {projects.map(project => (
              <MakeCard
                key={project.title}
                image={project.image}
                title={project.title}
                desc={project.description}
                date={project.date}
                github={project.github}
                view={project.url}
              />
            ))}
          </div>
        </section>
        <section className="m-2 md:m-0">
          <div className="prose dark:prose-dark prose-purple lg:prose-xl">
            <h1>Writes...</h1>
          </div>
          <div>{posts.map((post, i) => <PostListItem key={i} item={post} />)}</div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = (await getAllFilesFrontMatter('projects'))
    .sort((a, b) => (a.date > b.date ? '-1' : '1'))
    .slice(0, 2);

  const posts = (await getAllFilesFrontMatter('posts'))
    .sort((a, b) => (a.date > b.date ? '-1' : '1'))
    .filter(p => p.published != false)
    .slice(0, 5);

  return {
    props: { posts, projects },
  };
}
