import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

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
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#171717]">
      <header className="border-b border-black/10 bg-[#FAF9F6]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="h-4 w-4 rounded-sm bg-[#c84307]" />
            Fedup Studio
          </Link>
          <a href={MEETING_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#171717] px-5 py-2.5 text-sm font-semibold text-white">
            Book a Call
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c84307]">Pricing</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">Simple packages. Production-ready outcomes.</h1>
        <p className="mt-5 max-w-2xl text-lg text-black/70">
          Built for speed and outcomes. Start small, scale scope later, and keep quality consistent across design and development.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-2xl border p-7 ${tier.featured ? 'border-[#c84307]/40 bg-white shadow-lg' : 'border-black/10 bg-white'}`}
            >
              {tier.featured && (
                <p className="mb-4 inline-flex rounded-full bg-[#c84307]/10 px-3 py-1 text-xs font-semibold text-[#c84307]">Most popular</p>
              )}
              <h2 className="text-2xl font-semibold tracking-tight">{tier.name}</h2>
              <div className="mt-4 flex items-end gap-2">
                <p className="text-4xl font-bold tracking-tight">{tier.price}</p>
                <span className="pb-1 text-sm text-black/60">{tier.cadence}</span>
              </div>
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
          <p className="mt-3 max-w-2xl text-white/75">No long contracts. Clear scope, clear ownership, clear communication.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={MEETING_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#c84307] px-7 py-3.5 font-semibold text-white">
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
