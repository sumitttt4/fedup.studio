'use client';

import { motion } from 'framer-motion';

export function RealWorldPreview() {
    return (
        <section className="w-full mb-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="ds-card-hero relative w-full cursor-pointer overflow-hidden shadow-2xl"
            >
                {/* 
                  PLACEHOLDER FOR USER SCREENSHOT 
                  User: Drop your screenshot at public/projects/glyph-preview.png
                */}
                <img
                    src="/Glyph.png"
                    alt="See It Before You Ship It - Real World Preview"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                        // Fallback visual if image is missing
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add('bg-zinc-900', 'h-64', 'flex', 'items-center', 'justify-center');
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-zinc-500 font-mono text-sm">Image not found: /Glyph.png</span>';
                    }}
                />
            </motion.div>
        </section>
    );
}
