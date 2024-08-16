// components/ServicesSection.js
import React, { useState, useEffect } from 'react';
import Card from './Card';

const services = [
  {
    title: 'Penetration Testing',
    description: 'Identify and fix security vulnerabilities before malicious actors can exploit them.',
    details: 'Our penetration testing services simulate real-world attacks to uncover potential weaknesses in your system. We provide comprehensive reports and actionable recommendations.',
  },
  {
    title: 'Security Audits',
    description: 'Ensure your systems comply with security best practices and regulatory requirements.',
    details: 'Our security audits assess your current security posture against industry standards. We help you identify gaps and implement solutions to enhance your security framework.',
  },
  {
    title: 'Incident Response',
    description: 'Quickly respond to and recover from security breaches to minimize impact.',
    details: 'Our incident response team is available 24/7 to manage and mitigate the effects of security incidents. We provide rapid containment, investigation, and remediation services.',
  },
  {
    title: 'Threat Intelligence',
    description: 'Stay ahead of emerging threats with actionable intelligence.',
    details: 'We offer threat intelligence services to help you understand and anticipate potential security threats. Our insights enable you to make informed decisions and strengthen your defenses.',
  },
  {
    title: 'Security Training',
    description: 'Educate your team on best practices and threat awareness.',
    details: 'Our security training programs are designed to enhance your team’s awareness and understanding of cybersecurity risks. We provide tailored training sessions to address specific needs and challenges.',
  },
  // Add more services as needed
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const servicesPerPage = 4; // Number of services to show per page

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (services.length - servicesPerPage + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover how we can help you secure your digital environment with our comprehensive range of services.
        </p>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * (100 / servicesPerPage)}%)` }}>
            {services.map((service, index) => (
              <div key={index} className="w-1/4 px-2">
                <Card {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
