import React from 'react';
import AboutPicture from '../assets/images/AboutPicture.jpg';
import Resume from '../assets/documents/Copy of Mandisa Masikane CV - August 2024.pdf'; // Make sure the path to the resume file is correct

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center py-5 position-relative" 
      style={{
        backgroundImage: `url(${AboutPicture}), linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <div className="row w-100 bg-dark bg-opacity-50 p-5 rounded-lg">
        {/* Text Section */}
        <div className="col-12 col-md-8 d-flex flex-column justify-content-center text-center">
          <h2 className="display-4 text-light">
            <i className="fas fa-user-circle me-2"></i> {/* Font Awesome icon */}
            Hi, I'm Mandisa
          </h2>
          <p className="mt-4 lead text-light">
            Hi, I'm Mandisa, a Data Analyst intern with a background in Full Stack Development and finance.
            I specialize in analyzing data to drive business insights while leveraging my technical expertise
            in JavaScript, TypeScript, and Node.js to build scalable web applications. 
            My passion lies in problem-solving, optimizing systems, and developing data-driven solutions 
            that enhance efficiency and decision-making.
          </p>

          {/* Download Resume Button */}
          <a 
            href={Resume} 
            download="Mandisa_Resume.pdf" 
            className="btn btn-outline-primary mt-4 d-inline-block px-3 py-2 text-white rounded-sm"
            style={{ fontSize: '14px', textDecoration: 'none', maxWidth: '200px' }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

