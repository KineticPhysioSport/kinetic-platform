// app/page.tsx
import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <motion.h1 
        className="text-5xl font-bold text-red-500 mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        MOHAMED
      </motion.h1>
      <p className="text-gray-500 text-lg text-center">
        Welcome to the platform!
      </p>
      <FaHeartbeat className="text-red-400 text-4xl mt-4 animate-bounce" />
    </main>
  );
}
