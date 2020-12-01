import Image from 'next/image';

export const MakeCard = ({ image, title, desc, date, github, view }) => {
  return (
    <div className="flex flex-wrap mt-2">
      <div className="w-full">
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-md">
          <div className="h-56 overflow-hidden p-2">
            <Image
              src={image}
              alt={title}
              objectFit
              width="400"
              height="400"
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <div className="px-4 py-4 md:px-10">
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="py-4">{desc}</p>
            <div className="flex justify-between flex-wrap pt-8">
              <div className="w-full md:w-1/3 text-sm font-medium ">{date}</div>
              <div className="2/3">
                <div className="flex items-center justify-end text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 mr-2 "
                  >
                    <a href={github}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </a>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 mr-2"
                  >
                    <a href={view}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </a>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
