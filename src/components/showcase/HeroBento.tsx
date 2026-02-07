'use client';

import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

export function HeroBento() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-[700px] mx-auto lg:mx-0"
        >
            {/* Bento Grid */}
            <div className="grid grid-cols-12 grid-rows-6 gap-3 aspect-[4/3]">

                {/* Main Dashboard Card - Top Left Large */}
                <motion.div
                    variants={itemVariants}
                    className="col-span-7 row-span-4 relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 p-5 group cursor-pointer"
                >
                    {/* Floating mini cards */}
                    <div className="absolute inset-0 p-4">
                        <div className="relative h-full">
                            {/* Header */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="h-6 w-6 rounded-lg bg-white/20 flex items-center justify-center">
                                    <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                </div>
                                <span className="text-white/80 text-sm font-medium">Overview Panel</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-white text-xl font-semibold mb-1">AgentOps</h3>
                            <p className="text-white/60 text-xs mb-4 max-w-[180px]">
                                Get a high-level snapshot of your agents' performance
                            </p>

                            {/* Stats */}
                            <div className="flex gap-4 mb-4">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                                    <span className="text-white/70 text-[10px]">Easy</span>
                                    <span className="text-white font-semibold text-sm">3,922</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                                    <span className="text-white/70 text-[10px]">Med</span>
                                    <span className="text-white font-semibold text-sm">2,118</span>
                                </div>
                            </div>

                            {/* Big Number with Ring */}
                            <div className="absolute bottom-4 left-4">
                                <div className="relative">
                                    <svg className="h-32 w-32 -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                                        <circle
                                            cx="50" cy="50" r="40"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeDasharray="251.2"
                                            strokeDashoffset="90"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-white text-2xl font-bold">6,418</span>
                                        <span className="text-white/50 text-[9px]">Tickets</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 transition-colors duration-300" />
                </motion.div>

                {/* Logo Card - Top Right */}
                <motion.div
                    variants={itemVariants}
                    className="col-span-5 row-span-2 relative rounded-2xl overflow-hidden bg-white p-4 group cursor-pointer"
                >
                    <div className="flex items-center gap-3 h-full">
                        <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center">
                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div>
                            <span className="font-semibold text-zinc-900 text-lg">Glyph</span>
                            <span className="block text-[9px] uppercase tracking-wider text-zinc-400 mt-0.5">LOGO</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300" />
                </motion.div>

                {/* Typography Card */}
                <motion.div
                    variants={itemVariants}
                    className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 to-red-600 p-3 group cursor-pointer"
                >
                    <span className="text-[8px] uppercase tracking-wider text-white/60 block mb-1">Typography</span>
                    <span className="text-white text-3xl font-light leading-none">Aa</span>
                    <div className="mt-2 space-y-0.5">
                        <p className="text-white/80 text-[8px]">Regular</p>
                        <p className="text-white/80 text-[8px] font-medium">Medium</p>
                        <p className="text-white/80 text-[8px] font-bold">Bold</p>
                    </div>
                </motion.div>

                {/* Palette Card */}
                <motion.div
                    variants={itemVariants}
                    className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden bg-zinc-800 p-3 group cursor-pointer"
                >
                    <span className="text-[8px] uppercase tracking-wider text-zinc-500 block mb-2">Palette</span>
                    <div className="flex gap-1.5 h-[calc(100%-24px)]">
                        <div className="flex-1 rounded-lg bg-orange-500" />
                        <div className="flex-1 rounded-lg bg-zinc-900" />
                        <div className="flex-1 rounded-lg bg-white" />
                    </div>
                </motion.div>

                {/* Merch/Apparel Card */}
                <motion.div
                    variants={itemVariants}
                    className="col-span-5 row-span-2 relative rounded-2xl overflow-hidden bg-zinc-900 group cursor-pointer"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* T-shirt mockup placeholder */}
                        <div className="relative">
                            <div className="h-20 w-20 bg-zinc-800 rounded-lg flex items-center justify-center">
                                <svg className="h-8 w-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            {/* Coffee cup */}
                            <div className="absolute -right-4 -bottom-2 h-10 w-10 bg-orange-500/90 rounded-lg flex items-center justify-center shadow-lg">
                                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <span className="absolute bottom-2 left-3 text-[8px] uppercase tracking-wider text-zinc-600">Apparel</span>
                </motion.div>

                {/* Phone Mockup Card - Right Side Tall */}
                <motion.div
                    variants={itemVariants}
                    className="col-span-7 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer"
                    style={{
                        background: 'linear-gradient(135deg, rgba(40,40,45,1) 0%, rgba(30,30,35,1) 100%)',
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center gap-4 p-4">
                        {/* Stats cards */}
                        <div className="flex-1 space-y-2">
                            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                <p className="text-[9px] text-zinc-500 mb-1">Total Incoming</p>
                                <p className="text-white text-xl font-semibold">12.8k<span className="text-[9px] text-zinc-500 ml-1">+12%</span></p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                <p className="text-[9px] text-zinc-500 mb-1">Avg Response</p>
                                <p className="text-white text-xl font-semibold">1<span className="text-zinc-400 text-sm">m</span> 45<span className="text-zinc-400 text-sm">s</span></p>
                            </div>
                        </div>

                        {/* Mini chart */}
                        <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5 h-full">
                            <p className="text-[9px] text-zinc-500 mb-2">Activity</p>
                            <div className="flex items-end gap-1 h-[calc(100%-24px)]">
                                {[40, 60, 35, 80, 55, 90, 70].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-sm bg-blue-500/60"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <span className="absolute bottom-2 right-3 text-[8px] uppercase tracking-wider text-zinc-600">Dashboard</span>
                </motion.div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
    );
}
