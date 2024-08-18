import React from 'react';
import Link from 'next/link';

const AboutSection = () => (
  <section className="bg-gray-800 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="mt-4 text-lg">
        At CyberSecExpert, we are committed to providing top-notch cybersecurity solutions to protect your digital assets. Our team of experts combines industry-leading technology with a deep understanding of security threats to offer comprehensive protection tailored to your needs.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-700 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-green-500 hover:text-gray-900 duration-300 ease-in-out">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="mt-2">
            Our mission is to deliver innovative and reliable cybersecurity solutions that empower businesses to operate securely and confidently in the digital landscape.
          </p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-green-500 hover:text-gray-900 duration-300 ease-in-out">
          <h3 className="text-xl font-semibold">Our Values</h3>
          <ul className="mt-2 list-disc list-inside">
            <li>Integrity: We uphold the highest standards of ethical behavior.</li>
            <li>Innovation: We leverage cutting-edge technology to stay ahead of emerging threats.</li>
            <li>Customer Focus: We prioritize the needs and satisfaction of our clients.</li>
          </ul>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-green-500 hover:text-gray-900 duration-300 ease-in-out">
          <h3 className="text-xl font-semibold">Our Achievements</h3>
          <p className="mt-2">
            Over the years, we have successfully secured numerous high-profile projects and have been recognized for our contributions to the field of cybersecurity.
          </p>
        </div>
      </div>
      <Link href="/aboutus" passHref>
        <span className="mt-8 inline-block bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 cursor-pointer transition-colors duration-300 ease-in-out">
          Read More
        </span>
      </Link>
    </div>
  </section>
);

export default AboutSection;
