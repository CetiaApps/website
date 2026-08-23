import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts, getBlogPost } from '@/app/blog/posts';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      images: [{ url: '/assets/images/smartcart-logo.png', width: 1200, height: 1200, alt: 'SmartCart app logo' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/assets/images/smartcart-logo.png'],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((relatedSlug) => blogPosts.find((blogPost) => blogPost.slug === relatedSlug))
    .filter((blogPost): blogPost is NonNullable<typeof blogPost> => Boolean(blogPost));

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cetia-solutions.co.uk';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${siteUrl}/assets/images/smartcart-logo.png`,
    author: { '@type': 'Organization', name: 'Cetia Solutions', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Cetia Solutions', url: siteUrl },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'SmartCart guides', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 2, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        <article>
          <section className="bg-hero-glow border-b border-border bg-background pt-32">
            <div className="mx-auto max-w-4xl px-5 pb-14 md:px-10 md:pb-20">
              <Link href="/blog" className="mb-6 inline-flex text-sm font-bold text-primary hover:underline">
                Back to SmartCart guides
              </Link>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-primary">SmartCart guide</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">{post.title}</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{post.description}</p>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                You can also{' '}
                <Link href="https://getsmartcart.co.uk/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">
                  visit SmartCart
                </Link>{' '}
                to see how it helps UK shoppers compare grocery prices before they shop.
              </p>
            </div>
          </section>

          <section className="bg-background px-5 py-14 md:px-10 md:py-20">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-12">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">{section.heading}</h2>
                    <div className="space-y-4">
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets ? (
                      <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-muted-foreground">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              {relatedPosts.length > 0 ? (
                <div className="card-elevated mt-14 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Related SmartCart guides</h2>
                  <div className="mt-5 grid gap-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                      >
                        <h3 className="text-base font-extrabold leading-tight text-foreground">{relatedPost.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{relatedPost.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-14 rounded-xl bg-purple-dark p-8 text-white shadow-xl shadow-teal-900/20">
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Start planning with SmartCart</h2>
                <p className="mt-4 text-sm leading-6 text-teal-50">
                  SmartCart is available now as a web app, on Google Play, and on the App Store.
                </p>
                <Link
                  href="https://getsmartcart.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-primary"
                >
                  {post.cta} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
