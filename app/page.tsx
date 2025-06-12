'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-blue-500">Kinetic Platform</span>
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          AI-powered physiotherapy & performance tools
        </motion.p>

        <motion.a
          href="#get-started"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Get Started
        </motion.a>
      </div>
    </main>
  );
}