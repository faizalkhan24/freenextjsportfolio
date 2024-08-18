import { useState, useEffect } from 'react';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {


    // const fetchServices = async () => {
    //   try {
    //     const response = await fetch('YOUR_API_ENDPOINT');
    //     const data = await response.json();
    //     setServices(data);
    //   } catch (error) {
    //     console.error('Error fetching services:', error);
    //   }
    // };
    


    const fetchServices = async () => {
      const dummyData = [
        {
          id: 1,
          title: 'Network Security',
          description: 'Protect your network from unauthorized access, misuse, and hacking.',
          icon: '🔒',
        },
        {
          id: 2,
          title: 'Penetration Testing',
          description: 'Identify vulnerabilities in your systems before attackers do.',
          icon: '🛡️',
        },
        {
          id: 3,
          title: 'Incident Response',
          description: 'Minimize damage and recover quickly from security breaches.',
          icon: '🚨',
        },
        {
          id: 4,
          title: 'Security Audits',
          description: 'Comprehensive analysis of your organization’s security posture.',
          icon: '📝',
        },
      ];

      setServices(dummyData);
    };

    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-sixty text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Cybersecurity Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-thirty p-6 rounded-lg shadow-lg hover:bg-gray-600 transition">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
