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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Merriweather:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#F9F8F6] text-[#1A1A1A] selection:bg-[#84cc16]/30 selection:text-[#1A1A1A]">
        {children}
        {/* Noise Grain Overlay — Framer-level texture */}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
