import React from 'react';
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-[#00BDF2] text-white p-5 text-center">
      <div className="social-icons mb-3 flex justify-center">
        <a href="https://www.instagram.com/lmcc_nyc/" target="https://www.instagram.com/lmcc_nyc/" aria-label="Instagram" className="mx-2">
            <TiSocialInstagram className="w-6 h-6" />
        </a>
        <a href="https://x.com/LMCC" target="https://x.com/LMCC" aria-label="X (formerly Twitter)" className="mx-2">
            <TiSocialTwitter className="w-6 h-6" />
        </a>
        <a href="https://www.facebook.com/LMCCNYC/" target="https://www.facebook.com/LMCCNYC/" aria-label="Facebook" className="mx-2">
            <SlSocialFacebook className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/company/lower-manhattan-cultural-council/" target="https://www.linkedin.com/company/lower-manhattan-cultural-council/" aria-label="LinkedIn" className="mx-2">
            <SlSocialLinkedin className="w-6 h-6" />
        </a>
      </div>
      <p>&copy; 2024 Lower Manhattan Cultural Council, LMCC. All rights reserved..</p>
    </footer> 
    // 
    // 
  );
};

export default Footer;