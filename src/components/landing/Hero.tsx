'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 60, damping: 18 },
  },
};

const AVATARS = [
  { initials: 'AM', bg: '#d4edaa', color: '#4a730c' },
  { initials: 'SC', bg: '#c3e68a', color: '#4a730c' },
  { initials: 'RG', bg: '#b8e070', color: '#4a730c' },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-[#F9F8F6] px-6 py-28 text-center">
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50" />
      {/* Green glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -translate-x-1/2 h-[560px] w-[900px] rounded-full bg-[#84cc16]/10 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-[720px] flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#E5E0D8] bg-white px-4 py-1.5 shadow-sm"
        >
          <span className="text-[#84cc16] leading-none">✦</span>
          <span className="font-sans text-[12px] font-medium text-[#767676]">
            Available for new projects
          </span>
        </motion.div>

        {/* H1 — Inter 900, 80px */}
        <motion.h1
          variants={item}
          className="font-sans font-black leading-[1.05] tracking-tight text-[#1A1A1A]"
          style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}
        >
          Fed up with
          <br />
          <span className="text-[#84cc16]">average design?</span>
        </motion.h1>

        {/* Sub — Merriweather 17px muted, max 500px */}
        <motion.p
          variants={item}
          className="mt-6 max-w-[500px] font-serif text-[17px] leading-[1.75] text-[#767676]"
        >
          We design and build digital products that convert. No bloat, no handoff mess.
          Just clean execution.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="rounded-lg border-2 border-[#84cc16] px-7 py-3.5 font-sans text-sm font-semibold text-[#84cc16] transition-all duration-150 hover:bg-[#84cc16] hover:text-white"
          >
            See Our Work
          </a>
          <a
            href={SITE.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#84cc16] px-7 py-3.5 font-sans text-sm font-semibold text-[#1A1A1A] shadow-sm transition-all duration-150 hover:bg-[#68a211] hover:text-white hover:shadow-md"
          >
            Book a Call
          </a>
        </motion.div>

        {/* Trust bar — avatars + text */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          {/* Overlapping avatars */}
          <div className="flex -space-x-2">
            {AVATARS.map((a) => (
              <div
                key={a.initials}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F9F8F6] font-sans text-[10px] font-bold"
                style={{ background: a.bg, color: a.color }}
              >
                {a.initials}
              </div>
            ))}
          </div>
          <p className="font-sans text-[12px] text-[#767676]">
            Trusted by founders &amp; indie makers
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
