/// @file: src/app/layout.tsx
/// @mode: create

tsx
import './globals.css';

export const metadata = {
  title: 'Kinetic Platform',
  description: 'Achieve your goals with AI-driven plans and real-time feedback.',
  keywords: 'AI, fitness, workout, real-time feedback, progress tracking',
  author: 'Kinetic Team',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}

