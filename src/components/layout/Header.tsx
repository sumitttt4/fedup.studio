'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
    const [time, setTime] = useState("");

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

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5" style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>
            <div className="flex items-center justify-between">
                <Link href="/" className="text-xs uppercase tracking-widest text-white hover:opacity-80 transition-opacity">
                    fedup.
                </Link>

                {/* Centered Navigation */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8 md:gap-12">
                    <Link href="/" className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                        Work
                    </Link>
                    <Link href="/pricing" className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                        Pricing
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                    {/* Time Display */}
                    <span className="hidden md:block text-[10px] text-zinc-500 tracking-wider">
                        {time}
                    </span>
                    <a
                        href="mailto:hello@fedup.studio"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] uppercase text-zinc-900 hover:bg-zinc-200 transition-colors"
                    >
                        Book a Call
                    </a>
                </div>
            </div>
        </header>
    );
}
