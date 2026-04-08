'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// ── Animated Section (scroll-triggered fade-up) ──
export function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Staggered children container ──
export function StaggerContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Stagger child item ──
export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

// ── Hover-lift card ──
export function HoverCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Project Marquee ──
export function ProjectMarquee({
  projects,
}: {
  projects: Array<{ name: string; screenshot: string; url: string; category: string; summary?: string }>;
}) {
  const items = [...projects, ...projects, ...projects];
  return (
    <div className="relative overflow-hidden py-4">
      <div className="[mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <motion.div
          className="flex gap-5"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 32,
              ease: 'linear',
            },
          }}
          style={{ width: 'max-content' }}
        >
          {items.map((project, idx) => (
            <motion.a
              key={`${project.name}-${idx}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative shrink-0 overflow-hidden rounded-md border border-[#E7DED2]/60 bg-[#FDFBF7] transition-colors duration-300 hover:border-[#C96A2B]/30 w-[280px] sm:w-[340px] md:w-[400px]"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F0ECE3]">
                <img
                  src={project.screenshot}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-1 px-5 py-4">
                <p className="font-sans text-[14px] sm:text-[15px] font-semibold text-[#171411] leading-tight">
                  {project.name}
                </p>
                <p className="font-sans text-[12px] text-[#6F675F]">
                  {project.category}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
