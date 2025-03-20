import React from 'react';
import Logo from '../assets/images/download.png';

const Header: React.FC = () => {
  return (
    <header className="bg-light py-4">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo Section (Left-aligned) */}
        <a href="#top">
          <img
            src={Logo}
            alt="Profile"
            className="img-fluid rounded-circle border-4 border-primary shadow-lg"
            style={{ width: '100px', height: '100px' }} // Adjusted size
          />
        </a>

        {/* Navigation Section */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="#about" className="nav-link text-primary">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link text-primary">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link text-primary">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-primary">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;





