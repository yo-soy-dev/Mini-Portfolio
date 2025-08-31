import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">MyPortfolio</h2>
          <p className="text-sm">
            A modern portfolio showcasing my skills, projects, and contact details.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="https://github.com/yo-soy-dev" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yo-soy-dev" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://x.com/soy_yo_dev40?t=ScXHQU4i0wCgiPWgRLYJjQ&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Soy-Yo-Dev. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;