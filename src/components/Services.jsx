import React from 'react';
import { Rocket, Globe, Megaphone, LineChart } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Startup Strategy',
    desc: 'Positioning, roadmaps, lean experiments, and go-to-market plans that create momentum.'
  },
  {
    icon: Globe,
    title: 'Websites & Product',
    desc: 'High-performance websites and MVPs using modern stacks that scale with you.'
  },
  {
    icon: Megaphone,
    title: 'Marketing & Growth',
    desc: 'Acquisition funnels, email sequences, content engines, and analytics you can trust.'
  },
  {
    icon: LineChart,
    title: 'Consulting & Ops',
    desc: 'Pricing, metrics, and systems that turn a spark into a repeatable engine.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">What I do</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
          Full-stack help for early-stage founders: design, code, marketing, and the plan to connect them.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-xl">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_200px_at_top_left,rgba(34,211,238,0.12),transparent)]" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-lg bg-cyan-400/10 p-3 ring-1 ring-cyan-400/20">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
