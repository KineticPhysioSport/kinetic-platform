import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <main className="relative flex items-center justify-center h-screen bg-[#e0e7ff]">
      <img src="/poster.jpg" alt="Background Visual" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="relative z-10 text-center p-6 max-w-lg">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">
          Move Better, Live Stronger
        </h1>
        <p className="text-xl font-light text-gray-700 mb-6">
          Where physiotherapy meets performance coaching.
        </p>
        <a href="#" className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full shadow-lg transition duration-300 hover:bg-orange-600">
          Get Started
        </a>
      </div>
    </main>
  );
};

export default HomePage;