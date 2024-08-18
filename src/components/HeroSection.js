import React from 'react';
import Link from 'next/link';

const HeroSection = () => (
  <section className="bg-ten text-white text-center py-16">
    <h1 className="text-4xl font-bold">Welcome to CyberSec Corp</h1>
    <p className="mt-4 text-lg">Leading the way in comprehensive cybersecurity solutions.</p>
    <Link href="/contact">
      <span className="mt-8 inline-block bg-white text-ten py-2 px-4 rounded-md font-semibold hover:bg-gray-200 transition duration-300">Get in Touch</span>
    </Link>
  </section>
);

export default HeroSection;
