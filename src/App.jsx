import React from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-slate-200">
        <a href="#" className="font-semibold tracking-tight text-white">Startup Helper</a>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <a href="#services" className="hover:text-white/90">Services</a>
          <a href="#work" className="hover:text-white/90">Work</a>
          <a href="#contact" className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-white hover:border-white/25 hover:bg-white/10">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter antialiased">
      <Navbar />
      <Hero3D />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Startup Helper — websites, marketing, consulting, planning.
      </footer>
    </div>
  );
}
