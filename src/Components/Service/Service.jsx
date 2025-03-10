import React from 'react';

function Service() {
  return (
    <section id="service">
      <div className="relative w-full h-full">
        <div className="absolute hidden w-full bg-black lg:block h-96" />
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-white lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Affordable</span>
              </span>{' '}
              For Everyone
            </h2>
            <p className="text-base text-white md:text-lg">
              Choose the plan that works for you and start building today!
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 sm:mx-auto sm:grid-cols-1">
            {/* Starter Plan */}
            <div>
              <div className="p-8 bg-white rounded">
                <div className="mb-4 text-center">
                  <p className="text-xl font-medium tracking-wide text-black">
                    Starter Plan
                  </p>
                  <div className="flex items-center justify-center">
                    <p className="mr-2 text-5xl font-semibold text-black lg:text-6xl">
                      $100-150
                    </p>
                    <p className="text-lg text-black">/ month</p>
                  </div>
                </div>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                      </svg>
                    </div>
                    <p className="font-medium text-black">HTML, CSS, Bootstrap</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                      </svg>
                    </div>
                    <p className="font-medium text-black">Beginner Project (1-5 pages)</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                      </svg>
                    </div>
                    <p className="font-medium text-black">Fast Delivery</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                      </svg>
                    </div>
                    <p className="font-medium text-black">Simple Design</p>
                  </li>
                </ul>
                <a href="">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-green-400 hover:bg-blue-800 hover:text-white focus:shadow-outline focus:outline-none"
                  >
                    Get Now
                  </button>
                </a>
              </div>
              <div className="w-11/12 h-2 mx-auto bg-white rounded-b opacity-75" />
              <div className="w-10/12 h-2 mx-auto bg-white rounded-b opacity-50" />
              <div className="w-9/12 h-2 mx-auto bg-white rounded-b opacity-25" />
            </div>

            {/* Pro Plan */}
            <div>
              <div className="p-8 bg-white rounded">
                <div className="mb-4 text-center">
                  <p className="text-xl font-medium tracking-wide text-black">Pro Plan</p>
                  <div className="flex items-center justify-center">
                    <p className="mr-2 text-5xl font-semibold text-black lg:text-6xl">
                      $1000
                    </p>
                    <p className="text-lg text-black">/ month</p>
                  </div>
                </div>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                      </svg>
                    </div>
                    <p className="font-medium text-black">React</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                      </svg>
                    </div>
                    <p className="font-medium text-black">E-commerce Website (Custom Code)</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                      </svg>
                    </div>
                    <p className="font-medium text-black">Fast Delivery</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                      </svg>
                    </div>
                    <p className="font-medium text-black">Page Depending</p>
                  </li>
                </ul>
                <a href="">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-black transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none  bg-green-400 hover:bg-blue-800 hover:text-white"
                  >
                    Get Now
                  </button>
                </a>
              </div>
              <div className="w-11/12 h-2 mx-auto bg-white rounded-b opacity-75" />
              <div className="w-10/12 h-2 mx-auto bg-white rounded-b opacity-50" />
              <div className="w-9/12 h-2 mx-auto bg-white rounded-b opacity-25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
