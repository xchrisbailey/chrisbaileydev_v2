import Image from 'next/image';

const MakeCard = ({ image, title, desc, date, github, view }) => {
  return (
    <article className="flex flex-col w-full h-full bg-white rounded-md shadow-sm dark:bg-gray-800">
      <section className="flex-grow h-56 p-2 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width="400"
          height="400"
          objectFit="fill"
          layout="responsive"
          className="rounded-t-md"
        />
      </section>
      <section className="flex-grow px-4 py-4 md:px-10">
        <h1 className="text-lg font-bold text-indigo-700 dark:text-indigo-300">
          {title}
        </h1>
        <p className="py-4 text-black dark:text-white">{desc}</p>
      </section>
      <section className="flex flex-wrap justify-between px-4 py-4 pt-8 flex-grow0">
        <time
          dateTime={date}
          className="w-full text-sm font-medium text-black md:w-1/3 dark:text-white"
        >
          {date}
        </time>
        <div className="2/3">
          <div className="flex items-center justify-end text-sm font-medium">
            <div className="flex items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="github-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <a href={github} className="github-link">
                github
              </a>
            </div>
            <div className="flex items-center mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="view-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <a href={view} className="view-link">
                view project
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default MakeCard;
