import React from 'react';
import Link from 'next/link';

const AboutSection = () => (
  <section className="bg-sixty text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>

      {/* Section 1: Content on the left, image on the right */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="mt-4 text-lg">
            To empower organizations with robust cybersecurity solutions that enable them to operate securely and confidently in an evolving digital landscape.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/3184636/pexels-photo-3184636.jpeg"
            alt="Our Mission"
            className="rounded-lg shadow-lg h-48 w-full object-cover"
          />
        </div>
      </div>

      {/* Section 2: Image on the left, content on the right */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
            alt="Our Values"
            className="rounded-lg shadow-lg h-48 w-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Our Values</h3>
          <ul className="mt-4 list-disc list-inside">
            <li>Integrity: We maintain the highest ethical standards in everything we do.</li>
            <li>Innovation: We continuously adapt and implement the latest technologies to combat emerging threats.</li>
            <li>Client-Centric: We focus on delivering solutions that align with our clients' goals and priorities.</li>
          </ul>
        </div>
      </div>

      {/* Section 3: Content on the left, image on the right */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h3 className="text-xl font-semibold">Our Achievements</h3>
          <p className="mt-4 text-lg">
            Trusted by industry leaders, we have successfully secured critical infrastructure and received accolades for our pioneering work in the cybersecurity sector.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg"
            alt="Our Achievements"
            className="rounded-lg shadow-lg h-48 w-full object-cover"
          />
        </div>
      </div>

      <div className="text-center">
        <Link href="/aboutus" passHref>
          <span className="inline-block bg-ten text-white py-2 px-4 rounded-md font-semibold hover:bg-ten cursor-pointer transition-colors duration-300 ease-in-out">
            Learn More
          </span>
        </Link>
      </div>
    </div>
  </section>
);

export default AboutSection;
