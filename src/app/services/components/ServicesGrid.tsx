'use client';
import React, { useRef, useEffect } from 'react';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Discovery & Strategy',
    desc: 'We start by deeply understanding your market, users, and business goals. Deliverables: user research, competitive analysis, feature roadmap, technical architecture, and project timeline.',
    tags: ['User Research', 'Market Analysis', 'Roadmap'],
    span: 'col-span-1',
    bg: 'bg-card',
    textColor: 'text-foreground',
    iconBg: 'bg-secondary',
    iconColor: 'text-primary',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Every pixel is intentional. We design mobile-first interfaces that are beautiful, intuitive, and conversion-optimized — with full Figma prototypes before development begins.',
    tags: ['Figma Prototypes', 'Design System', 'User Testing'],
    span: 'col-span-1',
    bg: 'bg-primary',
    textColor: 'text-primary-foreground',
    iconBg: 'bg-primary-foreground/15',
    iconColor: 'text-primary-foreground',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'React Native Development',
    desc: 'One codebase. One premium native app. We build with React Native + TypeScript for Android, integrating push notifications, payments, analytics, and any custom backend you need.',
    tags: ['React Native', 'TypeScript', 'Android', 'API Integration'],
    span: 'col-span-1 md:col-span-2',
    bg: 'bg-accent',
    textColor: 'text-accent-foreground',
    iconBg: 'bg-accent-foreground/10',
    iconColor: 'text-accent-foreground',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'App Launch',
    desc: 'We handle the full Google Play submission process — screenshots, descriptions, metadata, ASO optimization, and review management to maximize discoverability.',
    tags: ['Google Play', 'ASO', 'Review Management'],
    span: 'col-span-1',
    bg: 'bg-foreground',
    textColor: 'text-background',
    iconBg: 'bg-background/10',
    iconColor: 'text-background',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Growth & Maintenance',
    desc: 'Post-launch, we keep your app healthy and growing. Monthly updates, performance monitoring, crash reporting, user feedback integration, and feature iterations.',
    tags: ['Analytics', 'Crash Reporting', 'Feature Updates', 'Support'],
    span: 'col-span-1',
    bg: 'bg-card',
    textColor: 'text-foreground',
    iconBg: 'bg-secondary',
    iconColor: 'text-primary',
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal-hidden').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-10 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 scroll-reveal-hidden">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">What we deliver</h2>
          <p className="text-lg text-muted-foreground max-w-xl">Everything you need to go from idea to live app — and keep growing after launch.</p>
        </div>

        {/* BENTO AUDIT:
            Array has 5 cards: [Discovery, Design, ReactNative, Launch, Growth]
            Grid: md:grid-cols-3
            Row 1: [col-1: Discovery cs-1] [col-2: Design cs-1] [col-3: ReactNative cs-1 → but ReactNative is md:col-span-2, so it wraps]
            Revised layout with md:grid-cols-2 lg:grid-cols-3:
            Row 1: [col-1: Discovery cs-1] [col-2: Design cs-1]
            Row 2: [col-1-2: ReactNative cs-2]
            Row 3: [col-1: Launch cs-1] [col-2: Growth cs-1]
            Placed 5/5 ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Discovery */}
          <div className={`scroll-reveal-hidden hover-lift ${services?.[0]?.bg} border border-border rounded-2xl p-8 flex flex-col justify-between min-h-[260px]`}>
            <div className={`w-12 h-12 rounded-xl ${services?.[0]?.iconBg} flex items-center justify-center ${services?.[0]?.iconColor} mb-6`}>
              {services?.[0]?.icon}
            </div>
            <div>
              <h3 className={`text-xl font-extrabold ${services?.[0]?.textColor} mb-3`}>{services?.[0]?.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${services?.[0]?.textColor} opacity-70`}>{services?.[0]?.desc}</p>
              <div className="flex flex-wrap gap-2">
                {services?.[0]?.tags?.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Design */}
          <div className={`scroll-reveal-hidden hover-lift ${services?.[1]?.bg} rounded-2xl p-8 flex flex-col justify-between min-h-[260px]`}>
            <div className={`w-12 h-12 rounded-xl ${services?.[1]?.iconBg} flex items-center justify-center ${services?.[1]?.iconColor} mb-6`}>
              {services?.[1]?.icon}
            </div>
            <div>
              <h3 className={`text-xl font-extrabold ${services?.[1]?.textColor} mb-3`}>{services?.[1]?.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${services?.[1]?.textColor} opacity-80`}>{services?.[1]?.desc}</p>
              <div className="flex flex-wrap gap-2">
                {services?.[1]?.tags?.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary-foreground/15 text-primary-foreground text-xs font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ReactNative — spans 2 on md, 3 on lg (full row) */}
          <div className={`scroll-reveal-hidden hover-lift ${services?.[2]?.bg} rounded-2xl p-8 flex flex-col justify-between min-h-[220px] md:col-span-2 lg:col-span-1`}>
            <div className={`w-12 h-12 rounded-xl ${services?.[2]?.iconBg} flex items-center justify-center ${services?.[2]?.iconColor} mb-6`}>
              {services?.[2]?.icon}
            </div>
            <div>
              <h3 className={`text-xl font-extrabold ${services?.[2]?.textColor} mb-3`}>{services?.[2]?.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${services?.[2]?.textColor} opacity-80`}>{services?.[2]?.desc}</p>
              <div className="flex flex-wrap gap-2">
                {services?.[2]?.tags?.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-accent-foreground/15 text-accent-foreground text-xs font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Launch */}
          <div className={`scroll-reveal-hidden hover-lift ${services?.[3]?.bg} rounded-2xl p-8 flex flex-col justify-between min-h-[260px]`}>
            <div className={`w-12 h-12 rounded-xl ${services?.[3]?.iconBg} flex items-center justify-center ${services?.[3]?.iconColor} mb-6`}>
              {services?.[3]?.icon}
            </div>
            <div>
              <h3 className={`text-xl font-extrabold ${services?.[3]?.textColor} mb-3`}>{services?.[3]?.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${services?.[3]?.textColor} opacity-70`}>{services?.[3]?.desc}</p>
              <div className="flex flex-wrap gap-2">
                {services?.[3]?.tags?.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-background/15 text-background text-xs font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Growth */}
          <div className={`scroll-reveal-hidden hover-lift ${services?.[4]?.bg} border border-border rounded-2xl p-8 flex flex-col justify-between min-h-[260px]`}>
            <div className={`w-12 h-12 rounded-xl ${services?.[4]?.iconBg} flex items-center justify-center ${services?.[4]?.iconColor} mb-6`}>
              {services?.[4]?.icon}
            </div>
            <div>
              <h3 className={`text-xl font-extrabold ${services?.[4]?.textColor} mb-3`}>{services?.[4]?.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${services?.[4]?.textColor} opacity-70`}>{services?.[4]?.desc}</p>
              <div className="flex flex-wrap gap-2">
                {services?.[4]?.tags?.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}