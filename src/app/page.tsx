import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';

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

const WHY_FEATURES = [
  {
    title: 'We design AND dev',
    description:
      'No separate design and engineering teams. One workflow, zero translation loss.',
  },
  {
    title: 'Figma to production, no handoff',
    description:
      'What we design in Figma is exactly what ships. Pixel-perfect, every time.',
  },
  {
    title: 'Solo studio. You talk to the person doing the work.',
    description:
      'No account managers, no middlemen. Direct access to the team building your product.',
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

      {/* ── Marquee — bg #F0F0EB, 13px Inter 600, dark text, 30s ── */}
      <section className="overflow-hidden bg-[#F0F0EB] py-4">
        <div className="group [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div
            className="flex items-center gap-10 group-hover:[animation-play-state:paused]"
            style={{ width: 'max-content', animation: 'marquee-scroll 30s linear infinite' }}
          >
            {doubledTicker.map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="flex shrink-0 items-center gap-10 font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1A1A1A]"
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
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="mt-3 font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
                Projects we&apos;re proud of.
              </h2>
            </div>
            <p className="max-w-xs font-serif text-[15px] leading-[1.7] text-[#767676]">
              Real products, live links. No password-gated mockups.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* First card — full width, 320px image */}
            <a
              href={PROJECTS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-[#E5E0D8] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
            >
              <div className="relative overflow-hidden bg-[#E8E8E0]">
                <img
                  src={PROJECTS[0].screenshot}
                  alt={`${PROJECTS[0].name} screenshot`}
                  loading="lazy"
                  className="w-full h-[320px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#84cc16]/0 transition-all duration-300 group-hover:bg-[#84cc16]/8" />
              </div>
              <div className="flex items-start justify-between gap-6 p-6">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="font-sans text-[16px] font-semibold text-[#1A1A1A]">
                      {PROJECTS[0].name}
                    </h3>
                    <span className="rounded-full bg-[#84cc16]/10 px-3 py-1 font-sans text-xs font-medium text-[#84cc16]">
                      {PROJECTS[0].category}
                    </span>
                  </div>
                  <p className="font-serif text-[13px] leading-[1.7] text-[#767676]">
                    {PROJECTS[0].summary}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1 font-sans text-sm font-semibold text-[#84cc16] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pt-1">
                  View <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>

            {/* Row 2 — 2 equal cards, 220px image */}
            <div className="grid gap-6 md:grid-cols-2">
              {PROJECTS.slice(1).map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-[#E5E0D8] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <div className="relative overflow-hidden bg-[#E8E8E0]">
                    <img
                      src={project.screenshot}
                      alt={`${project.name} screenshot`}
                      loading="lazy"
                      className="w-full h-[220px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[#84cc16]/0 transition-all duration-300 group-hover:bg-[#84cc16]/8" />
                  </div>
                  <div className="p-5">
                    <div className="mb-1.5 flex items-center gap-3">
                      <h3 className="font-sans text-[16px] font-semibold text-[#1A1A1A]">
                        {project.name}
                      </h3>
                      <span className="rounded-full bg-[#84cc16]/10 px-3 py-1 font-sans text-xs font-medium text-[#84cc16]">
                        {project.category}
                      </span>
                    </div>
                    <p className="font-serif text-[13px] leading-[1.7] text-[#767676] line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Fedup — 2-col: features list left, tracker card right ── */}
      <section id="services" className="border-t border-[#E5E0D8] bg-[#F9F8F6] px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-16 text-center">
            <SectionLabel>Why Fedup</SectionLabel>
            <h2 className="mt-3 font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
              Built different, on purpose.
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

            {/* Left — 3 features, border-bottom separators */}
            <div>
              {WHY_FEATURES.map((f, idx) => (
                <div
                  key={f.title}
                  className={`py-8 ${idx > 0 ? 'border-t border-[#E5E0D8]' : ''}`}
                >
                  <h3 className="font-sans text-[18px] font-semibold text-[#1A1A1A]">
                    {f.title}
                  </h3>
                  <p className="mt-2 font-serif text-[14px] leading-[1.7] text-[#767676]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — project tracker mock card */}
            <div className="relative mx-auto w-full max-w-[380px]">
              <div className="absolute -inset-4 rounded-3xl bg-[#84cc16]/8 blur-2xl" />
              <div className="relative rounded-2xl border border-[#E5E0D8] bg-white p-6 shadow-md">
                {/* Card header */}
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#767676]">
                      Project Timeline
                    </p>
                    <p className="mt-0.5 font-sans text-[14px] font-semibold text-[#1A1A1A]">
                      fedup.studio × Your Project
                    </p>
                  </div>
                  <span className="rounded-full bg-[#ECF1E4] px-2.5 py-1 font-sans text-[11px] font-semibold text-[#4a730c]">
                    Active
                  </span>
                </div>

                {/* Progress bars */}
                <div className="space-y-4">
                  {TRACKER_ITEMS.map((t) => (
                    <div key={t.label}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="font-sans text-[13px] font-medium text-[#1A1A1A]">
                          {t.label}
                        </span>
                        <span className="font-sans text-[12px] text-[#767676]">
                          {t.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E5E0D8]">
                        <div
                          className="h-full rounded-full bg-[#84cc16] transition-all duration-700"
                          style={{ width: `${t.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#F9F8F6] px-4 py-3">
                  <span className="text-base">🚀</span>
                  <div>
                    <p className="font-sans text-[12px] font-semibold text-[#1A1A1A]">
                      Launching in 2 weeks
                    </p>
                    <p className="font-sans text-[11px] text-[#767676]">
                      Figma file → Live site
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="border-t border-[#E5E0D8] bg-white px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-16 text-center">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="mt-3 font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
              From zero to shipped.
            </h2>
          </div>

          <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {/* Dotted connector — desktop */}
            <div
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dotted border-[#E5E0D8] md:block"
              aria-hidden="true"
            />

            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col items-start gap-3 md:items-center md:text-center"
              >
                {/* 64px step number */}
                <span className="relative z-10 block bg-white px-1 font-sans font-black leading-none text-[#84cc16]"
                  style={{ fontSize: '64px' }}>
                  {step.number}
                </span>

                {/* Mobile vertical connector */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-[28px] top-[70px] h-10 w-px border-l-2 border-dotted border-[#E5E0D8] md:hidden" />
                )}

                <div>
                  <h3 className="font-sans text-[18px] font-semibold text-[#1A1A1A]">
                    {step.label}
                  </h3>
                  <p className="mt-1.5 font-serif text-[13px] leading-[1.7] text-[#767676]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials — 3 cards ── */}
      <section className="border-t border-[#E5E0D8] bg-[#F9F8F6] px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-14 text-center">
            <SectionLabel>Client Love</SectionLabel>
            <h2 className="mt-3 font-sans text-[40px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
              What they&apos;re saying.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-[#E5E0D8] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div>
                  <span className="mb-3 block font-sans text-4xl font-black leading-none text-[#84cc16]">
                    &ldquo;
                  </span>
                  <p className="font-serif text-[15px] italic leading-[1.8] text-[#1A1A1A]">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-[#E5E0D8] pt-5">
                  {/* Avatar — bg #84cc16/30, text #84cc16 */}
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-sans text-xs font-bold text-[#84cc16]"
                    style={{ background: 'rgba(132,204,22,0.18)' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-sans text-[14px] font-semibold text-[#1A1A1A]">{t.name}</p>
                    <p className="font-serif text-[13px] text-[#767676]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="border-t border-[#E5E0D8] bg-white px-6 py-24">
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

          <div className="mx-auto grid max-w-[800px] gap-6 md:grid-cols-2">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'border-[#84cc16] bg-[#1A1A1A] shadow-xl'
                    : 'border-[#E5E0D8] bg-white hover:shadow-md'
                }`}
              >
                {/* Badge — top RIGHT */}
                {plan.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#84cc16] px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-white">
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
                      className={`font-sans font-black leading-none ${
                        plan.featured ? 'text-white' : 'text-[#1A1A1A]'
                      }`}
                      style={{ fontSize: '40px' }}
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

                {/* Features — ✦ marks */}
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-[1px] shrink-0 text-[#84cc16] leading-none">✦</span>
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
                      ? 'bg-[#84cc16] text-[#1A1A1A] hover:bg-[#a3e635]'
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
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#84cc16]">
            Let&apos;s work together
          </p>
          <h2 className="mt-4 font-sans font-black leading-[1.1] text-white"
            style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
            Still fed up?
          </h2>
          <h2 className="font-sans font-black leading-[1.1] text-[#84cc16]"
            style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
            Good. Let&apos;s fix that.
          </h2>
          <p className="mx-auto mt-4 max-w-[400px] font-serif text-[16px] leading-[1.75] text-[#767676]">
            Book a free 30-minute call. We&apos;ll scope your project, answer your questions,
            and tell you exactly how to get it done.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={SITE.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#84cc16] px-8 py-4 font-sans text-sm font-semibold text-[#1A1A1A] shadow-lg shadow-[#84cc16]/20 transition-all duration-150 hover:bg-[#a3e635]"
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

      {/* ── Footer — light bg #F9F8F6, 2-col ── */}
      <footer className="border-t border-[#E5E0D8] bg-[#F9F8F6] px-6 py-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-12 md:grid-cols-2">

            {/* Left: logo + tagline + social icons */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[#84cc16] text-lg leading-none">✦</span>
                <span className="font-sans text-base font-bold text-[#1A1A1A]">Fedup Studio</span>
              </div>
              <p className="mt-2 font-serif text-[13px] italic text-[#767676]">
                We design and build digital products that actually convert.
              </p>
              <div className="mt-4 flex items-center gap-2.5">
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
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E0D8] text-[#767676] transition-colors hover:border-[#84cc16]/40 hover:text-[#1A1A1A]"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: 2 mini-columns */}
            <div className="grid grid-cols-2 gap-8 md:justify-end">
              {/* Company */}
              <div>
                <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#767676]">
                  Company
                </p>
                <ul className="space-y-3">
                  {[
                    { label: 'Work', href: '#work' },
                    { label: 'About', href: '#services' },
                    { label: 'Pricing', href: '#pricing' },
                  ].map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="font-sans text-[14px] text-[#767676] transition-colors hover:text-[#1A1A1A]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#767676]">
                  Contact
                </p>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={SITE.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[14px] text-[#767676] transition-colors hover:text-[#84cc16]"
                    >
                      Book a Call
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@fedup.studio"
                      className="font-sans text-[14px] text-[#767676] transition-colors hover:text-[#1A1A1A]"
                    >
                      hello@fedup.studio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-[#E5E0D8] py-4">
            <p className="font-sans text-[12px] text-[#767676]">
              © 2026 Fedup Studio. Built with{' '}
              <span className="text-[#84cc16]">✦</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
