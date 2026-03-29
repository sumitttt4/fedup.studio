'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#E5E0D8] transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F8F6]/80 backdrop-blur-md shadow-sm'
          : 'bg-[#F9F8F6]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
        {/* Logo — ✦ symbol + text */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-[#84cc16] text-lg leading-none select-none">✦</span>
          <span className="font-sans text-[15px] font-semibold tracking-tight text-[#1A1A1A]">
            Fedup Studio
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors duration-150 ${
                  active
                    ? 'text-[#84cc16]'
                    : 'text-[#767676] hover:text-[#1A1A1A]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href={SITE.meetingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-lg bg-[#84cc16] px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#68a211]"
        >
          Book a Call
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#767676] hover:bg-[#E5E0D8] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#E5E0D8] bg-[#F9F8F6] px-6 py-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm font-medium text-[#767676] transition-colors hover:text-[#1A1A1A]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-[#84cc16] px-5 py-3 font-sans text-sm font-semibold text-white text-center transition-all hover:bg-[#68a211]"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
