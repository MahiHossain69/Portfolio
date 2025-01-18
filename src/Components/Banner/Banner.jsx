import React from 'react'
import Banners from "../../assets/banner.png"
import { Typewriter } from 'react-simple-typewriter'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";






function Banner() {
  return (
<section>
<div className="max-w-container mx-auto flex flex-col md:flex-row">
        {/* Left side (Text Section) */}
        <div className="w-full md:w-2/3 mt-24 md:mt-[100px]">
          <h1 id='front' className="mt-48 text-white text-4xl sm:text-6xl md:text-8xl font-bold">
            FRONTEND DEVELOPER.
          </h1>
          <div className="mt-8">
            <h1  style={{ paddingTop: '1rem', margin: 'auto ', fontWeight: '700', display: 'inline' }}>
              <span  id='type' className="mt-8 text-white font-play text-lg sm:text-xl md:text-2xl">
                <Typewriter
                  words={['I like to craft solid and scalable frontend products with great user experiences.']}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </div>

        {/* Right side (Image + Social Icons) */}
        <div className="w-full md:w-1/3 mt-16 md:mt-[220px]">
          <img id='bannerimg' className="w-full md:w-[500px] mx-auto" src={Banners} alt="Banner" />

          <div id='link' className="mt-6 sm:flex sm:mt-8 text-xl sm:text-3xl mx-8 sm:mx-24 flex justify-center sm:justify-start gap-6">
            <a href="https://www.facebook.com/wanna.be.mine.babe?mibextid=ZbWKwL" target="block" className="text-stone-400 hover:text-stone-50 ease-in-out duration-300 icon icon-facebook">
              <FaSquareFacebook />
            </a>
            <a href="https://x.com/MahiHossain89_" target="block" className="text-stone-400 hover:text-stone-50 ease-in-out duration-300 icon icon-twitter">
              <FaSquareXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/mahi-hossain-019a21306/" target="block" className="text-stone-400 hover:text-stone-50 ease-in-out duration-300 icon icon-linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/MahiHossain69" target="block" className="text-stone-400 hover:text-stone-50 ease-in-out duration-300 icon icon-github">
              <IoLogoGithub />
            </a>
            <a href="https://www.instagram.com/myself_chad?igsh=ajlzMGtqNzI2ZTF0" target="block" className="text-stone-400 hover:text-stone-50 ease-in-out duration-300 icon icon-instagram">
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
<div className="relative mt-[55px]">
<div class="absolute top-[50%] left-1/2 transform -translate-x-1/2">
  <div id='mause' class="w-[45px] h-[70px] border-2 border-white rounded-full relative overflow-hidden">
    <div class="absolute bottom-[20px] left-[18.5px] transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
  </div>
</div>
</div>
<div className="max-w-container mx-auto">
  <div  id='download' className=" w-[150px] h-[30px] text-center bg-black border-[1px] border-white text-white mt-[-105px]  rounded-full pt-[1px] hover:bg-white hover:text-black hover:border-[1px] hover:border-amber-400">
    <button className='font-bold'><a href='https://bronze-halley-2.tiiny.site/'>Download CV</a></button>
  </div>
</div>

</section>

  )
}

export default Banner




