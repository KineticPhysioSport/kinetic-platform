import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen relative overflow-hidden bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-full bg-slate-900 text-white">
        {/* Background Image */}
        <Image
          src="/poster.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full z-0 blur-sm"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Unlock Your Movement Potential
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Personalized mobility and recovery guided by AI.
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded">
            Start Your Assessment
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <div className="text-4xl mb-4">📈</div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800">Mobility Plans</h3>
          <p className="text-slate-600 text-center">
            Tailored plans to enhance your flexibility and movement.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800">Real-Time Correction</h3>
          <p className="text-slate-600 text-center">
            Correct your exercises on the spot with precision.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800">Progress Tracker</h3>
          <p className="text-slate-600 text-center">
            Keep track of your improvements and stay motivated.
          </p>
        </div>
      </section>
    </main>
  );
}