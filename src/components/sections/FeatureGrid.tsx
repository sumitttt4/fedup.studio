'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Design meets Engineering',
    desc: 'We don’t just hand off static Figma files. We build robust, interactive Next.js interfaces that scale with your product.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    accent: 'bg-violet-50 text-violet-600 border-violet-100',
  },
  {
    title: 'Conversion over Decoration',
    desc: 'Every design decision is rooted in strategy. We prioritize intuitive UX, fast load times, and clear visual hierarchies.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    accent: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    title: 'Tight Feedback Loops',
    desc: 'No black-box agency drama. We embed into your Slack, iterate daily, and ship updates weekly with full transparency.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    accent: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    title: 'One Cohesive Vision',
    desc: 'From initial brand identity to the final React component, we handle the entire pipeline to ensure absolute quality control.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: 'bg-rose-50 text-rose-600 border-rose-100',
  },
];

export function FeatureGrid() {
  return (
    <section className="relative border-t border-black/10 py-24 px-6 lg:px-12 bg-[#FAF9F6]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c84307] mb-4">Why Fedup</p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#171717] leading-tight">
            The Fedup Standard
          </h2>
          <p className="mt-4 text-lg text-black/60 font-medium leading-relaxed">
            Part designers, part engineers — functioning as a direct extension of your own team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group p-8 sm:p-10 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl hover:border-black/10 transition-all duration-300"
            >
              <div className={`mb-6 w-12 h-12 flex items-center justify-center rounded-2xl border ${feature.accent}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium tracking-tight text-[#171717] mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-black/60 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}