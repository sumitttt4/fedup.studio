import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Inter, Playfair_Display } from "next/font/google";
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare } from 'geist/font/pixel';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: 'fedup.studio | Design Engineering Lab',
    template: '%s | fedup.studio',
  },
  description: 'Premium Design Engineering Lab. Illustrated + Motion-First Design for Startups, SaaS & Modern Products.',
  keywords: ['design agency', 'web development', 'next.js', 'ui/ux', 'motion design', 'startup branding'],
  authors: [{ name: SITE.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'fedup.studio | Design Engineering Lab',
    description: 'Premium Design Engineering Lab. Illustrated + Motion-First Design for Startups, SaaS & Modern Products.',
    url: '/',
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Fedup Studio showcase' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'fedup.studio | Design Engineering Lab',
    description: 'Premium Design Engineering Lab for startups and modern products.',
    images: [SITE.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}>
      <body className={`${inter.className} antialiased bg-[#FAF9F6] text-[#171717] selection:bg-orange-500/30 selection:text-orange-900`}>
        {children}
        {/* Noise Grain Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </body>
    </html>
  );
}
