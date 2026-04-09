import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { CinematicReveal } from '@/components/landing/CinematicReveal';
import { ScatteredGallery } from '@/components/landing/ScatteredGallery';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from '@/components/landing/AnimatedSections';
import { FAQAccordion } from '@/components/landing/FAQ';
import { CalEmbed } from '@/components/landing/CalEmbed';
import { ArrowRight, Check, Twitter, Linkedin, Github } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// ─── Data ────────────────────────────────────────────────────────────────────


const SERVICES = [
  { name: 'Brand Identity', desc: 'Logos, color systems, typography, and visual guidelines that capture your startup’s DNA.' },
  { name: 'UI/UX Design', desc: 'Intuitive, high-craft interfaces designed to reduce friction and elevate the user journey.' },
  { name: 'Design Systems', desc: 'Scalable component libraries built for consistency across your entire product ecosystem.' },
  { name: 'Framer / Webflow Sites', desc: 'High-converting marketing pages developed rapidly with zero technical debt.' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery', desc: 'We dive deep into your product, audience, and goals to align on the strategic direction.' },
  { num: '02', title: 'Strategy', desc: 'Mapping user journeys, defining the brand voice, and creating the structural blueprint.' },
  { num: '03', title: 'Design', desc: 'Crafting pixel-perfect, high-fidelity interfaces and interactions that wow your users.' },
  { num: '04', title: 'Deliver', desc: 'Handing off clean code, structured files, and comprehensive design systems.' },
];

const PROJECTS = [
  {
    name: 'Glyph Software',
    category: 'SaaS Platform · Design & Dev',
    color: '#E5E5E5',
  },
  {
    name: 'Nova Dashboard',
    category: 'Dashboard UI · Design System',
    color: '#F0F0F0',
  },
  {
    name: 'Hotel MLV Grand',
    category: 'Hospitality · Web Experience',
    color: '#EDEDED',
  },
];

const PRICING = [
  { tier: 'Starter', price: '$799', desc: 'Ideal for MVPs, personal brands, or a quick landing page that needs to look incredible.', features: ['1 Landing Page Design', 'Mobile Responsive', 'Basic Brand Direction', 'Figma Source Files', '5-7 Day Delivery'] },
  { tier: 'Growth', price: '$1,999', isPopular: true, desc: 'The full package for startups ready to launch with a complete brand and web presence.', features: ['Full Brand Identity', 'Multi-page Website (up to 5)', 'Framer or Next.js Dev', 'Custom Animations', 'SEO Optimized', '2-3 Weeks Delivery'] },
  { tier: 'Partner', price: '$1,199', period: '/mo', desc: 'Ongoing design and dev support. Like having a design team on speed dial.', features: ['Unlimited Design Requests', 'UI/UX & Web Development', 'Priority Turnaround (48h)', 'Dedicated Slack Channel', 'Pause or Cancel Anytime'] },
];

const FAQ_ITEMS = [
  { question: 'I have a tight budget. Can we still work together?', answer: 'Absolutely. Our Starter plan exists for exactly this reason. We believe great design shouldn\'t be gatekept behind agency-level pricing. Let\'s find a scope that works for you.' },
  { question: 'What exactly do I get at the end?', answer: 'You get everything — Figma source files, production-ready code (if applicable), brand guidelines, and all the assets. You own 100% of the work. No hidden fees, no licensing tricks.' },
  { question: 'How fast can you start?', answer: 'Most projects kick off within 3-5 business days of booking. For urgent launches, we can accommodate rush timelines — just mention it on the call.' },
  { question: 'Do you build the site or just design it?', answer: 'Both. We design in Figma and develop in Framer, Webflow, or Next.js depending on what your project needs. You get a live, deployed website — not just a mockup.' },
  { question: 'What if I don\'t like the first draft?', answer: 'Every project includes revision rounds baked in. We work iteratively — sharing progress early and often so there are no surprises at the finish line.' },
  { question: 'How does the monthly Partner plan work?', answer: 'Think of it like a design subscription. You submit requests via Slack, we work through them one at a time. Need a landing page Monday and social assets Wednesday? Done. Pause anytime if things slow down.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111]">
      <Navbar />
      <Hero />


      {/* ── Services (Compact Colorful Bento) ── */}
      <section id="services" className="px-6 py-24 sm:py-32 bg-[#F7F7F7] relative">
        <div className="mx-auto max-w-[1120px]">
          <AnimatedSection className="mb-14">
            <h2 className="font-display text-[36px] sm:text-[56px] font-bold tracking-tight text-[#1A1A1A] max-w-[600px] leading-[1.05]">
              Everything you need to <span className="text-[#FF4400]">stand out.</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Card 1: UI/UX Design — Hover Warm Sand */}
            <AnimatedSection delay={0.05} className="group relative rounded-[1.5rem] p-6 overflow-hidden bg-white min-h-[200px] flex flex-col justify-between cursor-default shadow-sm hover:shadow-md border border-[#E5E5E5] hover:border-[#E8DFD0] hover:bg-[#F5EFE6] transition-all duration-500 hover:-translate-y-1">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#FF4400] group-hover:bg-[#1A1A1A] flex items-center justify-center mb-4 group-hover:scale-110 transition-colors duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-[#1A1A1A] tracking-[-0.01em] mb-1 transition-colors duration-500">UI/UX Design</h3>
                <p className="font-sans text-[13px] text-[#1A1A1A]/60 leading-[1.5] transition-colors duration-500">Pixel-perfect interfaces that convert.</p>
              </div>
            </AnimatedSection>

            {/* Card 2: Brand Identity — Hover Soft Charcoal */}
            <AnimatedSection delay={0.1} className="group relative rounded-[1.5rem] p-6 overflow-hidden bg-white min-h-[200px] flex flex-col justify-between cursor-default shadow-sm hover:shadow-md border border-[#E5E5E5] hover:border-[#333] hover:bg-[#1A1A1A] transition-all duration-500 hover:-translate-y-1">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#FF4400] group-hover:bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-[#1A1A1A] group-hover:text-white tracking-[-0.01em] mb-1 transition-colors duration-500">Brand Identity</h3>
                <p className="font-sans text-[13px] text-[#1A1A1A]/60 group-hover:text-white/60 leading-[1.5] transition-colors duration-500">Logos, colors & type systems.</p>
              </div>
            </AnimatedSection>

            {/* Card 3: Web Dev — Hover Accent Orange */}
            <AnimatedSection delay={0.15} className="group relative rounded-[1.5rem] p-6 overflow-hidden bg-white min-h-[200px] flex flex-col justify-between cursor-default shadow-sm hover:shadow-md border border-[#E5E5E5] hover:border-[#E63D00] hover:bg-[#FF4400] transition-all duration-500 hover:-translate-y-1">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#FF4400] group-hover:bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-[#1A1A1A] group-hover:text-white tracking-[-0.01em] mb-1 transition-colors duration-500">Web Dev</h3>
                <p className="font-sans text-[13px] text-[#1A1A1A]/60 group-hover:text-white/80 leading-[1.5] transition-colors duration-500">Framer, Next.js & Webflow.</p>
              </div>
            </AnimatedSection>

            {/* Card 4: Design Systems — Hover Cool Light Gray */}
            <AnimatedSection delay={0.2} className="group relative rounded-[1.5rem] p-6 overflow-hidden bg-white min-h-[200px] flex flex-col justify-between cursor-default shadow-sm hover:shadow-md border border-[#E5E5E5] hover:border-[#D5D9E2] hover:bg-[#EAECF0] transition-all duration-500 hover:-translate-y-1">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#FF4400] group-hover:bg-[#1A1A1A] flex items-center justify-center mb-4 group-hover:scale-110 transition-colors duration-500">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-[#1A1A1A] tracking-[-0.01em] mb-1 transition-colors duration-500">Design Systems</h3>
                <p className="font-sans text-[13px] text-[#1A1A1A]/60 leading-[1.5] transition-colors duration-500">Scalable component libraries.</p>
              </div>
            </AnimatedSection>
            
          </div>
        </div>
      </section>

      {/* ── Beyond Design (Add-on) ── */}
      <section className="px-6 pb-32 -mt-8 bg-[#F7F7F7]">
        <div className="mx-auto max-w-[1120px]">
          <AnimatedSection>
            <div className="bg-[#111111] rounded-[2rem] p-10 sm:p-16 flex flex-col md:flex-row justify-between gap-12 overflow-hidden relative shadow-md">
              <div 
                className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'5\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} 
              />
              
              <div className="relative z-10 md:w-[45%]">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 mb-8">
                  <span className="font-sans text-[11px] font-bold text-[#A1A1AA] uppercase tracking-widest">Optional Add-on</span>
                </div>
                <h2 className="font-display text-[32px] sm:text-[40px] font-bold tracking-tight text-[#FAFAFA] leading-[1.1] mb-6">
                  Beyond Design.
                </h2>
                <p className="font-sans text-[16px] sm:text-[18px] text-[#A1A1AA] leading-[1.6]">
                  Most studios deliver the files and disappear. We stick around to help you launch. Because a great brand means nothing if nobody sees it.
                </p>
              </div>

              <div className="relative z-10 md:w-1/2 flex flex-col justify-center">
                <p className="font-display text-[18px] sm:text-[20px] font-bold text-[#FAFAFA] mb-6">Marketing & Launch Assets</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                  {[
                    'Launch Graphics',
                    'Social Media Creatives',
                    'Ad Assets & Banners',
                    'Email Templates',
                    'Pitch Decks',
                    'App Store Screenshots'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-[18px] h-[18px] text-[#FF4400] shrink-0 mt-0.5" />
                      <span className="font-sans text-[15px] font-medium text-[#A1A1AA]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Selected Work — Scattered Gallery ── */}
      <ScatteredGallery />

      {/* ── Process (How We Work) ── */}
      <section id="process" className="px-6 py-32 bg-[#FFFFFF] border-y border-[#E5E5E5]">
        <div className="mx-auto max-w-[1120px]">
          <AnimatedSection className="mb-24 text-center flex flex-col items-center">
            <h2 className="font-display text-[32px] sm:text-[48px] font-bold tracking-tight text-[#111111]">
              How we work.
            </h2>
            <p className="mt-4 font-sans text-[16px] sm:text-[18px] text-[#737373] max-w-[500px]">
              A transparent, no-nonsense approach to getting things shipped.
            </p>
          </AnimatedSection>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimatedSection key={step.num} delay={idx * 0.1} className="relative flex flex-col border-l-2 md:border-l-0 md:border-t-2 border-[#E5E5E5] pl-6 md:pl-0 md:pt-6">
                <span className="font-display text-[16px] font-bold text-[#FF4400] mb-4 block">{step.num}</span>
                <h3 className="font-display text-[20px] font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="font-sans text-[14px] text-[#737373] leading-[1.6]">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>



      {/* ── Pricing ── */}
      <section id="pricing" className="px-6 py-32">
        <div className="mx-auto max-w-[1120px]">
          <AnimatedSection className="mb-20 text-center">
            <h2 className="font-display text-[32px] sm:text-[48px] font-bold tracking-tight text-[#111111]">
              Simple, transparent pricing.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING.map((plan) => (
              <StaggerItem key={plan.tier}>
                <div className={`relative p-8 rounded-3xl border h-full flex flex-col ${plan.isPopular ? 'bg-[#FFFFFF] border-[#FF4400] shadow-md' : 'bg-[#FAFAFA] border-[#E5E5E5]'}`}>
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4400] text-white px-4 py-1 rounded-full font-sans text-[12px] font-bold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-[20px] font-bold text-[#111111] mb-2">{plan.tier}</h3>
                  <p className="font-sans text-[14px] text-[#737373] mb-8 min-h-[44px]">{plan.desc}</p>
                  
                  <div className="flex items-end gap-1 mb-8">
                    <span className="font-display text-[40px] font-bold text-[#111111] leading-none">{plan.price}</span>
                    {plan.period && <span className="font-sans text-[15px] text-[#737373] mb-1">{plan.period}</span>}
                  </div>

                  <a href={SITE.meetingLink} className={`block w-full text-center py-3 rounded-full font-sans text-[14px] font-bold transition-all mb-10 ${plan.isPopular ? 'bg-[#FF4400] text-white hover:bg-[#E63D00]' : 'bg-[#FFFFFF] border border-[#E5E5E5] text-[#111111] hover:bg-[#FAFAFA]'}`}>
                    Book a call
                  </a>

                  <ul className="flex-1 space-y-4">
                    {plan.features.map(f => (
                      <li key={f} className="flex flex-start gap-3">
                        <Check className="w-5 h-5 text-[#FF4400] shrink-0" />
                        <span className="font-sans text-[14px] text-[#737373]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 py-32 bg-[#FFFFFF] border-y border-[#E5E5E5]">
        <div className="mx-auto max-w-[800px]">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-display text-[32px] sm:text-[48px] font-bold tracking-tight text-[#111111]">
              Frequently Asked Questions.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQAccordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Cinematic Reveal ── */}
      <CinematicReveal />




      {/* ── Footer ── */}
      <footer className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-display text-[20px] font-bold text-[#111111]">fedup.studio</span>
            </div>
            
            <div className="flex gap-8">
              <a href="#work" className="font-sans text-[14px] text-[#737373] hover:text-[#111111]">Work</a>
              <a href="#services" className="font-sans text-[14px] text-[#737373] hover:text-[#111111]">Services</a>
              <a href="#pricing" className="font-sans text-[14px] text-[#737373] hover:text-[#111111]">Pricing</a>
            </div>

            <div className="flex gap-4">
              <a href="https://x.com/sumitdotme" target="_blank" rel="noopener noreferrer" className="text-[#737373] hover:text-[#FF4400]"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-[#737373] hover:text-[#FF4400]"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#737373]">
            <p>© 2026 Fedup Studio. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
              Accepting new clients
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
