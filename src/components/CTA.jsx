import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-semibold">Have a launch in mind?</h3>
            <p className="mt-1 text-slate-300">Get a 3-step plan and clear pricing within 24 hours.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-slate-900 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300">
            Get your plan <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
