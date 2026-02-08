'use client';

export function GeistGridBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none opacity-[0.03]">
            {/* 
              We create a repeating pattern of slashes and dots using SVG for performance.
              The font-family will inherit or we specify the variable.
            */}
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="geist-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        {/* Diagonal Lines (////) */}
                        <text x="0" y="20" style={{ fontFamily: 'var(--font-geist-pixel-square)', fontSize: '12px', fill: 'white' }}>
                            ////////////////
                        </text>
                        <text x="0" y="40" style={{ fontFamily: 'var(--font-geist-pixel-square)', fontSize: '12px', fill: 'white' }}>
                            ................
                        </text>
                        <text x="0" y="60" style={{ fontFamily: 'var(--font-geist-pixel-square)', fontSize: '12px', fill: 'white' }}>
                            ////////////////
                        </text>
                        <text x="0" y="80" style={{ fontFamily: 'var(--font-geist-pixel-square)', fontSize: '12px', fill: 'white' }}>
                            ................
                        </text>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#geist-pattern)" />
            </svg>
        </div>
    );
}
