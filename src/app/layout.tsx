import './globals.css';
import { FC, ReactNode } from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Kinetic Platform',
  description: 'A modern platform to enhance your experience',
  keywords: 'Kinetic, Platform, Experience',
  author: 'Kinetic Team',
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="antialiased">
        {children}
      </body>
    </>
  );
};

export default RootLayout;