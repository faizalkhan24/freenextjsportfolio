import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

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
      description:
        'A comprehensive cybersecurity solution designed to enhance threat detection and response capabilities.',
      imageUrl:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/projects/1',
    },
    {
      id: '2',
      title: 'Project Beta',
      description:
        'An advanced penetration testing tool for identifying vulnerabilities in web applications and networks.',
      imageUrl:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/projects/2',
    },
    {
      id: '3',
      title: 'Project Gamma',
      description:
        'A user-friendly platform for managing and analyzing security incidents across multiple systems.',
      imageUrl:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/projects/3',
    },
  ];

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
            <Link key={project.id} href={`/projects/${project.id}`} className="bg-sixty rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                width={600} 
                height={300}
              />
              <div className="p-6">
                <h2 className="text-white text-2xl mb-4">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
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
