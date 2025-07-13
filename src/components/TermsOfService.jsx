import React from 'react';

const TermsOfService = () => (
  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-gray-100 min-h-screen antialiased font-inter">
    <div className="container mx-auto max-w-3xl py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Terms of Service</h1>
      <p className="mb-4 text-gray-300">Last updated: June 29, 2025</p>
      <div className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-200">By accessing and using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use this site.</p>
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">2. Use of Content</h2>
        <p className="mb-4 text-gray-200">All content on this site, including text, graphics, logos, and code, is the property of Haseeb Ahmad Malik unless otherwise stated. You may not reproduce, distribute, or use any content without explicit permission.</p>
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">3. No Warranties</h2>
        <p className="mb-4 text-gray-200">This website is provided "as is" without warranties of any kind. While efforts are made to ensure accuracy, no guarantees are given regarding completeness or reliability.</p>
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">4. Limitation of Liability</h2>
        <p className="mb-4 text-gray-200">Haseeb Ahmad Malik is not liable for any damages arising from the use or inability to use this website or its content.</p>
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">5. Changes to Terms</h2>
        <p className="mb-4 text-gray-200">These Terms of Service may be updated at any time. Continued use of the site constitutes acceptance of the revised terms.</p>
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">6. Contact</h2>
        <p className="mb-4 text-gray-200">For questions about these Terms, please contact: <a href="mailto:malikhaseebahmad70@gmail.com" className="text-blue-400 underline">malikhaseebahmad70@gmail.com</a> or call <a href="tel:+923186343760" className="text-blue-400 underline">+92 3186343760</a></p>
      </div>
      <div className="mt-8 text-center">
        <a href="/" className="text-blue-400 hover:underline">&larr; Back to Home</a>
      </div>
    </div>
  </div>
);

export default TermsOfService;