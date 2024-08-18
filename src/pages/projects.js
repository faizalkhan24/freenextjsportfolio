import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa'; // Using React Icons for stars

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects(dummyProjects);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const dummyProjects = [
    {
      id: '1',
      title: 'Project Alpha',
      description: 'A comprehensive cybersecurity solution designed to enhance threat detection and response capabilities.',
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/projects/1',
      rating: 4.5, // Adding a rating field
    },
    {
      id: '2',
      title: 'Project Beta',
      description: 'An advanced penetration testing tool for identifying vulnerabilities in web applications and networks.',
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/projects/2',
      rating: 4.0, // Adding a rating field
    },
    {
      id: '3',
      title: 'Project Gamma',
      description: 'A user-friendly platform for managing and analyzing security incidents across multiple systems.',
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/projects/3',
      rating: 4.8, // Adding a rating field
    },
  ];

  const renderStars = (rating) => {
    // Rounds the rating to the nearest half star
    const roundedRating = Math.round(rating * 2) / 2;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<FaStar key={i} className="text-yellow-500 half-filled" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-500" />);
      }
    }

    return stars;
  };

  return (
    <section className="min-h-screen bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
        Our Projects
      </span>
      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
        Showcasing Our Latest Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {projects.length > 0 ? (
          projects.map((project) => (
            <Link key={project.id} href={project.link} className="bg-sixty rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                width={600}
                height={300}
              />
              <div className="p-6">
                <h2 className="text-white text-2xl mb-4">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {/* Rating Section */}
                <div className="flex items-center mb-2">
                  {renderStars(project.rating)}
                  <span className="ml-2 text-gray-400">({project.rating} stars)</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-400">Loading projects...</p>
        )}
      </div>
    </section>
  );
};

export default ProjectPage;
