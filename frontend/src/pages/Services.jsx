import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Users } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and cloud platforms.",
      features: ["Responsive Design", "Full-Stack Development", "API Integration", "Performance Optimization"]
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"]
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps solutions to ensure your applications run smoothly.",
      features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Database Management", "Security & Monitoring"]
    },
    {
      icon: <Users size={40} />,
      title: "Consulting",
      description: "Technical consulting and project management to help you make the right technology decisions.",
      features: ["Architecture Design", "Technology Strategy", "Code Review", "Team Training"]
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
        <h2 className="text-4xl font-bold mb-4 text-blue-400">Our Services</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We offer comprehensive digital solutions to help your business thrive in the modern world.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-blue-400 mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;