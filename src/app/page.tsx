import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Design & Branding',
    description:
      'Brand identity, UI/UX, and web design systems that make your business look sharp and consistent across every customer touchpoint.',
    points: ['Brand strategy + visual direction', 'UX for conversion-first websites', 'Design systems for scale'],
  },
  {
    title: 'Development',
    description:
      'High-performance websites, apps, and custom products in Next.js + React, shipped fast with clean architecture.',
    points: ['Marketing websites and landing pages', 'Product interfaces and dashboards', 'Custom integrations + CMS workflows'],
  },
  {
    title: 'Marketing & Growth',
    description:
      'Performance-led growth across paid ads, social, SEO, and content to turn attention into revenue.',
    points: ['Paid acquisition strategy', 'SEO + content planning', 'Weekly reporting and optimization'],
  },
];

const packages = [
  {
    name: 'Design Only',
    who: 'For teams that need a premium brand and website experience.',
    outcomes: ['Brand identity and positioning direction', 'Website UX/UI with conversion-first structure', 'Production-ready design files and system'],
  },
  {
    name: 'Marketing Only',
    who: 'For businesses ready to scale traffic and demand generation.',
    outcomes: ['Paid ads and campaign setup', 'SEO and content roadmap', 'Weekly performance optimization'],
  },
  {
    name: 'Full Service',
    who: 'For founders who want one team for design, build, and growth.',
    outcomes: ['Brand + website design and development', 'Launch and tracking setup', 'Ongoing growth marketing support'],
  },
];

export default function Home() {
  return (
    <main className="bg-white text-[#171717]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Fedup Studio
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-[#c84307]">Services</a>
            <a href="#work" className="hover:text-[#c84307]">Work</a>
            <Link href="/pricing" className="hover:text-[#c84307]">Pricing</Link>
            <a href="#contact" className="hover:text-[#c84307]">Contact</a>
          </nav>
          <a
            href="mailto:hello@fedup.studio"
            data-cta="book-call-header"
            className="rounded-full bg-[#c84307] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Book a Call
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-28 pt-20 md:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Full-service agency</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          We design, build, and grow your brand.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70">
          Fedup Studio is a full-service design, development & marketing agency built for founders and teams that want real
          outcomes, not handoffs.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:hello@fedup.studio"
            data-cta="book-call-hero"
            className="rounded-full bg-[#c84307] px-7 py-3.5 font-semibold text-white"
          >
            Book a Call
          </a>
          <a
            href="#work"
            data-cta="see-work-hero"
            className="rounded-full border border-black/20 px-7 py-3.5 font-semibold hover:border-black/40"
          >
            See Our Work
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Services</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-black/10 p-7">
              <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
              <p className="mt-3 text-black/70">{service.description}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-black/65">
                {service.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Case Studies</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Real projects. Real execution.</h2>
          </div>
          <p className="max-w-md text-sm text-black/65">From strategy to delivery to growth, every case is handled by one integrated team.</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <article className="rounded-3xl border border-black/10 p-6 md:p-8">
            <Image
              src="/Glyph.png"
              alt="MLV Grand restaurant platform"
              width={1200}
              height={720}
              className="h-auto w-full rounded-2xl border border-black/10"
              priority
            />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Featured project</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">MLV Grand</h3>
            <p className="mt-3 text-black/70">
              We designed, built, and marketed a modern restaurant platform—from brand direction and website UX to campaign
              execution and analytics setup.
            </p>
            <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
              <div className="rounded-xl border border-black/10 p-4">
                <p className="text-2xl font-bold text-[#c84307]">+62%</p>
                <p className="text-black/65">Qualified traffic</p>
              </div>
              <div className="rounded-xl border border-black/10 p-4">
                <p className="text-2xl font-bold text-[#c84307]">3.4x</p>
                <p className="text-black/65">Campaign ROAS</p>
              </div>
              <div className="rounded-xl border border-black/10 p-4">
                <p className="text-2xl font-bold text-[#c84307]">-28%</p>
                <p className="text-black/65">Cost per lead</p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-black/10 p-6 md:p-8">
            <Image
              src="/Glyph.png"
              alt="AgentOps dashboard experience"
              width={900}
              height={700}
              className="h-auto w-full rounded-2xl border border-black/10"
            />
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">AgentOps</h3>
            <p className="mt-3 text-sm text-black/70">
              Product UI refinement and growth landing optimization for a technical brand focused on adoption and trust.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-black/65">
              <li>• Improved core dashboard clarity</li>
              <li>• Sharpened feature messaging</li>
              <li>• +31% demo-to-trial conversion</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Process</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {['Understand', 'Build', 'Grow'].map((step) => (
            <div key={step} className="rounded-2xl border border-black/10 p-8">
              <p className="text-3xl font-semibold tracking-tight">{step}</p>
              <p className="mt-2 text-sm text-black/65">
                {step === 'Understand' && 'Audit goals, audience, and gaps before we design solutions.'}
                {step === 'Build' && 'Ship brand, product, and marketing assets with fast iteration cycles.'}
                {step === 'Grow' && 'Optimize campaigns and conversion flows using clear performance data.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Client feedback</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            '“Fedup felt like an in-house team from day one. Fast, clear, and accountable.”',
            '“They took us from vague idea to launch-ready brand and site in weeks.”',
            '“Our growth became measurable. Every sprint tied back to outcomes.”',
          ].map((quote) => (
            <blockquote key={quote} className="rounded-2xl border border-black/10 p-6 text-black/75">
              {quote}
            </blockquote>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Packages</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Choose by outcome, not line items.</h2>
          </div>
          <Link href="/pricing" className="font-semibold text-[#c84307] hover:underline">
            View detailed pricing →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="rounded-2xl border border-black/10 p-7">
              <h3 className="text-2xl font-semibold tracking-tight">{pkg.name}</h3>
              <p className="mt-2 text-sm text-black/65">{pkg.who}</p>
              <ul className="mt-4 space-y-2 text-black/70">
                {pkg.outcomes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#171717] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Contact</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s build something together.</h2>
            <a href="mailto:hello@fedup.studio" className="mt-4 block text-xl text-white/85">
              hello@fedup.studio
            </a>
          </div>
          <a
            href="mailto:hello@fedup.studio"
            data-cta="book-call-footer"
            className="rounded-full bg-[#c84307] px-7 py-3.5 font-semibold text-white"
          >
            Book a Call
          </a>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-black/65 md:flex-row md:items-center md:justify-between">
          <p>Fedup Studio</p>
          <div className="flex gap-4">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <Link href="/pricing">Pricing</Link>
            <a href="#contact">Contact</a>
          </div>
          <p>Made with ♥ in India.</p>
        </div>
      </footer>
    </main>
  );
}
