// components/TeamCard.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const TeamCard = ({ photo, name, jobTitle, education, email, facebook, linkedin, instagram }) => {
  return (
    <div className="card bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="card-image w-full">
        <img src={photo} alt={name} className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
      </div>
      <div className="card-info p-4 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105">{name}</h3>
        <p className="text-gray-400 mb-2">{jobTitle}</p>
        <p className="text-gray-400 mb-2">{education}</p>
        <p className="text-gray-400 mb-4">
          Email: <a href={`mailto:${email}`} className="text-green-500 hover:underline">{email}</a>
        </p>
        <div className="flex space-x-4 mt-2">
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-transform duration-300 ease-in-out transform hover:scale-110">
              <FaFacebookF size={20} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-transform duration-300 ease-in-out transform hover:scale-110">
              <FaLinkedinIn size={20} />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-transform duration-300 ease-in-out transform hover:scale-110">
              <FaInstagram size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
