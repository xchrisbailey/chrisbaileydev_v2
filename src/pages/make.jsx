import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Nav from '../components/nav';
import MakeCard from '../components/MakeCard';

const Make = () => {
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
      <div className="container mx-auto mt-6 ">
        <section className="mb-10">
          <div className="prose dark:prose-dark prose-purple lg:prose-xl">
            <h1>make</h1>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <MakeCard
              image="/make/tcloc.png"
              title="Toni and Chris Location Notebook"
              desc="notebook of possible locations for residency.  built using nextjs, typescript, vercel and sanity.io"
              date="September 20, 2020"
              github="https://github.com/xchrisbailey/tcloc"
              view="https://tcloc.vercel.app/"
            />
            <MakeCard
              image="/make/chrisbaileydevv2.png"
              title="chrisbailey.dev v2"
              desc="personal blog and portfolio, built with nextjs and tailwindcss"
              date="December 1, 2020"
              github="https://github.com/xchrisbailey/chrisbaileydev_v2"
              view="https://chrisbailey.dev"
            />
            <MakeCard
              image="/make/chrisbaileydevv1.png"
              title="chrisbailey.dev v1"
              desc="personal blog and portfolio, built with gatsby and styled components"
              date="August 10, 2020"
              github="https://github.com/xchrisbailey/chrisbailey.dev"
              view="/make/chrisbaileydevv1.png"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Make;
