import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-900"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#22d3ee22,_transparent_60%)]" />

      <div className="relative mx-auto flex h-[80vh] max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/5 px-3 py-1 text-xs tracking-wide text-cyan-200 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Startup Helper • Websites • Marketing • Consulting
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          I launch and grow startups
          <br />
          with design, code, and strategy
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          From idea to traction: I build modern websites, craft marketing that resonates, and design actionable plans that move the needle.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-lg bg-cyan-400 px-5 py-3 text-slate-900 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
          >
            Book a free consult
          </a>
          <a
            href="#work"
            className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            See my work
          </a>
        </div>
      </div>
    </section>
  );
}
