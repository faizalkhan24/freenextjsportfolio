import React from "react";
import { FaMailBulk, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing the icons

const Footer = () => {
  return (
    <footer className="bg-gray-800  border-t border-gray-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="mb- 6">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm mb-4">
              CyberSecExpert is dedicated to providing innovative security solutions to protect your digital world. Our team of experts works tirelessly to ensure your safety online.
            </p>
            <p>&copy; 2024 CyberSecExpert. All rights reserved.</p>
          </div>

          {/* Column 2: Services */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Our Services</h3>
            <ul className="list-disc list-inside">
              <li><a href="/services/threat-protection" className="hover:text-gray-400 transition-colors duration-300">Threat Protection</a></li>
              <li><a href="/services/vulnerability-assessment" className="hover:text-gray-400 transition-colors duration-300">Vulnerability Assessment</a></li>
              <li><a href="/services/security-consulting" className="hover:text-gray-400 transition-colors duration-300">Security Consulting</a></li>
              <li><a href="/services/incident-response" className="hover:text-gray-400 transition-colors duration-300">Incident Response</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <div className="flex items-center mb-4">
              <FaMailBulk className="h-5 w-5 mr-2 text-green-400" />
              <a href="mailto:info@cybersecexpert.com" className="text-green-400 hover:underline">info@cybersecexpert.com</a>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="h-5 w-5 mr-2 text-green-400" />
              <p className="text-sm">Phone: (123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="h-5 w-5 mr-2 text-green-400" />
              <p className="text-sm">Address: 123 Cyber St, Security City, SC 45678</p>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://twitter.com/CyberSecExpert" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/cybersec-expert" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/CyberSecExpert" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
            <div className="text-sm">
              <p>
                <a href="/privacy-policy" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</a> | 
                <a href="/terms-of-service" className="hover:text-gray-400 transition-colors duration-300"> Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
