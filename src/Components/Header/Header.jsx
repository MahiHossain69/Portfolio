import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import ScrollIntoView from 'react-scroll-into-view';

function Header() {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for the menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://google.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="w-[165px]" alt="Logo" />
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ScrollIntoView selector="#work">
            <button
              type="button"
              className="text-white bg-green-400 hover:bg-blue-800 ease-in-out duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 pt-[10px] pb-[12px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to="/">Projects</Link>
            </button>
          </ScrollIntoView>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger Icon or Close Icon */}
            <svg
              className={`w-5 h-5 ${isMenuOpen ? 'hidden' : 'block'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? 'block' : 'hidden'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 17"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2 2l13 13M2 15L15 2"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`items-center justify-between md:flex md:w-auto md:order-1 md:flex-row md:bg-black dark:bg-gray-800 md:dark:bg-gray-900  mx-auto border-none ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 border-none">
            <li href="#" className="text-[white] bg-transparent hover:bg-green-400 px-3 py-2 rounded cursor-pointer ">
             
              
                Home
             
            </li>
            
            <ScrollIntoView selector="#about">
              <li
              
                  className="text-[white] bg-transparent hover:bg-green-400 px-3 py-2 rounded cursor-pointer">
                
                  About
                
              </li>
            </ScrollIntoView>
            <ScrollIntoView selector="#service">
              <li
                
                  
                  className="text-[white] bg-transparent hover:bg-green-400 px-3 py-2 rounded cursor-pointer">
                
                  Services
               
              </li>
            </ScrollIntoView>
            <ScrollIntoView selector="#contact">
              <li className="text-[white] bg-transparent hover:bg-green-400 px-3 py-2 rounded cursor-pointer">
              
                  Contact
               
              </li>
            </ScrollIntoView>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
