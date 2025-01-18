import React from 'react';

function About() {
  return (
    <section id="about" className="mt-[100px] ">
      <div className="max-w-container mx-auto">
      <div className="h-[1px] bg-[#fff] border-b border-white border-b-1 mb-[3.2rem] relative">
          <h3 className='bg-black absolute top-[-17px] left-[50%] ml-[-165px] w-[325px] text-center block text-[#ffffff] text-[1.4rem] font-normal p-0'>
            ABOUT ME
          </h3>
        </div>

        <div className="text-white font-play leading-[40px] text-center sm:text-lg xs:text-sm">
          <p>
            Hi there! I'm Mahi Hossain Chad, a passionate Frontend Developer with a keen eye for detail and a love for creating beautiful, user-friendly web experiences. I specialize in building responsive, interactive websites using the latest technologies like HTML5, CSS3, JavaScript, React, and more.
            <br />
            <br />
            With a strong foundation in both design and development, I focus on crafting clean, efficient code while ensuring that each project is visually appealing and accessible across all devices. Whether it’s bringing an idea to life with a stunning UI or solving complex problems through intuitive interfaces, I thrive on turning concepts into functional, engaging digital experiences.
            <br />
            <br />
            When I'm not coding, you'll find me exploring new frameworks, staying up to date with industry trends, or working on personal projects to further hone my skills.
            <br />
            <br />
            Let's connect and build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
