import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { ArrowRight, CheckCircle2, Twitter, Linkedin, Github } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// ─── Shared style tokens ──────────────────────────────────────────────────────
// Section label: font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#767676]
// Section headline: font-sans text-[40px] font-bold leading-[1.1] text-[#1A1A1A]
// Body / desc: font-serif text-[15px] leading-[1.7] text-[#767676]

// ─── Data ────────────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  'Brand Identity',
  'Web Design',
  'Mobile Apps',
  'Design Systems',
  'UI/UX',
  'Development',
  'Landing Pages',
  'Figma to Code',
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
      'Data-heavy dashboard designed for decision speed with a clean visual hierarchy and smooth interaction flow.',
  },
];

const LEFT_FEATURES = [
  {
    title: 'No handoff mess',
    description: 'Design and dev in one team. Nothing lost in translation.',
  },
  {
    title: 'Direct communication',
    description: "You deal with the makers, not an account manager.",
  },
];

const RIGHT_FEATURES = [
  {
    title: 'Figma to production',
    description: 'What we design is exactly what ships. Pixel-perfect.',
  },
  {
    title: 'Speed without compromise',
    description: 'Most projects go from kickoff to live in under 2 weeks.',
  },
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
    label: 'Dev',
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
      'Working with Fedup Studio felt like having a senior designer and developer on call. The quality is exceptional — and they actually deliver on time.',
    name: 'Sarah Chen',
    role: 'Head of Product',
    initials: 'SC',
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

const DELIVERY_STEPS = [
  { label: 'Figma Design', days: 'Days 1–3' },
  { label: 'Review & Revise', days: 'Days 4–5' },
  { label: 'Development', days: 'Days 6–10' },
  { label: 'Deploy & Launch', days: 'Days 11–14' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#767676]">
      {children}
    </p>
  );
}

function SectionHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
      {children}
    </h2>
  );
}

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M256,160L352,320L160,320Z M320,192L288,352L160,224Z"
        fill="#84cc16"
        fillRule="evenodd"
        opacity="0.9"
      />
    </svg>
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

      {/* ── Marquee Ticker ── */}
      <section className="relative overflow-hidden border-y border-[#E5E0D8] bg-white py-5">
        <div className="group [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {/* Slow marquee — 55s cycle */}
          <div
            className="flex items-center gap-10 group-hover:[animation-play-state:paused]"
            style={{ width: 'max-content', animation: 'marquee-scroll 55s linear infinite' }}
          >
            {doubledTicker.map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="flex shrink-0 items-center gap-10 font-sans text-[14px] font-semibold uppercase tracking-[0.18em] text-[#767676]"
              >
                {item}
                <span className="text-[#84cc16] leading-none" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work Grid ── */}
      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          {/* Header */}
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="mt-3 font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
                Projects we&apos;re proud of
              </h2>
            </div>
            <p className="max-w-xs font-serif text-[15px] leading-[1.7] text-[#767676]">
              Real products, live links. No password-gated mockups.
            </p>
          </div>

          {/* Card layout: full-width first, 2-equal below */}
          <div className="flex flex-col gap-6">

            {/* First card — full width, 300px image */}
            <a
              href={PROJECTS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-xl border border-[#E5E0D8] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden bg-[#F9F8F6]">
                {/* Category badge — top left */}
                <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 font-sans text-xs font-semibold text-[#4a730c] backdrop-blur-sm border border-[#E5E0D8]">
                  {PROJECTS[0].category}
                </span>
                <img
                  src={PROJECTS[0].screenshot}
                  alt={`${PROJECTS[0].name} screenshot`}
                  loading="lazy"
                  className="w-full h-[300px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#84cc16]/0 transition-all duration-300 group-hover:bg-[#84cc16]/10" />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-sans text-xl font-bold text-[#1A1A1A]">{PROJECTS[0].name}</h3>
                  <p className="mt-1 font-serif text-[15px] leading-[1.7] text-[#767676]">
                    {PROJECTS[0].summary}
                  </p>
                </div>
                <div className="ml-6 flex shrink-0 items-center gap-1.5 font-sans text-sm font-semibold text-[#84cc16] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>

            {/* Row 2 — 2 equal cards, 200px image */}
            <div className="grid gap-6 md:grid-cols-2">
              {PROJECTS.slice(1).map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E0D8] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <div className="relative overflow-hidden bg-[#F9F8F6]">
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 font-sans text-xs font-semibold text-[#4a730c] backdrop-blur-sm border border-[#E5E0D8]">
                      {project.category}
                    </span>
                    <img
                      src={project.screenshot}
                      alt={`${project.name} screenshot`}
                      loading="lazy"
                      className="w-full h-[200px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[#84cc16]/0 transition-all duration-300 group-hover:bg-[#84cc16]/10" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-sans text-lg font-bold text-[#1A1A1A]">{project.name}</h3>
                      <p className="mt-1.5 font-serif text-[15px] leading-[1.7] text-[#767676] line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 font-sans text-sm font-semibold text-[#84cc16] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View project <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Fedup — Bento layout ── */}
      <section id="services" className="border-t border-[#E5E0D8] bg-white px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          {/* Header */}
          <div className="mb-16 text-center">
            <SectionLabel>Why Fedup</SectionLabel>
            <h2 className="mt-3 font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
              Built different, on purpose.
            </h2>
          </div>

          {/* Bento: 2 features | center mockup | 2 features */}
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1fr_340px_1fr]">

            {/* Left features — no card border, just whitespace */}
            <div className="flex flex-col gap-12">
              {LEFT_FEATURES.map((f) => (
                <div key={f.title}>
                  <h3 className="font-sans text-[17px] font-bold text-[#1A1A1A]">{f.title}</h3>
                  <p className="mt-1.5 font-serif text-[15px] leading-[1.7] text-[#767676]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center UI mockup card */}
            <div className="relative mx-auto w-full max-w-[340px]">
              {/* Outer glow */}
              <div className="absolute -inset-3 rounded-3xl bg-[#84cc16]/8 blur-xl" />
              <div className="relative rounded-2xl border border-[#E5E0D8] bg-white p-5 shadow-xl">
                {/* Card header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#84cc16]">
                      <span className="font-sans text-[11px] font-black text-white">F</span>
                    </div>
                    <span className="font-sans text-[13px] font-semibold text-[#1A1A1A]">
                      Project Timeline
                    </span>
                  </div>
                  <span className="rounded-full bg-[#ECF1E4] px-2.5 py-0.5 font-sans text-[11px] font-semibold text-[#4a730c]">
                    2 weeks
                  </span>
                </div>

                {/* Delivery steps */}
                <div className="space-y-2">
                  {DELIVERY_STEPS.map((step) => (
                    <div
                      key={step.label}
                      className="flex items-center justify-between rounded-lg bg-[#F9F8F6] px-3 py-2.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="h-4 w-4 shrink-0 text-[#84cc16]"
                          fill="none"
                          viewBox="0 0 16 16"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l3.5 3.5L13 4.5"
                          />
                        </svg>
                        <span className="font-sans text-[13px] font-medium text-[#1A1A1A]">
                          {step.label}
                        </span>
                      </div>
                      <span className="font-sans text-[11px] text-[#767676]">{step.days}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#84cc16] px-3 py-2.5">
                  <span className="font-sans text-[13px] font-semibold text-white">
                    🚀 Figma file → Live site in 2 weeks
                  </span>
                </div>
              </div>
            </div>

            {/* Right features */}
            <div className="flex flex-col gap-12">
              {RIGHT_FEATURES.map((f) => (
                <div key={f.title}>
                  <h3 className="font-sans text-[17px] font-bold text-[#1A1A1A]">{f.title}</h3>
                  <p className="mt-1.5 font-serif text-[15px] leading-[1.7] text-[#767676]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="border-t border-[#E5E0D8] px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-16 text-center">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="mt-3 font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
              From zero to shipped.
            </h2>
          </div>

          {/* Horizontal timeline — desktop; vertical — mobile */}
          <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">

            {/* Dotted connector line — desktop only, runs through center of numbers */}
            <div
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden border-t-2 border-dotted border-[#E5E0D8] md:block"
              aria-hidden="true"
            />

            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col items-start gap-3 md:items-center md:text-center"
              >
                {/* Large step number — 48px, #84cc16, font-black */}
                <span className="relative z-10 block rounded-full bg-white px-1 font-sans text-5xl font-black leading-none text-[#84cc16]">
                  {step.number}
                </span>

                {/* Vertical connector on mobile */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-[23px] top-14 h-10 w-px border-l-2 border-dotted border-[#E5E0D8] md:hidden" />
                )}

                <div>
                  <h3 className="font-sans text-base font-bold text-[#1A1A1A]">{step.label}</h3>
                  <p className="mt-1.5 font-serif text-[15px] leading-[1.7] text-[#767676]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="border-t border-[#E5E0D8] bg-white px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-14 text-center">
            <SectionLabel>Client Love</SectionLabel>
            <h2 className="mt-3 font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
              What they&apos;re saying.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-xl border border-[#E5E0D8] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#84cc16]/40"
              >
                {/* Large opening quote */}
                <div>
                  <span className="mb-4 block font-sans text-5xl font-black leading-none text-[#84cc16]">
                    &ldquo;
                  </span>
                  {/* Quote in Merriweather italic */}
                  <p className="font-serif text-[16px] italic leading-[1.7] text-[#1A1A1A]">
                    {t.quote}
                  </p>
                </div>
                {/* Attribution */}
                <div className="mt-8 flex items-center gap-3 border-t border-[#E5E0D8] pt-6">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ECF1E4] font-sans text-xs font-bold text-[#4a730c]">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                    <p className="font-sans text-[12px] text-[#767676]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="border-t border-[#E5E0D8] px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-14 text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-3 font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
              Simple, honest pricing.
            </h2>
            <p className="mt-4 font-serif text-[15px] leading-[1.7] text-[#767676]">
              No retainer lock-ins. No surprise invoices. Upgrade or pause anytime.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl border p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'border-[#84cc16] bg-[#1A1A1A] shadow-xl'
                    : 'border-[#E5E0D8] bg-white hover:shadow-md hover:border-[#84cc16]/40'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#84cc16] px-4 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3
                    className={`font-sans text-xl font-bold ${
                      plan.featured ? 'text-white' : 'text-[#1A1A1A]'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span
                      className={`font-sans text-4xl font-black ${
                        plan.featured ? 'text-white' : 'text-[#1A1A1A]'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`font-serif text-sm ${
                        plan.featured ? 'text-white/60' : 'text-[#767676]'
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`mt-3 font-serif text-[15px] leading-[1.7] ${
                      plan.featured ? 'text-white/70' : 'text-[#767676]'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#84cc16]" />
                      <span
                        className={`font-serif text-[15px] leading-snug ${
                          plan.featured ? 'text-white/80' : 'text-[#1A1A1A]'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={SITE.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full rounded-lg py-3 text-center font-sans text-sm font-semibold transition-all duration-150 ${
                    plan.featured
                      ? 'bg-[#84cc16] text-white hover:bg-[#68a211]'
                      : 'border-2 border-[#84cc16] text-[#84cc16] hover:bg-[#84cc16] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#767676] underline underline-offset-4 transition-colors hover:text-[#84cc16]"
            >
              View all plans <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="border-t border-[#E5E0D8] bg-[#1A1A1A] px-6 py-24">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#84cc16]">
            Let&apos;s work together
          </p>
          <h2 className="mt-4 font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-white md:text-[52px]">
            Still fed up?{' '}
            <span className="text-[#84cc16]">Good.</span>
            <br />
            Let&apos;s fix that.
          </h2>
          <p className="mt-6 font-serif text-[17px] leading-[1.75] text-white/60">
            Book a free 30-minute call. We&apos;ll scope your project, answer your questions,
            and tell you exactly what it takes to get it done.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={SITE.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#84cc16] px-8 py-4 font-sans text-sm font-semibold text-white shadow-lg shadow-[#84cc16]/20 transition-all duration-150 hover:bg-[#68a211] hover:shadow-xl"
            >
              Book a Free Call
            </a>
            <a
              href="#work"
              className="rounded-lg border border-white/20 px-8 py-4 font-sans text-sm font-semibold text-white transition-all duration-150 hover:border-white/40 hover:bg-white/5"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer — 2 columns ── */}
      <footer className="border-t border-white/10 bg-[#1A1A1A] px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8">

            {/* Left: logo + tagline + socials */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[#84cc16] text-lg leading-none">✦</span>
                <span className="font-sans text-base font-bold text-white">Fedup Studio</span>
              </div>
              <p className="mt-2 font-serif text-[15px] italic text-white/40">
                Fed up with average design?
              </p>
              <div className="mt-5 flex items-center gap-2.5">
                {[
                  { href: 'https://twitter.com/fedupstudio', label: 'Twitter', Icon: Twitter },
                  { href: 'https://linkedin.com/company/fedupstudio', label: 'LinkedIn', Icon: Linkedin },
                  { href: 'https://github.com/fedupstudio', label: 'GitHub', Icon: Github },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: links */}
            <div className="md:flex md:justify-end">
              <ul className="space-y-3">
                {[
                  { label: 'Work', href: '#work' },
                  { label: 'Services', href: '#services' },
                  { label: 'Process', href: '#process' },
                  { label: 'Pricing', href: '#pricing' },
                  { label: 'Book a Call →', href: SITE.meetingLink, external: true },
                ].map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm font-medium text-[#84cc16] transition-colors hover:text-[#a3e635]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="font-sans text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="font-sans text-[12px] text-white/30">
              © {new Date().getFullYear()} Fedup Studio. Crafted for ambitious teams.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
