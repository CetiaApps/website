import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Apps', href: '/apps' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/smart-recipe-privacy-policy' },
  { label: 'SmartCart Privacy', href: '/smartcart-privacy-policy' },
  { label: 'Data Deletion', href: '/smartrecipe-data-deletion' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <AppLogo size={32} />
            <span className="font-extrabold text-lg tracking-tight text-foreground">
              Cetia<span className="text-primary">Apps</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div></div>
        </div>

        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-medium text-muted-foreground">
            © 2026 CetiaApps. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
            <Link href="/smart-recipe-privacy-policy" className="hover:text-foreground transition-colors">SmartRecipe Privacy</Link>
            <span>·</span>
            <Link href="/smartcart-privacy-policy" className="hover:text-foreground transition-colors">SmartCart Privacy</Link>
            <span>·</span>
            <Link href="/milo-privacy-policy" className="hover:text-foreground transition-colors">Milo Privacy</Link>
            <span>·</span>
            <Link href="/smartrecipe-data-deletion" className="hover:text-foreground transition-colors">Data Deletion</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
