import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to the first Site dev</h1>
        <p className="text-lg text-gray-600">Made with React, Tailwind, and Animations ✨</p>
      </header>

      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Framer Motion Section</h2>
        <p className="text-gray-600">
          This section fades in using Framer Motion.
        </p>
      </motion.div>

      <div
        className="max-w-4xl mx-auto bg-yellow-100 shadow-md p-6 mt-12 rounded-2xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">AOS Scroll Animation</h2>
        <p className="text-gray-700">
          This block uses AOS to animate on scroll.
        </p>
      </div>
    </div>
  );
}

export default App;
