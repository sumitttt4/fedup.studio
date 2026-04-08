'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SITE } from '@/lib/site';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-[#E5E5E5]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[64px] w-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-[18px] font-bold tracking-tight text-[#111111]">
            fedup.studio
          </span>
        </Link>

        {/* Center nav — desktop */}
        <nav className="hidden md:flex items-center gap-8 bg-[#FFFFFF] border border-[#E5E5E5] rounded-full px-6 py-2 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] font-medium text-[#737373] transition-colors duration-200 hover:text-[#111111]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA — desktop */}
          <a
            href={SITE.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-full bg-[#111111] px-5 py-2.5 font-sans text-[13px] font-bold text-[#FAFAFA] transition-all duration-200 hover:scale-105 hover:bg-black"
          >
            Book a call
          </a>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden p-2 rounded-md text-[#737373] hover:bg-[#E5E5E5]/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.92 }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-[#E5E5E5] bg-[#FAFAFA]/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  className="rounded-md px-4 py-3 font-sans text-[16px] font-medium text-[#111111] hover:bg-[#E5E5E5]/50 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={SITE.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 mx-4 rounded-full bg-[#111111] px-5 py-3 font-sans text-[14px] font-bold text-[#FAFAFA] text-center transition-all hover:bg-black"
              >
                Book a call
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
