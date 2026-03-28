import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  Twitter,
  Linkedin,
  Github,
  Layers,
  Zap,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

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

const WHY_ITEMS = [
  {
    icon: Layers,
    title: 'We design AND dev',
    description:
      'No hand-off friction. One team takes you from Figma frames to deployed code — so nothing gets lost in translation.',
  },
  {
    icon: Zap,
    title: 'Figma to production',
    description:
      'Every pixel designed in Figma ships exactly as intended. Pixel-perfect, accessible, and performant in production.',
  },
  {
    icon: Users,
    title: 'Solo studio, no mess',
    description:
      'You talk directly to the people building your product. No account managers, no bloated teams, no surprises.',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    label: 'Discovery',
    description:
      'We deep-dive into your goals, users, and competitors to define a clear design direction.',
  },
  {
    number: '02',
    label: 'Design',
    description:
      'High-fidelity Figma designs with your brand system, reviewed and refined with you.',
  },
  {
    number: '03',
    label: 'Dev',
    description:
      'Clean Next.js + Tailwind code — responsive, accessible, and optimized for speed.',
  },
  {
    number: '04',
    label: 'Deploy',
    description:
      'Launch on your infrastructure. We stay on for QA, fixes, and post-launch support.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Fedup Studio shipped our landing page in under two weeks. The quality blew our previous agency's work out of the water — and it actually converts.",
    name: 'Arjun Mehta',
    role: 'Founder, Glyph Software',
    initials: 'AM',
  },
  {
    quote:
      "What I loved most was that I never had to chase them. Fast, transparent, and the designs genuinely look premium. We've seen a 34% lift in sign-ups.",
    name: 'Priya Nair',
    role: 'Head of Product, SaaS startup',
    initials: 'PN',
  },
  {
    quote:
      "From Figma to production in 10 days. Seriously impressive execution. The codebase is clean and our engineers were happy too.",
    name: 'Sam Torres',
    role: 'CTO, Nova Analytics',
    initials: 'ST',
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

// ─── Logo ─────────────────────────────────────────────────────────────────────

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
          <div className="marquee-track flex items-center gap-10 group-hover:[animation-play-state:paused]">
            {doubledTicker.map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="flex shrink-0 items-center gap-10 font-sans text-sm font-semibold uppercase tracking-widest text-[#767676]"
              >
                {item}
                <span className="text-[#84cc16] text-base leading-none" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work Grid ── */}
      <section id="work" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#84cc16]">
                Selected Work
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
                Projects we&apos;re proud of
              </h2>
            </div>
            <p className="max-w-sm font-serif text-sm leading-relaxed text-[#767676]">
              Real products, live links. No password-gated mockups or concept work.
            </p>
          </div>

          {/* Asymmetric 2-col grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Big card — spans 2 rows on desktop */}
            <a
              href={PROJECTS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative md:row-span-2 flex flex-col overflow-hidden rounded-xl border border-[#E5E0D8] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-[#F9F8F6]">
                <img
                  src={PROJECTS[0].screenshot}
                  alt={`${PROJECTS[0].name} screenshot`}
                  loading="lazy"
                  className="w-full h-[260px] md:h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#84cc16]/0 transition-all duration-300 group-hover:bg-[#84cc16]/10" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="mb-3 inline-block rounded-full bg-[#ECF1E4] px-3 py-1 font-sans text-xs font-semibold text-[#4a730c]">
                    {PROJECTS[0].category}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-[#1A1A1A]">{PROJECTS[0].name}</h3>
                  <p className="font-serif text-sm leading-relaxed text-[#767676]">
                    {PROJECTS[0].summary}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-1.5 font-sans text-sm font-semibold text-[#84cc16] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View project <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>

            {/* Second project */}
            <a
              href={PROJECTS[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E0D8] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-[#F9F8F6]">
                <img
                  src={PROJECTS[1].screenshot}
                  alt={`${PROJECTS[1].name} screenshot`}
                  loading="lazy"
                  className="w-full h-[200px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#84cc16]/0 transition-all duration-300 group-hover:bg-[#84cc16]/10" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-[#ECF1E4] px-3 py-1 font-sans text-xs font-semibold text-[#4a730c]">
                    {PROJECTS[1].category}
                  </span>
                  <h3 className="mb-1.5 text-lg font-bold text-[#1A1A1A]">{PROJECTS[1].name}</h3>
                  <p className="font-serif text-sm leading-relaxed text-[#767676] line-clamp-2">
                    {PROJECTS[1].summary}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 font-sans text-sm font-semibold text-[#84cc16] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View project <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>

            {/* Third project */}
            <a
              href={PROJECTS[2].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E0D8] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-[#F9F8F6]">
                <img
                  src={PROJECTS[2].screenshot}
                  alt={`${PROJECTS[2].name} screenshot`}
                  loading="lazy"
                  className="w-full h-[200px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#84cc16]/0 transition-all duration-300 group-hover:bg-[#84cc16]/10" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-[#ECF1E4] px-3 py-1 font-sans text-xs font-semibold text-[#4a730c]">
                    {PROJECTS[2].category}
                  </span>
                  <h3 className="mb-1.5 text-lg font-bold text-[#1A1A1A]">{PROJECTS[2].name}</h3>
                  <p className="font-serif text-sm leading-relaxed text-[#767676] line-clamp-2">
                    {PROJECTS[2].summary}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 font-sans text-sm font-semibold text-[#84cc16] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View project <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Fedup ── */}
      <section id="services" className="border-t border-[#E5E0D8] bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#84cc16]">
              Why Fedup
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
              Built different, on purpose.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {WHY_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-[#E5E0D8] bg-[#F9F8F6] p-8 transition-all duration-300 hover:border-[#84cc16]/50 hover:bg-white hover:shadow-md"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#ECF1E4] transition-colors group-hover:bg-[#84cc16]/20">
                    <Icon className="h-5 w-5 text-[#84cc16]" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[#1A1A1A]">{item.title}</h3>
                  <p className="font-serif text-sm leading-relaxed text-[#767676]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="border-t border-[#E5E0D8] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#84cc16]">
              How we work
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
              From zero to shipped.
            </h2>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4">
            {/* Connector line — desktop only */}
            <div
              className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-[#E5E0D8] md:block"
              aria-hidden="true"
            />

            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col items-start md:items-center md:text-center"
              >
                <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#84cc16] bg-white font-sans text-lg font-bold text-[#84cc16] shadow-sm">
                  {step.number}
                </div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-8 top-16 h-8 w-px bg-[#E5E0D8] md:hidden" />
                )}
                <h3 className="mb-2 text-base font-bold text-[#1A1A1A]">{step.label}</h3>
                <p className="font-serif text-sm leading-relaxed text-[#767676]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="border-t border-[#E5E0D8] bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#84cc16]">
              Client Love
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
              What they&apos;re saying.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-xl border border-[#E5E0D8] bg-[#F9F8F6] p-7 transition-all duration-300 hover:shadow-md hover:border-[#84cc16]/40"
              >
                <div>
                  <Quote className="mb-4 h-6 w-6 text-[#84cc16]" />
                  <p className="font-serif text-sm leading-relaxed text-[#1A1A1A]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#84cc16] font-sans text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                    <p className="font-serif text-xs text-[#767676]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="border-t border-[#E5E0D8] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#84cc16]">
              Pricing
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
              Simple, honest pricing.
            </h2>
            <p className="mt-4 font-serif text-[#767676]">
              No retainer lock-ins. No surprise invoices. Upgrade or pause anytime.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
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
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#84cc16] px-4 py-1 font-sans text-xs font-bold text-white">
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
                      className={`font-sans text-4xl font-bold ${
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
                    className={`mt-3 font-serif text-sm leading-relaxed ${
                      plan.featured ? 'text-white/70' : 'text-[#767676]'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#84cc16]" />
                      <span
                        className={`font-serif text-sm ${
                          plan.featured ? 'text-white/85' : 'text-[#1A1A1A]'
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
      <section className="border-t border-[#E5E0D8] bg-[#1A1A1A] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#84cc16]">
            Let&apos;s work together
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Still fed up?{' '}
            <span className="text-[#84cc16]">Good.</span>
            <br />
            Let&apos;s fix that.
          </h2>
          <p className="mt-6 font-serif text-lg leading-relaxed text-white/60">
            Book a free 30-minute call. We&apos;ll scope your project, answer your questions, and tell you exactly what it takes to get it done.
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

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-[#1A1A1A] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand */}
            <div>
              <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
                <LogoMark className="h-8 w-8" />
                <span className="font-sans text-base font-bold text-white">fedup.studio</span>
              </Link>
              <p className="mt-3 font-serif text-sm leading-relaxed text-white/50">
                Design engineering studio focused on brand, websites, and product interfaces that convert.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://twitter.com/fedupstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Twitter className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://linkedin.com/company/fedupstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com/fedupstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {[
                  { href: '#work', label: 'Work' },
                  { href: '#services', label: 'Services' },
                  { href: '#process', label: 'Process' },
                  { href: '#pricing', label: 'Pricing' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                Services
              </p>
              <ul className="space-y-2.5">
                {[
                  'Brand Identity',
                  'Web Design',
                  'Design Systems',
                  'Figma to Code',
                  'Landing Pages',
                ].map((s) => (
                  <li key={s}>
                    <span className="font-sans text-sm text-white/50">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                Contact
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={SITE.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Book a call →
                  </a>
                </li>
                <li>
                  <span className="font-sans text-sm text-white/40">
                    India · Remote Worldwide
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="font-sans text-xs text-white/35">
              © {new Date().getFullYear()} Fedup Studio. Crafted for ambitious teams.
            </p>
            <div className="flex gap-6">
              <a href="#work" className="font-sans text-xs text-white/35 transition-colors hover:text-white/60">Work</a>
              <a href="#pricing" className="font-sans text-xs text-white/35 transition-colors hover:text-white/60">Pricing</a>
              <Link href="/pricing" className="font-sans text-xs text-white/35 transition-colors hover:text-white/60">Packages</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
