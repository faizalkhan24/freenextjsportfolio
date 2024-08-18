import React from 'react';
import Link from 'next/link';

const HeroSection = () => (
  <section className="bg-ten text-white text-center py-16">
    <h1 className="text-4xl font-bold">Welcome to CyberSecExpert</h1>
    <p className="mt-4 text-lg">Your trusted partner in cybersecurity solutions.</p>
    <Link href="/contact">
      <span className="mt-8 inline-block bg-white text-ten py-2 px-4 rounded-md font-semibold">Get in Touch</span>
    </Link>
  </section>
);

export default HeroSection;
