import React from "react";
import { Link } from "react-router-dom";

const FtProjects = () => (
  <section id="projects" className="py-24 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 text-center">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-4xl font-bold text-blue-400 mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Project Card 1 */}
        <div className="glass p-8 rounded-2xl shadow-xl border-2 gradient-border hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Modern Portfolio</h3>
          <p className="text-gray-200 mb-4">A sleek, responsive portfolio website built with React and Tailwind CSS.</p>
          <a href="#" className="text-blue-400 hover:underline">View Project</a>
        </div>
        {/* Project Card 2 */}
        <div className="glass p-8 rounded-2xl shadow-xl border-2 gradient-border hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">E-commerce Platform</h3>
          <p className="text-gray-200 mb-4">A scalable e-commerce solution with secure authentication and payment integration.</p>
          <a href="#" className="text-blue-400 hover:underline">View Project</a>
        </div>
        {/* Project Card 3 */}
        <div className="glass p-8 rounded-2xl shadow-xl border-2 gradient-border hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Personal Blog</h3>
          <p className="text-gray-200 mb-4">A fast, SEO-friendly blog engine with markdown support and admin dashboard.</p>
          <a href="#" className="text-blue-400 hover:underline">View Project</a>
        </div>
      </div>
      <div className="mt-12">
        <Link 
          to="/projects" 
          className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold"
        >
          View All Projects
        </Link>
      </div>
    </div>
  </section>
);

export default FtProjects;
