import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  ScaleInCard,
  ProjectMarquee,
  SlideIn,
  HoverCard,
  FloatingElement,
  ParallaxSection,
} from '@/components/landing/AnimatedSections';
import { ArrowRight, Twitter, Linkedin, Github, Check } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  'BRAND IDENTITY',
  'WEB DESIGN',
  'MOBILE APPS',
  'DESIGN SYSTEMS',
  'UI/UX',
  'DEVELOPMENT',
  'FIGMA TO CODE',
  'LANDING PAGES',
];

const PROJECTS = [
  {
    name: 'Glyph Software',
    category: 'Design · Development',
    url: 'https://glyph.software',
    screenshot: '/Glyph.png',
    summary:
      'End-to-end product and marketing experience focused on clarity, performance, and a high-trust SaaS visual system.',
  },
  {
    name: 'Hotel MLV Grand',
    category: 'Hospitality · Web',
    url: 'https://hotelmlvgrand.vercel.app/',
    screenshot:
      'https://image.thum.io/get/width/1200/noanimate/https://hotelmlvgrand.vercel.app/',
    summary:
      'Hospitality website crafted for premium presentation, fast page speed, and mobile-first booking-friendly UX.',
  },
  {
    name: 'Nova Dashboard',
    category: 'Dashboard UI · SaaS',
    url: 'https://nova-seven-sepia.vercel.app/dashboard',
    screenshot:
      'https://image.thum.io/get/width/1200/noanimate/https://nova-seven-sepia.vercel.app/dashboard',
    summary:
      'Data-heavy dashboard designed for decision speed with clean visual hierarchy and smooth interaction flow.',
  },
];

const WHY_FEATURES_LEFT = [
  {
    title: 'We Design AND Dev',
    description:
      'No separate teams. One workflow, zero translation loss.',
  },
  {
    title: 'Pixel-Perfect Delivery',
    description:
      'What we design in Figma is exactly what ships. Every time.',
  },
];

const WHY_FEATURES_RIGHT = [
  {
    title: 'Direct Access',
    description:
      'No account managers, no middlemen. You talk to the person doing the work.',
  },
  {
    title: 'Full-Stack Ownership',
    description:
      'From brand identity to deployed code. One studio handles it all.',
  },
];

const TRACKER_ITEMS = [
  { label: 'Design', progress: 100 },
  { label: 'Development', progress: 72 },
  { label: 'Review', progress: 40 },
  { label: 'Live', progress: 8 },
];

const PROCESS_STEPS = [
  {
    number: '01',
    label: 'Discovery',
    description: 'We deep-dive into your goals, users, and competitors to define a clear direction.',
  },
  {
    number: '02',
    label: 'Design',
    description: 'High-fidelity Figma designs with your brand system, reviewed and refined with you.',
  },
  {
    number: '03',
    label: 'Development',
    description: 'Clean Next.js + Tailwind code — responsive, accessible, and fast.',
  },
  {
    number: '04',
    label: 'Deploy',
    description: 'We launch on your infrastructure and stay on for QA and post-launch support.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Sumit shipped our landing page in under a week. Clean, fast, and exactly what we needed.',
    name: 'Arjun Mehra',
    role: 'Founder',
    initials: 'AM',
  },
  {
    quote:
      'Working with Fedup Studio felt like having a senior designer and developer on call. Exceptional quality — and they actually deliver on time.',
    name: 'Sarah Chen',
    role: 'Head of Product',
    initials: 'SC',
  },
  {
    quote:
      'They rebuilt our entire SaaS onboarding flow. Pixel-perfect, shipped ahead of schedule. Worth every penny.',
    name: 'Rahul Gupta',
    role: 'CTO',
    initials: 'RG',
  },
];

const PRICING_PLANS = [
  {
    name: 'Project-Based',
    price: '$1,490',
    period: 'flat',
    description:
      'Perfect for early-stage teams needing a high-converting presence to start gathering users.',
    features: [
      'Custom brand identity',
      'High-converting landing page',
      'Mobile responsive',
      'Basic SEO setup',
      'Figma source file included',
      'Delivered in 1–2 weeks',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Retainer',
    price: '$1,990',
    period: '/ mo',
    description:
      'Ongoing design + dev partnership. Pause or cancel any time. Direct Slack access to our team.',
    features: [
      'Unlimited design requests',
      'Full-stack development',
      'Direct Slack channel',
      '48h avg. turnaround',
      'Design + code reviews',
      'Pause or cancel anytime',
    ],
    cta: 'Book a Call',
    featured: true,
  },
];

// ─── Shared ────────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#767676]">
      {children}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const doubledTicker = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="min-h-screen bg-[#F9F8F6]">

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero ── */}
      <Hero />

      {/* ── Work Grid ── */}
      <section id="work" className="gradient-warm relative px-4 sm:px-6 pt-[80px] pb-[64px]">
        {/* Brand pattern: line pattern */}
        <div className="pointer-events-none absolute inset-0 bg-pattern-lines opacity-40" />
        <div className="relative z-[1] mx-auto max-w-[1200px]">
          {/* Badge + Heading */}
          <AnimatedSection className="mb-[80px] flex flex-col items-center text-center">
            <div className="badge-pill mb-6">
              SELECTED WORK
            </div>
            <h2 className="font-sans font-bold leading-[1.08] tracking-tight text-[#111827]" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>
              Projects we&apos;re proud of.
            </h2>
            <p className="mt-4 max-w-md font-serif text-[15px] italic leading-[1.8] text-[#8a8a8a]">
              Real products, live links. No password-gated mockups.
            </p>
          </AnimatedSection>

          {/* Project Marquee */}
          <AnimatedSection delay={0.15}>
            <ProjectMarquee projects={PROJECTS} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Fedup — Central Card + Feature Callouts ── */}
      <section id="services" className="gradient-wash relative border-t border-[#E5E0D8]/50 bg-[#F9F8F6] px-4 sm:px-6 py-[96px]">
        {/* Brand pattern: circles */}
        <div className="pointer-events-none absolute inset-0 bg-pattern-circles opacity-60" />
        <div className="relative z-[1] mx-auto max-w-[1200px]">
          {/* Badge + Heading */}
          <AnimatedSection className="mb-20 flex flex-col items-center text-center">
            <div className="badge-pill mb-6">
              BUILT DIFFERENT
            </div>
            <h2 className="font-sans font-bold leading-[1.08] tracking-tight text-[#111827]" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>
              Built Different,{' '}
              <span className="font-serif italic font-normal text-[#6b6b6b]">On Purpose.</span>
            </h2>
          </AnimatedSection>

          {/* Feature callouts + Central card */}
          <div className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-[48px]">

            {/* Left features */}
            <SlideIn direction="left" className="flex flex-col gap-10 lg:text-right">
              {WHY_FEATURES_LEFT.map((f) => (
                <div key={f.title} className="max-w-[340px] ml-auto">
                  <h4 className="font-sans text-[17px] font-bold text-[#111827]">{f.title}</h4>
                  <p className="mt-2.5 font-serif text-[15px] leading-[1.8] text-[#6B7280]">
                    {f.description}
                  </p>
                </div>
              ))}
            </SlideIn>

            {/* Center — premium mockupl */}
            <FloatingElement className="relative mx-auto w-full max-w-[360px] lg:my-0 my-4">
              {/* Glow behind */}
              <div className="absolute top-1/2 left-1/2 -mt-20 -ml-20 h-40 w-40 rounded-full bg-[#84cc16]/10 blur-[80px]" />
              
              <div className="relative rounded-3xl border border-[#E5E0D8]/80 bg-white p-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                <div className="rounded-2xl border border-[#E5E0D8]/60 bg-[#F9F8F6]/50 p-6">
                  {/* Card header */}
                  <div className="mb-6 flex items-center justify-between border-b border-[#E5E0D8] pb-4">
                    <div>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#84cc16]">
                        Component System
                      </p>
                      <p className="mt-1 font-sans text-[16px] font-bold text-[#1A1A1A]">
                        Design & Dev Ready
                      </p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#84cc16]/10">
                      <Check className="h-4 w-4 text-[#84cc16]" />
                    </div>
                  </div>

                  {/* UI Skeleton lines */}
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm border border-[#E5E0D8]/50">
                        <div className="h-8 w-8 shrink-0 rounded-lg bg-[#F0EDE6]" />
                        <div className="flex flex-col gap-2 w-full">
                          <div className="h-2 w-3/4 rounded-full bg-[#E5E0D8]" />
                          <div className="h-2 w-1/2 rounded-full bg-[#F0EDE6]" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer badge */}
                  <div className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#1A1A1A] py-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#84cc16] opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#84cc16]" />
                    </span>
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                      System Deployed
                    </span>
                  </div>
                </div>
              </div>
            </FloatingElement>

            {/* Right features */}
            <SlideIn direction="right" className="flex flex-col gap-10 lg:text-left">
              {WHY_FEATURES_RIGHT.map((f) => (
                <div key={f.title} className="max-w-[340px] mr-auto">
                  <h4 className="font-sans text-[17px] font-bold text-[#111827]">{f.title}</h4>
                  <p className="mt-2.5 font-serif text-[15px] leading-[1.8] text-[#6B7280]">
                    {f.description}
                  </p>
                </div>
              ))}
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="relative bg-[#F9F8F6] px-4 sm:px-6 py-[96px]">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="mb-16 md:mb-24 text-center">
            <div className="badge-pill mb-6">
              HOW WE WORK
            </div>
            <h2 className="font-sans font-bold leading-[1.08] tracking-tight text-[#111827]" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>
              From Zero to{' '}
              <span className="align-middle font-serif italic font-normal text-[#6b6b6b]">Shipped.</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="relative grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
            {PROCESS_STEPS.map((step, idx) => (
              <StaggerItem
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Floating step card */}
                <div className="floating-card w-full p-6 relative z-10">
                  {/* Step number */}
                  <div className="mb-6 flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-[2.5px] border-[#84cc16]/20 bg-[#84cc16]/10 shadow-[0_0_15px_rgba(132,204,22,0.1)]">
                      <span className="font-sans text-[22px] font-black text-[#84cc16]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-sans text-[18px] sm:text-[19px] font-bold text-[#111827]">
                    {step.label}
                  </h3>
                  <p className="mt-3 font-serif text-[15px] leading-[1.6] text-[#4B5563]">
                    {step.description}
                  </p>
                </div>

                {/* Desktop horizontal connector */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="pointer-events-none absolute left-[50%] top-14 hidden w-full md:block z-0">
                    <div className="h-[1px] w-full border-t border-dashed border-[#D1D5DB]" />
                  </div>
                )}

                {/* Mobile vertical connector */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="flex flex-col items-center py-2 md:hidden relative z-0">
                    <div className="h-8 border-l border-dashed border-[#D1D5DB]" />
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="gradient-wash relative border-t border-[#E5E0D8]/50 bg-[#F9F8F6] px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        {/* Brand pattern: wave pattern */}
        <div className="pointer-events-none absolute inset-0 bg-pattern-waves opacity-50" />
        <div className="relative z-[1] mx-auto max-w-[1100px]">
          <AnimatedSection className="mb-16 flex flex-col items-center text-center">
            <div className="badge-pill mb-6">
              CLIENT LOVE
            </div>
            <h2 className="font-sans font-bold leading-[1.08] tracking-tight text-[#1A1A1A]" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>
              What They&apos;re{' '}
              <span className="font-serif italic font-normal text-[#6b6b6b]">Saying.</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <StaggerItem
                key={t.name}
                className=""
              >
                <HoverCard className="relative flex h-full flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-[32px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-xl hover:shadow-black/[0.04] transition-shadow">
                <div className="relative">
                  <span className="absolute -left-2 -top-4 font-serif text-[64px] leading-none text-[#84cc16] opacity-30 select-none">
                    “
                  </span>
                  <p className="relative z-10 font-serif text-[15px] sm:text-[16px] italic leading-[1.8] text-[#111827] pt-4">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-[12px] flex items-center gap-4 border-t border-[#E5E7EB] pt-6">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-sans text-[13px] font-bold text-[#84cc16]"
                    style={{ background: 'rgba(132,204,22,0.15)' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-sans text-[15px] font-semibold text-[#111827]">{t.name}</p>
                    <p className="font-sans text-[13px] text-[#767676]">{t.role}</p>
                  </div>
                </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="gradient-dark relative border-t border-[#333] bg-[#1A1A1A] px-4 sm:px-6 py-[96px]">
        {/* Subtle noise in background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <AnimatedSection className="mb-12 sm:mb-16 flex flex-col items-center text-center">
            <div className="badge-pill mb-6" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}>
              PRICING
            </div>
            <h2 className="font-sans font-bold leading-[1.08] tracking-tight text-white" style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>
              Simple,{' '}
              <span className="font-serif italic font-normal text-white/50">Honest Pricing.</span>
            </h2>
            <p className="mt-4 font-serif text-[15px] italic leading-[1.8] text-white/40">
              No retainer lock-ins. No surprise invoices. Upgrade or pause anytime.
            </p>
          </AnimatedSection>

          <StaggerContainer className="mx-auto grid max-w-[820px] gap-5 sm:gap-6 md:grid-cols-2">
            {PRICING_PLANS.map((plan) => (
              <StaggerItem key={plan.name}>
                <HoverCard
                  className={`relative flex h-full flex-col rounded-2xl border p-6 sm:p-8 transition-all duration-300 overflow-hidden ${
                    plan.featured
                      ? 'border-[#84cc16]/40 bg-[#141414] shadow-[0_0_40px_-12px_rgba(132,204,22,0.15)]'
                      : 'border-[#2a2b28] bg-[#141414] hover:border-[#3a3b38]'
                  }`}
                >
                  {/* Subtle gradient overlay on featured */}
                  {plan.featured && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#84cc16]/[0.03] via-transparent to-transparent" />
                  )}

                  {/* Recommended Badge on edge */}
                  {plan.featured && (
                    <div className="absolute right-6 sm:right-8 top-6 rounded-full bg-[#84cc16] px-3.5 py-1">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-[#0d0e0c]">
                        Recommended
                      </span>
                    </div>
                  )}

                  {/* Plan name */}
                  <div className="relative mb-6 sm:mb-8 mt-2">
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-white">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span
                        className="font-sans font-black leading-none text-white"
                        style={{ fontSize: 'clamp(36px, 8vw, 48px)' }}
                      >
                        {plan.price}
                      </span>
                      <span className="font-sans text-sm text-white/40">
                        {plan.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 font-sans text-[13px] sm:text-[14px] leading-[1.7] text-white/40">
                      {plan.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Features list */}
                  <ul className="mb-8 flex-1 space-y-[14px]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#84cc16]/15">
                          <Check className="h-3 w-3 text-[#84cc16]" />
                        </div>
                        <span className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-white/85">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={SITE.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative block w-full rounded-xl py-3.5 text-center font-sans text-sm font-semibold transition-all duration-200 ${
                      plan.featured
                        ? 'bg-[#84cc16] text-[#0d0e0c] hover:bg-[#a3e635] shadow-lg shadow-[#84cc16]/20'
                        : 'bg-white/[0.07] text-white/80 hover:bg-white/[0.12] hover:text-white border border-white/[0.08]'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.2} className="mt-[24px] text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-white/50 underline underline-offset-4 transition-colors hover:text-[#84cc16]"
            >
              View all plans <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="gradient-dark border-t border-[#333] bg-[#111111] px-4 sm:px-6 pt-[96px] pb-[64px] overflow-hidden relative">
        {/* Noise on dark */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <div className="badge-pill mb-8" style={{ background: 'rgba(132,204,22,0.15)', borderColor: 'rgba(132,204,22,0.3)', color: '#a3e635' }}>
            LET&apos;S WORK TOGETHER
          </div>
          <h2
            className="font-sans leading-[1.08] tracking-tight"
            style={{ fontSize: 'clamp(38px, 5vw, 56px)' }}
          >
            <span className="block font-medium text-white/70">Still fed up?</span>
            <span className="block font-black text-white mt-1">Good. Let&apos;s fix that.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[480px] font-sans text-[17px] sm:text-[18px] text-white/50">
            Stop hesitating. Book a scoping call today.
          </p>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href={SITE.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#84cc16] px-8 py-4 font-sans text-[15px] font-bold text-[#0d0e0c] shadow-lg shadow-[#84cc16]/20 transition-all duration-200 hover:bg-[#a3e635] hover:shadow-xl hover:shadow-[#84cc16]/25"
            >
              Book a Free Call
            </a>
            <a
              href="#work"
              className="rounded-lg border border-transparent px-8 py-4 font-sans text-[15px] font-semibold text-white/80 transition-all duration-200 hover:text-white hover:underline underline-offset-4"
            >
              Get Out More
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#E5E0D8]/50 bg-[#FAFAF7] px-4 sm:px-6 py-[96px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            {/* Logo + tagline + social icons */}
            <div className="flex flex-col lg:col-span-2">
              <div className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className="h-8 w-8">
                  <path d="M256,160L352,320L160,320Z M320,192L288,352L160,224Z" fill="#84cc16" fillRule="evenodd" opacity="0.9"/>
                </svg>
                <span className="font-sans text-lg font-bold text-[#111827]">Fedup Studio</span>
              </div>
              <p className="mt-3 max-w-[300px] font-sans text-[15px] leading-[1.7] text-[#4B5563]">
                We design and build digital products that actually convert.
              </p>
              <div className="mt-8 flex items-center gap-[12px]">
                {[
                  { href: 'https://twitter.com/fedupstudio', label: 'X (Twitter)', Icon: Twitter },
                  { href: 'https://linkedin.com/company/fedupstudio', label: 'LinkedIn', Icon: Linkedin },
                  { href: 'https://github.com/fedupstudio', label: 'GitHub', Icon: Github },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E0D8] bg-white text-[#4B5563] shadow-sm transition-all hover:border-[#84cc16]/40 hover:text-[#84cc16] hover:shadow-md"
                  >
                    <Icon className="h-[20px] w-[20px]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Middle: Company */}
            <div>
              <p className="mb-5 font-sans text-[12px] font-bold uppercase tracking-[0.15em] text-[#111827]">
                Company
              </p>
              <ul className="space-y-3.5">
                {[
                  { label: 'Work', href: '#work' },
                  { label: 'About', href: '#services' },
                  { label: 'Pricing', href: '#pricing' },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-sans text-[15px] text-[#4B5563] transition-colors hover:text-[#84cc16]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Contact */}
            <div>
              <p className="mb-5 font-sans text-[12px] font-bold uppercase tracking-[0.15em] text-[#111827]">
                Contact
              </p>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href={SITE.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[15px] text-[#4B5563] transition-colors hover:text-[#84cc16]"
                  >
                    Book a Call
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@fedup.studio"
                    className="font-sans text-[15px] text-[#4B5563] transition-colors hover:text-[#84cc16]"
                  >
                    hello@fedup.studio
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-[32px] border-t border-[#E5E0D8] pt-8">
            <p className="font-sans text-[13px] text-[#9CA3AF]">
              © 2026 Fedup Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
