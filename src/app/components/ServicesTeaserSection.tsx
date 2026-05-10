'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Strategy & Discovery',
    desc: 'Market research, user personas, and technical architecture before a single line of code.',
    span: 'col-span-1',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Pixel-perfect interfaces that users actually enjoy — from wireframes to polished prototypes.',
    span: 'col-span-1',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Native Development',
    desc: 'iOS & Android apps built with React Native — one codebase, two premium experiences.',
    span: 'col-span-1 lg:col-span-2',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Launch & Scale',
    desc: 'App Store & Play Store submission, ASO optimization, and post-launch analytics setup.',
    span: 'col-span-1',
  },
];

export default function ServicesTeaserSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-10 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-14">
          <div className="scroll-reveal-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Services</span>
            </div>
            <h2 className="text-display font-extrabold text-foreground leading-tight">
              We build apps<br /><span className="text-gradient-purple">businesses love.</span>
            </h2>
          </div>
          <div className="scroll-reveal-hidden">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              From idea to App Store in weeks. We handle strategy, design, development, and launch — you focus on your business.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-primary border-b-2 border-accent pb-1 hover:border-primary transition-colors duration-200"
            >
              See All Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bento grid — 3 cols */}
        {/* BENTO AUDIT:
            Array has 4 cards: [Strategy, Design, Development, Launch]
            Row 1: [col-1: Strategy cs-1] [col-2: Design cs-1] [col-3: Development cs-1]
            Row 2: [col-1: Launch cs-1] [col-2–3: (empty) → Launch spans col-span-3 on last row? No — 4 cards, 3 cols]
            Revised: 2x2 grid on desktop
            Row 1: [col-1: Strategy cs-1] [col-2: Design cs-1]
            Row 2: [col-1: Development cs-2] 
            Row 3: [col-1: Launch cs-1] [col-2: (need filler)]
            Use 2-col grid: Row1: Strategy | Design. Row2: Development(cs-2). Row3: Launch(cs-2)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Strategy */}
          <div className="scroll-reveal-hidden hover-lift bg-card border border-border rounded-2xl p-8 flex flex-col justify-between min-h-[220px] group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {services?.[0]?.icon}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-foreground mb-2">{services?.[0]?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{services?.[0]?.desc}</p>
            </div>
          </div>

          {/* Design */}
          <div className="scroll-reveal-hidden hover-lift bg-card border border-border rounded-2xl p-8 flex flex-col justify-between min-h-[220px] group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {services?.[1]?.icon}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-foreground mb-2">{services?.[1]?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{services?.[1]?.desc}</p>
            </div>
          </div>

          {/* Native Dev — accent card */}
          <div className="scroll-reveal-hidden hover-lift bg-primary rounded-2xl p-8 flex flex-col justify-between min-h-[220px] group cursor-default lg:row-span-2">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center text-primary-foreground mb-6">
              {services?.[2]?.icon}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-primary-foreground mb-2">{services?.[2]?.title}</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">{services?.[2]?.desc}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React Native', 'iOS', 'Android', 'TypeScript']?.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary-foreground/15 text-primary-foreground text-xs font-bold">{tag}</span>
              ))}
            </div>
          </div>

          {/* Launch — accent bg */}
          <div className="scroll-reveal-hidden hover-lift bg-accent rounded-2xl p-8 flex flex-col justify-between min-h-[220px] group cursor-default md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 rounded-xl bg-accent-foreground/10 flex items-center justify-center text-accent-foreground mb-6">
              {services?.[3]?.icon}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-accent-foreground mb-2">{services?.[3]?.title}</h3>
              <p className="text-sm text-accent-foreground/70 leading-relaxed">{services?.[3]?.desc}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center scroll-reveal-hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-base hover:bg-secondary-foreground transition-all duration-300 hover:scale-105"
          >
            View Full Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}