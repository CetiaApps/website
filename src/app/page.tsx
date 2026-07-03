import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle2, Cloud, Rocket, Smartphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cetia Solutions | App Development, Automation & Digital Solutions',
  description:
    'Cetia Solutions builds smart apps, automation tools and digital solutions for businesses and consumers. Explore our latest products including SmartCart.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cetia Solutions | App Development, Automation & Digital Solutions',
    description:
      'Cetia Solutions builds smart apps, automation tools and digital solutions for businesses and consumers. Explore our latest products including SmartCart.',
    url: '/',
    images: [{ url: '/assets/images/cetia-solutions-logo.png', width: 1200, height: 1200, alt: 'Cetia Solutions logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cetia Solutions | App Development, Automation & Digital Solutions',
    description:
      'Cetia Solutions builds smart apps, automation tools and digital solutions for businesses and consumers. Explore our latest products including SmartCart.',
    images: ['/assets/images/cetia-solutions-logo.png'],
  },
};

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    text: 'Native-quality mobile app development for Android, iOS and cross-platform product launches.',
  },
  {
    icon: Cloud,
    title: 'SaaS Solutions',
    text: 'Secure, scalable SaaS development for dashboards, portals, subscription products and business platforms.',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    text: 'AI agent consulting and development for workflow automation, customer operations and data-led tools.',
  },
];

const reasons = [
  'Product thinking from idea to launch',
  'Clean UX for real users and busy teams',
  'Modern web, mobile and AI engineering',
  'Practical delivery with measurable next steps',
];

const process = ['Discover', 'Design', 'Build', 'Launch', 'Improve'];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border bg-background pt-28">
          <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-5xl items-center px-5 pb-20 pt-10 text-center md:px-10 md:pb-28">
            <div className="relative z-10 mx-auto">
              <div className="mb-7 inline-flex items-center rounded-lg border border-primary/20 bg-card/80 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary shadow-sm backdrop-blur">
                UK software studio
              </div>
              <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
                Smart digital solutions built by Cetia
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Cetia Solutions builds practical digital products that solve everyday problems, from smarter shopping tools to business-focused applications.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-extrabold text-primary-foreground shadow-sm transition-colors hover:bg-teal-800">
                  Contact Cetia Solutions <ArrowRight size={18} />
                </Link>
                <Link href="/smartcart" className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-extrabold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary">
                  Explore SmartCart
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Services</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                What we do
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                We design and build mobile apps, SaaS products, automation tools and AI-assisted workflows for practical real-world use.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link key={service.title} href="/services" className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-teal-900/10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-extrabold text-foreground">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

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
                <div key={reason} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <CheckCircle2 className="mb-4 text-primary" size={24} />
                  <p className="font-bold text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-background py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
            <div className="min-w-0">
              <div className="mb-6 flex items-center gap-4">
                <Image src="/assets/images/smartcart-logo.png" alt="SmartCart logo" width={72} height={72} className="rounded-xl shadow-sm" />
                <div className="min-w-0">
                  <p className="text-sm font-extrabold uppercase tracking-widest text-primary">Our products</p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Featured app: SmartCart</h2>
                </div>
              </div>
              <p className="text-lg leading-8 text-muted-foreground">
                Compare grocery prices across 7 UK supermarkets, build shopping lists with realtime prices, and find nearby stores before you shop.
              </p>
              <p className="mt-4 text-sm font-extrabold uppercase tracking-widest text-primary">
                Available now on Google Play. Apple App Store version coming very soon.
              </p>
              <Link href="/smartcart" className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-extrabold text-primary-foreground">
                Explore SmartCart <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex justify-center overflow-visible pb-8 pt-6">
              <Image
                src="/assets/images/smartcart-product-comparison-phone.png"
                alt="SmartCart product comparison iPhone mockup"
                width={1024}
                height={1536}
                sizes="(max-width: 768px) 88vw, 520px"
                className="h-auto w-full max-w-[520px] rounded-xl object-contain"
              />
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
                <div key={step} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-sm font-extrabold text-primary">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-extrabold text-foreground">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-5xl rounded-xl bg-purple-dark p-8 text-white shadow-2xl shadow-teal-900/15 md:p-12">
            <Rocket className="mb-5 text-teal-200" size={34} />
            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">Contact us</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-teal-50">
              Tell us what you want to build and we will help you shape the right first version.
            </p>
            <Link href="/contact" className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-6 text-sm font-extrabold text-primary">
              Contact Cetia Solutions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
