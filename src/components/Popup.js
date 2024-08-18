import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image'; // Import the Image component

const Popup = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <FaTimes size={24} />
        </button>
        <div className="flex items-center space-x-4">
          <Image src={service.logo} alt={service.title} className="w-16 h-16 object-contain" />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">{service.title}</h2>
            <p className="mt-2 text-gray-700">{service.fullDescription}</p>
          </div>
        </div>
        <a href={service.link} className="mt-4 inline-block text-green-600 hover:text-green-800 transition-colors duration-300">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Popup;
