'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';

export function AnimatedHero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 20 } },
  };

  return (
    <section className="relative px-6 pb-28 pt-36 md:pt-44 text-center flex flex-col items-center overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.p
          variants={item}
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c84307] mb-10 inline-flex items-center gap-2"
        >
          <span className="w-1 h-1 bg-[#c84307] rounded-full" />
          Design + Code Studio
        </motion.p>
        
        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl font-serif font-medium leading-[1.08] tracking-tight sm:text-6xl md:text-[5.5rem] text-[#171717]"
        >
          We design and build<br />
          <span className="text-[#c84307] italic">websites that sell</span>
        </motion.h1>
        
        <motion.p
          variants={item}
          className="mt-7 max-w-md text-base text-black/50 font-medium leading-relaxed"
        >
          High-end web design, fast development, and growth marketing — all from one small, senior team.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap justify-center items-center gap-4">
          {/* Primary — accent pill with arrow (Framer-style) */}
          <motion.a
            href={SITE.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 rounded-full bg-[#c84307] px-6 py-3 text-[14px] font-semibold text-white cursor-pointer overflow-hidden isolate shadow-[0_1px_2px_rgba(0,0,0,0.06),0_0_0_1px_rgba(200,67,7,0.15)]"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.97, y: 0 }}
            transition={{ type: 'spring' as const, stiffness: 500, damping: 22 }}
          >
            {/* Top highlight — 3D depth */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-white/25" />
            {/* Bottom shadow crease */}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-black/10" />
            {/* Hover glow */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[#b63a06]" />

            <span>Book a free call</span>

            <svg
              className="w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 16 16"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9.5 4.5 13 8l-3.5 3.5" />
            </svg>
          </motion.a>

          {/* Secondary — minimal text link */}
          <motion.a
            href="#work"
            className="group inline-flex items-center gap-1.5 px-4 py-3 text-[14px] font-semibold text-black/40 cursor-pointer transition-colors duration-200 hover:text-[#171717]"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring' as const, stiffness: 500, damping: 22 }}
          >
            <span>See our work</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 14 14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 2v10M3.5 8.5 7 12l3.5-3.5" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Trust line */}
        <motion.p variants={item} className="mt-14 text-xs text-black/30 font-medium tracking-wide">
          Trusted by <span className="text-black/60 font-semibold">120+ teams</span> · Avg. response <span className="text-black/60 font-semibold">24h</span> · Based in India, remote worldwide
        </motion.p>
      </motion.div>
    </section>
  );
}