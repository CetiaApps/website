import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesTeaserSection from '@/app/components/ServicesTeaserSection';
import CtaBanner from '@/app/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Cetia Solutions | Mobile Apps, SaaS & AI Agent Development',
  description:
    'Cetia Solutions is a UK software studio building mobile apps, SaaS platforms and AI-assisted workflows — and shipping its own products, including SmartRecipe and Milo.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cetia Solutions | Mobile Apps, SaaS & AI Agent Development',
    description:
      'Cetia Solutions is a UK software studio building mobile apps, SaaS platforms and AI-assisted workflows — and shipping its own products, including SmartRecipe and Milo.',
    url: '/',
    images: [{ url: '/assets/images/cetia-solutions-logo.png', width: 1200, height: 1200, alt: 'Cetia Solutions logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cetia Solutions | Mobile Apps, SaaS & AI Agent Development',
    description:
      'Cetia Solutions is a UK software studio building mobile apps, SaaS platforms and AI-assisted workflows — and shipping its own products, including SmartRecipe and Milo.',
    images: ['/assets/images/cetia-solutions-logo.png'],
  },
};

const reasons = [
  'Product thinking from idea to launch',
  'Clean UX for real users and busy teams',
  'Modern web, mobile and AI engineering',
  'Practical delivery with measurable next steps',
];

const process = ['Discover', 'Design', 'Build', 'Launch', 'Improve'];

export default function HomePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cetia-solutions.co.uk/' }],
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        <HeroSection />

        <ServicesTeaserSection />

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
            <div>
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Why Cetia Solutions</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                Why choose Cetia Solutions
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                We help shape the idea, design the experience, build the product and keep improving it after launch.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="card-elevated rounded-xl border border-border bg-card p-5 shadow-sm">
                  <CheckCircle2 className="mb-4 text-primary" size={24} />
                  <p className="font-bold text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="card-elevated grid items-center gap-10 rounded-xl border border-border bg-card p-8 shadow-sm md:grid-cols-[auto_1fr_auto] md:p-10">
              <Image
                src="/assets/images/smartcart-app-shopping-list.png"
                alt="SmartCart app screen showing a shared shopping list with live supermarket prices"
                width={852}
                height={1846}
                sizes="140px"
                className="mx-auto h-auto w-[140px] rounded-2xl shadow-lg shadow-teal-900/10"
              />
              <div className="min-w-0">
                <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-primary">Our products</p>
                <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                  SmartCart has moved to its own home.
                </h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
                  Compare grocery prices across 7 UK supermarkets with a web app, Android app and iPhone app, all at{' '}
                  <span className="font-bold text-foreground">getsmartcart.co.uk</span>.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="https://getsmartcart.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-primary-foreground whitespace-nowrap"
                >
                  Visit SmartCart <ExternalLink size={16} />
                </Link>
                <Link
                  href="/smartcart"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-extrabold text-foreground whitespace-nowrap"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Process</p>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">A clear route from idea to improvement.</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-5">
              {process.map((step, index) => (
                <div key={step} className="card-elevated rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-primary">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-extrabold text-foreground">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
