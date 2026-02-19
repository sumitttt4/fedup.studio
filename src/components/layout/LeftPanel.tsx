'use client';

import { motion } from 'framer-motion';
import { ShimmerButton } from '@/components/ui/ShimmerButton';
import { MovingBorderButton } from '@/components/ui/MovingBorderButton';

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
            className="flex h-full flex-col justify-center px-8 py-12 lg:px-10 xl:px-14"
            style={{ fontFamily: 'var(--font-geist-pixel-square)' }}
        >
            <motion.div variants={itemVariants} className="mb-10 flex items-center gap-3">
                <span className="ds-body text-zinc-300">
                    From <span className="font-medium text-white">$3,000</span>/mo
                </span>
                <MovingBorderButton
                    href="#pricing"
                    className="px-4 py-2 ds-caption text-zinc-200"
                    borderColor="rgba(255, 255, 255, 0.4)"
                    duration={4000}
                >
                    Explore Pricing
                </MovingBorderButton>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10">
                <h1 className="ds-heading-display tracking-wide">
                    <span className="block font-medium text-white">Fedup with</span>
                    <span className="block font-medium text-white">boring designs?</span>
                    <span className="ds-body mt-4 block font-sans tracking-normal text-zinc-300" style={{ fontFamily: 'var(--font-inter)' }}>
                        We build premium templates, <br />
                        components & custom software <br />
                        for modern startups.
                    </span>
                </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10 flex flex-wrap items-center gap-4">
                <ShimmerButton
                    href="#contact"
                    className="bg-[#c84307] px-7 py-3.5 ds-caption text-white font-medium"
                    shimmerColor="rgba(255,255,255,0.35)"
                    background="#c84307"
                    enableShadow={true}
                >
                    <span style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>Book a Call</span>
                </ShimmerButton>
                <MovingBorderButton
                    href="#work"
                    className="px-6 py-3 ds-caption text-zinc-200"
                    borderColor="rgba(255, 255, 255, 0.6)"
                    duration={3000}
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span style={{ fontFamily: 'var(--font-geist-pixel-square)' }}>Check Our work</span>
                </MovingBorderButton>
            </motion.div>

            <motion.div variants={tagContainerVariants} initial="hidden" animate="visible" className="mb-10 flex flex-wrap gap-2">
                {serviceTags.map((tag) => (
                    <motion.span key={tag} variants={tagVariants} className="ds-chip inline-flex items-center px-3 text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white cursor-default">
                        {tag}
                    </motion.span>
                ))}
            </motion.div>

            <motion.div variants={logoVariants} initial="hidden" animate="visible" className="space-y-2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-400">
                    {clientLogos.map((client) => (
                        <motion.span key={client.name} variants={logoItemVariants} className="flex items-center gap-1.5 transition-colors hover:text-zinc-200">
                            <span className="text-zinc-500">{client.icon}</span>
                            {client.name}
                        </motion.span>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-500">
                    {clientLogosSecondRow.map((client) => (
                        <motion.span key={client.name} variants={logoItemVariants} className="flex items-center gap-1.5 transition-colors hover:text-zinc-300">
                            <span className="text-zinc-600">{client.icon}</span>
                            {client.name}
                        </motion.span>
                    ))}
                    <motion.span variants={logoItemVariants} className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-zinc-300">
                        50+ More
                    </motion.span>
                </div>
            </motion.div>
        </motion.div>
    );
}
