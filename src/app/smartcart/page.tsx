import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ListChecks, MapPin, PoundSterling, Search, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GooglePlayBadge from '@/components/GooglePlayBadge';
import { blogPosts, featuredBlogPosts, type BlogPost } from '@/app/blog/posts';

const promoVideoUrl = 'https://www.youtube.com/embed/kSl8CLXD9EM';

export const metadata: Metadata = {
  title: 'SmartCart | UK Grocery Price Comparison App',
  description:
    'Compare grocery prices across 7 UK supermarkets with SmartCart. Build shopping lists with realtime prices, compare products, and find nearby supermarkets. Available now on Google Play.',
  keywords: ['SmartCart', 'grocery price comparison app', 'supermarket price comparison', 'UK shoppers', 'shopping list app'],
};

const features = [
  { icon: ListChecks, title: 'Shopping lists with realtime prices', text: 'Build your grocery list and see realtime price information from 7 UK supermarkets as you plan your shop.' },
  { icon: PoundSterling, title: 'Compare supermarket prices', text: 'Search for a product and compare prices across supermarkets to see where it is cheaper.' },
  { icon: Search, title: 'Find cheaper options', text: 'Spot lower-priced matches and make better choices item by item.' },
  { icon: MapPin, title: 'Find your nearest supermarket', text: 'Use location-based results to find nearby supermarkets and open maps or directions when you are ready to shop.' },
  { icon: ShoppingCart, title: 'Built for UK grocery shoppers', text: 'SmartCart is designed around UK supermarkets, everyday grocery items, and real shopping decisions.' },
];

const steps = [
  ['Create your shopping list', 'Add the groceries you need and organise your weekly shop in one place.'],
  ['Compare realtime prices', 'SmartCart shows prices from 7 UK supermarkets so you can compare products before you buy.'],
  ['Choose where to shop', 'Use price comparisons and nearby supermarket results to decide where to shop and get directions.'],
];

const carouselScreenshots = [
  { screen: 2, className: 'z-10 hidden translate-x-12 scale-75 rotate-[-13deg] opacity-70 md:block' },
  { screen: 3, className: 'z-20 hidden translate-x-6 scale-90 rotate-[-7deg] opacity-90 sm:block' },
  { screen: 4, className: 'z-30 scale-95 md:scale-100' },
  { screen: 5, className: 'z-20 hidden -translate-x-6 scale-90 rotate-[7deg] opacity-90 sm:block' },
  { screen: 7, className: 'z-10 hidden -translate-x-12 scale-75 rotate-[13deg] opacity-70 md:block' },
];

const smartCartGuides = featuredBlogPosts
  .map((slug) => blogPosts.find((post) => post.slug === slug))
  .filter((post): post is BlogPost => Boolean(post));

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
                Compare grocery prices across 7 UK supermarkets.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                SmartCart helps UK shoppers build shopping lists with realtime prices, compare supermarket prices for individual products, and find nearby stores before they shop.
              </p>
              <p className="mt-4 max-w-2xl text-sm font-extrabold uppercase tracking-widest text-primary">
                Available now on Google Play. Apple App Store version coming very soon.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <GooglePlayBadge />
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
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
            <div>
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Promo video</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">See how SmartCart helps you shop smarter.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                Create your shopping list, check realtime prices across 7 UK supermarkets, compare products, and choose where to shop before you leave home.
              </p>
              <GooglePlayBadge className="mt-8" />
            </div>
            <div className="mx-auto w-full max-w-[360px]">
              <div className="overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl shadow-teal-900/12">
                <div className="relative aspect-[9/16] w-full">
                  <iframe
                    src={promoVideoUrl}
                    title="SmartCart promo video"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
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
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Screenshots</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">A closer look inside SmartCart.</h2>
            </div>
            <div className="relative mx-auto flex min-h-[580px] max-w-6xl items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-card px-4 py-10 shadow-2xl shadow-teal-900/10 [perspective:1400px]">
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(20,184,166,0.12),rgba(124,58,237,0.08)_50%,rgba(255,255,255,0))]" />
              <div className="relative flex w-full items-center justify-center -space-x-16 sm:-space-x-20 md:-space-x-24">
                {carouselScreenshots.map(({ screen, className }) => (
                  <div
                    key={screen}
                    className={`phone-frame relative h-[500px] w-[250px] shrink-0 overflow-hidden bg-card transition-transform duration-300 ${className}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Image
                      src={`/assets/images/smartcart-screen-${String(screen).padStart(2, '0')}.png`}
                      alt={`SmartCart screenshot ${screen}`}
                      fill
                      sizes="250px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {carouselScreenshots.map(({ screen }, index) => (
                <div
                  key={screen}
                  className={`h-2 rounded-full ${index === 2 ? 'w-8 bg-primary' : 'w-2 bg-border'}`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">How it works</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">Create your list, compare prices, find a store.</h2>
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

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Shopping guides</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">SmartCart grocery shopping guides</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                Practical guides for UK shoppers on comparing supermarket prices, building smarter shopping lists, and planning grocery shops with SmartCart.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {smartCartGuides.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40">
                  <h3 className="text-base font-extrabold leading-tight text-foreground">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-4 inline-flex text-sm font-extrabold text-primary">Read guide</span>
                </Link>
              ))}
            </div>
            <Link href="/blog" className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-extrabold text-foreground transition-colors hover:border-primary hover:text-primary">
              View all SmartCart guides
            </Link>
          </div>
        </section>

        <section className="bg-background px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] bg-purple-dark p-8 text-white shadow-2xl shadow-teal-900/15 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <CheckCircle2 className="mb-5 text-teal-200" size={34} />
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Start comparing grocery prices on Android.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-teal-50">SmartCart is available now on Google Play, with the Apple App Store version coming very soon.</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-teal-50">
                <Link href="/smartcart-privacy-policy" className="underline underline-offset-4">Privacy Policy</Link>
                <Link href="/smartcart-delete-my-data" className="underline underline-offset-4">Delete my Data</Link>
              </div>
            </div>
            <GooglePlayBadge className="bg-black" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
