import React from 'react'

function Contact() {
  return (
   <section id='contact' className='mt-[100px]'>
    <div className="max-w-container mx-auto">
    <div className=" h-[1px] bg-[#fff] border-b border-white border-b-1 mb-[3.2rem] relative">
          <h3 className='bg-black absolute top-[-17px] left-[50%] ml-[-165px] w-[325px] text-center block text-[#ffffff] text-[1.4rem] font-normal p-0'>Let's Connect</h3>

         
        </div>



        <section class=" dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      
      <p class="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Yourname@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-white dark:text-gray-300">Name</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Name" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none" placeholder="Leave a comment..."></textarea>
          </div>
          <a href=''><button type="submit" class="py-3 mt-[10px] px-5 text-sm font-medium text-center text-white rounded-lg bg-green-400 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ease-in-out">Send message</button></a>
      </form>
  </div>
</section>
    </div>
   </section>
  )
}

export default Contact
