import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

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
        <div className="flex flex-col justify-start w-full md:w-2/3">
          <h1 className="text-5xl font-bold tracking-tight text-indigo-500 uppercase dark:text-indigo-300">
            chris bailey . dev
          </h1>
          <p className="text-lg text-black dark:text-white">
            Full stack{' '}
            <strong className="text-yellow-600 dark:text-yellow-300">
              web developer
            </strong>{' '}
            focusing on{' '}
            <em className="text-pink-600 dark:text-pink-300">React</em>, and{' '}
            <strong className="text-purple-600 dark:text-purple-300">
              Node
            </strong>
            .{' '}
          </p>
          <p className="text-lg text-black dark:text-white">
            Michigan based with a fondness for{' '}
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
            <Link href="/write">
              <a className="tracking-widest text-purple-600 transition duration-200 ease-in-out transform dark:text-purple-300 hover:-rotate-6">
                write
              </a>
            </Link>
            <p className="mx-5 text-gray-600 dark:text-gray-300">&times;</p>
            <Link href="/make">
              <a className="tracking-widest text-pink-600 transition duration-100 ease-in-out transform dark:text-pink-300 hover:rotate-6">
                make
              </a>
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
