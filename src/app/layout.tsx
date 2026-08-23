import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import '../styles/tailwind.css';

const gaMeasurementId = 'G-F79RRLRBXS';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cetia-solutions.co.uk';
const siteName = 'Cetia Solutions';
const defaultDescription =
  'Cetia Solutions is a UK software studio building mobile apps, SaaS platforms and AI-assisted workflows — and shipping its own products, including SmartRecipe and Milo.';

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
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Cetia Solutions | Mobile Apps, SaaS & AI Agent Development',
    template: '%s | Cetia Solutions',
  },
  description: defaultDescription,
  applicationName: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  keywords: [
    'mobile app development',
    'app development',
    'SaaS development',
    'AI agents',
    'AI agent development',
    'UK app development',
    'UK software studio',
    'SmartRecipe',
    'Milo AI assistant',
    'SmartCart',
  ],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Cetia Solutions | Mobile Apps, SaaS & AI Agent Development',
    description: defaultDescription,
    url: '/',
    siteName,
    images: [{ url: '/assets/images/cetia-solutions-logo.png', width: 1200, height: 1200, alt: 'Cetia Solutions logo' }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cetia Solutions | Mobile Apps, SaaS & AI Agent Development',
    description: defaultDescription,
    images: ['/assets/images/cetia-solutions-logo.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/assets/images/cetia-solutions-logo.png`,
    sameAs: [siteUrl],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'contact@cetia-solutions.co.uk',
        areaServed: 'GB',
        availableLanguage: 'en',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    inLanguage: 'en-GB',
    publisher: {
      '@type': 'Organization',
      name: siteName,
    },
  };

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={plusJakartaSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
