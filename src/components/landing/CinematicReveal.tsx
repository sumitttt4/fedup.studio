'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SITE } from '@/lib/site';
import { ArrowRight } from 'lucide-react';

export function CinematicReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1: Initial text fades out and moves up slightly
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

  // Phase 2: Cinematic Background Reveal Image
  // Instead of an expanding sharp block, the background image softly fades in 
  // while slowly zooming out for a high-end effect (all GPU accelerated)
  const bgOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const bgScale = useTransform(scrollYProgress, [0.1, 1], [1.1, 1]);
  
  // A dark overlay over the image that gets darker as we approach the CTA
  const overlayOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8], [0, 0.6, 0.85]);

  // Phase 3: "We set the stage" text fades in then out
  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.65, 0.75], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.35, 0.45], [30, 0]);

  // Phase 4: CTA fades in at the end
  const ctaOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.75, 0.85], [30, 0]);

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-[#EAE8E3]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Phase 1: Fading intro text */}
        <motion.div 
          style={{ opacity: text1Opacity, y: text1Y }}
          className="absolute z-10 text-center px-6 w-full"
        >
          <h2 className="font-serif text-[42px] sm:text-[64px] md:text-[80px] text-[#2D3F37] leading-[1.05] tracking-tight antialiased">
            We don&apos;t just build websites.
          </h2>
        </motion.div>

        {/* Phase 2: Cinematic Image Reveal */}
        <motion.div 
          className="absolute inset-0 z-20 w-full h-full overflow-hidden flex items-center justify-center"
          style={{ 
            opacity: bgOpacity,
            willChange: 'opacity',
          }}
        >
          <motion.div 
            style={{ 
              scale: bgScale, 
              willChange: 'transform' 
            }}
            className="absolute inset-0 w-full h-full overflow-hidden bg-[#0A0A0A]"
          >
            {/* Animated Mesh Gradient Blobs */}
            <motion.div
              animate={{ 
                x: ['0%', '15%', '-10%', '0%'],
                y: ['0%', '-15%', '10%', '0%'],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#FF4400]/25 blur-[140px] mix-blend-screen"
            />
            <motion.div
              animate={{ 
                x: ['0%', '-20%', '15%', '0%'],
                y: ['0%', '20%', '-20%', '0%'],
                scale: [1, 0.8, 1.1, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#FF4400]/20 blur-[130px] mix-blend-screen"
            />
            <motion.div
               animate={{ 
                x: ['0%', '10%', '-10%', '0%'],
                y: ['0%', '10%', '-10%', '0%'],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-white/[0.04] blur-[100px] mix-blend-screen"
            />
            {/* Fine Noise Texture */}
            <div 
              className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-overlay" 
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} 
            />
          </motion.div>
          {/* Dark gradient overlay that gets stronger over time */}
          <motion.div 
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-[#0A0A0A]" 
          />

          {/* Phase 3: "We set the stage" */}
          <motion.div 
            style={{ opacity: text2Opacity, y: text2Y, willChange: 'transform, opacity' }}
            className="absolute z-30 text-center px-6 flex flex-col items-center justify-center w-full max-w-[800px]"
          >
            <h2 className="font-serif text-[56px] sm:text-[80px] md:text-[100px] text-[#F5F5F0] leading-[1.05] tracking-tighter italic antialiased mb-6 drop-shadow-lg">
              We set the stage.
            </h2>
            <p className="font-sans text-[15px] sm:text-[18px] text-[#F5F5F0]/90 max-w-[600px] mx-auto drop-shadow-md">
              The strategy, the craft, the moment your users convert. That&apos;s all you. <br className="hidden sm:block" />
              We just build the platform to make it happen.
            </p>
          </motion.div>

          {/* Phase 4: CTA */}
          <motion.div 
            style={{ opacity: ctaOpacity, y: ctaY, willChange: 'transform, opacity' }}
            className="absolute z-40 text-center px-6 flex flex-col items-center justify-center w-full max-w-[800px]"
          >
            <h2 className="font-display text-[40px] sm:text-[56px] md:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-4">
              Ready to build something <span className="text-[#FF4400]">great?</span>
            </h2>
            <p className="font-sans text-[16px] sm:text-[18px] text-white/60 mb-10 max-w-[500px]">
              Let&apos;s talk about your next project.
            </p>
            <a
              href={SITE.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#FF4400] px-10 font-sans text-[15px] font-bold text-white transition-all duration-300 hover:scale-[1.05] hover:bg-[#E63D00] shadow-[0_0_30px_rgba(255,68,0,0.4)]"
            >
              Book a free consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
