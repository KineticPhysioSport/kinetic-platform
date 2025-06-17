import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen relative bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-full">
        {/* Background Image */}
        <Image
          src="/poster.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full z-0"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Unlock Your Movement Potential
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            AI-powered recovery and mobility programs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded"
          >
            Start Assessment
          </motion.button>
        </div>
      </div>
    </main>
  );
}