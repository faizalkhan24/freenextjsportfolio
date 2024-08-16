import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative p-6 bg-white rounded-lg shadow-md cursor-pointer" onClick={togglePopup}>
      <div className="flex items-center space-x-4">
        <Image src={service.logo} alt={service.title} width={50} height={50} className="object-contain" />
        <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
      </div>
      <p className="mt-2 text-gray-700">{service.description}</p>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md relative">
            <button onClick={togglePopup} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
              <FaTimes size={20} />
            </button>
            <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-gray-700">{service.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
