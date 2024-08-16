import React, { useEffect, useState } from 'react';

const ServicePage = () => {
  const [services, setServices] = useState([]);

  // Function to fetch service data from the API
  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services'); // Update this URL to your API endpoint
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
      // Set dummy data in case of an error
      setServices(dummyServices);
    }
  };

  useEffect(() => {
    fetchServices(); // Fetch data when the component mounts
  }, []);

  // Dummy data related to cybersecurity
  const dummyServices = [
    {
      title: "Threat Intelligence",
      description: "Stay ahead of potential threats with our comprehensive threat intelligence services, which analyze emerging threats and vulnerabilities.",
      imageUrl: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Security Audits",
      description: "Conduct thorough security audits to identify weaknesses in your security posture and receive actionable recommendations to enhance protection.",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Incident Response",
      description: "Our incident response team is ready to quickly address and mitigate any security breaches, minimizing damage and restoring operations efficiently.",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Penetration Testing",
      description: "Simulate real-world attacks to uncover vulnerabilities in your systems and applications before malicious actors can exploit them.",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Penetration Testing",
        description: "Simulate real-world attacks to uncover vulnerabilities in your systems and applications before malicious actors can exploit them.",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
        What We're Offering
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-indigo-600 ml-3 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
        Cybersecurity Services Tailored for Your Needs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {services.length > 0 ? (
          services.map((service, index) => (
            <div key={index} className="relative bg-gray-800 p-10 overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                   style={{ backgroundImage: `url(${service.imageUrl})` }}>
              </div>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10">
                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Loading services...</p>
        )}
      </div>
    </section>
  );
};

export default ServicePage;
