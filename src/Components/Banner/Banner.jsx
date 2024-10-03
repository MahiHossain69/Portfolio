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
<div className="max-w-container mx-auto flex ">
  <div className="w-2/3 mt-[100px]  ">
<h1 className='mt-[200px] text-white text-8xl font-bold '>FRONTEND DEVELOPER.</h1>
<div className="pragh mt-[30px]">
      <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: '700',display: 'inline' }}>
      {' '}
        <span className='mt-[30px] text-white font-play'>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['I like to craft soild and scalable frontend products with great user experiences.']}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={0}
            delaySpeed={1000}
            
           
          />
        </span>
      </h1>
      </div>
  </div>
  <div className="w-1/3 mt-[220px]">
  <img className='w-[500px]' src={Banners}></img>
<div className=" mt-[30px] text-3xl mx-24 flex gap-5 ">
<a href='https://www.facebook.com/wanna.be.mine.babe?mibextid=ZbWKwL' target='block' className='text-stone-400 hover:text-stone-50 ease-in-out duration-300'><FaSquareFacebook /></a>
<a href='https://x.com/MahiHossain89_' target='block' className='text-stone-400 hover:text-stone-50 ease-in-out duration-300'><FaSquareXTwitter /></a>
<a href='https://www.linkedin.com/in/mahi-hossain-019a21306/' target='block' className='text-stone-400 hover:text-stone-50 ease-in-out duration-300'><FaLinkedin /></a>
<a href='https://github.com/MahiHossain69' target='block' className='text-stone-400 hover:text-stone-50 ease-in-out duration-300'><IoLogoGithub /></a>
<a href='https://www.instagram.com/myself_chad?igsh=ajlzMGtqNzI2ZTF0' target='block' className='text-stone-400 hover:text-stone-50 ease-in-out duration-300'><AiFillInstagram /></a>


</div>
  </div>
</div>
<div className=" mx-auto mt-[60px] w-[25px] h-[40px] border-solid border-2 border-stone-500 rounded-full before:content:{''} before:w-[5px] before:h-[12px] before:absolute before:top-[762px] before:left-[629px] before:translate-x-2/4 before:bg-stone-50 before:rounded-[50%] before:opacity-100 before:animate-bounce before:z-[-1] "></div>
</section>

  )
}

export default Banner
