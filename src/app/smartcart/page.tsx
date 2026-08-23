import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe, MonitorSmartphone, PoundSterling, Smartphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const smartCartUrl = 'https://getsmartcart.co.uk/';
const smartCartAppUrl = 'https://getsmartcart.co.uk/app';
const smartCartPrivacyUrl = 'https://getsmartcart.co.uk/privacy';

export const metadata: Metadata = {
  title: 'SmartCart has moved',
  description:
    'SmartCart now lives at getsmartcart.co.uk with a web app, Android app and iPhone app. Compare grocery prices across 7 UK supermarkets.',
  alternates: {
    canonical: '/smartcart',
  },
  openGraph: {
    title: 'SmartCart has moved to getsmartcart.co.uk',
    description:
      'SmartCart now lives at getsmartcart.co.uk with a web app, Android app and iPhone app.',
    url: '/smartcart',
    images: [{ url: '/assets/images/smartcart-logo.png', width: 1200, height: 1200, alt: 'SmartCart app logo' }],
    type: 'website',
  },
};

const destinations = [
  {
    icon: Globe,
    title: 'Web app',
    text: 'Use SmartCart straight in your browser, no install needed.',
    href: smartCartAppUrl,
    cta: 'Open the web app',
  },
  {
    icon: Smartphone,
    title: 'Android',
    text: 'Download SmartCart on Google Play.',
    href: smartCartUrl,
    cta: 'Get it on Google Play',
  },
  {
    icon: MonitorSmartphone,
    title: 'iPhone & iPad',
    text: 'App Store link and TestFlight access are on the SmartCart site.',
    href: smartCartUrl,
    cta: 'Find the iOS link',
  },
];

export default function SmartCartPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-hero-glow border-b border-border bg-background pt-32">
          <div className="mx-auto max-w-4xl px-5 pb-20 pt-6 text-center md:px-10 md:pb-28">
            <Image
              src="/assets/images/smartcart-logo.png"
              alt="SmartCart logo"
              width={84}
              height={84}
              className="mx-auto mb-7 rounded-xl shadow-sm"
              priority
            />
            <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-primary">SmartCart has a new home</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
              SmartCart now lives at getsmartcart.co.uk
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              The full SmartCart experience — web app, Android and iPhone — has moved to its own home so it can grow on
              its own. Compare grocery prices across 7 UK supermarkets, build shopping lists, and track price history.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={smartCartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm font-extrabold text-primary-foreground shadow-sm transition-colors hover:bg-teal-800"
              >
                Visit getsmartcart.co.uk <ArrowRight size={18} />
              </Link>
              <Link
                href={smartCartAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-border bg-card px-7 text-sm font-extrabold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                Open the web app
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Get SmartCart</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">Pick where you want to shop smarter.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {destinations.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-elevated group rounded-xl border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-extrabold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-primary">
                      {item.cta} <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 rounded-xl bg-purple-dark p-8 text-white shadow-2xl shadow-teal-900/20 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <PoundSterling className="mb-5 text-teal-200" size={34} />
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Still built by Cetia Solutions.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-teal-50">
                SmartCart is still a Cetia Solutions product — it just has its own domain, its own app, and its own
                room to grow.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-teal-50">
                <Link href={smartCartPrivacyUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Privacy Policy
                </Link>
                <Link href="/" className="underline underline-offset-4">
                  Cetia Solutions home
                </Link>
              </div>
            </div>
            <Link
              href={smartCartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-white px-7 text-sm font-extrabold text-primary"
            >
              Explore SmartCart
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
