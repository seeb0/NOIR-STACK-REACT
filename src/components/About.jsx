import React from "react";

const About = () => (
  <section id="about" className="py-24 px-6 bg-gray-900 bg-opacity-80 text-center">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
      <p className="text-lg text-gray-300 mb-6">
        <span className="font-bold text-blue-400">Haseeb Ahmad Malik: Engineer. Coder. Your Web Partner.</span>
      </p>
      <p className="text-lg text-gray-300 mb-6">
        As a passionate Electrical Engineer, I build more than just websites—
        I create strategic, scalable solutions. My expertise blends engineering precision with digital creativity, ensuring your project is robust, reliable, and built to last.
      </p>
      <div className="flex flex-col gap-4 text-gray-200 text-base mb-6 text-left">
        <span><span className="font-semibold text-blue-400">•</span> <strong>Full Stack Web Development:</strong> From lightning-fast e-commerce platforms to robust web applications and beautiful portfolios.</span>
        <span><span className="font-semibold text-blue-400">•</span> <strong>Engineering & IoT:</strong> Circuit design, PCB, and microcontroller integration for smart, scalable solutions.</span>
        <span><span className="font-semibold text-blue-400">•</span> <strong>Business Focus:</strong> I architect, not just code—ensuring quality, performance, and future growth.</span>
      </div>
      <p className="text-gray-500 text-sm italic mt-2">
        I believe in clear communication, transparency, and building partnerships—not just projects. My commitment: reliability, honest pricing, and milestone-based progress. I limit my client roster to ensure every project gets my full attention. Let’s build something remarkable together!
      </p>
    </div>
  </section>
);

export default About;
