'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingNav() {
    const [time, setTime] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    // Live Clock
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Scroll to Top Handler
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-6 z-50 w-auto max-w-2xl"
            style={{ fontFamily: 'var(--font-geist-pixel-square)' }}
        >
            <div className="flex items-center h-12 bg-[#0A0A0A] border border-white/10 rounded-full shadow-2xl overflow-hidden backdrop-blur-md">

                {/* Logo Section */}
                <div className="pl-5 pr-4 flex items-center gap-2 shrink-0">
                    <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    </div>
                    <span className="text-white tracking-widest text-xs uppercase">fedup.</span>
                </div>

                <div className="h-full w-[1px] bg-white/10 shrink-0" />

                {/* Ticker Section - Diagonal Stripes Background */}
                <div className="hidden md:flex flex-1 items-center relative overflow-hidden h-full group">
                    {/* Diagonal Stripes Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)',
                            backgroundSize: '4px 4px'
                        }}
                    />

                    <div className="flex items-center gap-2 px-4 w-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        <div className="overflow-hidden relative flex-1 h-full flex items-center">
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: '-100%' }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="whitespace-nowrap text-[10px] tracking-widest text-zinc-400 uppercase absolute"
                            >
                                6 FOUNDERS BOOKED A CALL THIS WEEK! — SPOTS FILLING FAST — BOOK YOUR INTRO CALL NOW —
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block h-full w-[1px] bg-white/10 shrink-0" />

                {/* Right Actions */}
                <div className="flex items-center h-full pr-1.5">
                    {/* Time */}
                    <div className="hidden sm:flex items-center px-4 h-full text-[10px] text-zinc-500 tracking-widest tabular-nums">
                        {time}
                    </div>

                    <div className="hidden sm:block h-3 w-[1px] bg-white/10 mx-1" />

                    {/* Links */}
                    <nav className="flex items-center h-full px-1 gap-1">
                        <a href="#work" className="px-3 py-1.5 text-[10px] uppercase text-zinc-400 hover:text-white transition-colors">Work</a>
                        <a href="#pricing" className="px-3 py-1.5 text-[10px] uppercase text-zinc-400 hover:text-white transition-colors">Pricing</a>
                    </nav>

                    {/* Scroll Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="ml-1 h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
                        aria-label="Scroll to top"
                    >
                        <svg
                            className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>

            </div>
        </motion.div>
    );
}
