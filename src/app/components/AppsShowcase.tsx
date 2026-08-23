'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const apps = [
  {
    id: 'smartrecipe',
    name: 'SmartRecipe',
    tagline: 'Cook smarter, shop smarter.',
    description: 'SmartRecipe gives you access to over 200 recipes with full ingredients, instructions and dietary information. Create a smart shopping list from any recipe and get live price updates from all major UK supermarkets — with side-by-side price comparison.',
    color: 'var(--accent)',
    lightColor: 'var(--accent-light)',
    badge: 'Food & Cooking',
    features: [
      '200+ recipes with search',
      'Ingredients, instructions & dietary info',
      'Smart shopping list from any recipe',
      'Live prices from major UK supermarkets',
      'Supermarket price comparison',
    ],
    screens: [
      '/assets/images/SmartRecipeScreenshot1-1778436348230.png',
      '/assets/images/SmartRecipeScreenshot2-1778436344739.png',
      '/assets/images/SmartRecipeScreenshot3-1778436344986.png',
    ],
    screenAlts: [
      'SmartRecipe app screenshot showing recipe discovery and search',
      'SmartRecipe app screenshot showing recipe details with ingredients and instructions',
      'SmartRecipe app screenshot showing smart shopping list with live supermarket prices',
    ],
    href: '/apps#smartrecipe',
    privacyHref: '/smart-recipe-privacy-policy',
    platform: 'Android',
  },
  {
    id: 'milo',
    name: 'Milo',
    tagline: 'Your AI-powered personal assistant.',
    description: 'Milo is an AI agent that searches and organises your Gmail, Google Drive and Google Calendar. Import bank transaction files to view your spending, build budgets and create AI-powered forecasts. Manage tasks, notes and lists — all AI-enabled.',
    color: 'var(--accent-deep)',
    lightColor: 'var(--accent-light)',
    badge: 'AI Assistant',
    features: [
      'Search & organise Gmail, Google Drive, Google Calendar',
      'Import bank transaction files',
      'AI-powered budgets and financial forecasts',
      'AI-enabled tasks, notes and lists',
      'Unified personal productivity hub',
    ],
    screens: [
      '/assets/images/MiloScreenshot1-1778437081371.png',
      '/assets/images/MiloScreenshot2-1778437081456.png',
      '/assets/images/MiloScreenshot3-1778437081634.png',
    ],
    screenAlts: [
      'Milo AI Assistant showing Gmail and Google Drive organisation interface',
      'Milo AI Assistant showing bank transaction import and budget overview',
      'Milo AI Assistant showing AI-enabled tasks, notes and lists',
    ],
    href: '/apps#milo',
    privacyHref: '/milo-privacy-policy',
    platform: 'Android',
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
    <section ref={sectionRef} className="py-16 md:py-20 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* App cards */}
        <div className="space-y-20">
          {apps?.map((app, idx) => (
            <div
              key={app?.id}
              id={app?.id}
              className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-reveal-hidden ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
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

                {/* Platform info */}
                <div className="flex items-center gap-6 mb-8 p-5 rounded-2xl" style={{ backgroundColor: app?.lightColor }}>
                  <div>
                    <div className="text-2xl font-extrabold" style={{ color: app?.color }}>{app?.platform}</div>
                    <div className="text-xs text-muted-foreground font-medium">Platform</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-primary-foreground hover:opacity-90 transition-all duration-200 hover:scale-105"
                    style={{ backgroundColor: app?.color }}
                  >
                    Ask about {app?.name}
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

      </div>
    </section>
  );
}