import React from 'react';
import { Rocket, Globe, Megaphone, LineChart } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Websites & Product',
    desc: 'Design systems, high-performance sites, and MVPs engineered for conversion and speed.'
  },
  {
    icon: Megaphone,
    title: 'Marketing & Growth',
    desc: 'Acquisition funnels, lifecycle email, content engines, and analytics that guide decisions.'
  },
  {
    icon: Rocket,
    title: 'Launch & Go-To-Market',
    desc: 'Positioning, messaging, and experiments that validate and accelerate traction.'
  },
  {
    icon: LineChart,
    title: 'Consulting & Ops',
    desc: 'Pricing, metrics, systems, and playbooks to turn sparks into repeatable growth.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-24 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">What I do</h2>
          <p className="mt-3 text-slate-400">
            End-to-end help for early-stage teams—product, marketing, and the operating system to run both.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-xl transition-transform hover:-translate-y-1">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(600px_200px_at_top_left,rgba(34,211,238,0.12),transparent)]"/>
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
