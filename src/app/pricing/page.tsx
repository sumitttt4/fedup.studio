import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';

const MEETING_LINK = SITE.meetingLink;

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for design, development, and growth support by Fedup Studio.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing | fedup.studio',
    description: 'Simple, outcome-driven packages with clear pricing and timelines.',
    url: '/pricing',
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Fedup Studio pricing' }],
  },
};

const tiers = [
  {
    name: 'Starter',
    price: '$1,490',
    cadence: 'one-time',
    description: 'A focused package for founders who need a premium launch presence without heavy overhead.',
    idealFor: 'New brands, solo founders, and early-stage teams',
    timeline: '1–2 weeks',
    includes: ['Brand direction mini-kit', 'One high-converting landing page', 'Launch copy polish + QA'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$2,990',
    cadence: 'one-time',
    description: 'The most popular package for teams that need design and development delivered as one system.',
    idealFor: 'Startups preparing campaigns, demos, or fundraising',
    timeline: '3–5 weeks',
    includes: ['Multi-section marketing website', 'Responsive UX/UI + component library', 'Analytics events + conversion pass'],
    featured: true,
  },
  {
    name: 'Partner',
    price: '$1,990',
    cadence: '/month',
    description: 'Ongoing creative and growth support with a predictable monthly rhythm and priority delivery.',
    idealFor: 'Teams that want consistent iterations and monthly optimization',
    timeline: 'Monthly retainer with weekly checkpoints',
    includes: ['Design + development support hours', 'Growth experiments and landing page tests', 'Weekly review + roadmap planning'],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0d0e0c] text-white">
      {/* Noise texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none fixed left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-[#84cc16]/[0.03] blur-[140px] z-0" />

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#0d0e0c]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[56px] sm:h-[60px] max-w-[1100px] items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
              <path d="M256,160L352,320L160,320Z M320,192L288,352L160,224Z" fill="#84cc16" fillRule="evenodd" opacity="0.9"/>
            </svg>
            <span className="font-sans text-[14px] sm:text-[15px] font-semibold tracking-tight text-white">
              Fedup Studio
            </span>
          </Link>
          <a
            href={MEETING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="book-call-pricing-header"
            className="rounded-lg bg-[#84cc16] px-4 sm:px-5 py-2 sm:py-2.5 font-sans text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#68a211] hover:shadow-md"
          >
            Book a Call
          </a>
        </div>
      </header>

      {/* ── Hero heading ── */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 pb-12 sm:pb-16 pt-12 sm:pt-16 md:pt-20">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-sans text-sm text-white/40 transition-colors hover:text-[#84cc16]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div
          className="inline-flex items-center gap-2 rounded-full border border-[#84cc16]/20 px-4 py-1.5 mb-6"
          style={{ background: 'rgba(132,204,22,0.06)' }}
        >
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#84cc16]">
            PRICING
          </span>
        </div>

        <h1
          className="font-sans font-bold leading-[1.08] tracking-tight text-white"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          Simple packages.{' '}
          <span className="font-serif italic font-normal text-white/50">Production-ready outcomes.</span>
        </h1>
        <p className="mt-5 max-w-2xl font-sans text-[15px] sm:text-[16px] leading-[1.8] text-white/40">
          Built for speed and outcomes. Start small, scale scope later, and keep quality consistent across design and development.
        </p>
      </section>

      {/* ── Pricing cards ── */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`group relative flex flex-col rounded-2xl border p-6 sm:p-7 transition-all duration-300 overflow-hidden ${
                tier.featured
                  ? 'border-[#84cc16]/40 bg-[#141414] shadow-[0_0_50px_-15px_rgba(132,204,22,0.12)]'
                  : 'border-[#2a2b28] bg-[#141414] hover:border-[#3a3b38]'
              }`}
            >
              {/* Subtle gradient overlay on featured */}
              {tier.featured && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#84cc16]/[0.04] via-transparent to-transparent" />
              )}

              <div className="relative">
                {/* Badge */}
                {tier.featured && (
                  <div className="mb-4">
                    <span className="rounded-full bg-[#84cc16]/15 border border-[#84cc16]/30 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-[#84cc16]">
                      Most popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <h2 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {tier.name}
                </h2>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-2">
                  <p
                    className="font-sans font-black leading-none text-white"
                    style={{ fontSize: 'clamp(32px, 7vw, 44px)' }}
                  >
                    {tier.price}
                  </p>
                  <span className="pb-1 font-sans text-sm text-white/35">{tier.cadence}</span>
                </div>

                {/* Description */}
                <p className="mt-3 font-sans text-[13px] sm:text-[14px] leading-[1.7] text-white/40">
                  {tier.description}
                </p>

                {/* Ideal for / Timeline */}
                <div className="mt-5 space-y-2.5">
                  <div className="flex items-start gap-1.5">
                    <span className="font-sans text-[12px] sm:text-[13px] font-semibold text-white/60 shrink-0">Ideal for:</span>
                    <span className="font-sans text-[12px] sm:text-[13px] text-white/40">{tier.idealFor}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="font-sans text-[12px] sm:text-[13px] font-semibold text-white/60 shrink-0">Timeline:</span>
                    <span className="font-sans text-[12px] sm:text-[13px] text-white/40">{tier.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Includes */}
              <ul className="mb-8 flex-1 space-y-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#84cc16]/15">
                      <Check className="h-3 w-3 text-[#84cc16]" />
                    </div>
                    <span className="font-sans text-[13px] sm:text-[14px] leading-snug text-white/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={MEETING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-cta={`book-call-pricing-${tier.name.toLowerCase()}`}
                className={`block w-full rounded-xl py-3.5 text-center font-sans text-sm font-semibold transition-all duration-200 ${
                  tier.featured
                    ? 'bg-[#84cc16] text-[#0d0e0c] hover:bg-[#a3e635] shadow-lg shadow-[#84cc16]/20'
                    : 'bg-white/[0.07] text-white/80 hover:bg-white/[0.12] hover:text-white border border-white/[0.08]'
                }`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141414] p-6 sm:p-8 md:p-10">
          {/* Gradient glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#84cc16]/[0.05] blur-[100px]" />

          <div className="relative">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[#84cc16]/20 px-3 py-1 mb-4"
              style={{ background: 'rgba(132,204,22,0.06)' }}
            >
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#84cc16]">
                NEXT STEP
              </span>
            </div>

            <h2
              className="font-sans font-bold leading-[1.12] tracking-tight text-white"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
            >
              Tell us what you&apos;re building.{' '}
              <span className="font-serif italic font-normal text-white/50">We&apos;ll recommend the right package.</span>
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-[14px] sm:text-[15px] leading-[1.8] text-white/40">
              No long contracts. Clear scope, clear ownership, clear communication.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href={MEETING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="book-call-pricing-footer"
                className="rounded-xl bg-[#84cc16] px-6 sm:px-7 py-3 sm:py-3.5 font-sans text-sm font-semibold text-white text-center shadow-lg shadow-[#84cc16]/20 transition-all duration-200 hover:bg-[#68a211] hover:shadow-xl"
              >
                Book a 15-min Call
              </a>
              <Link
                href="/"
                className="rounded-xl border border-white/[0.1] px-6 sm:px-7 py-3 sm:py-3.5 font-sans text-sm font-semibold text-white/70 text-center transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/[0.06] px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className="h-6 w-6">
              <path d="M256,160L352,320L160,320Z M320,192L288,352L160,224Z" fill="#84cc16" fillRule="evenodd" opacity="0.9"/>
            </svg>
            <span className="font-sans text-[13px] font-semibold text-white/60">Fedup Studio</span>
          </div>
          <p className="font-sans text-[12px] text-white/30">
            © 2026 Fedup Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
