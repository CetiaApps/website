'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'SmartCart', href: '/smartcart' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'border-b border-border bg-background/92 py-3 shadow-sm backdrop-blur-xl' : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
          <Link href="/" className="flex min-h-[44px] items-center gap-3" aria-label="Cetia Solutions home">
            <span className="relative h-11 w-11 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <Image src="/assets/images/cetia-solutions-logo.png" alt="" fill sizes="44px" className="object-cover" priority />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              Cetia <span className="text-primary">Solutions</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden min-h-[44px] items-center rounded-full bg-foreground px-5 text-sm font-bold text-background shadow-sm transition-colors hover:bg-primary md:inline-flex"
            >
              Start a project
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-background/96 backdrop-blur-xl transition-opacity md:hidden ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <nav className="flex h-full flex-col items-center justify-center gap-5 px-8" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-3xl font-extrabold tracking-tight ${isActive(link.href) ? 'text-primary' : 'text-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground"
          >
            Start a project
          </Link>
        </nav>
      </div>
    </>
  );
}
