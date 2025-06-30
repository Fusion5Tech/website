import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Cpu, Globe, Rocket } from 'lucide-react';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleBackground() {
  const particles = useRef();
  const [sphere] = useState(() => {
    const positions = [];
    for (let i = 0; i < 5000; i++) {
      positions.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
    }
    return new THREE.BufferAttribute(new Float32Array(positions), 3);
  });

  useFrame((state, delta) => {
    particles.current.rotation.x += delta * 0.05;
    particles.current.rotation.y += delta * 0.03;
  });

  return (
    <Points ref={particles} positions={sphere.array} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function FloatingIcons() {
  const icons = [
    { icon: <Code size={48} />, color: 'text-purple-400' },
    { icon: <Cpu size={48} />, color: 'text-blue-400' },
    { icon: <Globe size={48} />, color: 'text-green-400' },
    { icon: <Rocket size={48} />, color: 'text-red-400' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            opacity: 0.2,
            scale: 1,
            rotate: 360
          }}
          transition={{
            duration: 30 + Math.random() * 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className={`absolute ${item.color} opacity-20`}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedGradientText({ children }) {
  return (
    <motion.span
      className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear'
      }}
    >
      {children}
    </motion.span>
  );
}

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative"
    >
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 h-screen">
        <motion.div 
          style={{ y }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <Sparkles className="mx-auto text-yellow-400" size={48} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter"
          >
            <AnimatedGradientText>Empowering</AnimatedGradientText> <br />
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Innovation Through
            </motion.span> <br />
            <motion.span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              animate={{
                textShadow: [
                  '0 0 8px rgba(96, 165, 250, 0.5)',
                  '0 0 12px rgba(124, 58, 237, 0.7)',
                  '0 0 8px rgba(96, 165, 250, 0.5)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              Custom Software
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 font-light leading-relaxed"
          >
            We craft <span className="font-medium text-blue-300">powerful</span>,{' '}
            <span className="font-medium text-purple-300">scalable</span>, and{' '}
            <span className="font-medium text-pink-300">beautifully designed</span> software
            solutions that transform businesses and accelerate startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-12"
          >
            <motion.a
              href="/contact"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold shadow-xl overflow-hidden group"
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
                backgroundSize: '200% 200%'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
              }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <span className="relative z-10">Let's Work Together</span>
              <motion.span
                animate={{
                  x: hovered ? 5 : 0
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500
                }}
                className="relative z-10"
              >
                <ArrowRight size={20} />
              </motion.span>
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              <AnimatePresence>
                {hovered && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Wave Transition */}
      <div className="relative z-0 overflow-hidden -mb-1">
        <svg viewBox="0 0 1440 320" className="w-full h-24 md:h-32 fill-current text-gray-100">
          <motion.path
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 2, delay: 1.5 }}
            fillOpacity="0.8"
            d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Home;