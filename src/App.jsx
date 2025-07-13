import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import FtProjects from './components/FtProjects';
import Projects from './pages/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 w-full h-full" />
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <FtProjects />
              <Skills />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
    </div>
  );
}
export default App
