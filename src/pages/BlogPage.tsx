import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  html_url: string;
  name: string;
  stargazers_count: number;
}

const GitHubProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/daniel1rosso/starred?per_page=8')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Featured GitHub Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeInOut' }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600">
                ⭐ {project.stargazers_count}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;