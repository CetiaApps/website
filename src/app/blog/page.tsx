import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/app/blog/posts';

export const metadata: Metadata = {
  title: 'SmartCart Grocery Shopping Guides',
  description:
    'Practical guides for UK shoppers on comparing supermarket prices, building smarter shopping lists, and planning grocery shops with SmartCart.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'SmartCart Grocery Shopping Guides',
    description:
      'Practical guides for UK shoppers on comparing supermarket prices, building smarter shopping lists, and planning grocery shops with SmartCart.',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartCart Grocery Shopping Guides',
    description:
      'Practical guides for UK shoppers on comparing supermarket prices, building smarter shopping lists, and planning grocery shops with SmartCart.',
    images: ['/assets/images/smartcart-logo.png'],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-border bg-background pt-32">
          <div className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-primary">SmartCart guides</p>
              <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
                SmartCart grocery shopping guides
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                Practical guides for UK shoppers on comparing supermarket prices, building smarter shopping lists, and planning grocery shops with SmartCart.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-primary">SmartCart guide</p>
                <h2 className="text-xl font-extrabold leading-tight text-foreground">{post.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-primary px-5 text-sm font-extrabold text-primary-foreground"
                >
                  Read guide <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
