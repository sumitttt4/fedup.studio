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

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[#F9F8F6] px-6 py-28 text-center">
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50" />
      {/* Green glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -translate-x-1/2 h-[560px] w-[900px] rounded-full bg-[#84cc16]/10 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-[820px] flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#E5E0D8] bg-white px-4 py-1.5 shadow-sm"
        >
          <span className="text-[#84cc16] leading-none">✦</span>
          <span className="font-sans text-[13px] font-medium text-[#767676]">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline — Inter 900, ~72px */}
        <motion.h1
          variants={item}
          className="font-sans font-black leading-[1.05] tracking-tight text-[#1A1A1A]"
          style={{ fontSize: 'clamp(44px, 6.5vw, 72px)' }}
        >
          Fed up with
          <br />
          {/* Stamp highlight — not italic */}
          <span className="mt-2 inline-block rounded-[6px] bg-[#84cc16] px-4 pb-2 pt-1 text-white">
            average design?
          </span>
        </motion.h1>

        {/* Sub-text — Merriweather, muted, max 480px */}
        <motion.p
          variants={item}
          className="mt-8 max-w-[480px] font-serif text-[17px] leading-[1.75] text-[#767676]"
        >
          We design and build products that actually convert. Fast.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
            className="rounded-lg bg-[#84cc16] px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#68a211] hover:shadow-md"
          >
            Book a Call
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          variants={item}
          className="mt-14 font-serif text-[13px] leading-relaxed text-[#767676]"
        >
          Trusted by{' '}
          <span className="font-semibold text-[#1A1A1A]">founders &amp; SaaS teams</span>
          {' · '}Avg. turnaround{' '}
          <span className="font-semibold text-[#1A1A1A]">48h</span>
          {' · '}Based in India, remote worldwide
        </motion.p>
      </motion.div>
    </section>
  );
}
