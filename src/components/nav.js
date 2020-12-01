import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex px-5 py-5 font-semibold bg-gray-100 dark:bg-gray-900 shadow-md justify-between items-center">
      <Link href="/">
        <a className="text-xl uppercase text-purple-600 dark:text-purple-200 dark:hover:text-purple-400">
          chris bailey . dev
        </a>
      </Link>
      <div className="flex space-x-4">
        <div className="flex p-0 m-0 items-center justify-start px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4 mr-1 dark:text-white text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <Link href="/write">
            <a className="rounded-md text-sm font-medium text-black dark:text-white hover:underline">
              WRITE
            </a>
          </Link>
        </div>
        <div className="flex p-0 m-0 items-center justify-start px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4 mr-1 dark:text-white text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>

          <a
            href="#"
            className=" rounded-md text-sm font-medium text-black dark:text-white hover:underline"
          >
            MAKE
          </a>
        </div>
        <div className="flex p-0 m-0 items-center justify-start px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4 mr-1 dark:text-white text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <a
            href="#"
            className=" rounded-md text-sm font-medium uppercase text-black dark:text-white hover:underline"
          >
            LIFE
          </a>
        </div>
      </div>
    </nav>
  );
}
