'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'SmartCart', href: '/smartcart' },
  { label: 'Shopping guides', href: '/blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
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
          <Link href="/" className="flex min-h-[48px] items-center gap-3" aria-label="Cetia Solutions home">
            <span className="relative h-12 w-12 bg-transparent">
              <Image src="/assets/images/cetia-solutions-logo.png" alt="" fill sizes="48px" className="object-contain" priority />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              Cetia <span className="text-primary">Solutions</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductsOpen((open) => !open)}
                aria-haspopup="menu"
                aria-expanded={productsOpen}
                className={`inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  pathname.startsWith('/smartcart') || pathname.startsWith('/blog')
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                Products <ChevronDown size={15} />
              </button>
              <div
                className={`absolute left-0 top-full z-50 min-w-52 pt-3 transition-all ${
                  productsOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
                }`}
                role="menu"
              >
                <div className="rounded-xl border border-border bg-card p-2 shadow-2xl shadow-slate-950/10">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      className="block rounded-lg px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
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
              className="hidden min-h-[44px] items-center rounded-lg bg-foreground px-5 text-sm font-bold text-background shadow-sm transition-colors hover:bg-primary md:inline-flex"
            >
              Contact Cetia Solutions
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-sm md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-background/96 backdrop-blur-xl transition-opacity md:hidden ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <nav className="flex h-full flex-col items-center justify-center gap-5 px-8" aria-label="Mobile navigation">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-3xl font-extrabold tracking-tight ${isActive(link.href) ? 'text-primary' : 'text-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="text-center">
            <p className={`text-3xl font-extrabold tracking-tight ${pathname.startsWith('/smartcart') || pathname.startsWith('/blog') ? 'text-primary' : 'text-foreground'}`}>
              Products
            </p>
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`mt-3 block text-xl font-extrabold tracking-tight ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {navLinks.slice(2).map((link) => (
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
            className="mt-4 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground"
          >
            Contact Cetia Solutions
          </Link>
        </nav>
      </div>
    </>
  );
}
