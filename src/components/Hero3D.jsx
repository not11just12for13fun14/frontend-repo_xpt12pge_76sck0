import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section aria-label="Hero" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center px-6">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/5 px-3 py-1 text-xs tracking-wide text-cyan-200 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Startup Helper • Websites • Marketing • Consulting
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
          className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Futuristic products meet
          <br className="hidden sm:block" />
          minimal strategy and growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-slate-300"
        >
          I design and ship modern websites, market them with precision, and guide founders with clear, data-driven plans.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <motion.a
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -1, boxShadow: '0 10px 30px rgba(34, 211, 238, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            aria-label="Book a free consultation"
            className="rounded-lg bg-cyan-400 px-5 py-3 text-slate-900 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
          >
            Book a free consult
          </motion.a>
          <motion.a
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            aria-label="See selected work"
            className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            See my work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
