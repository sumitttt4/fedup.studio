'use client';
import { motion } from 'framer-motion';
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE } from '@/lib/site';

const testimonials = [
  {
    quote: "Fedup Studio shipped our entire SaaS frontend in 3 weeks. The quality was indistinguishable from an in-house senior engineer.",
    name: "Arjun Mehta",
    role: "CTO, Glyph Software",
  },
  {
    quote: "Blank Figma to a fully deployed Next.js site with animations, CMS, and SEO in under two weeks.",
    name: "Priya Sharma",
    role: "Founder, Tripsygo",
  },
  {
    quote: "An agency that actually understands both design AND code. No lost-in-translation moments.",
    name: "Rahul Kapoor",
    role: "Product Lead, Duhani",
  },
];

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Goals, scope, timeline — aligned in one 15-min call.' },
  { num: '02', title: 'Design', desc: 'High-fidelity Figma mockups delivered in 3–5 days.' },
  { num: '03', title: 'Build', desc: 'Pixel-perfect Next.js code. Deployed and tested.' },
  { num: '04', title: 'Grow', desc: 'Ongoing iterations, experiments, and scaling.' },
];

const team = [
  { name: 'Sumit', role: 'Design Engineer', initials: 'S' },
  { name: 'Nishant', role: 'Growth Lead', initials: 'N' },
  { name: 'Ashwanth', role: 'Marketing Strategist', initials: 'A' },
];

export function TeamSection() {
  return (
    <>
      {/* ── Testimonials ── */}
      <section className="relative border-t border-black/10 py-28 px-6 lg:px-12 bg-[#FAF9F6]">
        <div className="mx-auto max-w-6xl">
          {/* Featured quote — large editorial */}
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c84307] mb-8">Testimonials</p>
              <blockquote className="text-3xl md:text-[2.75rem] font-serif font-medium text-[#171717] leading-[1.2] tracking-tight">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-px h-4 bg-black/15" />
                <p className="text-sm font-semibold text-[#171717]">{testimonials[0].name}</p>
                <p className="text-sm text-black/35 font-medium">{testimonials[0].role}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Supporting quotes */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {testimonials.slice(1).map((t, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-black/[0.06] bg-white p-7 md:p-8">
                  <blockquote className="text-[15px] font-medium text-black/60 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-px h-3.5 bg-black/10" />
                    <p className="text-[13px] font-semibold text-[#171717]">{t.name}</p>
                    <p className="text-[13px] text-black/30">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="relative border-t border-black/10 py-28 px-6 lg:px-12 bg-white">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c84307] mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#171717] leading-tight mb-16">
              How it works
            </h2>
          </ScrollReveal>

          {/* Steps row with connecting line */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-black/[0.06]" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {processSteps.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="relative lg:pr-8">
                    {/* Dot on line */}
                    <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/[0.08] mb-6 relative z-10">
                      <span className="text-[11px] font-bold text-[#c84307] tracking-wider">{s.num}</span>
                    </div>
                    <span className="lg:hidden text-[11px] font-bold text-[#c84307] tracking-wider mb-3 block">{s.num}</span>
                    <h3 className="text-lg font-semibold text-[#171717] mb-1.5">{s.title}</h3>
                    <p className="text-[13px] text-black/40 font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="relative border-t border-black/10 py-28 px-6 lg:px-12 bg-[#FAF9F6]">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <ScrollReveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c84307] mb-4">Team</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#171717] leading-tight">
                Small team, senior craft
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="max-w-xs text-sm text-black/35 font-medium leading-relaxed">
                No juniors, no hand-offs. You work directly with the people who ship.
              </p>
            </ScrollReveal>
          </div>

          {/* Team row */}
          <div className="grid md:grid-cols-3 gap-4">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <motion.div
                  className="group bg-white rounded-2xl border border-black/[0.06] p-6 flex items-center gap-5 cursor-default"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
                >
                  <div className="w-11 h-11 rounded-full bg-[#171717] flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-white">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#171717]">{member.name}</h3>
                    <p className="text-[13px] text-black/35 font-medium">{member.role}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Dark callout */}
          <ScrollReveal delay={0.12}>
            <div className="mt-6 rounded-2xl bg-[#171717] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-medium text-white">
                  Engineers who design. Designers who code.
                </h3>
                <p className="text-[13px] text-white/35 font-medium mt-1.5 max-w-md">
                  Nothing gets lost between Figma and production. One team, one workflow.
                </p>
              </div>
              <motion.a
                href={SITE.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#c84307] px-6 py-3 text-[13px] font-semibold text-white shrink-0 cursor-pointer overflow-hidden relative isolate"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring' as const, stiffness: 400, damping: 20 }}
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-white/20" />
                Work with us
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7h10M8.5 3.5 12 7l-3.5 3.5" />
                </svg>
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}