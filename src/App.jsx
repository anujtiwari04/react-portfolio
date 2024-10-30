import React from 'react';
import Navigationbar from './components/Navigationbar';
import Hero from './components/Hero';
import Aboutme from './components/Aboutme';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container mx-auto px-5 flex flex-col">
        <Navigationbar />
        <Hero />
        <Aboutme />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
        <Footer />

      </div>
    </div>
  );
}

export default App;