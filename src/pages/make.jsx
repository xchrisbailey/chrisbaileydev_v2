import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontMatter } from '../lib/mdx';

import Nav from '../components/nav';
import MakeCard from '../components/MakeCard';

const Make = ({ projects }) => {
  return (
    <>
      <NextSeo
        title="chrisbailey.dev projects"
        description="list of notable things i've made, mostly using react and nodejs"
      />
      <Head>
        <title>chris bailey . dev | make</title>
      </Head>
      <Nav />
      <div className="mx-2 mt-6 md:container md:mx-auto ">
        <section className="mb-10">
          <h1 className="mb-4 text-5xl font-bold text-pink-600 uppercase dark:text-pink-300">
            make
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
            {projects.map((project) => (
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
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = (await getAllFilesFrontMatter('projects')).sort((a, b) =>
    a.date > b.date ? '-1' : '1'
  );

  return { props: { projects } };
}

export default Make;
