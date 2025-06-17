import React from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>GOWOD Inspired Homepage</title>
        <meta name="description" content="Achieve your goals with AI-driven plans and real-time feedback." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100">
        {children}

        {/* Feature Highlights Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                  {/* Icon Placeholder */}
                  <span className="text-white font-bold text-2xl">AI</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">AI Plans</h3>
                <p className="text-gray-600 text-center">
                  Personalized AI-driven workout plans tailored just for you.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 mb-4 bg-green-500 rounded-full flex items-center justify-center">
                  {/* Icon Placeholder */}
                  <span className="text-white font-bold text-2xl">RT</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Real-time Feedback</h3>
                <p className="text-gray-600 text-center">
                  Get instant feedback to improve your performance.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                  {/* Icon Placeholder */}
                  <span className="text-white font-bold text-2xl">PT</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Progress Tracking</h3>
                <p className="text-gray-600 text-center">
                  Track your progress and reach your fitness goals faster.
                </p>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}