import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component

const ProjectDetailPage = () => {
  const router = useRouter();
  const { id } = router.query; 
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        try {
          const response = await fetch(`/api/projects/${id}`); 
          const data = await response.json();
          setProject(data);
        } catch (error) {
          console.error('Error fetching project:', error);
          const dummyProjects = [
            {
              id: '1',
              title: 'Project Alpha',
              description: 'A comprehensive cybersecurity solution designed to enhance threat detection and response capabilities.',
              imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              link: '#',
            },
          ];
          const foundProject = dummyProjects.find((p) => p.id === id);
          setProject(foundProject);
        }
      };
      fetchProject();
    }
  }, [id]);

  if (!project) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-80 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-300">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
