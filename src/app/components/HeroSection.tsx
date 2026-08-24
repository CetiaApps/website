'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    const animate = async () => {
      await delay(200);
      [line1Ref, line2Ref, line3Ref].forEach((ref, i) => {
        setTimeout(() => {
          ref.current?.parentElement?.classList.add('revealed');
        }, i * 160);
      });
      await delay(700);
      subRef.current?.classList.add('revealed');
      await delay(200);
      ctaRef.current?.classList.add('revealed');
    };
    animate();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-52 pb-16 px-6 md:px-10">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, var(--accent-deep) 40%, transparent 70%)' }} />

        <div
          className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--accent-deep) 0%, var(--accent) 50%, transparent 70%)' }} />

        <div
          className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--ring) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-secondary mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">UK software studio</span>
        </div>

        {/* Headline */}
        <h1 className="text-hero font-extrabold mb-8">
          <span className="line-reveal">
            <span ref={line1Ref}>Smart digital</span>
          </span>
          <span className="line-reveal">
            <span ref={line2Ref} className="text-gradient-purple">solutions.</span>
          </span>
          <span className="line-reveal">
            <span ref={line3Ref} className="inline-block bg-accent text-accent-foreground px-4 py-1 mt-2">
              Built by Cetia.
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <div ref={subRef} className="scroll-reveal-hidden mb-10">
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            We design and build mobile apps, SaaS platforms and AI-assisted workflows — and ship our own products, like SmartRecipe and Milo, to prove we practice what we build.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="scroll-reveal-hidden flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground rounded-full font-bold text-base hover:bg-secondary-foreground transition-all duration-300 hover:scale-105">

            Contact Cetia Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 px-7 py-4 border-2 border-border text-foreground rounded-full font-bold text-base hover:border-primary hover:text-primary transition-all duration-300">

            See our apps
          </Link>
        </div>

        {/* Bottom divider */}
        <div className="mt-20 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
          { label: 'Apps Launched', value: '2+', desc: 'Live on Google Play' },
          { label: 'Platform', value: 'Android', desc: 'Native mobile experiences' },
          { label: 'Custom Builds', value: 'Available', desc: 'For businesses worldwide' }].
          map((stat) =>
          <div key={stat.label} className="flex items-center gap-4">
              <div className="text-3xl font-extrabold text-primary tracking-tight">{stat.value}</div>
              <div>
                <div className="text-sm font-bold text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}