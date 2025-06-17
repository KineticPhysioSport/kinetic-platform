import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-xl text-center p-5">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore the features we've crafted to enhance your experience.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default HomePage;