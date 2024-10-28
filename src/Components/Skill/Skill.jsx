import React from 'react'
import Skillbar from 'react-skillbars';


function Work() {
  const skills = [
    { type: 'HTML', level: 99 },
    { type: 'Javascript', level: 85 },
    { type: 'CSS', level: 98 },
    { type: 'React', level: 85 },
    { type: 'Responsive Design', level: 99 },
    { type: 'Github', level: 95 },
    
  ];

  
  return (
    <section className='mt-[200px]'>
      <div className="max-w-container mx-auto">
        <div className=" h-[1px] bg-[#fff] border-b border-white border-b-1 mb-[3.2rem] relative">
          <h3 className='bg-black absolute top-[-17px] left-[50%] ml-[-165px] w-[325px] text-center block text-[#ffffff] text-[1.4rem] font-normal p-0'>SOME OF MY SKILLS</h3>

         
        </div>


        <div className="mt-[100px]">
        <Skillbar skills={skills} height={'10vh'} />
        </div>
      

      
        
      </div>

      
        
    </section>
  )
}

export default Work
