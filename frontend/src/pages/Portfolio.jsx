import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Healthcare Dashboard",
      description: "Real-time analytics dashboard for healthcare providers with patient management.",
      tech: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      status: "In Development",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      tech: ["React Native", "Firebase", "Encryption"],
      status: "Completed",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Social Media Analytics",
      description: "AI-powered social media analytics platform for businesses.",
      tech: ["Next.js", "TensorFlow", "AWS", "GraphQL"],
      status: "Planning",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team coordination.",
      tech: ["React", "Socket.io", "Express", "MySQL"],
      status: "Live",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Educational Platform",
      description: "Online learning management system with video streaming and progress tracking.",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "AWS S3"],
      status: "Completed",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 md:px-20 py-20 max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-400">Our Portfolio</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Explore some of our recent work and success stories across various industries.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                  project.status === 'Completed' ? 'bg-blue-500/20 text-blue-400' :
                  project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <span className="mr-2">View Project</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;