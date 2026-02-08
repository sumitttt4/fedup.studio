'use client';

import { Header } from '@/components/layout/Header';
import { LeftPanel } from '@/components/layout/LeftPanel';
import { Pricing } from '@/components/sections/Pricing';
import { HalftoneFooter } from '@/components/layout/HalftoneFooter';
import { GeistGridBackground } from '@/components/layout/GeistGridBackground';

export default function PricingPage() {
    return (
        <main className="relative min-h-screen bg-[#0A0A0A]">
            <GeistGridBackground />
            <Header />

            {/* Desktop Layout: Split Screen */}
            <div className="hidden md:flex min-h-screen pt-[72px]">
                {/* Left Panel - Sticky (35%) */}
                <div className="w-[35%] min-w-[360px] max-w-[480px] sticky top-[72px] h-[calc(100vh-72px)] border-r border-dashed border-white/10">
                    <LeftPanel />
                </div>

                {/* Right Panel - Scrollable (65%) */}
                <div className="flex-1 overflow-y-auto p-8">
                    <Pricing />
                    <HalftoneFooter text="Fedup" imageSrc="/reveal-image.jpg" />
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden pt-[72px]">
                <div className="px-6 py-8">
                    <Pricing />
                    <HalftoneFooter text="Fedup" imageSrc="/reveal-image.jpg" />
                </div>
            </div>
        </main>
    );
}
