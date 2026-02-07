'use client';

import { motion } from 'framer-motion';
import { TiltCard } from '@/components/ui/TiltCard';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

interface ShowcaseCardProps {
    projectId: string;
    systemTag: string;
    title: string;
    description: string;
    category: string;
    year: string;
    imageUrl?: string;
    index: number;
}

export function ShowcaseCard({
    projectId,
    systemTag,
    title,
    description,
    category,
    year,
    imageUrl,
    index,
}: ShowcaseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-[85vh] flex items-center justify-center p-4 md:p-8"
        >
            <TiltCard className="w-full max-w-4xl" tiltIntensity={8}>
                <SpotlightCard className="rounded-2xl border border-white/[0.06] bg-zinc-900/50 overflow-hidden">
                    {/* Card Header */}
                    <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-[10px] tracking-wider text-zinc-500">
                                {projectId}
                            </span>
                            <span className="text-zinc-700">//</span>
                            <span className="font-mono text-[10px] tracking-wider text-orange-500/70">
                                {systemTag}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-zinc-700" />
                            <span className="h-2 w-2 rounded-full bg-zinc-700" />
                            <span className="h-2 w-2 rounded-full bg-orange-500" />
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="vertex-grid">
                        {/* Image Placeholder / Preview Area */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950/50">
                            {imageUrl ? (
                                <motion.div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${imageUrl})` }}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="mx-auto mb-4 h-16 w-16 rounded-2xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center">
                                            <svg className="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                                            Preview Coming Soon
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                        </div>

                        {/* Card Footer */}
                        <div className="p-6 md:p-8">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div className="flex-1 min-w-[200px]">
                                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                                        {description}
                                    </p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400">
                                        {category}
                                    </span>
                                    <span className="font-mono text-[10px] text-zinc-600">
                                        {year}
                                    </span>
                                </div>
                            </div>

                            {/* Action Row */}
                            <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-[10px] text-zinc-500">STACK:</span>
                                    <div className="flex gap-2">
                                        {['Next.js', 'Framer', 'Tailwind'].map((tech) => (
                                            <span
                                                key={tech}
                                                className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded bg-white/[0.03] text-zinc-500"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-orange-500 hover:text-orange-400 transition-colors"
                                >
                                    View Case Study
                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
            </TiltCard>
        </motion.div>
    );
}
