import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { label: 'Mobile app development', href: '/services#mobile-apps' },
  { label: 'SaaS development', href: '/services#saas-solutions' },
  { label: 'AI agents', href: '/services#ai-agents' },
];

const smartCart = [
  { label: 'SmartCart overview', href: '/smartcart' },
  { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=smartcart.cetia.app' },
];

const legal = [
  { label: 'SmartCart Privacy Policy', href: '/smartcart-privacy-policy' },
  { label: 'Delete my Data', href: '/smartcart-delete-my-data' },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith('http');
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10">
        <div>
          <Link href="/" className="mb-5 flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-xl border border-border bg-background">
              <Image src="/assets/images/cetia-solutions-logo.png" alt="" fill sizes="48px" className="object-cover" />
            </span>
            <span className="text-xl font-extrabold tracking-tight">Cetia Solutions</span>
          </Link>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            UK app development, SaaS development and AI agent consulting for businesses that want polished, production-ready software.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-foreground">Services</h2>
          <div className="flex flex-col gap-3">
            {services.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-foreground">SmartCart</h2>
          <div className="flex flex-col gap-3">
            {smartCart.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-foreground">Legal</h2>
          <div className="flex flex-col gap-3">
            {legal.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-5 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs font-semibold text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Cetia Solutions. All rights reserved.</p>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Start a project
          </Link>
        </div>
      </div>
    </footer>
  );
}
