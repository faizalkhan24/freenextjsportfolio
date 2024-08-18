import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Sample services data
const services = [
  {
    title: 'Network Security',
    description: 'Protect your network from unauthorized access, misuse, and hacking.',
    icon: '🔒',
  },
  {
    title: 'Penetration Testing',
    description: 'Identify vulnerabilities in your systems before attackers do.',
    icon: '🛡️',
  },
  {
    title: 'Incident Response',
    description: 'Minimize damage and recover quickly from security breaches.',
    icon: '🚨',
  },
  {
    title: 'Security Audits',
    description: 'Comprehensive analysis of your organization’s security posture.',
    icon: '📝',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-sixty py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <Link href="/services">
            <span className="inline-block bg-ten text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-ten transition duration-300">
              Explore All Services
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-thirty p-6 rounded-lg shadow-lg hover:bg-gray-600 transition">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <Link href="/services" className="mt-4 inline-block text-ten hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
