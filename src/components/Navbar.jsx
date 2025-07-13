import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to scroll to a section, navigating home if needed
  const goToSection = (section) => (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setMenuOpen(false);
  };

  // Noir Stack button scrolls to hero
  const goToHero = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const hero = document.getElementById("hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        const hero = document.getElementById("hero");
        if (hero) hero.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setMenuOpen(false);
  };

  return (
    <header className="w-full py-6 px-8 flex justify-between items-center bg-transparent absolute top-0 left-0 z-20">
      <div className="flex items-center space-x-3">
        <button
          className="flex items-center bg-transparent border-none outline-none p-0 m-0 cursor-pointer"
          style={{ boxShadow: 'none', background: 'none' }}
          onClick={goToHero}
          aria-label="Go to Hero section"
        >
          <span className="text-4xl font-extrabold text-blue-400">N</span>
          <span className="text-2xl font-bold text-gray-50 tracking-widest ml-1">oirstack</span>
        </button>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-10">
        <Link to="/" className="text-white hover:text-blue-400 transition" onClick={goToHero}>Home</Link>
        <a href="#about" className="text-white hover:text-blue-400 transition" onClick={goToSection("about")}>About</a>
        <Link to="/projects" className="text-white hover:text-blue-400 transition">Projects</Link>
        <a href="#skills" className="text-white hover:text-blue-400 transition" onClick={goToSection("skills")}>Skills</a>
        <a href="#contact" className="text-white hover:text-blue-400 transition" onClick={goToSection("contact")}>Contact</a>
        <Link to="/privacy-policy" className="text-white hover:text-blue-400 transition">Privacy Policy</Link>
        <Link to="/terms-of-service" className="text-white hover:text-blue-400 transition">Terms of Service</Link>
      </nav>
      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          className="text-gray-300 hover:text-blue-400 focus:outline-none border-2 border-blue-400 rounded-xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-8 bg-gray-900 bg-opacity-95 rounded-xl shadow-lg flex flex-col items-end p-6 space-y-4 md:hidden animate-fade-in z-30">
          <Link to="/" className="text-white hover:text-blue-400 transition" onClick={goToHero}>Home</Link>
          <a href="#about" className="text-white hover:text-blue-400 transition" onClick={goToSection("about")}>About</a>
          <Link to="/projects" className="text-white hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Projects</Link>
          <a href="#skills" className="text-white hover:text-blue-400 transition" onClick={goToSection("skills")}>Skills</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition" onClick={goToSection("contact")}>Contact</a>
          <Link to="/privacy-policy" className="text-white hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-white hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Terms of Service</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
