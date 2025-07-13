import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faBolt, faCode, faMobileAlt, faBullhorn, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import FtProjects from './FtProjects';

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-gray-900 bg-opacity-90 text-center">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-10 tracking-tight drop-shadow-lg">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Web Development */}
        <div className="glass p-8 rounded-2xl shadow-xl border-2 gradient-border flex flex-col items-center">
          <div className="text-5xl mb-4 text-blue-400"><FontAwesomeIcon icon={faLaptopCode} /></div>
          <h4 className="text-2xl font-bold text-blue-300 mb-2">Web Development</h4>
          <ul className="text-gray-200 text-left space-y-2 mb-4">
            <li><span className="font-semibold text-blue-400">Frontend:</span> HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS, Bootstrap</li>
            <li><span className="font-semibold text-blue-400">Backend:</span> Node.js, Express.js, REST APIs</li>
            <li><span className="font-semibold text-blue-400">Database:</span> MongoDB, Firebase (basics)</li>
            <li><span className="font-semibold text-blue-400">Full Stack:</span> Modern SPA, SSR, authentication, deployment</li>
            <li><span className="font-semibold text-blue-400">Tools:</span> Git & GitHub, Figma, VS Code, Postman, Jest</li>
          </ul>
          <div className="text-sm text-blue-200 italic">Build beautiful, responsive, and scalable web apps with modern frameworks and best practices.</div>
        </div>
        {/* Electrical & Circuit Design */}
        <div className="glass p-8 rounded-2xl shadow-xl border-2 gradient-border flex flex-col items-center">
          <div className="text-5xl mb-4 text-blue-400"><FontAwesomeIcon icon={faBolt} /></div>
          <h4 className="text-2xl font-bold text-blue-300 mb-2">Electrical & Circuit Design</h4>
          <ul className="text-gray-200 text-left space-y-2 mb-4">
            <li><span className="font-semibold text-blue-400">Simulation:</span> Proteus, Multisim</li>
            <li><span className="font-semibold text-blue-400">PCB Design:</span> AutoCAD Electrical, EasyEDA, Fritzing</li>
            <li><span className="font-semibold text-blue-400">Microcontrollers:</span> Arduino, ESP32 (IoT), Raspberry Pi (basic)</li>
            <li><span className="font-semibold text-blue-400">Power Systems:</span> Analog/Digital, power supplies, motor control</li>
          </ul>
          <div className="text-sm text-blue-200 italic">Design & simulate real-world circuits, PCB layouts, and smart embedded systems.</div>
        </div>
        {/* Programming & CS Foundations */}
        <div className="glass p-8 rounded-2xl shadow-xl border-2 gradient-border flex flex-col items-center">
          <div className="text-5xl mb-4 text-blue-400"><FontAwesomeIcon icon={faCode} /></div>
          <h4 className="text-2xl font-bold text-blue-300 mb-2">Programming & CS Foundations</h4>
          <ul className="text-gray-200 text-left space-y-2 mb-4">
            <li><span className="font-semibold text-blue-400">Languages:</span> C++, Java (expert), Python (basics)</li>
            <li><span className="font-semibold text-blue-400">Advanced C++:</span> OOP, DSA, STL</li>
            <li><span className="font-semibold text-blue-400">Projects:</span> Console apps, Encryption tools, File-handling, GUI calculators</li>
          </ul>
          <div className="text-sm text-blue-200 italic">Optimized, scalable code. OOP, DSA, and algorithmic problem-solving.</div>
        </div>
        {/* Tech Stack Extension & Special Skills */}
        <div className="glass p-8 rounded-2xl shadow-xl border-2 gradient-border flex flex-col items-center">
          <div className="text-5xl mb-4 text-blue-400"><FontAwesomeIcon icon={faMobileAlt} /></div>
          <h4 className="text-2xl font-bold text-blue-300 mb-2">Tech Stack & Special Skills</h4>
          <ul className="text-gray-200 text-left space-y-2 mb-4">
            <li><span className="font-semibold text-blue-400">Android Apps:</span> Java (XML), C++ (NDK/JNI), MIT App Inventor</li>
            <li><span className="font-semibold text-blue-400">AI & Automation:</span> AI bots, Telegram/WhatsApp bots</li>
            <li><span className="font-semibold text-blue-400">CMS/E-commerce:</span> WordPress, Shopify (expert)</li>
            <li><span className="font-semibold text-blue-400">Soft Skills:</span> Problem-solving, client communication, deadlines</li>
            <li><span className="font-semibold text-blue-400">Languages:</span> English & Urdu (fluent)</li>
          </ul>
          <div className="text-sm text-blue-200 italic">Native Android, AI tools, CMS, and professional communication.</div>
        </div>
        {/* Digital Marketing & Brand Growth */}
        <div className="glass p-8 rounded-2xl shadow-xl border-2 gradient-border flex flex-col items-center md:col-span-2 lg:col-span-1">
          <div className="text-5xl mb-4 text-blue-400"><FontAwesomeIcon icon={faBullhorn} /></div>
          <h4 className="text-2xl font-bold text-blue-300 mb-2">Digital Marketing & Brand Growth</h4>
          <ul className="text-gray-200 text-left space-y-2 mb-4">
            <li><span className="font-semibold text-blue-400">SMM:</span> Facebook, Instagram (ads, targeting, analytics)</li>
            <li><span className="font-semibold text-blue-400">SEM:</span> Google Ads (keywords, split testing)</li>
            <li><span className="font-semibold text-blue-400">Content:</span> Captions, post/reel design (Canva, Photoshop basics)</li>
            <li><span className="font-semibold text-blue-400">Conversion:</span> Landing pages, CTAs, lead generation</li>
            <li><span className="font-semibold text-blue-400">Analytics:</span> Facebook Pixel, Meta Suite, Google Analytics</li>
          </ul>
          <div className="text-sm text-blue-200 italic">Result-driven ad strategies, content, and conversion funnels.</div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
