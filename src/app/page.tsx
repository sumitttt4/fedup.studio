'use client';

import { LeftPanel } from '@/components/layout/LeftPanel';
import { BentoGrid } from '@/components/showcase/BentoGrid';
import { HalftoneFooter } from '@/components/layout/HalftoneFooter';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      {/* Desktop Layout: Split Screen */}
      <div className="hidden md:flex min-h-screen">
        {/* Left Panel - Sticky (35%) */}
        <div className="w-[35%] min-w-[360px] max-w-[480px] sticky top-0 h-screen border-r border-white/5">
          <LeftPanel />
        </div>

        {/* Right Panel - Scrollable (65%) */}
        <div className="flex-1 overflow-y-auto">
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
              <a
                href="mailto:hello@fedup.studio"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
              >
                hello@fedup.studio
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </section>

          {/* Halftone Footer */}
          <HalftoneFooter text="Fedup" imageSrc="/reveal-image.jpg" />
        </div>
      </div>

      {/* Mobile Layout: Stacked */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-white">fedup.</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-900"
            >
              Book a Call
            </a>
          </div>
        </header>

        {/* Mobile Content */}
        <div className="pt-20 px-6">
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
            <h1 className="text-3xl leading-[1.1] mb-6 tracking-normal">
              <span className="font-medium text-white block">
                Fedup with
              </span>
              <span className="font-medium text-white block">
                boring designs?
              </span>
              <span className="text-zinc-500 block mt-2 text-lg">
                We build premium templates, components & custom software.
              </span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-700 px-4 py-2 text-sm font-medium text-white">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Book an Intro Call
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Check Our works
              </a>
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
            <a
              href="mailto:hello@fedup.studio"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-zinc-900"
            >
              hello@fedup.studio
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </section>

          {/* Halftone Footer */}
          <HalftoneFooter text="Fedup" imageSrc="/reveal-image.jpg" />
        </div>
      </div>
    </main>
  );
}
