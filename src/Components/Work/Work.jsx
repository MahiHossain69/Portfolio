import React from 'react'
import PROJECT1 from "../../assets/project1.png"
import PROJECT2 from "../../assets/project2.png"
import PROJECT3 from "../../assets/project3.png"
import PROJECT4 from "../../assets/project4.png"
import PROJECT5 from "../../assets/project5.png"
import PROJECT6 from "../../assets/project6.png"

function Work() {
  return (
    <section className='mt-[100px]'>
      <div className="max-w-container mx-auto">
        <div className="h-[1px] bg-[#fff] border-b border-white border-b-1 mb-[3.2rem] relative">
          <h3 className='bg-black absolute top-[-17px] left-[50%] ml-[-165px] w-[325px] text-center block text-[#ffffff] text-[1.4rem] font-normal p-0'>
            SOME OF MY LATEST WORK
          </h3>
        </div>

        <div className="flex justify-between flex-wrap mt-[100px] gap-[35px]">

          {/* Project 1 */}
          <div className="max-w-sm w-full xs:mx-auto xs:w-[85%] md:h-[350px] mx-auto sm:mx-auto sm:w-[48%] md:w-[30%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://resplendent-salmiakki-d24338.netlify.app/index1">
              <img className="rounded-t-lg w-full" src={PROJECT1} alt="Project 1" />
            </a>
            <div className="p-5">
              <a href="https://resplendent-salmiakki-d24338.netlify.app/index1">
                <h5 className="mb-2 md:text-[15px] text-2xl font-bold  text-gray-900 dark:text-white">Professional task manager tool to grow</h5>
              </a>
              <p className="mb-3 md:text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://resplendent-salmiakki-d24338.netlify.app/index1" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-stone-600 hover:text-stone-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[5px]">
                Preview
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="max-w-sm w-full xs:mx-auto xs:w-[85%] md:h-[350px] mx-auto sm:mx-auto sm:w-[48%] md:w-[30%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://stellular-baklava-6245c9.netlify.app/">
              <img className="rounded-t-lg w-full" src={PROJECT2} alt="Project 2" />
            </a>
            <div className="p-5">
              <a href="https://stellular-baklava-6245c9.netlify.app/">
                <h5 className="mb-2 md:text-[15px] text-2xl font-bold  text-gray-900 dark:text-white">We Are Digital Product Design Agency</h5>
              </a>
              <p className="mb-3 md:text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://stellular-baklava-6245c9.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-stone-600 hover:text-stone-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[5px]">
                Preview
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="max-w-sm w-full xs:mx-auto xs:w-[85%] md:h-[350px] mx-auto sm:mx-auto sm:w-[48%] md:w-[30%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://musical-pixie-270eea.netlify.app/">
              <img className="rounded-t-lg w-full" src={PROJECT3} alt="Project 3" />
            </a>
            <div className="p-5">
              <a href="https://musical-pixie-270eea.netlify.app/">
                <h5 className="mb-2 md:text-[15px] text-2xl font-bold  text-gray-900 dark:text-white">HI, I'M A FREELANCER DESIGNER</h5>
              </a>
              <p className="mb-3 md:text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://musical-pixie-270eea.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-stone-600 hover:text-stone-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[5px]">
                Preview
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="max-w-sm w-full xs:mx-auto xs:w-[85%] md:h-[350px] mx-auto sm:mx-auto sm:w-[48%] md:w-[30%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://neon-gelato-263e64.netlify.app/">
              <img className="rounded-t-lg w-full" src={PROJECT4} alt="Project 4" />
            </a>
            <div className="p-5">
              <a href="https://neon-gelato-263e64.netlify.app/">
                <h5 className="mb-2 md:text-[15px] text-2xl font-bold  text-gray-900 dark:text-white">FINSWEET CONTACT US</h5>
              </a>
              <p className="mb-3 md:text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://neon-gelato-263e64.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-stone-600 hover:text-stone-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[5px]">
                Preview
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="max-w-sm w-full xs:mx-auto xs:w-[85%] md:h-[350px] mx-auto sm:mx-auto sm:w-[48%] md:w-[30%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://remarkable-hummingbird-b75b01.netlify.app/">
              <img className="rounded-t-lg w-full" src={PROJECT5} alt="Project 5" />
            </a>
            <div className="p-5">
              <a href="https://remarkable-hummingbird-b75b01.netlify.app/">
                <h5 className="mb-2 md:text-[15px] text-2xl font-bold  text-gray-900 dark:text-white">Mary Hardy Portfolio</h5>
              </a>
              <p className="mb-3 md:text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://remarkable-hummingbird-b75b01.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-stone-600 hover:text-stone-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[5px]">
                Preview
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 6 */}
          <div className="max-w-sm w-full xs:mx-auto xs:w-[85%]  md:h-[350px]  mx-auto sm:mx-auto sm:w-[48%] md:w-[28%] lg:w-[30%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://enchanting-flan-ab99dd.netlify.app/">
              <img className="rounded-t-lg w-full" src={PROJECT6} alt="Project 6" />
            </a>
            <div className="p-5">
              <a href="https://enchanting-flan-ab99dd.netlify.app/">
                <h5 className="mb-2 md:text-[15px] text-2xl font-bold  text-gray-900 dark:text-white">Country Tour Booking</h5>
              </a>
              <p className="mb-3 md:text-[12px] font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://enchanting-flan-ab99dd.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-stone-600 hover:text-stone-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-[5px]">
                Preview
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;
