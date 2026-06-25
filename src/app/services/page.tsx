import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle2, Cloud, Smartphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Mobile apps, web platforms, business tools and AI-assisted development from Cetia Solutions.',
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
      <main>
        <section className="border-b border-border bg-background pt-32">
          <div className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-primary">Services</p>
              <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
                Software services for apps, SaaS and AI workflows.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                Cetia Solutions helps UK businesses define, design and deliver practical software products with clear architecture, thoughtful UX and practical launch support.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-10">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <article key={offering.id} id={offering.id} className="scroll-mt-28 rounded-[2rem] border border-border bg-background p-6 shadow-sm md:p-9">
                  <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                        <Icon size={28} />
                      </div>
                      <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-4xl">{offering.title}</h2>
                      <p className="mt-4 text-base leading-7 text-muted-foreground">{offering.description}</p>
                      <Link href="/contact" className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-primary-foreground">
                        Talk about this service <ArrowRight size={18} />
                      </Link>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="rounded-2xl border border-border bg-card p-5">
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
                      <div className="rounded-2xl border border-border bg-card p-5">
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

        <section className="bg-background px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-purple-dark p-8 text-white shadow-2xl shadow-teal-900/15 md:p-12">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-teal-100">Start simple</p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">A good first conversation turns uncertainty into a route map.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-teal-50">
              Share the app, web platform, business tool or AI-assisted workflow you are exploring.
            </p>
            <Link href="/contact" className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 text-sm font-extrabold text-primary">
              Contact Cetia Solutions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
