'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

// ── Easing presets ──
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

// ── Variant presets ──
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease },
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
        hidden: { opacity: 0, y: 40 },
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

// ── Scale-in card ──
export function ScaleInCard({
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
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        ...scaleIn,
        visible: {
          ...scaleIn.visible,
          transition: { ...scaleIn.visible.transition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Parallax wrapper — subtle y-axis parallax on scroll ──
export function ParallaxSection({
  children,
  className = '',
  offset = 40,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

// ── Hover-lift card — lifts on hover with spring ──
export function HoverCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Count-up number (animated counter on scroll) ──
export function AnimatedCounter({
  value,
  suffix = '',
  className = '',
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useSpring(0, { stiffness: 50, damping: 20 });
  const rounded = useTransform(count, (v) => Math.round(v));

  if (isInView) {
    count.set(value);
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// ── Project Marquee — responsive horizontal auto-scrolling project thumbnails ──
export function ProjectMarquee({
  projects,
}: {
  projects: Array<{ name: string; screenshot: string; url: string; category: string }>;
}) {
  const items = [...projects, ...projects, ...projects]; // triple for seamless loop
  return (
    <div className="relative overflow-hidden py-6">
      <div className="[mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <motion.div
          className="flex gap-4 sm:gap-5 md:gap-6"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
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
              className="group relative shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border border-[#E5E0D8]/60 bg-white shadow-sm transition-colors duration-300 hover:border-[#84cc16]/30 w-[260px] sm:w-[320px] md:w-[380px]"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F0EDE6]">
                <img
                  src={project.screenshot}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-col gap-1.5 p-5 md:p-6 pb-6 md:pb-7">
                <p className="font-sans text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#1A1A1A] leading-tight">
                  {project.name}
                </p>
                <p className="font-sans text-[12px] sm:text-[13px] text-[#767676]">
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

// ── Slide-in from side (for left/right features) ──
export function SlideIn({
  children,
  className = '',
  direction = 'left',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Floating animation (continuous bob) ──
export function FloatingElement({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
