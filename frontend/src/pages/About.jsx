import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our Mission, Values, and Team
          </motion.p>
        </div>

        {/* Our Story Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6">
              Founded with a vision to bridge the gap between innovative technology and practical solutions, 
              Fusion F5ve began as a small team of passionate developers who believed in the power of 
              collaboration and cutting-edge technology.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Over the years, we've grown into a dynamic company that specializes in creating scalable, 
              user-focused software solutions. Our journey has been marked by continuous learning, 
              adaptation, and a commitment to excellence that drives everything we do.
            </p>
            <p className="text-lg text-gray-300">
              Today, we work with businesses and startups across various industries, helping them 
              transform their ideas into powerful digital solutions that make a real impact in the world.
            </p>
          </div>
        </motion.section>

        {/* Meet Our Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700 hover:border-purple-500 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/john-doe.jpg"
                alt="Malvin T Machingura - Lead Developer"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-700"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Malvin T Machingura</h3>
              <p className="text-purple-400 mb-3">Full Stack Developer</p>
              <p className="text-gray-400 text-sm">
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700 hover:border-purple-500 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/alice-smith.jpg"
                alt="Junior N Cheiro - UI/UX Designer"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-700"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Junior N Cheiro</h3>
              <p className="text-purple-400 mb-3">UI/UX Designer</p>
              <p className="text-gray-400 text-sm">
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700 hover:border-purple-500 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/mike-brown.jpg"
                alt="Venon T Nyadombo - Backend Engineer"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-700"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Venon T Nyadombo</h3>
              <p className="text-purple-400 mb-3">Backend Engineer</p>
              <p className="text-gray-400 text-sm">
              </p>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700 hover:border-purple-500 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/20231018_170926.jpg"
                alt="Nigel M Kutadzaushe - Project Manager"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-700"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Nigel M Kutadzaushe</h3>
              <p className="text-purple-400 mb-3">Frontend Engineer</p>
              <p className="text-gray-400 text-sm">
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Ready to Work With Us?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
        <Link to="/portfolio" className="border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all inline-block">
          View Our Work
        </Link>
        
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;