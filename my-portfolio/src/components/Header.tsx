// src/components/Header.tsx
import React from 'react';
import Logo from '../assets/images/download.png'

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
      <img src={Logo} 
       alt="Profile"
       className="w-48 h-48 object-cover rounded-full border-4 border-blue-500 shadow-lg mx-auto" />
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



