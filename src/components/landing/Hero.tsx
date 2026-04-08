'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';
import { ArrowRight, Star } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 60, damping: 20 },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[90svh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 bg-[#FAFAFA]">
      {/* Subtle grid background for high-craft SaaS feel */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5E5E5 1px, transparent 1px),
            linear-gradient(to bottom, #E5E5E5 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)',
        }}
      />

      {/* Subtle accent glow behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF4400] opacity-[0.05] blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-[1000px] flex flex-col items-center text-center"
      >
        {/* Availability Badge */}
        <motion.div variants={item} className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-[#FFFFFF] px-4 py-1.5 shadow-sm">
          <span className="status-dot" />
          <span className="font-sans text-[12px] font-medium text-[#737373]">
            Fed up with old designs? We're here.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display font-bold tracking-tight text-[#111111] leading-[1.05]"
          style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
        >
          We design interfaces that <br className="hidden md:block" />
          <span className="text-[#FF4400]">convert and scale.</span>
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          variants={item}
          className="mt-6 max-w-[540px] font-sans text-[16px] sm:text-[18px] leading-[1.6] text-[#737373]"
        >
          Fedup.studio is a specialized design agency helping startups build world-class brand identities and high-performing web experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={SITE.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF4400] px-8 font-sans text-[14px] font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#E63D00] shadow-[0_0_20px_rgba(255,68,0,0.3)]"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#E5E5E5] bg-[#FFFFFF] px-8 font-sans text-[14px] font-bold text-[#111111] transition-all duration-200 hover:border-[#737373]"
          >
            See our work
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          variants={item}
          className="mt-16 flex flex-col items-center gap-3 border-t border-[#E5E5E5] pt-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-[#FAFAFA] bg-[#F0F0F0] overflow-hidden">
                <img 
                  src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i + 10}&backgroundColor=FF4400`} 
                  alt="Founder avatar" 
                  className="h-full w-full object-cover" 
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#737373]">
            <div className="flex gap-0.5 text-[#FF4400]">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
            </div>
            <span>Trusted by 12+ founders and startups</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
