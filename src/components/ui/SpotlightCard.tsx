'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
}

export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Spotlight gradient that follows cursor */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-inherit transition-opacity duration-300"
                style={{
                    background: isHovered
                        ? `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(249, 115, 22, 0.15), transparent 40%)`
                        : 'none',
                    opacity: isHovered ? 1 : 0,
                }}
            />
            {/* Border spotlight */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-inherit transition-opacity duration-300"
                style={{
                    background: isHovered
                        ? `radial-gradient(400px circle at ${springX}px ${springY}px, rgba(249, 115, 22, 0.4), transparent 40%)`
                        : 'none',
                    opacity: isHovered ? 1 : 0,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    padding: '1px',
                }}
            />
            {children}
        </motion.div>
    );
}
