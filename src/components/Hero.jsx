import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../index.css";

const Hero = () => {
  const heroContent = useRef(null);
  const heroTitle = useRef(null);
  const heroSubtitle = useRef(null);
  const heroButtons = useRef(null);
  const heroSocials = useRef(null);

  useEffect(() => {
    // Set initial states for GSAP animations (hidden/off-screen)
    gsap.set([
      heroContent.current,
      heroTitle.current,
      heroSubtitle.current,
      heroButtons.current,
      heroSocials.current,
    ], { autoAlpha: 0 });
    gsap.set([
      heroTitle.current,
      heroSubtitle.current,
      heroButtons.current,
      heroSocials.current,
    ], { y: 20 });
    gsap.set(heroButtons.current, { scale: 0.8 });

    // Create a GSAP Timeline for sequential animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate main content container
    tl.to(heroContent.current, { autoAlpha: 1, duration: 1, ease: "power2.out" }, 0.8)
      .to(heroTitle.current, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" }, ">-0.3")
      .to(heroSubtitle.current, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" }, ">-0.4")
      .to(heroButtons.current, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, ">-0.4")
      .to(heroSocials.current, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, ">-0.3");
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-16 px-6 relative text-center">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <path fill="url(#heroGradient)" fillOpacity="0.15" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
      {/* Main Hero Content */}
      <div
        ref={heroContent}
        className="glass px-4 sm:px-6 md:px-10 py-14 max-w-3xl mx-auto z-10 relative shadow-2xl gradient-border border-2"
      >
        <h1
          ref={heroTitle}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-shadow-xl"
        >
          Hi, I'm <span className="text-blue-400">Haseeb Ahmad Malik</span>
        </h1>
        <p
          ref={heroSubtitle}
          className="text-xl md:text-2xl text-gray-200 mb-8 font-medium"
        >
          An obsessed <span className="text-blue-400">Full Stack Web Developer with an engineer's precision </span> delivering sleek, scalable digital solutions.
        </p>
        <div
          ref={heroButtons}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-blue-400 text-blue-400 font-semibold py-3 px-8 rounded-full hover:bg-blue-400 hover:text-white transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Contact Me
          </a>
        </div>
        <div
          ref={heroSocials}
          className="flex justify-center space-x-6 mt-4"
        >
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-2xl transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-2xl transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
