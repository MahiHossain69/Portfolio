import React from 'react'
import { useState, useEffect } from 'react';
// import React, { useState, useEffect } from "react";

function Scroll() {
    const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      return (
        <div className="App">
          <main>
           
    
         
    
            {/* Scroll-to-Top Button */}
            {isVisible && (
              <button
                onClick={scrollToTop}
                id="topButton"
                className="fixed bottom-10 right-10 z-10 animate-bounce rounded-full bg-white w-16 h-16 flex justify-center items-center shadow-md"
              >
                <i className="fas fa-arrow-up text-3xl"></i>
              </button>
            )}
          </main>
        </div>
      );
    
}

export default Scroll
