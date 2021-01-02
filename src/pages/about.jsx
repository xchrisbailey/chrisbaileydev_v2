import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Nav from '../components/nav';

const About = () => {
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
      <section className="md:container md:mx-auto mt-6 mx-2 ">
        <article className="prose dark:prose-dark prose-purple lg:prose-xl m-2 mt-8 md:m-0 md:mx-auto md:mt-8">
          <h1 className="uppercase">whoami</h1>
          <p>
            A thirty something late in life hopeful career switcher from the
            midwest (mitten state). Creating websites, programming scripts to
            simplify my life, and general computer hackery as long as I can
            remember (at my age sometimes that's not very long). Spent the most
            recent years focused on node.js and react, though theres been a
            sprinkle of java (ick) and now some PHP (haven't seen this since I
            was just a bright eyed highschool student).
          </p>
        </article>
      </section>
    </>
  );
};

export default About;
