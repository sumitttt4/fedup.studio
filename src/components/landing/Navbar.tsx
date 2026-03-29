'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SITE } from '@/lib/site';

const navLinks = [
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Process', href: '#process', id: 'process' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: '-80px 0px -50% 0px' },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-[#F9F8F6]/70 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-[#E5E0D8]/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[56px] sm:h-[60px] max-w-[1200px] items-center justify-between px-[24px]">
        {/* Logo */}
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
              <path d="M256,160L352,320L160,320Z M320,192L288,352L160,224Z" fill="#84cc16" fillRule="evenodd" opacity="0.9"/>
            </svg>
            <span className="font-sans text-[14px] sm:text-[15px] font-semibold tracking-tight text-[#1A1A1A]">
              Fedup Studio
            </span>
          </Link>
        </div>

        {/* Center nav — desktop */}
        <nav className="hidden md:flex items-center gap-[36px]">
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-sans text-sm font-medium transition-colors duration-150 ${
                  active
                    ? 'text-[#84cc16]'
                    : 'text-[#767676] hover:text-[#1A1A1A]'
                }`}
              >
                {link.label}
                {/* Active indicator dot */}
                {active && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#84cc16]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end">
          {/* CTA — desktop */}
          <a
            href={SITE.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-lg bg-[#84cc16] px-4 lg:px-5 py-2.5 font-sans text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#68a211] hover:shadow-md"
          >
            Book a Call
          </a>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-[#767676] hover:bg-[#E5E0D8]/60 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.92 }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu — animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-[#E5E0D8] bg-[#F9F8F6]/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  className={`rounded-lg px-4 py-3 font-sans text-[15px] font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#84cc16]/10 text-[#5a8a0e]'
                      : 'text-[#4a4a4a] hover:bg-[#E5E0D8]/40'
                  }`}
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
                transition={{ delay: 0.3 }}
                className="mt-2 rounded-lg bg-[#84cc16] px-5 py-3 font-sans text-sm font-semibold text-white text-center transition-all hover:bg-[#68a211]"
              >
                Book a Call
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
