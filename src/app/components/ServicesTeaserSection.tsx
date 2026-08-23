'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
    title: 'Mobile Apps',
    desc: 'Native-quality mobile app development for Android, iOS and cross-platform product launches — from MVP to Play Store and App Store.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h.79a4.5 4.5 0 1 1 0 9h-1" />
      </svg>
    ),
    title: 'SaaS Solutions',
    desc: 'Secure, scalable SaaS development for dashboards, portals, subscription products and business platforms.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M12 8V4m-3 0h6M9 13v2m6-2v2" />
      </svg>
    ),
    title: 'AI Agents',
    desc: 'AI agent consulting and development for workflow automation, customer operations and data-led tools.',
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
              What we <span className="text-gradient-purple">build.</span>
            </h2>
          </div>
          <div className="scroll-reveal-hidden">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Mobile apps, SaaS platforms and AI-assisted workflows — designed and built end to end, with the same
              craft we put into our own products.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-primary border-b-2 border-accent pb-1 hover:border-primary transition-colors duration-200"
            >
              See all services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bento grid — Mobile Apps as the flagship service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/services#mobile-apps"
            className="scroll-reveal-hidden hover-lift bg-primary rounded-2xl p-8 flex flex-col justify-between min-h-[260px] group cursor-pointer md:row-span-2"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center text-primary-foreground mb-6">
              {services[0].icon}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-primary-foreground mb-2">{services[0].title}</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">{services[0].desc}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Android', 'iOS', 'Cross-platform'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary-foreground/15 text-primary-foreground text-xs font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/services#saas-solutions"
            className="scroll-reveal-hidden hover-lift bg-card border border-border rounded-2xl p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {services[1].icon}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-foreground mb-2">{services[1].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{services[1].desc}</p>
            </div>
          </Link>

          <Link
            href="/services#ai-agents"
            className="scroll-reveal-hidden hover-lift bg-accent rounded-2xl p-8 flex flex-col justify-between min-h-[220px] group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-foreground/10 flex items-center justify-center text-accent-foreground mb-6">
              {services[2].icon}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-accent-foreground mb-2">{services[2].title}</h3>
              <p className="text-sm text-accent-foreground/70 leading-relaxed">{services[2].desc}</p>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center scroll-reveal-hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-base hover:bg-secondary-foreground transition-all duration-300 hover:scale-105"
          >
            View full services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
