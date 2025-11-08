import React from 'react';

const testimonials = [
  {
    name: 'Maya K.',
    role: 'Founder, Aurora Skin',
    quote:
      'We went from a pretty site to a revenue engine. Clear strategy, fast execution, and numbers that kept improving.'
  },
  {
    name: 'Luis R.',
    role: 'CEO, LaunchKit',
    quote:
      'He built our MVP, defined positioning, and set up growth experiments. Best early-stage partner we had.'
  },
  {
    name: 'Samir A.',
    role: 'Ops Lead, Craftly',
    quote:
      'Systems, metrics, and a calm plan. We finally shipped on time and knew what to measure.'
  }
];

export default function Testimonials() {
  return (
    <section aria-label="Testimonials" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">What clients say</h2>
          <p className="mt-2 text-slate-400">Pragmatic, outcomes-first collaboration.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_200px_at_top_left,rgba(34,211,238,0.1),transparent)]" />
              <blockquote className="relative text-slate-300">“{t.quote}”</blockquote>
              <figcaption className="relative mt-4 text-sm text-slate-400">— {t.name}, {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
