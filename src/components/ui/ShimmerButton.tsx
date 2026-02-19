'use client';

import { motion } from 'framer-motion';

interface ShimmerButtonProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    shimmerColor?: string;
    background?: string;
    borderRadius?: string;
    enableShadow?: boolean;
}

export function ShimmerButton({
    children,
    className = '',
    href,
    shimmerColor = 'rgba(255,255,255,0.3)',
    background = 'rgba(255,255,255,1)',
    borderRadius = '9999px',
    enableShadow = false,
}: ShimmerButtonProps) {
    const isLight = background.includes('255,255,255') || background === '#fff' || background === '#ffffff' || background === 'white' || background.includes('255, 255, 255');

    const content = (
        <motion.span
            className={`group relative z-0 inline-flex min-h-11 cursor-pointer items-center justify-center overflow-hidden ${className}`}
            style={{
                background,
                borderRadius,
                boxShadow: enableShadow 
                    ? (isLight 
                        ? '0px 0px 45px -10px rgba(255,255,255,0.4), 0px 0px 15px -3px rgba(255,255,255,0.3)' 
                        : '0px 10px 30px -10px rgba(0,0,0,0.5)') 
                    : undefined,
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            {/* Shimmer sweep overlay */}
            <span
                className="absolute inset-0 overflow-hidden"
                style={{ borderRadius }}
            >
                <span
                    className="shimmer-sweep absolute inset-0"
                    style={{
                        background: `linear-gradient(
                            120deg,
                            transparent 25%,
                            ${shimmerColor} 50%,
                            transparent 75%
                        )`,
                        backgroundSize: '200% 100%',
                    }}
                />
            </span>

            {/* Glow effect on hover */}
            <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    borderRadius,
                    boxShadow: isLight
                        ? '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.1)'
                        : '0 0 20px rgba(255,255,255,0.15), 0 0 40px rgba(255,255,255,0.05)',
                }}
            />

            {/* Content */}
            <span className="relative z-10">{children}</span>
        </motion.span>
    );

    if (href) {
        return (
            <a
                href={href}
                className="inline-flex rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c84307] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
                {content}
            </a>
        );
    }
    return content;
}
