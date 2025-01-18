import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Social Media Section */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl uppercase tracking-wide">Social</h2>
            <div className="mt-6 flex space-x-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/wanna.be.mine.babe?mibextid=ZbWKwL"
                className="text-stone-400 text-[30px] hover:text-stone-50 ease-in-out duration-300"
              >
                <FaSquareFacebook />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://x.com/MahiHossain89_"
                className="text-stone-400 text-[30px] hover:text-stone-50 ease-in-out duration-300"
              >
                <FaSquareXTwitter />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/myself_chad?igsh=ajlzMGtqNzI2ZTF0"
                className="text-stone-400 text-[30px] hover:text-stone-50 ease-in-out duration-300"
              >
                <AiFillInstagram />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MahiHossain69"
                className="text-stone-400 text-[30px] hover:text-stone-50 ease-in-out duration-300"
              >
                <IoLogoGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mahi-hossain-019a21306/"
                className="text-stone-400 text-[30px] hover:text-stone-50 ease-in-out duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row justify-start">
            
            <p className="mt-4 text-lg text-gray-300 max-w-xs md:max-w-sm lg:max-w-md pb-5">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 text-center border-t border-gray-600 text-sm">
          © Copyright {new Date().getFullYear()}. Made by
          <a
            rel="noreferrer"
            target="_blank"
            href="https://portfolio-five-sage-40.vercel.app/"
            className="text-blue-400 font-bold hover:underline pl-1"
          >
            Mahi Hossain
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
