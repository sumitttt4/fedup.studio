import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: 'fedup.studio — Design & Development Studio',
    template: '%s — fedup.studio',
  },
  description: 'We design and build digital products that convert. Brand identity, web design, development, and Figma-to-code — delivered fast.',
  keywords: ['design studio', 'web development', 'next.js', 'ui/ux', 'brand identity', 'figma to code'],
  authors: [{ name: SITE.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'fedup.studio — Design & Development Studio',
    description: 'We design and build digital products that convert.',
    url: '/',
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Fedup Studio' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'fedup.studio — Design & Development Studio',
    description: 'We design and build digital products that convert.',
    images: [SITE.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700,400,900&f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#FAFAFA] text-[#111111] selection:bg-[#FF4400]/20 selection:text-[#111111]">
        {children}
        {/* Subtle texture overlay */}
        <div className="scratch-texture" />
      </body>
    </html>
  );
}
