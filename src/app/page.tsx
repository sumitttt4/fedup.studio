import type { Metadata } from 'next';
import Link from 'next/link';
import { HalftoneFooter } from '@/components/layout/HalftoneFooter';
import { SITE } from '@/lib/site';

// Use framer-motion logic strictly on client, so separating out interactions.
// For now, we'll just import simple motion utilities where needed in client components or keep it simple.
import { AnimatedHero } from '@/components/sections/AnimatedHero';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { TeamSection } from '@/components/sections/TeamSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const MEETING_LINK = SITE.meetingLink;
const SITE_HOST = SITE.domain.replace('https://', '');

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};


const featuredProjects = [
  {
    name: 'Glyph Software',
    url: 'https://glyph.software',
    tags: ['Design', 'Development'],
    screenshot: '/Glyph.png',
    summary:
      'End-to-end product and marketing experience focused on clarity, performance, and a high-trust SaaS visual system.',
  },
  {
    name: 'Hotel MLV Grand',
    url: 'https://hotelmlvgrand.vercel.app/',
    tags: ['Design', 'Development'],
    screenshot: 'https://image.thum.io/get/width/1200/noanimate/https://hotelmlvgrand.vercel.app/',
    summary:
      'Hospitality website crafted for premium presentation, fast page speed, and mobile-first booking-friendly UX.',
  },
  {
    name: 'Nova Dashboard',
    url: 'https://nova-seven-sepia.vercel.app/dashboard',
    tags: ['Dashboard UI', 'Design', 'Development'],
    screenshot: 'https://image.thum.io/get/width/1200/noanimate/https://nova-seven-sepia.vercel.app/dashboard',
    summary:
      'Data-heavy dashboard designed for decision speed with a clean visual hierarchy and smooth interaction flow.',
  },
];

// Duplicate for infinite marquee loop
const marqueeProjects = [...featuredProjects, ...featuredProjects];

const faqs = [
  {
    question: 'How fast can we start?',
    answer: 'Most projects begin within 3-5 days after scope alignment and kickoff call.',
  },
  {
    question: 'Do you handle both design and development?',
    answer: 'Yes. We deliver complete design + development execution with one team and one timeline.',
  },
  {
    question: 'How do revisions work?',
    answer: 'We run collaborative weekly review cycles and iterate quickly based on agreed goals and feedback.',
  },
  {
    question: 'Can you support us post-launch?',
    answer: 'Yes, through a monthly partner plan for enhancements, experiments, and maintenance.',
  },
];

// Helper component for the intersection node
const IntersectionNode = ({ className = '' }: { className?: string }) => (
  <div className={`absolute h-1.5 w-1.5 bg-[#171717] z-10 ${className}`} />
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] bg-grid-pattern text-[#171717] font-sans selection:bg-[#c84307] selection:text-white">
      {/* Header outside main grid */}
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#FAF9F6]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 relative">
          <Link href="/" className="flex items-center gap-2">
            {/* Minimal logo mark */}
            <div className="h-4 w-4 rounded-sm bg-[#c84307]" />
            <span className="text-lg font-bold tracking-tight">
              Fedup Studio
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#work" className="hover:text-[#c84307] transition-colors">Work</a>
            <a href="#pricing" className="hover:text-[#c84307] transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-[#c84307] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#c84307] transition-colors">Contact</a>
          </nav>
          <a
            href={MEETING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="book-call-header"
            className="rounded bg-[#171717] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black"
          >
            Book a 15-min Call
          </a>
        </div>
      </header>

      {/* Main Structural Grid Container */}
      <div className="mx-auto max-w-6xl border-x border-black/10 relative">

        {/* Hero Section */}
        <AnimatedHero />

        {/* Featured Projects — Marquee */}
        <section id="work" className="relative border-t border-black/10 py-24 overflow-hidden">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />

          <div className="px-6 lg:px-12 mb-14">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <ScrollReveal>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c84307] mb-4">Selected Work</p>
                <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#171717] max-w-lg">Projects we&apos;re proud of</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="max-w-sm text-sm text-black/50 font-medium leading-relaxed">Real products, live links. No password-gated mockups or concept work.</p>
              </ScrollReveal>
            </div>
          </div>

          {/* Marquee row */}
          <div className="group relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="marquee-track-slow flex gap-6 group-hover:[animation-play-state:paused]">
              {marqueeProjects.map((project, idx) => (
                <a
                  key={`${project.name}-${idx}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card block shrink-0 w-[340px] sm:w-[420px] md:w-[480px]"
                >
                  <article className="h-full rounded-2xl border border-black/10 bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-black/20 hover:-translate-y-1">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/5 bg-[#fafafa]">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-black/10" />
                        <span className="w-2 h-2 rounded-full bg-black/10" />
                        <span className="w-2 h-2 rounded-full bg-black/10" />
                      </div>
                      <div className="mx-auto rounded-md bg-black/[0.04] px-3 py-0.5 text-[10px] text-black/35 font-medium truncate max-w-[200px]">
                        {project.url.replace('https://', '')}
                      </div>
                    </div>
                    {/* Screenshot */}
                    <div className="overflow-hidden">
                      <img
                        src={project.screenshot}
                        alt={`${project.name} screenshot`}
                        loading="lazy"
                        className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover object-top transition-transform duration-700 group-hover/card:scale-[1.03]"
                      />
                    </div>
                    {/* Meta */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-serif font-medium text-[#171717]">{project.name}</h3>
                        <span className="text-black/25 group-hover/card:text-[#c84307] transition-colors text-lg">↗</span>
                      </div>
                      <p className="text-xs text-black/50 font-medium leading-relaxed line-clamp-2">{project.summary}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-black/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* The Fedup Standard */}
        <FeatureGrid />

        {/* Team Section */}
        <TeamSection />

        {/* Pricing Snapshot */}
        <section id="pricing" className="relative border-t border-black/10 py-24 px-6 lg:px-12 bg-white">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />
          <div className="mx-auto flex max-w-6xl flex-col items-center">
            <div className="text-center max-w-3xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Pricing</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif font-medium tracking-tight">Reasonable plans for modern teams.</h2>
              <p className="mt-4 text-black/70 font-medium">Simple, transparent pricing. No surprise fees. Upgrade or pause whenever.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
              <ScrollReveal delay={0.1}>
                <div className="h-full rounded-[2rem] border border-black/10 p-8 sm:p-10 flex flex-col hover:border-[#c84307]/50 transition-colors">
                  <h3 className="text-2xl font-serif font-medium text-[#171717]">MVP Launch</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-serif font-medium">$1,490</span>
                    <span className="text-sm text-black/50">flat</span>
                  </div>
                  <p className="mt-4 text-sm text-black/60 font-medium leading-relaxed">Perfect for early stage startups needing a high-converting landing page to start gathering users.</p>
                  
                  <ul className="mt-8 space-y-4 flex-1">
                    {['Custom visual identity', 'High-converting Landing Page', 'Mobile responsive', 'Basic SEO setup', 'Delivered in 1-2 weeks'].map((item) => (
                      <li key={item} className="flex flex-start gap-3 text-sm font-semibold text-black/70">
                        <svg className="w-5 h-5 text-[#c84307] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link href="/pricing" className="block w-full rounded-xl bg-white border border-black/10 px-6 py-4 text-sm font-semibold text-center hover:bg-black/5 transition-colors">
                      Learn more
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="h-full rounded-[2rem] border-2 border-[#171717] bg-[#171717] p-8 sm:p-10 flex flex-col text-white relative shadow-xl">
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#c84307] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-serif font-medium">Design & Dev Partner</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-serif font-medium">$1,990</span>
                    <span className="text-sm text-white/50">/ mo</span>
                  </div>
                  <p className="mt-4 text-sm text-white/70 font-medium leading-relaxed">Pause or cancel anytime. Get ongoing design and development support directly in your Slack.</p>
                  
                  <ul className="mt-8 space-y-4 flex-1">
                    {['Unlimited requests', 'Direct Slack channel', '48hr average turnaround', 'Design + Full Stack Dev', 'Pause/Cancel anytime'].map((item) => (
                      <li key={item} className="flex flex-start gap-3 text-sm font-semibold text-white/90">
                        <svg className="w-5 h-5 text-[#c84307] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <a href={MEETING_LINK} target="_blank" rel="noopener noreferrer" className="block w-full rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#171717] text-center hover:bg-gray-100 transition-colors">
                      Book a call
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="mt-12">
              <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 hover:text-[#c84307] transition-colors underline underline-offset-4">
                View all pricing plans
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative border-t border-black/10 py-20 px-6 lg:px-12">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />

          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-center text-[#171717]">Frequently asked questions</h2>
            </ScrollReveal>
            <div className="mt-10 space-y-3">
              {faqs.map((item, idx) => (
                <ScrollReveal key={item.question} delay={idx * 0.05}>
                  <details className="group rounded-2xl border border-black/5 bg-white p-6 hover:shadow-md transition-shadow [&_summary::-webkit-details-marker]:hidden">
                    <summary className="cursor-pointer list-none flex items-center justify-between text-base font-semibold text-[#171717]">
                      {item.question}
                      <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] text-black/40 group-open:rotate-180 transition-transform">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-sm text-black/60 leading-relaxed font-medium">{item.answer}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="relative bg-[#171717] text-white overflow-hidden border-t border-black/10">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />

          <div className="px-6 pt-16 pb-10 lg:px-20 lg:pt-24 relative z-10">
            <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-sm">
              <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c84307]">Let&apos;s build together</p>
                  <h2 className="mt-4 text-3xl md:text-5xl font-serif font-medium tracking-tight">Ready to launch a high-converting digital presence?</h2>
                  <p className="mt-4 text-sm md:text-base text-white/75">We design and build premium web experiences for founders and teams who need speed, clarity, and execution.</p>
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <a
                    href={MEETING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#171717] text-center transition hover:opacity-90"
                  >
                    Book a 15-min Call
                  </a>
                  <Link
                    href="/pricing"
                    className="rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-center hover:bg-white/10 transition"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>

              <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-4">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-[#c84307]" />
                    <span className="text-lg font-bold tracking-tight">Fedup Studio</span>
                  </div>
                  <p className="text-sm text-white/65 leading-relaxed">Design engineering studio focused on brand, websites, and product interfaces that convert.</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55 mb-4">Quick Links</p>
                  <div className="flex flex-col gap-2 text-sm text-white/80">
                    <a href="#work" className="hover:text-white transition-colors">Work</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                    <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                    <Link href="/pricing" className="hover:text-white transition-colors">Packages</Link>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55 mb-4">Contact</p>
                  <div className="flex flex-col gap-2 text-sm text-white/80">
                    <a href={MEETING_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Schedule via Cal.com</a>
                    <a href={`https://${SITE_HOST}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{SITE_HOST}</a>
                    <span className="text-white/50">India · Remote Worldwide</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55 mb-4">Socials</p>
                  <div className="flex flex-col gap-2 text-sm text-white/80">
                    <a href="https://twitter.com/fedupstudio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter / X</a>
                    <a href="https://linkedin.com/company/fedupstudio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/fedupstudio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HalftoneFooter text="Fedup" />

          <div className="px-6 py-6 border-t border-white/10 flex flex-col gap-3 md:flex-row items-center justify-between text-xs text-white/50 font-medium z-10 relative lg:px-20">
            <p>Fedup Studio &copy; {new Date().getFullYear()}. Crafted for ambitious teams.</p>
            <div className="flex gap-5">
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
