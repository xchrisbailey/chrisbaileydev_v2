import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-5 py-4 font-semibold bg-trueGray-100 shadow  dark:bg-trueGray-900">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-medium text-indigo-600 hover:text-indigo-700 uppercase dark:text-indigo-200 dark:hover:text-indigo-400">
            chris <em>bailey</em> . dev
          </a>
        </Link>

        {/* md+ nav links */}
        <div className="hidden md:flex space-x-4">{navLinks()}</div>

        {/* hamburger menu hidden md+ */}
        <div className="md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* small nav links */}
      <div className={`flex flex-col ${navOpen ? '' : 'hidden'} md:hidden`}>
        {navLinks()}
      </div>
    </nav>
  );
};

const navLinks = () => (
  <>
    <div className="mr-5 flex flex-col md:flex-row">
      <Link href="/write">
        <a className="text-lg font-medium text-black dark:text-indigo-300 dark:hover:text-indigo-400 text-indigo-600 hover:text-indigo-700 tracking-widest">
          WRITE
        </a>
      </Link>
      <div className="hidden md:block text-lg font-medium text-black dark:text-white mx-5">
        &times;
      </div>
      <Link href="/make">
        <a className="text-lg font-medium text-black dark:text-pink-300 dark:hover:text-pink-400  text-pink-600 hover:text-pink-700 tracking-widest">
          MAKE
        </a>
      </Link>
    </div>
  </>
);

export default Nav;
