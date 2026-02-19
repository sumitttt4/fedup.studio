'use client';

import { useRef, useEffect, useCallback } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface MovingBorderButtonProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    href?: string;
    borderColor?: string;
    duration?: number;
    borderRadius?: string;
}

export function MovingBorderButton({
    children,
    className = '',
    containerClassName = '',
    href,
    borderColor = 'rgba(255, 255, 255, 0.6)',
    duration = 3000,
    borderRadius = '9999px',
}: MovingBorderButtonProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const angle = useMotionValue(0);
    const smoothAngle = useSpring(angle, { stiffness: 50, damping: 20 });

    const background = useMotionTemplate`conic-gradient(from ${smoothAngle}deg at 50% 50%, transparent 0%, ${borderColor} 10%, transparent 20%)`;

    const animate = useCallback(() => {
        const start = performance.now();
        const loop = (time: number) => {
            const elapsed = time - start;
            const progress = (elapsed % duration) / duration;
            angle.set(progress * 360);
            requestAnimationFrame(loop);
        };
        const id = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(id);
    }, [angle, duration]);

    useEffect(() => {
        const cleanup = animate();
        return cleanup;
    }, [animate]);

    const content = (
        <div
            ref={containerRef}
            className={`relative overflow-hidden rounded-full p-[1px] focus-within:ring-2 focus-within:ring-[#c84307] focus-within:ring-offset-2 focus-within:ring-offset-[#0A0A0A] ${containerClassName}`}
            style={{ borderRadius }}
        >
            {/* Animated border gradient */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background,
                    borderRadius,
                }}
            />

            {/* Inner content with background */}
            <motion.span
                className={`relative z-10 flex min-h-11 cursor-pointer items-center justify-center gap-2 bg-[#0A0A0A] backdrop-blur-sm ${className}`}
                style={{ borderRadius }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
                {children}
            </motion.span>
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                className="inline-flex rounded-full focus-visible:outline-none"
            >
                {content}
            </a>
        );
    }
    return content;
}
