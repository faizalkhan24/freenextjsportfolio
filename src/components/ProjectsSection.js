import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const dummyProjects = [
        {
          id: "1",
          title: "Project Alpha",
          description: "Description for Project Alpha",
          imageUrl: "https://images.pexels.com/photos/256795/pexels-photo-256795.jpeg", // Cybersecurity image
          rating: 4, // Add rating
        },
        {
          id: "2",
          title: "Project Beta",
          description: "Description for Project Beta",
          imageUrl: "https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg", // Cybersecurity image
          rating: 5, // Add rating
        },
        {
          id: "3",
          title: "Project Gamma",
          description: "Description for Project Gamma",
          imageUrl: "https://images.pexels.com/photos/60504/pexels-photo-60504.jpeg", // Cybersecurity image
          rating: 3, // Add rating
        },
        {
          id: "4",
          title: "Project Delta",
          description: "Description for Project Delta",
          imageUrl: "https://images.pexels.com/photos/1919705/pexels-photo-1919705.jpeg", // Cybersecurity image
          rating: 4, // Add rating
        },
      ];

      const sortedProjects = dummyProjects.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setProjects(sortedProjects.slice(0, 3));
    };

    fetchProjects();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? 'text-yellow-500' : 'text-gray-500'}
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-16 bg-sixty text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Recent Projects</h2>
          <Link href="/projects">
            <span className="inline-block bg-ten text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-ten transition duration-300">
              See All Projects
            </span>
          </Link>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-thirty p-6 rounded-lg shadow-lg hover:bg-gray-600 transition"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <div className="flex items-center mb-4">
                {renderStars(project.rating)}
              </div>
              <Link href={`/projects/${project.id}`}>
                <span className="text-ten hover:underline">
                  View Details
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
