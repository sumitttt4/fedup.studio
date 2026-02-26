'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface HalftoneFooterProps {
    text?: string;
    imageSrc?: string;
    height?: string;
    minHeight?: string;
}

// Dot color palette - vivid red/gold/white tones
const DOT_COLORS = ['#FF3333', '#FFD700', '#F0F0F0'];

export function HalftoneFooter({
    text = 'Fedup',
    imageSrc = '/reveal-image.jpg',
    height = '50vh',
    minHeight = '300px'
}: HalftoneFooterProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const halftoneCanvasRef = useRef<HTMLCanvasElement>(null);
    const revealCanvasRef = useRef<HTMLCanvasElement>(null);
    const textCanvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Mouse position with spring animation
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

    // Grid settings
    const DOT_SPACING = isMobile ? 4 : 5;
    const DOT_BASE_RADIUS = isMobile ? 1.5 : 2;
    const MOUSE_RADIUS = isMobile ? 120 : 180;

    // Load image
    useEffect(() => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            imageRef.current = img;
            setIsImageLoaded(true);
        };
        img.onerror = () => {
            // Create a gradient fallback if image fails to load
            setIsImageLoaded(true);
        };
        img.src = imageSrc;
    }, [imageSrc]);

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Get text pixel data
    const getTextPixelData = useCallback((width: number, height: number): ImageData | null => {
        const canvas = textCanvasRef.current;
        if (!canvas || width <= 0 || height <= 0 || !containerRef.current) return null;

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Get font family from container
        const computedStyle = getComputedStyle(containerRef.current);
        const fontFamily = computedStyle.fontFamily;

        // Draw text
        const fontSize = isMobile
            ? Math.min(width * 0.35, height * 0.5)
            : Math.min(width * 0.22, height * 0.6);

        ctx.font = `bold ${fontSize}px ${fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#FFFFFF';

        const yOffset = isMobile ? 0 : -40;
        ctx.fillText(text, width / 2, height / 2 + yOffset);

        return ctx.getImageData(0, 0, width, height);
    }, [text, isMobile]);

    // Draw halftone dots
    const drawHalftoneDots = useCallback((
        ctx: CanvasRenderingContext2D,
        textData: ImageData,
        width: number,
        height: number
    ) => {
        ctx.clearRect(0, 0, width, height);

        const data = textData.data;

        for (let y = 0; y < height; y += DOT_SPACING) {
            for (let x = 0; x < width; x += DOT_SPACING) {
                const pixelIndex = (y * width + x) * 4;
                const alpha = data[pixelIndex + 3];

                if (alpha > 128) {
                    // Vary dot size slightly for organic feel
                    const variation = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 0.5;
                    const radius = DOT_BASE_RADIUS + variation;

                    // Pick color based on position - high frequency pattern
                    const colorIndex = (Math.floor(x / DOT_SPACING) + Math.floor(y / DOT_SPACING)) % DOT_COLORS.length;
                    ctx.fillStyle = DOT_COLORS[colorIndex];

                    ctx.beginPath();
                    ctx.arc(x, y, Math.max(0.5, radius), 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
    }, [DOT_SPACING, DOT_BASE_RADIUS]);

    // Draw reveal layer with mouse mask
    const drawRevealLayer = useCallback((
        ctx: CanvasRenderingContext2D,
        textData: ImageData,
        width: number,
        height: number,
        mx: number,
        my: number
    ) => {
        ctx.clearRect(0, 0, width, height);

        if (!imageRef.current && !isImageLoaded) return;

        // Save context state
        ctx.save();

        // Draw the image (or gradient fallback)
        if (imageRef.current) {
            // Scale image to cover canvas
            const img = imageRef.current;
            const scale = Math.max(width / img.width, height / img.height);
            const imgWidth = img.width * scale;
            const imgHeight = img.height * scale;
            const imgX = (width - imgWidth) / 2;
            const imgY = (height - imgHeight) / 2;
            ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
        } else {
            // Gradient fallback
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#C4876E');
            gradient.addColorStop(0.5, '#D4A574');
            gradient.addColorStop(1, '#E8C5A0');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }

        // Clip to text shape using destination-in
        ctx.globalCompositeOperation = 'destination-in';

        // Draw text shape
        if (containerRef.current) {
            const computedStyle = getComputedStyle(containerRef.current);
            const fontFamily = computedStyle.fontFamily;
            const fontSize = Math.min(width * 0.22, height * 0.6);
            ctx.font = `bold ${fontSize}px ${fontFamily}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(text, width / 2, height / 2 - 40);
        }

        // Apply radial gradient mask for mouse reveal
        ctx.globalCompositeOperation = 'destination-in';

        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, MOUSE_RADIUS);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        ctx.restore();
    }, [text, isImageLoaded]);

    // Initialize canvases
    const initializeCanvases = useCallback(() => {
        const container = containerRef.current;
        const halftoneCanvas = halftoneCanvasRef.current;
        const revealCanvas = revealCanvasRef.current;

        if (!container || !halftoneCanvas || !revealCanvas) return;

        const rect = container.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        if (width <= 0 || height <= 0) return;

        // Set canvas dimensions
        halftoneCanvas.width = width;
        halftoneCanvas.height = height;
        revealCanvas.width = width;
        revealCanvas.height = height;

        setDimensions({ width, height });

        // Force a font load check/wait implies we just try to draw
        // The ResizeObserver will likely trigger another pass if layout shifts
        document.fonts.ready.then(() => {
            // Get text pixel data
            const textData = getTextPixelData(width, height);
            if (!textData) return;

            // Draw halftone layer
            const halftoneCtx = halftoneCanvas.getContext('2d');
            if (halftoneCtx) {
                drawHalftoneDots(halftoneCtx, textData, width, height);
            }
        });

    }, [getTextPixelData, drawHalftoneDots]);

    // Handle resize with ResizeObserver
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const resizeObserver = new ResizeObserver(() => {
            initializeCanvases();
        });

        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
        };
    }, [initializeCanvases]);

    // Mouse move handler
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile) return;

        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mouseX.set(x);
        mouseY.set(y);
    }, [isMobile, mouseX, mouseY]);

    // Handle touch for mobile
    const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect || !e.touches[0]) return;

        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;

        mouseX.set(x);
        mouseY.set(y);
    }, [mouseX, mouseY]);

    // Animation loop for reveal layer
    useEffect(() => {
        if (!isImageLoaded) return;

        const animate = () => {
            const revealCanvas = revealCanvasRef.current;
            if (!revealCanvas) return;

            const ctx = revealCanvas.getContext('2d');
            if (!ctx) return;

            const textData = getTextPixelData(dimensions.width, dimensions.height);
            if (!textData) return;

            drawRevealLayer(
                ctx,
                textData,
                dimensions.width,
                dimensions.height,
                springX.get(),
                springY.get()
            );

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isImageLoaded, dimensions, springX, springY, getTextPixelData, drawRevealLayer]);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full overflow-hidden"
            style={{
                height,
                minHeight,
                fontFamily: 'var(--font-geist-pixel-square)', // Apply pixel font here
            }}
        >
            {/* Hidden canvas for text pixel data */}
            <canvas
                ref={textCanvasRef}
                className="hidden"
            />

            {/* Halftone dots layer */}
            <canvas
                ref={halftoneCanvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: 'none' }}
            />

            {/* Image reveal layer */}
            <canvas
                ref={revealCanvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: 'none' }}
            />

            {/* Mobile touch hint */}
            {isMobile && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-4 left-0 right-0 text-center"
                >
                    <p className="text-xs" style={{ color: '#6B5A4E' }}>
                        Touch and drag to reveal
                    </p>
                </motion.div>
            )}
        </div>
    );
}
