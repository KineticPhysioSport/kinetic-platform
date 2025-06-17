import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-blue-900 to-black text-white">
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/poster.jpg"
          alt="Performance backdrop"
          layout="fill"
          objectFit="cover"
          className="opacity-25"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lock Your Peak Performance
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            Personalized mobility and recovery programs, powered by sports science.
          </p>
          <Link href="#">
            <a className="bg-blue-700 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition duration-300">
              Start Your Assessment
            </a>
          </Link>
        </div>
      </div>
      <section className="flex flex-wrap justify-center mt-12 gap-8 px-4">
        <div className="bg-blue-800 p-6 rounded-lg shadow-lg max-w-xs text-center">
          <h2 className="text-2xl font-bold mb-2">AI-Driven Plans</h2>
          <p className="text-sm">Customized programs tailored to your needs.</p>
        </div>
        <div className="bg-blue-800 p-6 rounded-lg shadow-lg max-w-xs text-center">
          <h2 className="text-2xl font-bold mb-2">Mobility Tracker</h2>
          <p className="text-sm">Track progress and achievements effortlessly.</p>
        </div>
        <div className="bg-blue-800 p-6 rounded-lg shadow-lg max-w-xs text-center">
          <h2 className="text-2xl font-bold mb-2">Real-Time Correction</h2>
          <p className="text-sm">Enhance your movements with guided corrections.</p>
        </div>
      </section>
    </main>
  );
}