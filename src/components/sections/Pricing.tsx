'use client';

import { motion } from 'framer-motion';

export function Pricing() {
    return (
        <section id="pricing" className="py-12 space-y-16">
            <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl text-white uppercase tracking-wide leading-tight" style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>
                    Pricing
                </h2>
                <p className="text-zinc-400 max-w-lg">
                    Simple, transparent pricing. No hidden fees. Pause or cancel anytime.
                </p>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 items-start">

                {/* Column 1 */}
                <div className="flex-1 w-full space-y-6">
                    {/* Design Retainer Card */}
                    <PricingCard
                        title="Design Retainer"
                        price="$5,000"
                        period="/month"
                        description="All-in-one design support for brands that need consistent, high-quality product design every month."
                        features={[
                            '1 Active Design Request',
                            'Unlimited Revisions',
                            'Dedicated Project Manager',
                            'Updates every 24-48 hours',
                            'Slack & Linear Integration',
                            'Pause or Cancel anytime',
                            'Source Files included'
                        ]}
                        highlight
                        badge="Only 2 spots left"
                        icon={(
                            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-black">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                        )}
                    />

                    {/* Product/App UI Card */}
                    <PricingCard
                        title="Product/App UI"
                        price="$3,000"
                        period="/10 screens"
                        description="World-class UI/UX design for SaaS tools, Dashboards, and Mobile apps delivered in days."
                        features={[
                            'High-Fidelity Figma Design',
                            'Interactive Prototype',
                            'Design System setup',
                            '2 Rounds of Revisions',
                            'Handoff-ready for Devs'
                        ]}
                        icon={(
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-white/10">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            </div>
                        )}
                    />
                </div>

                {/* Column 2 */}
                <div className="flex-1 w-full space-y-6">
                    {/* Landing Page Card */}
                    <PricingCard
                        title="Landing Page"
                        price="$2,500"
                        period="/project"
                        description="Ideal for startups. High-impact landing page designed to maximize conversions."
                        features={[
                            'Custom Design (up to 7 sections)',
                            '1 Week Delivery',
                            'Brand consistency + copy outline',
                            'Mobile Responsive',
                            'Figma Source File'
                        ]}
                        icon={(
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                            </div>
                        )}
                    />

                    {/* Addon: Dev */}
                    <AddonCard
                        title="Development Add-on"
                        price="+$2k"
                        description="We'll bring your design to life using Next.js or Webflow. Fast, responsive, and fully functional."
                    />

                    {/* Logo Design Card */}
                    <PricingCard
                        title="Logo Design"
                        price="$400"
                        period="/one-off"
                        description="Custom logo design with priority support, editable files, and quick turnaround."
                        features={[
                            '3 Unique Concepts',
                            'Typography & Color Palette',
                            'Social Media Assets',
                            'Source Vectors (SVG, AI)'
                        ]}
                        icon={(
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-white/10">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                            </div>
                        )}
                    />

                    {/* Addon: Identity */}
                    <AddonCard
                        title="Full Brand Identity"
                        price="+$2k"
                        description="Go beyond the logo. We'll build a flexible visual identity system, pitch deck template, and brand guidelines."
                    />
                </div>

            </div>

            {/* Social Proof / Avatars Circle */}
            <div className="relative py-12 flex flex-col items-center justify-center space-y-8">
                <div className="flex -space-x-4 items-center justify-center overflow-hidden py-4">
                    {/* 
                 Generating a ring of avatars. 
                 Since I don't have real images, I'll use placeholder gradients/initials 
                 but styled to look like the 'circle of trust'.
               */}
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0A0A0A] bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-500 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 opacity-50" />
                            {/* Random slight visual variation */}
                            <span style={{ opacity: 0.3 + (i % 3) * 0.2 }}>User</span>
                        </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-[#0A0A0A] bg-orange-500 flex items-center justify-center text-xs font-bold text-black z-10">
                        50+
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white max-w-md mx-auto leading-tight">
                        50+ clients booked instantly — once they saw the pricing, there was no going back.
                    </h3>
                </div>
            </div>
        </section>
    );
}

function PricingCard({ title, price, period, description, features, highlight = false, badge, icon }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-[2rem] border ${highlight ? 'border-orange-500/30 bg-zinc-900/80 shadow-[0_0_50px_-20px_rgba(249,115,22,0.3)]' : 'border-white/10 bg-zinc-900/30'} flex flex-col gap-6 group hover:border-white/20 transition-all duration-300`}
        >
            <div className="flex justify-between items-start">
                {icon}
                {badge && (
                    <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        {badge}
                    </span>
                )}
            </div>

            <div className="space-y-4">
                <h3 className="text-xl text-white font-medium tracking-wide">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed min-h-[40px]">
                    {description}
                </p>

                <div className="py-4 border-b border-dashed border-white/10">
                    <div className="flex items-baseline gap-1" style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>
                        <span className="text-4xl text-white">{price}</span>
                        <span className="text-sm text-zinc-500">{period}</span>
                    </div>
                </div>
            </div>

            <ul className="space-y-3">
                {features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                        <svg className="w-4 h-4 text-white mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            <button className={`w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all mt-auto ${highlight
                    ? 'bg-white text-black hover:bg-zinc-200 shadow-lg'
                    : 'bg-zinc-950 border border-white/10 text-white hover:bg-zinc-800'
                }`} style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>
                Get Started
                <span className="ml-2">→</span>
            </button>
        </motion.div>
    );
}

function AddonCard({ title, price, description }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between gap-4 border-dashed relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657L19.07 4.93M4.93 19.07l1.414-1.414m0-11.314L4.93 4.93m14.14 14.14l-1.414-1.414M12 17a5 5 0 100-10 5 5 0 000 10z" /></svg>
            </div>

            <div className="flex flex-col gap-1 relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">Add-On</span>
                <div className="flex justify-between items-baseline">
                    <h4 className="text-white font-medium text-lg">{title}</h4>
                    <span className="text-xl text-white" style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>{price}</span>
                </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed relative z-10">
                {description}
            </p>

            <button className="w-full py-2 mt-2 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 transition-colors border border-white/5 group-hover:border-white/10">
                + Add to Plan
            </button>
        </motion.div>
    );
}
