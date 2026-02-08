'use client';

import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.6,
        },
    },
};

const tagVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
};

const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.9,
        },
    },
};

const logoItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 },
    },
};

const serviceTags = [
    'Illustrated Web Design',
    'Product UI/UX Design',
    'Mobile App Design',
    'Next.js & React Dev.',
    'Branding & Visual Identity',
    'Custom Code Dev.',
];

const clientLogos = [
    { name: 'greatfronted', icon: '☆' },
    { name: 'HUAWEI', icon: '⚡' },
    { name: 'Caloral', icon: '◈' },
    { name: 'muzes', icon: '♪' },
];

const clientLogosSecondRow = [
    { name: 'GIGASO', icon: '◇' },
    { name: 'Bobcat', icon: '▲' },
    { name: 'EASYIA', icon: '●' },
];

export function LeftPanel() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center h-full px-8 lg:px-10 xl:px-14 py-12"
            style={{ fontFamily: 'var(--font-geist-pixel-square)' }}
        >
            {/* Pricing Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
                <span className="text-sm text-zinc-500">
                    From <span className="font-medium text-white">$3,000</span>/mo
                </span>
                <a
                    href="#pricing"
                    className="inline-flex items-center rounded-full border border-zinc-700 hover:border-zinc-500 bg-transparent hover:bg-zinc-800/50 px-4 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-200"
                >
                    Explore Pricing
                </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10">
                <h1 className="text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-wide">
                    <span className="font-medium text-white block">
                        Fedup with
                    </span>
                    <span className="font-medium text-white block">
                        boring designs?
                    </span>
                    <span className="text-zinc-500 block mt-3 text-sm font-sans tracking-normal opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
                        We build premium templates, <br />
                        components & custom software <br />
                        for modern startups.
                    </span>
                </h1>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-10">
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[12px] uppercase tracking-wide text-zinc-900 hover:bg-zinc-200 transition-all duration-200"
                    style={{ fontFamily: 'var(--font-geist-pixel-square)' }}
                >
                    Book a Call
                </a>
                <a
                    href="#work"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-zinc-700 hover:border-zinc-500 px-6 py-3 text-[12px] uppercase tracking-wide text-zinc-300 hover:bg-zinc-800/50 transition-all duration-200"
                    style={{ fontFamily: 'var(--font-geist-pixel-square)' }}
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Check Our work
                </a>
            </motion.div>

            {/* Service Tags */}
            <motion.div
                variants={tagContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-2 mb-10"
            >
                {serviceTags.map((tag) => (
                    <motion.span
                        key={tag}
                        variants={tagVariants}
                        className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 hover:border-zinc-500 hover:text-zinc-300 transition-colors cursor-default"
                    >
                        {tag}
                    </motion.span>
                ))}
            </motion.div>

            {/* Client Logos */}
            <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                className="space-y-2"
            >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-zinc-500 text-xs">
                    {clientLogos.map((client) => (
                        <motion.span
                            key={client.name}
                            variants={logoItemVariants}
                            className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
                        >
                            <span className="text-zinc-600">{client.icon}</span>
                            {client.name}
                        </motion.span>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-zinc-600 text-xs">
                    {clientLogosSecondRow.map((client) => (
                        <motion.span
                            key={client.name}
                            variants={logoItemVariants}
                            className="flex items-center gap-1.5 hover:text-zinc-400 transition-colors"
                        >
                            <span className="text-zinc-700">{client.icon}</span>
                            {client.name}
                        </motion.span>
                    ))}
                    <motion.span
                        variants={logoItemVariants}
                        className="bg-zinc-800 border border-zinc-700 px-2.5 py-0.5 rounded-full text-zinc-400"
                    >
                        50+ More
                    </motion.span>
                </div>
            </motion.div>
        </motion.div>
    );
}
