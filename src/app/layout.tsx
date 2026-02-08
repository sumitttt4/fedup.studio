import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from 'geist/font/mono';
import { GeistPixelSquare } from 'geist/font/pixel';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "fedup.studio | Design Engineering Lab",
  description: "Premium Design Engineering Lab. Illustrated + Motion-First Design for Startups, SaaS & Modern Products.",
  keywords: ["design agency", "web development", "framer", "next.js", "ui/ux", "motion design"],
  authors: [{ name: "fedup.studio" }],
  openGraph: {
    title: "fedup.studio | Design Engineering Lab",
    description: "Premium Design Engineering Lab. Illustrated + Motion-First Design for Startups, SaaS & Modern Products.",
    type: "website",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}>
      <body className={`${inter.className} antialiased bg-[#0A0A0A] text-zinc-100 selection:bg-orange-500/30 selection:text-orange-200`}>
        {children}
        {/* Noise Grain Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </body>
    </html>
  );
}
