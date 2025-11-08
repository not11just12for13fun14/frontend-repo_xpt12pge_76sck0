import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    tag: 'SaaS',
    title: 'LaunchKit',
    desc: 'Idea to $12k MRR with a laser-focused MVP, crisp positioning, and built-in growth loops.',
    link: '#'
  },
  {
    tag: 'Ecommerce',
    title: 'Aurora Skin',
    desc: 'Brand refresh, CRO, and lifecycle email—repeat purchase rate doubled in 60 days.',
    link: '#'
  },
  {
    tag: 'Marketplace',
    title: 'Craftly',
    desc: 'Supply + demand onboarding, paid experiments, and 30% MoM growth.',
    link: '#'
  }
];

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-slate-950 py-24 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Selected work</h2>
            <p className="mt-2 max-w-xl text-slate-400">A few projects showing the blend of product, design, and growth.</p>
          </div>
          <a href="#contact" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10">Work together</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:translate-y-[-2px] hover:shadow-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_200px_at_top_left,rgba(34,211,238,0.12),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[10px] uppercase tracking-wider text-cyan-300">{p.tag}</span>
                <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
                <span className="mt-4 inline-block text-sm text-cyan-300">Case study →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
