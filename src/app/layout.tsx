import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: 'fedup.studio | Design & Development Studio',
    template: '%s | fedup.studio',
  },
  description: 'We design and build products that actually convert. Fast. Brand identity, web design, mobile apps, design systems, and Figma-to-code delivery.',
  keywords: ['design agency', 'web development', 'next.js', 'ui/ux', 'brand identity', 'figma to code', 'startup design'],
  authors: [{ name: SITE.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'fedup.studio | Design & Development Studio',
    description: 'We design and build products that actually convert. Fast.',
    url: '/',
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Fedup Studio' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'fedup.studio | Design & Development Studio',
    description: 'We design and build products that actually convert. Fast.',
    images: [SITE.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#F9F8F6] text-[#1A1A1A] selection:bg-[#84cc16]/30 selection:text-[#1A1A1A]">
        {children}
        {/* Noise Grain Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.025]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </body>
    </html>
  );
}
