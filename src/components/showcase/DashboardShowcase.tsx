'use client';

import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

export function DashboardShowcase() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full bg-zinc-100 rounded-3xl overflow-hidden"
            style={{ aspectRatio: '4/3' }}
        >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
                <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-zinc-900 flex items-center justify-center">
                        <span className="text-white text-xs">✦</span>
                    </div>
                    <span className="font-medium text-zinc-900">Suno</span>
                </div>
                <div className="flex items-center gap-2">
                    {['Dashboard', 'Live Feed', 'Efficiency', 'Sustainability Logs'].map((tab, i) => (
                        <button
                            key={tab}
                            className={`px-3 py-1.5 text-xs rounded-full transition-colors ${i === 1 ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-200" />
                    <div className="h-8 w-8 rounded-full bg-orange-500 overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-br from-orange-400 to-orange-600" />
                    </div>
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
                {/* Title */}
                <motion.div variants={itemVariants} className="mb-6">
                    <h2 className="text-3xl font-semibold text-zinc-900 mb-1">Solar Energy Hub</h2>
                    <p className="text-sm text-zinc-500">Live smarter with solar. Monitor, optimize, and thrive.</p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-12 gap-3">
                    {/* Earning Card */}
                    <motion.div variants={itemVariants} className="col-span-3 bg-white rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs text-zinc-500">Earning</span>
                            <span className="text-zinc-400">↗</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-8 w-8 rounded-lg bg-zinc-100 flex items-center justify-center">
                                <span className="text-lg">📊</span>
                            </div>
                        </div>
                        <p className="text-xl font-semibold text-zinc-900">34,578.00 <span className="text-xs text-zinc-400">USD</span></p>
                        <p className="text-[10px] text-zinc-400 mt-1">October 2025</p>
                    </motion.div>

                    {/* House Illustration Placeholder */}
                    <motion.div variants={itemVariants} className="col-span-5 row-span-2 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                            <svg className="w-full h-full" viewBox="0 0 200 200">
                                <defs>
                                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000" strokeWidth="0.5" opacity="0.1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>
                        <div className="relative z-10 text-center">
                            <div className="w-32 h-24 mx-auto mb-2 bg-zinc-300 rounded-lg flex items-center justify-center">
                                <span className="text-4xl">🏠</span>
                            </div>
                            <p className="text-xs text-zinc-500">3D House Model</p>
                        </div>
                    </motion.div>

                    {/* Sunlight Hours */}
                    <motion.div variants={itemVariants} className="col-span-4 bg-white rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-zinc-500">Sunlight Hours Captured</span>
                            <span className="text-zinc-400">↗</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">☀️</span>
                                <span className="text-sm text-zinc-600">Rise:</span>
                                <span className="font-semibold text-zinc-900">12:10 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-400">🌅</span>
                                <span className="text-sm text-zinc-600">Set:</span>
                                <span className="font-semibold text-zinc-900">8:10 PM</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CO2 Offset */}
                    <motion.div variants={itemVariants} className="col-span-3 bg-white rounded-2xl p-4 shadow-sm">
                        <span className="text-xs text-zinc-500">CO₂ Offset</span>
                        <div className="mt-4 flex items-end gap-1">
                            <span className="text-2xl font-bold text-zinc-900">6.12</span>
                            <span className="text-sm text-zinc-400 mb-1">KG</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 mt-1">Equivalent to 56 trees planted</p>
                    </motion.div>

                    {/* Gauge */}
                    <motion.div variants={itemVariants} className="col-span-4 bg-white rounded-2xl p-4 shadow-sm">
                        <div className="relative w-full aspect-square max-w-[100px] mx-auto">
                            <svg viewBox="0 0 100 50" className="w-full">
                                <path
                                    d="M 10 50 A 40 40 0 0 1 90 50"
                                    fill="none"
                                    stroke="#e5e5e5"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M 10 50 A 40 40 0 0 1 90 50"
                                    fill="none"
                                    stroke="#18181b"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeDasharray="126"
                                    strokeDashoffset="40"
                                />
                            </svg>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                                <span className="text-lg font-bold text-zinc-900">312</span>
                                <span className="text-xs text-zinc-400 block">kW</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Stats Row */}
                    <motion.div variants={itemVariants} className="col-span-3 bg-white rounded-2xl p-3 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-zinc-500">Total System Output</span>
                            <span className="text-zinc-400 text-xs">↗</span>
                        </div>
                        <p className="text-xs text-zinc-600">Peak Output: <span className="font-semibold text-zinc-900">312 kW</span></p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="col-span-3 bg-white rounded-2xl p-3 shadow-sm">
                        <span className="text-[10px] text-zinc-500">Daily Energy Balance</span>
                        <div className="flex gap-1 mt-2">
                            {[40, 60, 80, 50, 70, 90, 65].map((h, i) => (
                                <div key={i} className="flex-1 bg-orange-100 rounded-sm overflow-hidden">
                                    <div className="bg-orange-500" style={{ height: `${h}%`, minHeight: '4px' }} />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="col-span-3 bg-white rounded-2xl p-3 shadow-sm">
                        <span className="text-[10px] text-zinc-500">Power</span>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="h-6 w-6 rounded bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-600 text-xs">⚡</span>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-zinc-900">3.25 kW</p>
                                <p className="text-[10px] text-zinc-400">Active</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="col-span-3 bg-white rounded-2xl p-3 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-zinc-500">Battery</span>
                            <span className="text-zinc-400 text-xs">↗</span>
                        </div>
                        <p className="text-sm font-semibold text-zinc-900">31 kW</p>
                        <div className="mt-2 h-3 w-12 bg-zinc-200 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-zinc-900 rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
