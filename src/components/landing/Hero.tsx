'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 50, damping: 20 },
  },
};

const AVATARS = [
  { initials: 'AM' },
  { initials: 'SC' },
  { initials: 'RG' },
];

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 sm:px-6 text-center bg-[#F9F8F6]"
    >
      {/* Background radial gradient fade */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 150% 120% at 50% 0%, #e8f5d0 0%, #F0EDE6 30%, transparent 100%)',
        }}
      />

      {/* Grid and Noise with mask to fade at bottom */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        }}
      >
        <div
          className="absolute inset-0 z-[2] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        <div className="absolute left-[10%] sm:left-[15%] top-[15%] sm:top-[20%] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full bg-[#d4e8a0]/20 blur-[80px] sm:blur-[100px]" />
        <div className="absolute right-[10%] sm:right-[15%] top-[20%] sm:top-[25%] h-[180px] w-[180px] sm:h-[250px] sm:w-[250px] rounded-full bg-[#c8d9f0]/15 blur-[60px] sm:blur-[80px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-[780px] flex-col items-center px-2"
      >
        {/* Availability Badge */}
        <motion.div
          variants={item}
          className="mb-6 sm:mb-10 inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-[#84cc16]/30 px-3.5 sm:px-5 py-1.5 sm:py-2"
          style={{ backgroundColor: 'rgba(132, 204, 22, 0.05)', backdropFilter: 'blur(8px)' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#84cc16] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#84cc16]" />
          </span>
          <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5a8a0e]">
            Available for new projects
          </span>
        </motion.div>

        {/* H1 — Weight contrast: lighter "Fed up with" vs black "average design?" */}
        <motion.h1
          variants={item}
          className="leading-[calc(1.05em+6px)] tracking-tight text-[#111827]"
          style={{ fontSize: 'clamp(36px, 7vw, 82px)' }}
        >
          <span
            className="block font-sans text-[#111827]"
            style={{ fontWeight: 500, marginBottom: '12px' }}
          >
            Fed up with
          </span>
          <span className="block font-sans font-black text-[#111827] relative">
            average design
            <span className="text-[#111827]">?</span>
            {/* Green underline accent — color used sparingly */}
            <span
              className="absolute bottom-[1px] sm:bottom-[2px] left-0 right-0 h-[4px] sm:h-[6px] rounded-full bg-[#84cc16]/25 -z-10"
              style={{ transform: 'skewX(-3deg)' }}
            />
          </span>
        </motion.h1>

        {/* Subtext — Merriweather italic for serif/sans drama contrast */}
        <motion.p
          variants={item}
          className="mt-5 sm:mt-7 mx-auto max-w-[480px] font-serif text-[18px] italic text-[#4B5563]"
          style={{ lineHeight: 1.85 }}
        >
          We design and build digital products that convert. No bloat, no handoff mess —
          just clean execution.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          variants={item}
          className="mt-7 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#work"
            className="w-full sm:w-auto text-center group rounded-lg border border-[#E5E0D8] bg-transparent px-6 sm:px-7 py-3 sm:py-3.5 font-sans text-sm font-semibold text-[#4B5563] transition-all duration-200 hover:border-[#111827] hover:text-[#111827]"
          >
            See Our Work
          </a>
          <a
            href={SITE.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center rounded-lg bg-[#84cc16] px-6 sm:px-7 py-3 sm:py-3.5 font-sans text-sm font-semibold text-white shadow-lg shadow-[#84cc16]/20 transition-all duration-200 hover:bg-[#68a211] hover:shadow-xl hover:shadow-[#84cc16]/25"
          >
            Book a Call →
          </a>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          variants={item}
          className="mt-[32px] flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <div className="flex items-center">
            {AVATARS.map((a, idx) => (
              <div
                key={a.initials}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F5F3EE] bg-[#ECF1E4] font-sans text-[10px] font-bold text-[#5a8a0e] shadow-sm"
                style={{ marginLeft: idx > 0 ? '-8px' : 0, zIndex: 3 - idx }}
              >
                {a.initials}
              </div>
            ))}
          </div>
          <p className="font-sans text-[12px] sm:text-[13px] text-[#8a8a8a]">
            Trusted by founders & developers
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
