import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HalftoneFooter } from '@/components/layout/HalftoneFooter';
import { SITE } from '@/lib/site';

const MEETING_LINK = SITE.meetingLink;

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
    screenshot: 'https://image.thum.io/get/width/1200/noanimate/https://glyph.software',
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

const services = [
  {
    title: 'Design & Branding',
    price: '$1,490',
    description:
      'Brand identity, UI/UX, and web design systems that make your business look sharp and consistent across every customer touchpoint.',
    points: ['Brand strategy + visual direction', 'UX for conversion-first websites', 'Design systems for scale'],
  },
  {
    title: 'Development',
    price: '$2,990',
    description:
      'High-performance websites, apps, and custom products in Next.js + React, shipped fast with clean architecture.',
    points: ['Marketing websites and landing pages', 'Product interfaces and dashboards', 'Custom integrations + CMS workflows'],
  },
  {
    title: 'Marketing & Growth',
    price: '$1,990/mo',
    description:
      'Performance-led growth across paid ads, social, SEO, and content to turn attention into revenue.',
    points: ['Paid acquisition strategy', 'SEO + content planning', 'Weekly reporting and optimization'],
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
            <a href="#services" className="hover:text-[#c84307] transition-colors">Services</a>
            <a href="#work" className="hover:text-[#c84307] transition-colors">Work</a>
            <a href="#pricing" className="hover:text-[#c84307] transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-[#c84307] transition-colors">Contact</a>
          </nav>
          <a
            href={MEETING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="book-call-header"
            className="rounded bg-[#171717] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black"
          >
            Start building
          </a>
        </div>
      </header>

      {/* Main Structural Grid Container */}
      <div className="mx-auto max-w-6xl border-x border-black/10 relative">

        {/* Hero Section */}
        <section className="relative px-6 pb-32 pt-32 text-center flex flex-col items-center">
          <p className="text-sm font-semibold text-[#c84307] mb-6 inline-flex items-center gap-2 bg-[#c84307]/10 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#c84307] rounded-full animate-pulse" />
            For fast moving engineering teams.
          </p>
          <h1 className="mt-5 max-w-4xl text-6xl font-serif font-medium leading-[1.1] tracking-tight md:text-8xl text-[#171717]">
            We design, build and
            <br />
            grow your <span className="text-[#c84307] italic">brand</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-black/70 font-medium">
            We empower founders and technical teams to design, develop, and
            scale highly-converting visual experiences.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={MEETING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="book-call-hero"
              className="rounded bg-[#171717] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black"
            >
              Start building
            </a>
            <a
              href="#work"
              data-cta="see-work-hero"
              className="rounded bg-white px-7 py-3.5 text-sm font-semibold text-[#171717] shadow-sm border border-black/10 transition-colors hover:bg-black/5"
            >
              View portfolio
            </a>
          </div>
        </section>

        {/* Animated Dashboard Image Section */}
        <section id="work" className="relative w-full border-t border-black/10 overflow-hidden group py-16 px-6 lg:px-20 flex justify-center perspective-1000">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />

          <div className="w-full max-w-5xl rounded-xl border border-black/10 bg-white p-2 shadow-2xl relative translate-y-8 hover:-translate-y-2 hover:rotate-x-1 transition-all duration-700 ease-out hover:shadow-[0_20px_80px_rgba(0,0,0,0.1)] transform-gpu will-change-transform">
            <div className="w-full h-8 border-b border-black/5 flex items-center px-4 mb-2 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-black/10 hover:bg-red-400 transition-colors" />
              <div className="w-2.5 h-2.5 rounded-full bg-black/10 hover:bg-yellow-400 transition-colors" />
              <div className="w-2.5 h-2.5 rounded-full bg-black/10 hover:bg-green-400 transition-colors" />
            </div>

            <div className="relative overflow-hidden rounded bg-[#fafafa]">
              <Image
                src="/Glyph.png"
                alt="Platform Experience"
                width={1200}
                height={720}
                className="h-auto w-full object-cover transform scale-[1.01] hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </section>


        {/* Featured Projects */}
        <section className="relative border-t border-black/10 py-20 px-6 lg:px-12">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />

          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Selected Work</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#171717]">Final showcase for design + development.</h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-black/65">Each project includes a visual preview and live link so clients can instantly evaluate quality, style, and execution.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, idx) => (
                <article
                  key={project.name}
                  className={`group rounded-2xl border border-black/10 bg-white/95 p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#c84307]/30 ${idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="mb-5 overflow-hidden rounded-xl border border-black/10 bg-[#f5f5f5]">
                      <img
                        src={project.screenshot}
                        alt={`${project.name} screenshot`}
                        loading="lazy"
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </a>

                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#c84307]/10 px-3 py-1 text-xs font-semibold text-[#c84307]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-medium tracking-tight text-[#171717]">{project.name}</h3>
                  <p className="mt-3 text-sm text-black/65 leading-relaxed">{project.summary}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#171717] underline underline-offset-4 transition-colors group-hover:text-[#c84307]"
                  >
                    Visit live project
                    <span aria-hidden>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Breathing Space */}
        <div className="w-full h-24 sm:h-32 xl:h-40 relative border-t border-black/10">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />
        </div>

        {/* Why You Will Love Us */}
        <section className="relative border-t border-black/10 py-24 flex flex-col items-center">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-center mb-16 text-[#171717]">
            Why you will love us?
          </h2>

          <div className="grid md:grid-cols-2 gap-4 w-full px-6 lg:px-12 max-w-4xl mx-auto bg-[#f5f5f5]/80 p-4 rounded-[2rem]">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                ),
                title: 'Unlimited Revisions',
                desc: 'We offer unlimited revisions within a set period, ensuring the best outcomes and complete client satisfaction.',
                shadow: 'shadow-[0_0_20px_rgba(34,197,94,0.3)]'
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-[#a855f7]" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                ),
                title: 'Effortless Experience',
                desc: 'We value your time, keeping our process efficient and stress-free from start to finish.',
                shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]'
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-4 4c-1.33-1.33-2.67-1.33-4 0m8 0c-1.33 1.33-2.67 1.33-4 0" />
                  </svg>
                ),
                title: 'One Team for All Design Needs',
                desc: 'From logos to websites and product design, we handle it all. no need for multiple agencies.',
                shadow: 'shadow-[0_0_20px_rgba(236,72,153,0.3)]'
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-[#eab308]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5c-1.74 0-3.41-.81-4.48-2.18l1.41-1.41C7.75 13.91 8.86 14.5 10 14.5s2.25-.59 3.07-1.59l1.41 1.41C13.41 15.69 11.74 16.5 10 16.5zm-2.5-6c-.83 0-1.5-.67-1.5-1.5S6.67 7.5 7.5 7.5 9 8.17 9 9s-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5S11.67 7.5 12.5 7.5 14 8.17 14 9s-.67 1.5-1.5 1.5z" />
                  </svg>
                ),
                title: 'Fast Turnaround Time',
                desc: 'We work quickly and share updates every 24-48 hours, with a fast and responsive communication flow.',
                shadow: 'shadow-[0_0_20px_rgba(234,179,8,0.3)]'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] p-8 sm:p-10 flex flex-col items-center text-center border border-black/[0.03] shadow-sm transition-all">
                <div className={`mb-6 w-10 h-10 rounded-full flex items-center justify-center bg-white ${feature.shadow}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-medium tracking-tight text-[#171717] mb-3">{feature.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Breathing Space */}
        <div className="w-full h-24 sm:h-32 xl:h-40 relative border-t border-black/10">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />
        </div>

        {/* Services Section */}
        <section id="services" className="relative border-t border-black/10 py-24 flex flex-col items-center">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />

          <h2 className="text-5xl md:text-6xl font-serif font-medium text-center mb-16 text-[#171717]">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 w-full px-6 lg:px-12 max-w-6xl">
            {services.map((service, idx) => (
              <article key={service.title} className="p-3 bg-[#f5f5f5] rounded-[2rem] border border-black/5 flex flex-col hover:shadow-lg transition-shadow">
                <div className="bg-white p-8 rounded-[1.5rem] shadow-sm mb-6 flex flex-col items-start relative border border-black/5">
                  <h3 className="text-2xl font-serif font-medium mb-3 text-[#171717]">{service.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed font-medium">{service.description}</p>
                </div>
                <div className="px-6 pb-4 flex-1 flex flex-col relative w-full">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-sm text-black/50 font-medium tracking-wide">Starts at :</span>
                    <span className="text-3xl font-serif font-medium text-[#171717]">{service.price}</span>
                  </div>
                  <ul className="space-y-4 mb-10 w-full pt-4 border-t border-black/5">
                    {service.points.map((point) => (
                      <li key={point} className="text-xs font-semibold text-black/70 border-b border-black/5 pb-4 w-full text-left">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={MEETING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto rounded-xl bg-[#171717] px-4 py-4 text-sm font-semibold text-white text-center hover:bg-black transition-colors"
                  >
                    Book a 15min Call
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* Pricing Snapshot */}
        <section id="pricing" className="relative border-t border-black/10 py-20 px-6 lg:px-12">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Pricing</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-medium tracking-tight">Reasonable plans for modern teams.</h2>
            <p className="mt-4 max-w-2xl text-black/70">Start at <span className="font-semibold text-[#171717]">$1,490</span> for launch projects, grow to <span className="font-semibold text-[#171717]">$2,990</span> for full websites, or retain us from <span className="font-semibold text-[#171717]">$1,990/mo</span>.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/pricing" className="rounded bg-[#171717] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black">
                View full pricing
              </Link>
              <a href={MEETING_LINK} target="_blank" rel="noopener noreferrer" className="rounded bg-white px-7 py-3.5 text-sm font-semibold text-[#171717] shadow-sm border border-black/10 transition-colors hover:bg-black/5">
                Get proposal
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="relative bg-[#171717] text-white overflow-hidden border-t border-black/10">
          <IntersectionNode className="-mt-[3px] -ml-[3px] left-0 top-0" />
          <IntersectionNode className="-mt-[3px] -mr-[3px] right-0 top-0" />

          <div className="px-6 py-20 lg:py-32 lg:px-20 text-center flex flex-col items-center z-10 relative">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8 flex items-center justify-center backdrop-blur-md">
              <div className="w-6 h-6 rounded-sm bg-[#c84307]" />
            </div>
            <h2 className="text-4xl font-serif font-medium tracking-tight md:text-6xl mb-10">Let&apos;s build together.</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href={MEETING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-8 py-4 text-sm font-semibold text-[#171717] shadow-sm transition-transform hover:scale-105"
              >
                Book a 15min Call
              </a>
            </div>
          </div>

          <HalftoneFooter text="Fedup" />

          <div className="px-6 py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 font-medium z-10 relative">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p>Fedup Studio &copy; {new Date().getFullYear()}. Made with &hearts; in India.</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
