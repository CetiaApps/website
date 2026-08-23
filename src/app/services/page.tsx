import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle2, Cloud, Smartphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/app/services/components/ServicesHero';
import CtaBanner from '@/app/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Cetia Solutions builds mobile apps, SaaS platforms and AI agents for UK businesses — from strategy and design through to launch and ongoing support.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | Cetia Solutions',
    description:
      'Cetia Solutions builds mobile apps, SaaS platforms and AI agents for UK businesses — from strategy and design through to launch and ongoing support.',
    url: '/services',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Software development',
  provider: { '@type': 'Organization', name: 'Cetia Solutions', url: 'https://www.cetia-solutions.co.uk' },
  areaServed: 'GB',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cetia Solutions services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile app consulting & development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS solution consulting & development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI agent consulting & development' } },
    ],
  },
};

const offerings = [
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile app consulting & development',
    description:
      'Plan, design and build polished mobile apps for Android, iOS and cross-platform launches.',
    build: ['MVPs and production apps', 'User accounts and subscriptions', 'Mobile UI and onboarding', 'API and backend integrations'],
    useCases: ['Customer apps', 'Internal field tools', 'Marketplace apps', 'Data capture and workflow apps'],
  },
  {
    id: 'saas-solutions',
    icon: Cloud,
    title: 'SaaS solution consulting & development',
    description:
      'Create secure web platforms, subscription products and operational dashboards that can grow with the business.',
    build: ['Multi-user SaaS platforms', 'Admin dashboards', 'Billing and permissions', 'Data models, APIs and reporting'],
    useCases: ['Client portals', 'Business automation platforms', 'Subscription products', 'Operations and reporting tools'],
  },
  {
    id: 'ai-agents',
    icon: Bot,
    title: 'AI agent consulting & development',
    description:
      'Design useful AI-powered workflows that connect to your data, tools and business processes.',
    build: ['AI workflow agents', 'Knowledge assistants', 'Document and inbox automation', 'Human-in-the-loop review systems'],
    useCases: ['Support triage', 'Lead qualification', 'Back-office automation', 'Internal knowledge search'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main>
        <ServicesHero />

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-10">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              const iconTint = index === 0 ? 'bg-primary/10 text-primary' : index === 1 ? 'bg-accent/10 text-accent' : 'bg-secondary text-primary';
              return (
                <article key={offering.id} id={offering.id} className="card-elevated scroll-mt-28 rounded-xl border border-border bg-card p-6 shadow-sm md:p-9">
                  <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-lg ${iconTint}`}>
                        <Icon size={28} />
                      </div>
                      <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-4xl">{offering.title}</h2>
                      <p className="mt-4 text-base leading-7 text-muted-foreground">{offering.description}</p>
                      <Link href="/contact" className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-primary-foreground">
                        Talk about this service <ArrowRight size={18} />
                      </Link>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="rounded-xl border border-border bg-card p-5">
                        <h3 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-primary">What we build</h3>
                        <ul className="space-y-3">
                          {offering.build.map((item) => (
                            <li key={item} className="flex gap-3 text-sm font-semibold text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-border bg-card p-5">
                        <h3 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-primary">Use cases</h3>
                        <ul className="space-y-3">
                          {offering.useCases.map((item) => (
                            <li key={item} className="flex gap-3 text-sm font-semibold text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={18} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
