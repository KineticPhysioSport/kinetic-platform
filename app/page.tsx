// app/page.tsx
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex h-screen flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-600">Kinetic Platform</span>
        </h1>
        <p className="text-xl max-w-xl mb-6">
          Revolutionizing physiotherapy & performance with smart dashboards and AI-powered tools.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🏋️‍♂️ Coach Dashboard</h2>
            <p className="text-gray-600 text-sm">
              Monitor client performance, track sessions, and access smart analytics.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">👩‍⚕️ Patient Hub</h2>
            <p className="text-gray-600 text-sm">
              Manage rehab plans, get feedback, and communicate directly with patients.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🤖 AI Assistant</h2>
            <p className="text-gray-600 text-sm">
              Automate progress reports, recommend treatments, and generate training plans.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
