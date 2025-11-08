import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} Startup Helper — websites, marketing, consulting, planning.
    </footer>
  );
}
