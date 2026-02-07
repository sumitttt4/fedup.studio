'use client';

import { motion } from 'framer-motion';
import { ShowcaseCard } from './ShowcaseCard';

const showcaseProjects = [
    {
        projectId: 'PRJ_001',
        systemTag: 'FED_SYS',
        title: 'Glyph',
        description: 'AI-powered brand identity generator. Create stunning logos, color palettes, and typography systems in seconds.',
        category: 'Brand Tool',
        year: '2026',
    },
    {
        projectId: 'PRJ_002',
        systemTag: 'FED_APP',
        title: 'SafeAgree',
        description: 'Digital consent platform with end-to-end encryption. Secure agreements for the modern age.',
        category: 'Web App',
        year: '2026',
    },
    {
        projectId: 'PRJ_003',
        systemTag: 'FED_WEB',
        title: 'ChewTube',
        description: 'Video platform for food enthusiasts. Discover recipes, cooking techniques, and culinary inspiration.',
        category: 'Platform',
        year: '2026',
    },
    {
        projectId: 'PRJ_004',
        systemTag: 'FED_BRAND',
        title: 'Kreos Agency',
        description: 'Complete brand overhaul for a leading design agency. From strategy to implementation.',
        category: 'Branding',
        year: '2026',
    },
    {
        projectId: 'PRJ_005',
        systemTag: 'FED_MOTION',
        title: 'DreamAlert',
        description: 'Mobile wallpaper generator with realistic iOS notifications. Viral social media tool.',
        category: 'Mobile App',
        year: '2026',
    },
    {
        projectId: 'PRJ_006',
        systemTag: 'FED_SYS',
        title: 'Vertex UI',
        description: 'Component library with 200+ components. Built for speed, accessibility, and developer experience.',
        category: 'Design System',
        year: '2025',
    },
    {
        projectId: 'PRJ_007',
        systemTag: 'FED_WEB',
        title: 'Nebula Docs',
        description: 'Documentation platform with AI-powered search. Beautiful, fast, and infinitely customizable.',
        category: 'Landing Page',
        year: '2025',
    },
    {
        projectId: 'PRJ_008',
        systemTag: 'FED_APP',
        title: 'FlowState',
        description: 'Productivity dashboard for remote teams. Track time, manage projects, stay in flow.',
        category: 'SaaS',
        year: '2025',
    },
    {
        projectId: 'PRJ_009',
        systemTag: 'FED_BRAND',
        title: 'Pulse Health',
        description: 'Healthcare startup brand identity. Modern, trustworthy, human-centered design.',
        category: 'Branding',
        year: '2025',
    },
    {
        projectId: 'PRJ_010',
        systemTag: 'FED_MOTION',
        title: 'Cipher Labs',
        description: 'Cybersecurity firm website with animated data visualizations and interactive demos.',
        category: 'Website',
        year: '2025',
    },
];

export function ShowcaseVault() {
    return (
        <section className="relative" id="work">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="sticky top-0 z-10 glass py-4 px-6 md:px-8 border-b border-white/[0.06]"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                            Showcase Vault
                        </span>
                        <span className="text-zinc-700">/</span>
                        <span className="font-mono text-[10px] text-orange-500/70">
                            {showcaseProjects.length} Projects
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-2 font-mono text-[9px] text-zinc-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        UPDATED_2026
                    </div>
                </div>
            </motion.div>

            {/* Project Cards */}
            <div className="py-8">
                {showcaseProjects.map((project, index) => (
                    <ShowcaseCard
                        key={project.projectId}
                        {...project}
                        index={index}
                    />
                ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center py-20 px-8 text-center"
            >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4">
                    Want to be next?
                </p>
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                    Let's build something <span className="text-orange-500">extraordinary</span>
                </h2>
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-medium text-white hover:bg-orange-600 transition-colors"
                >
                    Start Your Project
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.a>
            </motion.div>
        </section>
    );
}
