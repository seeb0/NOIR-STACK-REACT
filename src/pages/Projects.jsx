import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 min-h-screen pt-24">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-400 mb-12 text-center">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="glass p-6 rounded-xl shadow-xl border-2 gradient-border">
            <img src="/assets/code.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-blue-300 mb-2">Portfolio Website</h3>
            <p className="text-gray-300 mb-4">Modern portfolio built with React, Tailwind CSS, and smooth animations. Features responsive design and dark theme.</p>
            <div className="flex gap-4">
              <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                <FontAwesomeIcon icon={faChrome} size="lg" />
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="glass p-6 rounded-xl shadow-xl border-2 gradient-border">
            <img src="/assets/code.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-blue-300 mb-2">E-Commerce Platform</h3>
            <p className="text-gray-300 mb-4">Full-stack e-commerce solution with Next.js, MongoDB, and Stripe integration. Features cart, checkout, and admin dashboard.</p>
            <div className="flex gap-4">
              <a href="https://github.com/yourusername/ecommerce" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://yourecommerce.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                <FontAwesomeIcon icon={faChrome} size="lg" />
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="glass p-6 rounded-xl shadow-xl border-2 gradient-border">
            <img src="/assets/code.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-blue-300 mb-2">Task Management App</h3>
            <p className="text-gray-300 mb-4">React-based task manager with Firebase backend. Features real-time updates, auth, and team collaboration.</p>
            <div className="flex gap-4">
              <a href="https://github.com/yourusername/taskmanager" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://yourtaskapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                <FontAwesomeIcon icon={faChrome} size="lg" />
              </a>
            </div>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
