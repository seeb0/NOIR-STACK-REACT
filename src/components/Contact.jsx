import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 text-center">
    <div className="container mx-auto max-w-2xl">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-8 tracking-tight drop-shadow-lg">Contact Me</h2>
      <div className="glass p-10 rounded-2xl shadow-2xl border-2 gradient-border flex flex-col items-center space-y-6">
        <div className="text-5xl text-blue-400 mb-2"><FontAwesomeIcon icon={faUserCircle} /></div>
        <div className="w-full flex flex-col gap-4 items-center">
          <div className="bg-gray-800 bg-opacity-70 rounded-lg px-6 py-4 w-full max-w-md text-left shadow-md">
            <span className="block text-gray-400 text-sm font-semibold mb-1">Name</span>
            <span className="block text-xl text-blue-200 font-bold break-words">Haseeb Ahmad Malik</span>
          </div>
          <div className="bg-gray-800 bg-opacity-70 rounded-lg px-6 py-4 w-full max-w-md text-left shadow-md">
            <span className="block text-gray-400 text-sm font-semibold mb-1">Phone</span>
            <span className="block text-xl text-blue-200 font-bold break-words">+92 3186343760</span>
          </div>
          <div className="bg-gray-800 bg-opacity-70 rounded-lg px-6 py-4 w-full max-w-md text-left shadow-md overflow-x-auto max-w-full">
            <span className="block text-gray-400 text-sm font-semibold mb-1">Gmail</span>
            <span className="block text-xl text-blue-200 font-bold break-all whitespace-nowrap">malikhaseebahmad70@gmail.com</span>
          </div>
        </div>
        <div className="text-blue-300 mt-4 italic">Feel free to reach out for collaborations, projects, or just to connect!</div>
      </div>
    </div>
  </section>
);

export default Contact;
