// src/App.tsx
import React from 'react';
import Header from './components/Header';
import { Link } from "react-router-dom";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <li><Link to="/about">About</Link></li>
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
