import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Work from './components/Work';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter antialiased text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cyan-400 focus:px-3 focus:py-2 focus:text-slate-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero3D />
        <Services />
        <Work />
      </main>
    </div>
  );
}
