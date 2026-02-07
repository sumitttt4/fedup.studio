'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 lg:hidden"
            >
                <div className="glass mx-4 mt-4 flex items-center justify-between rounded-2xl px-5 py-4">
                    {/* Logo */}
                    <Link href="/" className="group inline-flex items-baseline">
                        <span className="font-mono text-lg font-semibold tracking-tight text-white">
                            fedup
                        </span>
                        <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-orange-500" />
                    </Link>

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/[0.05] transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5">
                            <motion.span
                                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                                className="block h-0.5 w-5 bg-white origin-center"
                            />
                            <motion.span
                                animate={{ opacity: isOpen ? 0 : 1 }}
                                className="block h-0.5 w-5 bg-white"
                            />
                            <motion.span
                                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                                className="block h-0.5 w-5 bg-white origin-center"
                            />
                        </div>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 }}
                            className="relative flex h-full flex-col items-center justify-center gap-8"
                        >
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-medium text-white hover:text-orange-500 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8"
                            >
                                <Link
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-medium text-white hover:bg-orange-600 transition-colors"
                                >
                                    Book a Call
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
