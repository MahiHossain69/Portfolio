import React from 'react'
import Banner from '../Components/Banner/Banner'
import Skill from '../Components/Skill/Skill'
import Work from '../Components/Work/Work'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'

import Footer from '../Components/Footer/Footer'
import Service from '../Components/Service/Service'




function Home() {
  return (
   <>
   <Banner/>
   <Skill/>
   <Work/>
   <About/>
   <Contact/>
  <Service/>
   <Footer/>
   </>
  )
}

export default Home
