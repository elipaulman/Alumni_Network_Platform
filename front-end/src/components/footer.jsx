import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00BDF2] text-white p-5 text-center">
      <div className="social-icons mb-3 flex justify-center">
        <a href="" target="_blank" aria-label="Instagram" className="mx-2">
          <img src="" alt="Instagram Icon" className="w-6 h-6" />
        </a>
        <a href="" target="_blank" aria-label="X (formerly Twitter)" className="mx-2">
          <img src="" alt="X Icon" className="w-6 h-6" />
        </a>
        <a href="" target="_blank" aria-label="Facebook" className="mx-2">
          <img src="" alt="Facebook Icon" className="w-6 h-6" />
        </a>
        <a href="" target="_blank" aria-label="LinkedIn" className="mx-2">
          <img src="" alt="LinkedIn Icon" className="w-6 h-6" />
        </a>
      </div>
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;