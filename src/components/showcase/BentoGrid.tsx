'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

function BentoCard({ children, className = '', delay = 0 }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] as const }}
            whileHover={{ scale: 1.02 }}
            className={`bg-[#141414] border border-white/10 rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20 ${className}`}
        >
            {children}
        </motion.div>
    );
}

// Dashboard Card Component
function DashboardCard() {
    return (
        <BentoCard className="p-6" delay={0}>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-xs">✦</span>
                    </div>
                    <span className="text-sm font-medium text-white">AgentOps</span>
                </div>
                <span className="text-zinc-500 text-xs">Dashboard</span>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 mb-4">
                <p className="text-xs text-blue-200 mb-1">Overview Panel</p>
                <div className="flex items-center justify-center py-6">
                    <div className="relative h-24 w-24">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8" strokeDasharray="251" strokeDashoffset="80" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-white">6,418</span>
                            <span className="text-[10px] text-blue-200">Tickets</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-xs">
                    <span className="text-blue-200">● Easy <span className="text-white">3,922</span></span>
                    <span className="text-blue-200">● Medium <span className="text-white">2,118</span></span>
                    <span className="text-blue-200">● Difficult <span className="text-white">378</span></span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-zinc-800/50 rounded-lg p-2">
                    <p className="text-lg font-semibold text-white">12.8k</p>
                    <p className="text-[10px] text-zinc-500">Tickets</p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-2">
                    <p className="text-lg font-semibold text-white">1m 45s</p>
                    <p className="text-[10px] text-zinc-500">Response</p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-2">
                    <p className="text-lg font-semibold text-white">4.7/5</p>
                    <p className="text-[10px] text-zinc-500">Score</p>
                </div>
            </div>
        </BentoCard>
    );
}

// Logo Card Component
function LogoCard() {
    return (
        <BentoCard className="p-5 flex flex-col" delay={0.1}>
            <div className="flex items-center justify-between mb-3">
                <div className="h-8 w-8 rounded-lg bg-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold">▲</span>
                </div>
                <span className="text-zinc-500 text-xs">LOGO</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Glyph</h3>
            <p className="text-zinc-500 text-xs">Brand Identity</p>
        </BentoCard>
    );
}

// Typography Card Component
function TypographyCard() {
    return (
        <BentoCard className="p-5 bg-gradient-to-br from-red-600 to-red-700" delay={0.15}>
            <div className="flex items-center justify-between mb-2">
                <span className="text-red-200 text-xs">TYPOGRAPHY</span>
            </div>
            <p className="text-6xl font-serif italic text-white mb-2">Aa</p>
            <div className="space-y-1 text-xs text-red-200">
                <p>PALA · Regular</p>
                <p>PALA · Medium</p>
                <p>PALA · Bold</p>
            </div>
        </BentoCard>
    );
}

// Color Palette Card Component
function PaletteCard() {
    return (
        <BentoCard className="p-5" delay={0.2}>
            <span className="text-zinc-500 text-xs block mb-3">PALETTE</span>
            <div className="flex gap-2">
                <div className="flex-1 aspect-square rounded-xl bg-orange-500" />
                <div className="flex-1 aspect-square rounded-xl bg-zinc-900 border border-zinc-700" />
                <div className="flex-1 aspect-square rounded-xl bg-white" />
            </div>
        </BentoCard>
    );
}

// Stats Card Component
function StatsCard() {
    return (
        <BentoCard className="p-5" delay={0.25}>
            <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <span className="text-white text-lg">★</span>
                </div>
                <div className="h-10 w-10 rounded-xl bg-orange-500/20 border-2 border-dashed border-orange-500/50 flex items-center justify-center">
                    <span className="text-orange-500 text-lg">◈</span>
                </div>
            </div>
            <p className="text-zinc-500 text-xs">STARS</p>
        </BentoCard>
    );
}

// Analytics Card Component
function AnalyticsCard() {
    return (
        <BentoCard className="p-5" delay={0.3}>
            <div className="flex items-center justify-between mb-4">
                <span className="text-zinc-500 text-xs">Total Revenue</span>
                <span className="text-zinc-500">↗</span>
            </div>
            <p className="text-3xl font-bold text-white mb-1">12.8k<span className="text-sm text-zinc-500 ml-1">+24%</span></p>
            <div className="flex items-end gap-1 h-16 mt-4">
                {[40, 60, 45, 80, 55, 90, 70, 85, 95, 75, 88, 100].map((h, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-blue-500/80 rounded-t"
                        style={{ height: `${h}%` }}
                    />
                ))}
            </div>
        </BentoCard>
    );
}

// Time Card Component
function TimeCard() {
    return (
        <BentoCard className="p-5" delay={0.35}>
            <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-500 text-xs">Avg. Response</span>
                <span className="text-zinc-500">↗</span>
            </div>
            <p className="text-2xl font-bold text-white">1m 45<span className="text-sm text-zinc-500">s</span></p>
            <div className="mt-4 relative h-20 flex items-center justify-center">
                <svg className="w-full h-16" viewBox="0 0 120 40">
                    <path
                        d="M 0 35 Q 20 30 40 25 T 80 15 T 120 10"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                    />
                    <path
                        d="M 0 35 Q 20 30 40 25 T 80 15 T 120 10"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="200"
                        strokeDashoffset="50"
                    />
                </svg>
            </div>
        </BentoCard>
    );
}

// Gauge Card Component
function GaugeCard() {
    return (
        <BentoCard className="p-5" delay={0.4}>
            <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-500 text-xs">System Output</span>
            </div>
            <div className="flex justify-center py-4">
                <div className="relative">
                    <svg viewBox="0 0 100 60" className="w-24 h-14">
                        <path
                            d="M 10 55 A 45 45 0 0 1 90 55"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="6"
                            strokeLinecap="round"
                        />
                        <path
                            d="M 10 55 A 45 45 0 0 1 90 55"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray="141"
                            strokeDashoffset="50"
                        />
                    </svg>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                        <span className="text-xl font-bold text-white">312</span>
                        <span className="text-xs text-zinc-500 block">kW</span>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}

// Battery Card Component
function BatteryCard() {
    return (
        <BentoCard className="p-5" delay={0.45}>
            <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-500 text-xs">Battery</span>
                <span className="text-zinc-500">↗</span>
            </div>
            <p className="text-xl font-bold text-white mb-3">31 kW</p>
            <div className="flex gap-1">
                <div className="h-8 w-12 bg-zinc-700 rounded-lg overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-zinc-400 to-zinc-300" />
                </div>
                <div className="h-8 w-3 bg-zinc-600 rounded-r-lg" />
            </div>
        </BentoCard>
    );
}

export function BentoGrid() {
    return (
        <div className="p-6 lg:p-8 xl:p-12">
            {/* First Bento Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {/* Tall Dashboard Card */}
                <div className="md:row-span-2">
                    <DashboardCard />
                </div>

                {/* Logo Card */}
                <LogoCard />

                {/* Typography Card */}
                <TypographyCard />

                {/* Palette Card */}
                <PaletteCard />

                {/* Stats Card */}
                <StatsCard />
            </div>

            {/* Second Bento Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <AnalyticsCard />
                <TimeCard />
                <GaugeCard />
            </div>

            {/* Third Bento Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BatteryCard />
                <BentoCard className="p-5" delay={0.5}>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-zinc-500 text-xs">Live Feed</span>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-zinc-700" />
                                <div className="flex-1">
                                    <div className="h-2 bg-zinc-700 rounded w-3/4 mb-1" />
                                    <div className="h-2 bg-zinc-800 rounded w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </BentoCard>
            </div>

            {/* Templates & Systems Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-16 mb-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-medium text-white" style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>Selected Projects</h3>
                    <a href="#work" className="text-xs uppercase tracking-wider text-zinc-500 hover:text-white transition-colors">View All →</a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <BentoCard className="p-4 bg-zinc-900/50 group cursor-pointer overflow-hidden" delay={0.1}>
                        {/* Project 1: AgentOps */}
                        <div className="aspect-video rounded-lg bg-[#0F0F0F] border border-white/5 mb-3 group-hover:border-white/10 transition-colors relative overflow-hidden">
                            <img
                                src="/projects/agentops.png"
                                alt="AgentOps Dashboard"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.style.background = '#1a1a1a';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3 pointer-events-none">
                                <div className="hidden group-hover:block transition-all text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium tracking-wide">
                                    DASHBOARD
                                </div>
                            </div>
                        </div>
                        <h4 className="text-white font-medium/90 text-sm tracking-wide" style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>AgentOps</h4>
                        <p className="text-zinc-500 text-[10px] mt-1 opacity-80">AI Agent Observability • Next.js</p>
                    </BentoCard>

                    <BentoCard className="p-4 bg-zinc-900/50 group cursor-pointer overflow-hidden" delay={0.2}>
                        {/* Project 2: Identity */}
                        <div className="aspect-video rounded-lg bg-[#0F0F0F] border border-white/5 mb-3 group-hover:border-white/10 transition-colors relative overflow-hidden">
                            <img
                                src="/projects/typography.png"
                                alt="Typography System"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.style.background = '#8B0000';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3 pointer-events-none">
                                <div className="hidden group-hover:block transition-all text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full font-medium tracking-wide">
                                    IDENTITY
                                </div>
                            </div>
                        </div>
                        <h4 className="text-white font-medium/90 text-sm tracking-wide" style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>Fedup Identity</h4>
                        <p className="text-zinc-500 text-[10px] mt-1 opacity-80">Brand System • Typography</p>
                    </BentoCard>
                </div>
            </motion.div>
        </div>
    );
}
