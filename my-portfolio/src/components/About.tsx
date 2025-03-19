import React from 'react';
import AboutPicture from '../assets/images/AboutPicture.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className='About text-center p-5' >
      <img src={AboutPicture} 
       alt="Profile"
       className="w-48 h-48 object-cover rounded-full border-4 border-blue-500 shadow-lg mx-auto" />
      <p className="mt-4 text-lg text-gray-700">Hi, I'm Mandisa, a Data Analyst intern with a background in Full Stack Development and finance.
        I specialize in analyzing data to drive business insights while leveraging my technical expertise 
        in JavaScript, TypeScript, and Node.js to build scalable web applications. 
        My passion lies in problem-solving, optimizing systems, and developing data-driven solutions 
        that enhance efficiency and decision-making.</p>
    </section>
  );
};

export default About;