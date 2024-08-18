// components/ExperienceSection.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [currentPerson, setCurrentPerson] = useState(0); // 0 for person 1, 1 for person 2
  const [fade, setFade] = useState(true);

  // Person data
  const persons = [
    {
      name: 'sahil Doe',
      experience: 'sahil has extensive experience in software development, having worked on various projects across multiple industries.',
      education: 'sahil holds a degree in Computer Science and has completed various certifications in software development and project management.',
      image: '/images/sahil.png' // Replace with image path for person 1
    },
    {
      name: 'sameer Smith',
      experience: 'sameer has a strong background in cybersecurity, specializing in threat analysis and incident response.',
      education: 'sameer has a degree in Information Security and has earned multiple certifications in cybersecurity.',
      image: '/images/sahil.png' // Replace with image path for person 2
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPerson((prevPerson) => (prevPerson === 0 ? 1 : 0));
        setFade(true);
      }, 300); 
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Image Side */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-end">
          <div className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={persons[currentPerson].image}
              alt="Person"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 lg:pl-8">
          {/* Tabs */}
          <div className="flex border-b border-gray-700 mb-6">
            <button
              onClick={() => handleTabChange('experience')}
              className={`flex-1 py-2 text-center font-semibold ${
                activeTab === 'experience'
                  ? 'bg-ten text-white'
                  : 'bg-sixty text-gray-300'
              } rounded-t-md`}
            >
              Experience
            </button>
            <button
              onClick={() => handleTabChange('education')}
              className={`flex-1 py-2 text-center font-semibold ${
                activeTab === 'education'
                  ? 'bg-ten text-white'
                  : 'bg-sixty text-gray-300'
              } rounded-t-md`}
            >
              Education
            </button>
          </div>

          {/* Tab Content */}
          <div className={`bg-sixty p-6 rounded-lg shadow-lg transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-white">{persons[currentPerson].name}</h2>
            <p className="mt-4 text-lg text-gray-300">
              {activeTab === 'experience'
                ? persons[currentPerson].experience
                : persons[currentPerson].education}
            </p>
            <Link href="/more-details" passHref>
              <span className="mt-4 inline-block bg-ten text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-500 cursor-pointer">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
