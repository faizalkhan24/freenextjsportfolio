import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Sample services data with logos
const services = [
  {
    title: 'Service 1',
    description: 'Comprehensive service offering that includes detailed insights and expert support to meet your needs.',
    logo: '/logos/service1.png',
  },
  {
    title: 'Service 2',
    description: 'Innovative solutions designed to enhance your business efficiency and growth.',
    logo: '/logos/service2.png',
  },
  {
    title: 'Service 3',
    description: 'Tailored strategies to optimize your processes and drive results.',
    logo: '/logos/service3.png',
  },
  {
    title: 'Service 4',
    description: 'Expert guidance to navigate complex challenges and achieve success.',
    logo: '/logos/service4.png',
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          Explore our range of professional services designed to help you achieve your goals. From detailed consulting to innovative solutions, our team is here to support you.
        </p>
        <div className="relative mt-8 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {services.map((service, index) => (
              <div key={index} className="min-w-full p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <Image src={service.logo} alt={service.title} width={50} height={50} className="object-contain" />
                  <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="mt-2 text-gray-700">{service.description}</p>
                <Link href="/services" className="mt-4 inline-block text-green-600 hover:text-green-800 transition-colors duration-300">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
