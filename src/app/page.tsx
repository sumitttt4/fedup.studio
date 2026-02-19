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

      <div className="hidden min-h-screen pt-[72px] md:flex">
        <div className="sticky top-[72px] h-[calc(100vh-72px)] w-[35%] min-w-[360px] max-w-[480px] border-r border-dashed border-white/10">
          <LeftPanel />
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-16 md:px-8 md:py-24 xl:px-12">
          <RealWorldPreview />
          <BentoGrid />

          <section id="contact" className="border-t border-white/10 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-[1080px] text-center"
            >
              <span className="ds-caption mb-4 block text-[#c84307]">Get in touch</span>
              <h2 className="ds-heading-section mb-6 font-serif italic text-white">Ready to ship fast?</h2>
              <p className="ds-subheading mx-auto mb-8 max-w-2xl text-zinc-300">
                Book a 15-minute call to discuss your project. No commitment, just conversation.
              </p>
              <ShimmerButton
                href="mailto:hello@fedup.studio"
                className="gap-3 px-8 py-4 font-medium text-white"
                shimmerColor="rgba(255,255,255,0.35)"
                background="#c84307"
              >
                hello@fedup.studio
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </ShimmerButton>
            </motion.div>
          </section>

          <HalftoneFooter text="Fedup" imageSrc="/reveal-image.jpg" />
        </div>
      </div>

      <div className="pt-[72px] md:hidden">
        <div className="px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-16"
            style={{ fontFamily: 'var(--font-geist-pixel-square)' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="ds-body text-zinc-300">From <span className="font-medium text-white">$3,000</span>/mo</span>
              <span className="ds-chip inline-flex items-center px-3 ds-caption text-zinc-300">Explore Pricing</span>
            </div>

            <h1 className="ds-heading-display mb-6 tracking-wide">
              <span className="block text-white">Fedup with</span>
              <span className="block text-white">boring designs?</span>
              <span className="ds-body mt-4 block tracking-normal text-zinc-300">
                We build premium templates, components & custom software.
              </span>
            </h1>

            <div className="mb-6 flex flex-wrap gap-4">
              <ShimmerButton
                href="#contact"
                className="px-6 py-3 ds-caption font-medium text-white"
                shimmerColor="rgba(255,255,255,0.35)"
                background="#c84307"
                enableShadow={true}
              >
                <span style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>Book an Intro Call</span>
              </ShimmerButton>
              <MovingBorderButton
                href="#work"
                className="px-5 py-3 ds-caption text-zinc-200"
                borderColor="rgba(255,255,255,0.6)"
                duration={3000}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>Check Our work</span>
              </MovingBorderButton>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {['Web Design', 'UI/UX', 'Mobile', 'Next.js', 'Branding', 'Code'].map((tag) => (
                <span key={tag} className="ds-chip inline-flex items-center px-3 text-xs text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <section className="mb-12">
            <RealWorldPreview />
          </section>

          <BentoGrid />

          <section id="contact" className="py-16 text-center">
            <span className="ds-caption mb-4 block text-[#c84307]">Get in touch</span>
            <h2 className="ds-heading-section mb-4 font-serif italic text-white">Ready to ship fast?</h2>
            <p className="ds-body mb-8 text-zinc-300">Book a call to discuss your project.</p>
            <ShimmerButton
              href="mailto:hello@fedup.studio"
              className="gap-2 px-6 py-3 font-medium text-white"
              shimmerColor="rgba(255,255,255,0.35)"
              background="#c84307"
            >
              hello@fedup.studio
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </ShimmerButton>
          </section>

          <HalftoneFooter text="Fedup" imageSrc="/reveal-image.jpg" />
        </div>
      </div>
    </main>
  );
}
