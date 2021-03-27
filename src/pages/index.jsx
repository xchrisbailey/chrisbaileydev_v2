import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function IndexPage() {
  return (
    <>
      <NextSeo
        title="chrisbailey.dev"
        description="personal blog and portfolio site for web and software development"
      />
      <Head>
        <title>chris bailey . dev</title>
      </Head>
      <section className="flex flex-col items-center justify-center h-screen mx-2 md:mx-auto">
        <div className="flex flex-col justify-start">
          <div className="prose dark:prose-dark prose-purple lg:prose-xl">
            <h1>chris bailey</h1>
          </div>
          <p className="text-xl text-black dark:text-white">
            Full stack{' '}
            <strong className="text-yellow-600 dark:text-yellow-300">
              web developer
            </strong>{' '}
            from Michigan with a fondness for
            <br />{' '}
            <strong className="text-pink-600 dark:text-pink-300">
              golden doodles
            </strong>
            ,{' '}
            <strong className="text-indigo-600 dark:text-indigo-300">
              border collies
            </strong>{' '}
            and <em>tennis</em>.
          </p>
          <nav className="flex items-center justify-center mt-10 text-3xl">
            <a
              href="/write"
              className="text-green-600 dark:text-green-300 hover:underline"
            >
              write
            </a>
            <p className="mx-5 text-gray-600 dark:text-gray-300">&times;</p>
            <a
              href="/make"
              className="text-pink-600 dark:text-pink-300 hover:underline"
            >
              make
            </a>
          </nav>
        </div>
      </section>
    </>
  );
}
