import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="h-screen relative">
      {/* Background Image */}
      <Image
        src="/poster.jpg"
        alt="Background Poster"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We offer the best products and services for you.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Get Started
        </motion.button>
      </div>
    </main>
  );
}