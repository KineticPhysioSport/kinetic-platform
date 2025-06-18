import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden h-screen">
      <Image
        src="/poster.jpg"
        layout="fill"
        objectFit="cover"
        alt="Elite Sports Performance"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black bg-opacity-60">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Elevate Your Performance
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-300 text-center max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          Combining the strength of elite sports performance with the safety and precision of physiotherapy. Leverage AI for optimized recovery.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/start-assessment">
            <a
              className="px-6 py-3 rounded-full bg-blue-600 text-white text-lg md:text-xl font-medium hover:bg-blue-800 transition"
            >
              Start Assessment
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}