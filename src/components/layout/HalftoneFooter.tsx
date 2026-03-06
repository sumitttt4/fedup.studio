'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

interface HalftoneFooterProps {
    text?: string;
    imageSrc?: string;
}

// Brand-aligned monochrome palette with accent
const ACCENT = '#c84307';

export function HalftoneFooter({
    text = 'Fedup',
    imageSrc = '/reveal-image.jpg'
}: HalftoneFooterProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textCanvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const timeRef = useRef(0);

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);
    const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

    const DOT_SPACING = isMobile ? 6 : 8;
    const DOT_BASE = isMobile ? 1.8 : 2.5;
    const MOUSE_RADIUS = isMobile ? 100 : 160;

    // Load reveal image
    useEffect(() => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => { imageRef.current = img; setIsImageLoaded(true); };
        img.onerror = () => { setIsImageLoaded(true); };
        img.src = imageSrc;
    }, [imageSrc]);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // Get text mask
    const getTextPixelData = useCallback((w: number, h: number): ImageData | null => {
        const c = textCanvasRef.current;
        if (!c || w <= 0 || h <= 0 || !containerRef.current) return null;
        c.width = w; c.height = h;
        const ctx = c.getContext('2d');
        if (!ctx) return null;
        ctx.clearRect(0, 0, w, h);

        const fontSize = isMobile
            ? Math.min(w * 0.38, h * 0.45)
            : Math.min(w * 0.25, h * 0.55);

        ctx.font = `900 ${fontSize}px "Inter", system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#FFF';
        ctx.fillText(text, w / 2, h / 2);

        return ctx.getImageData(0, 0, w, h);
    }, [text, isMobile]);

    // Main render
    const render = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { width: w, height: h } = canvas;
        if (w <= 0 || h <= 0) return;

        const textData = getTextPixelData(w, h);
        if (!textData) return;

        const data = textData.data;
        const mx = springX.get();
        const my = springY.get();
        const t = timeRef.current;

        ctx.clearRect(0, 0, w, h);

        // Pre-compute image data for reveal
        let revealCanvas: HTMLCanvasElement | null = null;
        let revealCtx: CanvasRenderingContext2D | null = null;
        let revealData: ImageData | null = null;

        if (imageRef.current) {
            revealCanvas = document.createElement('canvas');
            revealCanvas.width = w;
            revealCanvas.height = h;
            revealCtx = revealCanvas.getContext('2d');
            if (revealCtx) {
                const img = imageRef.current;
                const scale = Math.max(w / img.width, h / img.height);
                const iw = img.width * scale;
                const ih = img.height * scale;
                revealCtx.drawImage(img, (w - iw) / 2, (h - ih) / 2, iw, ih);
                revealData = revealCtx.getImageData(0, 0, w, h);
            }
        }

        for (let y = 0; y < h; y += DOT_SPACING) {
            for (let x = 0; x < w; x += DOT_SPACING) {
                const pi = (y * w + x) * 4;
                const alpha = data[pi + 3];
                if (alpha < 100) continue;

                // Distance to mouse
                const dx = x - mx;
                const dy = y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const influence = Math.max(0, 1 - dist / MOUSE_RADIUS);

                // Subtle breathing animation on dot size
                const breathe = Math.sin(t * 0.8 + x * 0.02 + y * 0.015) * 0.3;
                const baseRadius = DOT_BASE + breathe;

                // Dots grow near mouse
                const radius = baseRadius + influence * DOT_BASE * 1.2;

                // Color: monochrome base → accent near mouse, with position-based luminance shift
                const normalX = x / w;
                const normalY = y / h;

                if (influence > 0.05 && revealData) {
                    // Show image color through dots near cursor
                    const ri = revealData.data[pi];
                    const gi = revealData.data[pi + 1];
                    const bi = revealData.data[pi + 2];
                    ctx.fillStyle = `rgba(${ri}, ${gi}, ${bi}, ${0.4 + influence * 0.6})`;
                } else {
                    // Base dot color: brand orange with luminance variation
                    const lum = 0.25 + normalX * 0.15 + normalY * 0.1 + breathe * 0.05;
                    // Mix between warm white and accent based on position
                    const accentMix = 0.3 + Math.sin(normalX * 3.14 + normalY * 2) * 0.3;
                    // Warm white: rgb(220, 210, 200) → accent #c84307: rgb(200, 67, 7)
                    const r = Math.round(220 - accentMix * 60 + lum * 40);
                    const g = Math.round(210 - accentMix * 140 + lum * 20);
                    const b = Math.round(200 - accentMix * 190 + lum * 10);
                    const a = 0.5 + lum * 0.4;
                    ctx.fillStyle = `rgba(${Math.min(255, r)}, ${Math.min(255, g)}, ${Math.min(255, b)}, ${a})`;
                }

                ctx.beginPath();
                ctx.arc(x, y, Math.max(0.8, radius), 0, Math.PI * 2);
                ctx.fill();
            }
        }

        timeRef.current += 0.016;
        animationFrameRef.current = requestAnimationFrame(render);
    }, [DOT_SPACING, DOT_BASE, MOUSE_RADIUS, springX, springY, getTextPixelData]);

    // Setup canvas
    const init = useCallback(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const rect = container.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;

        canvas.width = rect.width;
        canvas.height = rect.height;
        setDimensions({ width: rect.width, height: rect.height });
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const ro = new ResizeObserver(() => init());
        ro.observe(container);
        return () => ro.disconnect();
    }, [init]);

    // Start animation loop
    useEffect(() => {
        if (dimensions.width <= 0) return;

        document.fonts.ready.then(() => {
            animationFrameRef.current = requestAnimationFrame(render);
        });

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [dimensions, render]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        setHasInteracted(true);
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }, [mouseX, mouseY]);

    const handleMouseLeave = useCallback(() => {
        mouseX.set(-1000);
        mouseY.set(-1000);
    }, [mouseX, mouseY]);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect || !e.touches[0]) return;
        setHasInteracted(true);
        mouseX.set(e.touches[0].clientX - rect.left);
        mouseY.set(e.touches[0].clientY - rect.top);
    }, [mouseX, mouseY]);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            className="relative w-full overflow-hidden cursor-crosshair"
            style={{ height: isMobile ? '35vh' : '45vh', minHeight: '280px' }}
        >
            <canvas ref={textCanvasRef} className="hidden" />
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: 'none' }}
            />

            {/* Hover hint */}
            {!hasInteracted && (
                <div className="absolute bottom-6 left-0 right-0 text-center animate-pulse">
                    <p className="text-[11px] font-medium tracking-wider uppercase text-white/20">
                        {isMobile ? 'Touch to interact' : 'Hover to reveal'}
                    </p>
                </div>
            )}
        </div>
    );
}
