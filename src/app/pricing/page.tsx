import Link from 'next/link';

const tiers = [
  {
    name: 'Launch',
    description: 'Design-focused package for brands starting fresh or repositioning.',
    idealFor: 'Early-stage teams and local premium businesses',
    timeline: '3–5 weeks',
    includes: ['Brand direction + visual identity', 'Website UX/UI design', 'Launch-ready design system'],
  },
  {
    name: 'Scale',
    description: 'Marketing-led package built to grow traffic and qualified leads.',
    idealFor: 'Businesses with an existing site needing demand generation',
    timeline: '4-week setup, then ongoing optimization',
    includes: ['Performance campaign setup', 'SEO/content strategy', 'Weekly reporting + iteration'],
  },
  {
    name: 'Full Stack Partner',
    description: 'End-to-end package for teams who want one agency across all functions.',
    idealFor: 'Founders that want speed with unified accountability',
    timeline: '4–8 weeks to launch, then growth cycles',
    includes: ['Brand + design + development', 'Analytics and funnel setup', 'Growth marketing and optimization'],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Fedup Studio
          </Link>
          <a href="mailto:hello@fedup.studio" className="rounded-full bg-[#c84307] px-5 py-2.5 text-sm font-semibold text-white">
            Book a Call
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Pricing</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">Packages built around outcomes.</h1>
        <p className="mt-5 max-w-2xl text-lg text-black/70">
          Start with the package that matches your current growth stage. We can expand scope as your goals evolve.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <article key={tier.name} className="rounded-2xl border border-black/10 p-7">
              <h2 className="text-2xl font-semibold tracking-tight">{tier.name}</h2>
              <p className="mt-2 text-sm text-black/70">{tier.description}</p>
              <div className="mt-4 space-y-2 text-sm text-black/65">
                <p>
                  <span className="font-semibold text-black/85">Ideal for:</span> {tier.idealFor}
                </p>
                <p>
                  <span className="font-semibold text-black/85">Timeline:</span> {tier.timeline}
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-black/70">
                {tier.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-black/10 bg-[#171717] p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Next step</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Tell us what you&apos;re building. We&apos;ll recommend the right package.</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="mailto:hello@fedup.studio" className="rounded-full bg-[#c84307] px-7 py-3.5 font-semibold text-white">
              Book a Call
            </a>
            <Link href="/" className="rounded-full border border-white/25 px-7 py-3.5 font-semibold">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
