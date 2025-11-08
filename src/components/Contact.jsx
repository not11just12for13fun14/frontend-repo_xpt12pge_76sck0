import React from 'react';
import { Mail, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="relative w-full bg-slate-950 py-24 text-slate-200">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Let’s launch something great</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-400">
          Tell me about your idea or product. I’ll reply within 24 hours with next steps and a clear, simple plan.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:founder@yourstartup.co"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-slate-900 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
          >
            <Mail className="h-5 w-5" /> Email me
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            <Calendar className="h-5 w-5" /> Book a call
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-500">Prefer async? Include context, goals, and any links. I’ll suggest a tailored plan.</p>
      </div>
    </section>
  );
}
