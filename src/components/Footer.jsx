import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-transparent py-8 px-6 text-center text-gray-400">
    <div className="container mx-auto">
      <p>&copy; 2025 Haseeb Ahmad Malik. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <Link to="/privacy-policy" className="text-gray-100 hover:text-blue-400 transition">Privacy Policy</Link>
        <Link to="/terms-of-service" className="text-gray-100 hover:text-blue-400 transition">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
