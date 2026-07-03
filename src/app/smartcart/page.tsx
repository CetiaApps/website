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
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cetia-solutions.co.uk';
const smartCartUrl = `${siteUrl}/smartcart`;
const googlePlayUrl =
  'https://play.google.com/store/apps/details?id=smartcart.cetia.app&utm_source=cetia_website&utm_medium=button&utm_campaign=smartcart_launch';

export const metadata: Metadata = {
  title: 'SmartCart | Smart Shopping List & Grocery App',
  description:
    'SmartCart helps you build shopping lists, organise grocery items and make supermarket trips easier. Download the smart shopping list app today.',
  alternates: {
    canonical: '/smartcart',
  },
  keywords: [
    'shopping list app',
    'grocery shopping app',
    'smart shopping list app',
    'UK grocery app',
    'supermarket shopping list app',
    'SmartCart',
    'grocery price comparison app',
    'supermarket price comparison',
  ],
  openGraph: {
    title: 'SmartCart | Smart Shopping List & Grocery App',
    description:
      'Build shopping lists, compare realtime grocery prices across 7 UK supermarkets and find nearby stores with SmartCart.',
    url: '/smartcart',
    images: [{ url: '/assets/images/smartcart-logo.png', width: 1200, height: 1200, alt: 'SmartCart app logo' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartCart | Smart Shopping List & Grocery App',
    description:
      'Build shopping lists, compare realtime grocery prices across 7 UK supermarkets and find nearby stores with SmartCart.',
    images: ['/assets/images/smartcart-logo.png'],
  },
};

const features = [
  { icon: ListChecks, title: 'Shopping lists with realtime prices', text: 'Build your grocery list and see realtime price information from 7 UK supermarkets as you plan your shop.' },
  { icon: PoundSterling, title: 'Compare supermarket prices', text: 'Search for a product and compare prices across supermarkets to see where it is cheaper.' },
  { icon: Search, title: 'Find cheaper options', text: 'Spot lower-priced matches and make better choices item by item.' },
  { icon: MapPin, title: 'Find your nearest supermarket', text: 'Use location-based results to find nearby supermarkets and open maps or directions when you are ready to shop.' },
  { icon: ShoppingCart, title: 'Built for UK grocery shoppers', text: 'SmartCart is designed around UK supermarkets, everyday grocery items, and real shopping decisions.' },
];

const benefits = [
  'Plan grocery shops before leaving home',
  'Organise supermarket shopping lists in one place',
  'Compare product prices across 7 UK supermarkets',
  'Find nearby supermarkets and open maps or directions',
];

const steps = [
  ['Create your shopping list', 'Add the groceries you need and organise your weekly shop in one place.'],
  ['Compare realtime prices', 'SmartCart shows prices from 7 UK supermarkets so you can compare products before you buy.'],
  ['Choose where to shop', 'Use price comparisons and nearby supermarket results to decide where to shop and get directions.'],
];

const faqs = [
  {
    question: 'What is SmartCart?',
    answer:
      'SmartCart is a UK grocery shopping app that helps you create shopping lists, compare realtime prices across 7 UK supermarkets and find nearby stores.',
  },
  {
    question: 'Is SmartCart a shopping list app?',
    answer:
      'Yes. SmartCart works as a smart shopping list app and adds grocery price comparison so your list can help you plan where to shop.',
  },
  {
    question: 'Which stores does SmartCart compare?',
    answer:
      'SmartCart is built for UK grocery shoppers and compares prices across 7 UK supermarkets.',
  },
  {
    question: 'Is SmartCart available on iPhone?',
    answer:
      'SmartCart is available now on Google Play for Android. The Apple App Store version is coming very soon.',
  },
];

const smartCartGuides = featuredBlogPosts
  .map((slug) => blogPosts.find((post) => post.slug === slug))
  .filter((post): post is BlogPost => Boolean(post));

export default function SmartCartPage() {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SmartCart',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Android',
    url: smartCartUrl,
    image: `${siteUrl}/assets/images/smartcart-logo.png`,
    description:
      'SmartCart helps UK shoppers build grocery shopping lists, compare realtime prices across 7 UK supermarkets and find nearby stores.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      url: googlePlayUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cetia Solutions',
      url: siteUrl,
    },
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <section className="overflow-hidden border-b border-border bg-background pt-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:pb-24">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <Image src="/assets/images/smartcart-logo.png" alt="SmartCart logo" width={84} height={84} className="rounded-xl shadow-sm" priority />
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-widest text-primary">Android app</p>
                  <p className="text-2xl font-extrabold text-foreground">SmartCart</p>
                </div>
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
                SmartCart: the smarter way to plan your grocery shop
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                SmartCart helps UK shoppers build smart shopping lists with realtime grocery prices, compare supermarket prices for individual products, and find nearby stores before they shop.
              </p>
              <p className="mt-4 max-w-2xl text-sm font-extrabold uppercase tracking-widest text-primary">
                Available now on Google Play. Apple App Store version coming very soon.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <GooglePlayBadge />
                <Link href="/smartcart-privacy-policy" className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-extrabold text-foreground">
                  Privacy Policy
                </Link>
                <Link href="/" className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-extrabold text-foreground">
                  Cetia Solutions home
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <Image
                src="/assets/images/smartcart-product-comparison-phone.png"
                alt="SmartCart product comparison iPhone mockup"
                width={1024}
                height={1536}
                sizes="(max-width: 768px) 88vw, 560px"
                className="h-auto w-full max-w-[560px] rounded-xl object-contain"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
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
              <div className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl shadow-teal-900/12">
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

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Features</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">Everything for a more informed weekly shop.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
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
            <div className="relative mx-auto flex max-w-6xl items-center justify-center overflow-hidden rounded-xl border border-border bg-card px-4 py-10 shadow-sm">
              <div className="relative w-full max-w-5xl">
                <Image
                  src="/assets/images/smartcart-three-phone-carousel.png"
                  alt="Three SmartCart iPhone screens showing lists, nearby supermarkets and price comparison"
                  width={1456}
                  height={1064}
                  sizes="(max-width: 768px) 94vw, 1100px"
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              <div className="h-2 w-8 rounded-full bg-primary" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">Benefits</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">A grocery shopping app built for better planning.</h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                SmartCart combines a supermarket shopping list app with price comparison tools, helping UK shoppers make more informed decisions before they visit a store.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <CheckCircle2 className="mb-4 text-primary" size={24} />
                  <p className="font-bold text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">How it works</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">Create your list, compare prices, find a store.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map(([title, text], index) => (
                <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground">{index + 1}</span>
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
              <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-primary">FAQ</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">SmartCart questions</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-extrabold text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
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
                <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40">
                  <h3 className="text-base font-extrabold leading-tight text-foreground">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-4 inline-flex text-sm font-extrabold text-primary">Read guide</span>
                </Link>
              ))}
            </div>
            <Link href="/blog" className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-extrabold text-foreground transition-colors hover:border-primary hover:text-primary">
              View all SmartCart guides
            </Link>
          </div>
        </section>

        <section className="bg-background px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 rounded-xl bg-purple-dark p-8 text-white shadow-2xl shadow-teal-900/15 md:grid-cols-[1fr_auto] md:items-center md:p-12">
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
