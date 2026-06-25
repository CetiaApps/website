import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle2, Cloud, Rocket, Smartphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Build Smarter Apps, SaaS Platforms and AI Agents',
  description:
    'Cetia Solutions builds practical digital products, from consumer apps like SmartCart to business web platforms and AI-assisted tools.',
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
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,184,166,0.14),rgba(124,58,237,0.10)_45%,rgba(255,255,255,0)_70%)]" />
          <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-5 pb-16 pt-8 md:grid-cols-[1.06fr_0.94fr] md:px-10">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-card px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary shadow-sm">
                UK software studio
              </div>
              <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
                Build smarter apps, SaaS platforms and AI agents.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Cetia Solutions builds practical digital products that solve everyday problems, from smarter shopping tools to business-focused applications.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-primary-foreground shadow-sm transition-colors hover:bg-teal-800">
                  Contact Cetia Solutions <ArrowRight size={18} />
                </Link>
                <Link href="/smartcart" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-extrabold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary">
                  Explore SmartCart
                </Link>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative mx-auto max-w-md rounded-[2rem] border border-border bg-card p-5 shadow-2xl shadow-teal-900/10">
                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-secondary">
                  <Image src="/assets/images/cetia-solutions-logo.png" alt="Cetia Solutions logo" fill sizes="(max-width: 768px) 80vw, 420px" className="object-cover" priority />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div key={service.title} className="rounded-2xl border border-border bg-background p-3">
                        <Icon className="mb-2 text-primary" size={20} />
                        <p className="text-xs font-extrabold text-foreground">{service.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Services</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                Software delivery across mobile, SaaS and AI.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link key={service.title} href="/services" className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-teal-900/10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
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
                Built for useful products, not theatre.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                We help shape the idea, design the experience, build the product and keep improving it after launch.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <CheckCircle2 className="mb-4 text-primary" size={24} />
                  <p className="font-bold text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-card py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <Image src="/assets/images/smartcart-logo.png" alt="SmartCart logo" width={72} height={72} className="rounded-2xl shadow-sm" />
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-widest text-primary">Featured case study</p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-foreground">SmartCart</h2>
                </div>
              </div>
              <p className="text-lg leading-8 text-muted-foreground">
                Compare grocery prices across 7 UK supermarkets, build shopping lists with realtime prices, and find nearby stores before you shop.
              </p>
              <p className="mt-4 text-sm font-extrabold uppercase tracking-widest text-primary">
                Available now on Google Play. Apple App Store version coming very soon.
              </p>
              <Link href="/smartcart" className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-primary-foreground">
                Explore SmartCart <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex gap-4 overflow-hidden pb-4">
              {[2, 3, 5].map((screen) => (
                <div key={screen} className="phone-frame relative h-[440px] min-w-[220px] overflow-hidden bg-card">
                  <Image src={`/assets/images/smartcart-screen-${String(screen).padStart(2, '0')}.png`} alt={`SmartCart app screenshot ${screen}`} fill sizes="220px" className="object-cover" />
                </div>
              ))}
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
                <div key={step} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-primary">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-extrabold text-foreground">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-purple-dark p-8 text-white shadow-2xl shadow-teal-900/15 md:p-12">
            <Rocket className="mb-5 text-teal-200" size={34} />
            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">Ready to build a practical software product?</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-teal-50">
              Tell us what you want to build and we will help you shape the right first version.
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
