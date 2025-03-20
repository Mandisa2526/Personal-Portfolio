// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About/>
      <Projects />
      <Skills />
      <Footer />
      <Contact/>  
    </div>
  );
};

export default App;
