// components/ProjectsSection.js
import React from 'react';
import Link from 'next/link';

const projects = [
  { title: 'Project 1', description: 'Brief description of the project.' },
  // Add more projects as needed
];

const ProjectsSection = () => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold">Recent Projects</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <Link href="/projects">
              <span className="mt-4 inline-block text-green-500">See All Projects</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
