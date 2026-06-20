import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Cetia Solutions | Apps, SaaS and AI Agents',
    template: '%s | Cetia Solutions',
  },
  description:
    'Cetia Solutions helps UK businesses build production-ready mobile apps, SaaS platforms and AI-powered workflows.',
  keywords: [
    'mobile app development',
    'SaaS development',
    'AI agents',
    'UK app development',
    'SmartCart',
    'grocery price comparison app',
    'supermarket price comparison',
  ],
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'Cetia Solutions | Apps, SaaS and AI Agents',
    description: 'Build smarter apps, SaaS platforms and AI agents with Cetia Solutions.',
    url: '/',
    siteName: 'Cetia Solutions',
    images: [{ url: '/assets/images/cetia-solutions-logo.png', width: 1200, height: 1200, alt: 'Cetia Solutions logo' }],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
