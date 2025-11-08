import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors ${scrolled ? 'bg-slate-950/80 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-slate-200">
        <a href="#" className="font-semibold tracking-tight text-white">Startup Helper</a>
        <nav className="hidden items-center gap-6 text-sm sm:flex" aria-label="Primary">
          <a href="#services" className="hover:text-white/90">Services</a>
          <a href="#work" className="hover:text-white/90">Work</a>
          <a href="#contact" className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-white hover:border-white/25 hover:bg-white/10">Contact</a>
        </nav>
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white"
        >
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-3" aria-label="Mobile">
            <a onClick={() => setOpen(false)} href="#services" className="py-2 text-slate-200">Services</a>
            <a onClick={() => setOpen(false)} href="#work" className="py-2 text-slate-200">Work</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2 text-slate-200">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
