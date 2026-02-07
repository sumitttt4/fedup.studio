'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    { label: '7-Day Sprints', tag: 'CORE' },
    { label: 'Landing Pages', tag: 'WEB' },
    { label: 'Web Applications', tag: 'APP' },
    { label: 'Brand Systems', tag: 'BRAND' },
    { label: 'Motion Design', tag: 'MOTION' },
    { label: 'Design Systems', tag: 'SYS' },
];

const socials = [
    { label: 'Twitter/X', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Dribbble', href: '#' },
];

export function Sidebar() {
    return (
        <aside className="hidden lg:flex h-screen w-full max-w-[400px] flex-col justify-between p-8 border-r border-white/[0.06] bg-zinc-950/50 backdrop-blur-sm">
            {/* Logo */}
            <div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link href="/" className="group inline-flex items-baseline">
                        <span className="font-mono text-2xl font-semibold tracking-tight text-white">
                            fedup
                        </span>
                        <span className="ml-0.5 h-2 w-2 rounded-full bg-orange-500 group-hover:animate-pulse" />
                    </Link>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                        Design Engineering Lab
                    </p>
                </motion.div>

                {/* Services Menu */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                        Services
                    </h3>
                    <nav className="space-y-1">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                            >
                                <Link
                                    href="#"
                                    className="group flex items-center justify-between py-2.5 px-3 -mx-3 rounded-lg hover:bg-white/[0.03] transition-colors duration-200"
                                >
                                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                                        {service.label}
                                    </span>
                                    <span className="font-mono text-[9px] text-zinc-600 group-hover:text-orange-500/70 transition-colors">
                                        {service.tag}
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </nav>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-10 grid grid-cols-2 gap-4"
                >
                    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                        <p className="font-mono text-2xl font-medium text-white">47+</p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                            Projects Shipped
                        </p>
                    </div>
                    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                        <p className="font-mono text-2xl font-medium text-white">7</p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                            Day Turnaround
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                {/* CTA Button */}
                <Link
                    href="#contact"
                    className="group relative block w-full overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-px"
                >
                    <div className="relative flex items-center justify-center gap-2 rounded-[11px] bg-zinc-950 px-6 py-3.5 transition-all duration-300 group-hover:bg-transparent">
                        <span className="font-medium text-orange-500 group-hover:text-white transition-colors">
                            Book a Call
                        </span>
                        <svg
                            className="h-4 w-4 text-orange-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </Link>

                {/* Socials */}
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-4">
                        {socials.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 hover:text-orange-500 transition-colors"
                            >
                                {social.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <p className="mt-4 font-mono text-[9px] text-zinc-600">
                    © 2026 fedup.studio. All rights reserved.
                </p>
            </motion.div>
        </aside>
    );
}
