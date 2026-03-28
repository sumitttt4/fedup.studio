'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SITE } from '@/lib/site';

function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M256,160L352,320L160,320Z M320,192L288,352L160,224Z"
        fill="#84cc16"
        fillRule="evenodd"
        opacity="0.9"
      />
    </svg>
  );
}

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#E5E0D8] bg-[#F9F8F6] transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Logo className="h-9 w-9" />
          <span className="font-sans text-base font-bold tracking-tight text-[#1A1A1A]">
            fedup.studio
          </span>
        </Link>

        {/* Center nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#767676]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-[#1A1A1A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={SITE.meetingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-lg bg-[#84cc16] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#68a211] shadow-sm"
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
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#767676] hover:text-[#1A1A1A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-[#84cc16] px-5 py-3 text-sm font-semibold text-white text-center transition-all hover:bg-[#68a211]"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
