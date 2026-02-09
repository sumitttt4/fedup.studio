'use client';

import { RealWorldPreview } from '@/components/showcase/RealWorldPreview';
import { LeftPanel } from '@/components/layout/LeftPanel';
import { BentoGrid } from '@/components/showcase/BentoGrid';
import { HalftoneFooter } from '@/components/layout/HalftoneFooter';
import { motion } from 'framer-motion';
import { GeistGridBackground } from '@/components/layout/GeistGridBackground';
import { Header } from '@/components/layout/Header';
import { ShimmerButton } from '@/components/ui/ShimmerButton';
import { MovingBorderButton } from '@/components/ui/MovingBorderButton';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <GeistGridBackground />
      <Header />

      {/* Desktop Layout: Split Screen */}
      <div className="hidden md:flex min-h-screen pt-[72px]">
        {/* Left Panel - Sticky (35%) */}
        <div className="w-[35%] min-w-[360px] max-w-[480px] sticky top-[72px] h-[calc(100vh-72px)] border-r border-dashed border-white/10">
          <LeftPanel />
        </div>

        {/* Right Panel - Scrollable (65%) */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Real World Preview Showcase */}
          <RealWorldPreview />

          <BentoGrid />

          {/* Contact Section */}
          <section id="contact" className="py-24 px-8 lg:px-12 border-t border-white/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 block">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white mb-6">
                Ready to ship fast?
              </h2>
              <p className="text-lg text-zinc-400 mb-10">
                Book a 15-minute call to discuss your project. No commitment, just conversation.
              </p>
              <ShimmerButton
                href="mailto:hello@fedup.studio"
                className="px-8 py-4 font-medium text-zinc-900 gap-3"
                shimmerColor="rgba(0,0,0,0.08)"
                background="rgba(255,255,255,1)"
              >
                hello@fedup.studio
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </ShimmerButton>
            </motion.div>
          </section>

          {/* Halftone Footer */}
          <HalftoneFooter text="Fedup" imageSrc="/reveal-image.jpg" />
        </div>
      </div>

      {/* Mobile Layout: Stacked */}
      <div className="md:hidden pt-[72px]"> {/* Added pt-[72px] to push mobile content down below fixed header */}

        {/* Mobile Content */}
        <div className="px-6">
          {/* Mobile Left Panel Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-8"
            style={{ fontFamily: 'var(--font-geist-pixel-square)' }}
          >
            {/* Pricing Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-zinc-500">
                From <span className="font-medium text-white">$3,000</span>/mo
              </span>
              <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                Explore Pricing
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl leading-[1.3] mb-6 tracking-wide" style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>
              <span className="text-white block">
                Fedup with
              </span>
              <span className="text-white block">
                boring designs?
              </span>
              <span className="text-zinc-500 block mt-4 text-xs tracking-normal">
                We build premium templates, components & custom software.
              </span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-6">
              <ShimmerButton
                href="#contact"
                className="px-6 py-3 text-[10px] uppercase tracking-wide text-zinc-900 font-medium"
                shimmerColor="rgba(0,0,0,0.08)"
                background="rgba(255,255,255,1)"
                enableShadow={true}
              >
                <span style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>Book an Intro Call</span>
              </ShimmerButton>
              <MovingBorderButton
                href="#work"
                className="px-5 py-3 text-[10px] uppercase tracking-wide text-zinc-300"
                borderColor="rgba(239, 68, 68, 0.7)"
                duration={3000}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>Check Our work</span>
              </MovingBorderButton>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Web Design', 'UI/UX', 'Mobile', 'Next.js', 'Branding', 'Code'].map((tag) => (
                <span key={tag} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Real World Preview Showcase */}
          <section className="mb-12">
            <RealWorldPreview />
          </section>

          {/* Mobile Bento Grid */}
          <BentoGrid />

          {/* Mobile Contact */}
          <section id="contact" className="py-16 text-center">
            <h2 className="text-2xl font-serif italic text-white mb-4">
              Ready to ship fast?
            </h2>
            <p className="text-zinc-400 mb-6">
              Book a call to discuss your project.
            </p>
            <ShimmerButton
              href="mailto:hello@fedup.studio"
              className="px-6 py-3 font-medium text-zinc-900 gap-2"
              shimmerColor="rgba(0,0,0,0.08)"
              background="rgba(255,255,255,1)"
            >
              hello@fedup.studio
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </ShimmerButton>
          </section>

          {/* Halftone Footer */}
          <HalftoneFooter text="Fedup" imageSrc="/reveal-image.jpg" />
        </div>
      </div>
    </main>
  );
}
