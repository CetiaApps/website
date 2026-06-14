import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ListChecks, MapPin, PoundSterling, Search, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playStoreUrl = 'https://play.google.com/store/apps/details?id=smartcart.cetia.app';

export const metadata: Metadata = {
  title: 'SmartCart Grocery Price Comparison App',
  description:
    'SmartCart helps UK shoppers create shopping lists, compare supermarket prices and find better value across major supermarkets.',
  keywords: ['SmartCart', 'grocery price comparison app', 'supermarket price comparison', 'UK shoppers', 'shopping list app'],
};

const features = [
  { icon: ListChecks, title: 'Create smart shopping lists', text: 'Build weekly lists and keep items organised by store, quantity and plan.' },
  { icon: PoundSterling, title: 'Compare supermarket prices', text: 'See matching grocery prices across major UK supermarkets before you shop.' },
  { icon: Search, title: 'Find cheaper alternatives', text: 'Spot lower-price matches and potential savings item by item.' },
  { icon: ShoppingCart, title: 'Save time on weekly shops', text: 'Plan your shop with price context already in front of you.' },
  { icon: MapPin, title: 'Built for UK shoppers', text: 'Find nearby supermarkets and open maps or directions when you are ready to go.' },
];

const steps = [
  ['Add items', 'Create a shopping list and add the groceries you plan to buy.'],
  ['Compare prices', 'SmartCart checks matching products and highlights cheaper options.'],
  ['Shop cheapest', 'Use the results to choose the store or item combination that works for you.'],
];

const screenshots = [2, 3, 4, 5, 7, 8, 9, 10];

export default function SmartCartPage() {
  return (
    <>
      <Header />
      <main>
        <section className="overflow-hidden border-b border-border bg-background pt-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:pb-24">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <Image src="/assets/images/smartcart-logo.png" alt="SmartCart logo" width={84} height={84} className="rounded-3xl shadow-sm" priority />
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-widest text-primary">Android app</p>
                  <p className="text-2xl font-extrabold text-foreground">SmartCart</p>
                </div>
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
                Compare supermarket prices and shop smarter.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                SmartCart helps UK shoppers create shopping lists, compare grocery prices and find better value across major supermarkets.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-primary-foreground">
                  Get it on Google Play <ArrowRight size={18} />
                </Link>
                <Link href="/smartcart-privacy-policy" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-extrabold text-foreground">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-10 top-16 h-72 rounded-[2rem] bg-secondary" />
              <div className="relative flex justify-center gap-4">
                <div className="phone-frame relative mt-12 h-[520px] w-[260px] overflow-hidden bg-card">
                  <Image src="/assets/images/smartcart-screen-03.png" alt="SmartCart shopping list screenshot" fill sizes="260px" className="object-cover" priority />
                </div>
                <div className="phone-frame relative hidden h-[520px] w-[260px] overflow-hidden bg-card sm:block">
                  <Image src="/assets/images/smartcart-screen-05.png" alt="SmartCart nearest supermarkets screenshot" fill sizes="260px" className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Features</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">Everything for a more informed weekly shop.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-extrabold text-foreground">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Screenshots</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">A closer look inside SmartCart.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {screenshots.map((screen) => (
                <div key={screen} className="phone-frame relative mx-auto h-[520px] w-full max-w-[260px] overflow-hidden bg-card">
                  <Image src={`/assets/images/smartcart-screen-${String(screen).padStart(2, '0')}.png`} alt={`SmartCart screenshot ${screen}`} fill sizes="260px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">How it works</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">Add items, compare prices, shop cheapest.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map(([title, text], index) => (
                <div key={title} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                  <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">{index + 1}</span>
                  <h3 className="text-xl font-extrabold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] bg-purple-dark p-8 text-white shadow-2xl shadow-teal-900/15 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <CheckCircle2 className="mb-5 text-teal-200" size={34} />
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Start comparing on Android.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-teal-50">SmartCart is Android only for now and available through Google Play.</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-teal-50">
                <Link href="/smartcart-privacy-policy" className="underline underline-offset-4">Privacy Policy</Link>
                <Link href="/smartcart-delete-my-data" className="underline underline-offset-4">Delete my Data</Link>
              </div>
            </div>
            <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-primary">
              Get it on Google Play <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
