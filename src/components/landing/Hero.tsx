'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 65, damping: 18 },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9F8F6] px-6 pb-32 pt-28 md:pt-40 text-center">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Green glow blob */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#84cc16]/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
      >
        {/* Availability badge */}
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E5E0D8] bg-white px-4 py-1.5 text-sm font-medium text-[#767676] shadow-sm"
        >
          <span className="text-[#84cc16] text-base leading-none">✦</span>
          <span>Available for new projects</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl font-sans font-bold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-6xl md:text-[5.5rem]"
        >
          Fed up with<br />
          <span className="text-[#84cc16]">average design?</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="mt-6 max-w-xl font-serif text-lg text-[#767676] leading-relaxed"
        >
          We design and build products that actually convert. Fast.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#work"
            className="rounded-lg border-2 border-[#84cc16] px-7 py-3 text-sm font-semibold font-sans text-[#84cc16] transition-all duration-150 hover:bg-[#84cc16] hover:text-white"
          >
            See Our Work
          </a>
          <a
            href={SITE.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#84cc16] px-7 py-3 text-sm font-semibold font-sans text-white shadow-sm transition-all duration-150 hover:bg-[#68a211] hover:shadow-md"
          >
            Book a Call
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.p
          variants={item}
          className="mt-14 font-serif text-xs text-[#767676] tracking-wide"
        >
          Trusted by{' '}
          <span className="font-semibold text-[#1A1A1A]">founders & SaaS teams</span>{' '}
          · Avg. turnaround{' '}
          <span className="font-semibold text-[#1A1A1A]">48h</span>{' '}
          · Based in India, remote worldwide
        </motion.p>
      </motion.div>
    </section>
  );
}
