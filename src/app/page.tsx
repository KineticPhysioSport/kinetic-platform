import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <main className="relative flex items-center justify-center h-screen bg-[#e0e7ff]">
      <img src="/poster.jpg" alt="Background Visual" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="relative z-10 text-center p-6 max-w-lg">
        <h1 className="text-5xl font-bold text-red-600 mb-4">
          I love you ya ro7i
        </h1>
        <p className="text-xl font-light text-gray-700 mb-6">
          Where physiotherapy meets performance coaching.
        </p>
        <a href="#" className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full shadow-lg transition duration-300 hover:bg-orange-600">
          Get Started
        </a>
        {/* Adding some decorative flowers (can be implemented from SVG or image files) */}
        <div className="mt-8 flex justify-center">
          <img src="/flower1.svg" alt="Flower" className="w-16 h-16 mx-2" />
          <img src="/flower2.svg" alt="Flower" className="w-16 h-16 mx-2" />
          <img src="/flower3.svg" alt="Flower" className="w-16 h-16 mx-2" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;