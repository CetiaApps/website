'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const apps = [
  {
    id: 'smartrecipe',
    name: 'SmartRecipe',
    tagline: 'Cook smarter, eat better.',
    description: 'AI-powered recipe discovery that learns your taste preferences, dietary needs, and pantry inventory — so every meal suggestion is one you\'ll actually make.',
    color: '#7C3AED',
    lightColor: '#F3F0FF',
    badge: 'Food & Cooking',
    features: ['AI-powered recipe matching', 'Pantry inventory tracking', 'Step-by-step cooking mode', 'Nutritional insights', 'Meal planning calendar'],
    rating: '4.9',
    downloads: '30K+',
    screens: [
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=300&q=85',
      'https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=300&q=85',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&q=85',
    ],
    screenAlts: [
      'SmartRecipe home screen showing featured recipe cards with colorful food photography and purple UI elements',
      'SmartRecipe ingredient scanner screen with camera interface and ingredient recognition results',
      'SmartRecipe meal plan calendar showing weekly meal schedule with nutritional summary',
    ],
    href: '/apps#smartrecipe',
    privacyHref: '/smart-recipe-privacy-policy',
    platform: 'iOS & Android',
  },
  {
    id: 'milo',
    name: 'Milo',
    tagline: 'Your intelligent AI companion.',
    description: 'Milo is a powerful AI assistant that answers questions, summarises documents, manages your schedule, and learns your preferences — making every interaction smarter than the last.',
    color: '#6D28D9',
    lightColor: '#EDE9FE',
    badge: 'AI Assistant',
    features: ['Conversational AI chat', 'Voice assistant mode', 'Smart document summaries', 'AI-powered task management', 'Personalised learning & memory'],
    rating: '4.9',
    downloads: '25K+',
    screens: [
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&q=85',
      'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=300&q=85',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&q=85',
    ],
    screenAlts: [
      'Milo AI Assistant chat interface showing a natural conversation with intelligent responses and a clean modern UI',
      'Milo AI Assistant showing smart suggestions and contextual recommendations in a card-based layout',
      'Milo AI Assistant voice mode screen with animated waveform and real-time transcription display',
    ],
    href: '/apps#milo',
    privacyHref: '/milo-privacy-policy',
    platform: 'iOS & Android',
  },
];

export default function AppsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal-hidden').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 scroll-reveal-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Apps</span>
          </div>
          <h2 className="text-display font-extrabold text-foreground mb-4">
            Apps that <span className="text-gradient-purple">people love.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">Two distinct apps, one shared commitment: building mobile experiences that genuinely improve daily life.</p>
        </div>

        {/* App cards */}
        <div className="space-y-20">
          {apps?.map((app, idx) => (
            <div
              key={app?.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-reveal-hidden ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <span
                  className="app-badge mb-6 inline-block"
                  style={{ backgroundColor: app?.lightColor, color: app?.color }}
                >
                  {app?.badge}
                </span>
                <h3 className="text-5xl font-extrabold tracking-tight text-foreground mb-3">
                  {app?.name}
                </h3>
                <p className="text-xl font-semibold mb-5" style={{ color: app?.color }}>
                  {app?.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                  {app?.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {app?.features?.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: app?.lightColor }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke={app?.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Stats row */}
                <div className="flex items-center gap-6 mb-8 p-5 rounded-2xl" style={{ backgroundColor: app?.lightColor }}>
                  <div>
                    <div className="text-2xl font-extrabold" style={{ color: app?.color }}>{app?.rating}★</div>
                    <div className="text-xs text-muted-foreground font-medium">App Rating</div>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div>
                    <div className="text-2xl font-extrabold" style={{ color: app?.color }}>{app?.downloads}</div>
                    <div className="text-xs text-muted-foreground font-medium">Downloads</div>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div>
                    <div className="text-2xl font-extrabold" style={{ color: app?.color }}>{app?.platform}</div>
                    <div className="text-xs text-muted-foreground font-medium">Platform</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={app?.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-primary-foreground hover:opacity-90 transition-all duration-200 hover:scale-105"
                    style={{ backgroundColor: app?.color }}
                  >
                    View App Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href={app?.privacyHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border-2 border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Phone mockups side */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} relative flex items-center justify-center`}>
                {/* Glow */}
                <div
                  className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl"
                  style={{ background: `radial-gradient(circle, ${app?.color} 0%, transparent 70%)` }}
                />
                {/* Phones row */}
                <div className="relative flex gap-4 items-end justify-center">
                  {app?.screens?.map((src, i) => (
                    <div
                      key={i}
                      className={`relative phone-frame bg-foreground overflow-hidden flex-shrink-0 phone-tilt ${i === 1 ? 'z-20' : 'z-10 opacity-75'}`}
                      style={{
                        width: i === 1 ? '180px' : '150px',
                        height: i === 1 ? '360px' : '300px',
                        borderRadius: '2.2rem',
                        marginBottom: i === 1 ? '0' : '30px',
                      }}
                    >
                      {/* Notch */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-foreground/80 rounded-full z-10" />
                      <AppImage
                        src={src}
                        alt={app?.screenAlts?.[i]}
                        fill
                        className="object-cover"
                        sizes={i === 1 ? '180px' : '150px'}
                        priority={i === 1 && idx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-16 text-center scroll-reveal-hidden">
          <Link
            href="/apps"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-base hover:bg-primary transition-all duration-300 hover:scale-105"
          >
            Explore All Apps in Detail
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}