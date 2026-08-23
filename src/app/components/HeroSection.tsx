'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

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

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-6 xl:col-span-5">
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
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                We design and build mobile apps, SaaS platforms and AI-assisted workflows — and ship our own products, like SmartRecipe and Milo, to prove we practice what we build.
              </p>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="scroll-reveal-hidden flex flex-wrap gap-4">
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
          </div>

          {/* Right: Phone mockups */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end">
            {/* Background circle */}
            <div
              className="absolute w-[420px] h-[420px] rounded-full opacity-15 pulse-glow"
              style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }} />
            

            {/* Rotating badge */}
            <div className="absolute top-4 right-4 md:right-12 z-20 hidden md:block">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="animate-spin-slow w-full h-full" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text fontSize="10" fontFamily="var(--font-plus-jakarta-sans)" fontWeight="600" letterSpacing="2.5px" fill="#7C3AED">
                    <textPath href="#circlePath" startOffset="0%">CETIA APPS • BUILD BETTER •</textPath>
                  </text>
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#7C3AED" className="absolute">
                  <path d="M13 2L4.09 12.97 12 12l-1 10 8.91-10.97L12 12l1-10z" />
                </svg>
              </div>
            </div>

            {/* Phone stack */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0 h-[520px] flex items-center justify-center">
              {/* Back phone — Milo */}
              <div className="absolute left-0 top-8 w-[200px] phone-frame bg-card overflow-hidden z-10 phone-tilt opacity-80"
              style={{ borderRadius: '2.5rem' }}>
                <div className="w-full h-[380px] relative">
                  <AppImage
                    src="/assets/images/MiloScreenshot1-1778437081371.png"
                    alt="Milo AI Assistant chat interface showing intelligent conversation with a clean modern UI"
                    fill
                    className="object-cover"
                    sizes="200px" />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-white text-xs font-bold tracking-wide">Milo AI</span>
                  </div>
                </div>
              </div>

              {/* Front phone — SmartRecipe */}
              <div className="absolute right-0 top-0 w-[220px] phone-frame bg-card overflow-hidden z-20 phone-tilt"
              style={{ borderRadius: '2.5rem' }}>
                <div className="w-full h-[420px] relative">
                  <AppImage
                    src="/assets/images/SmartRecipeMainScreen-1778436348487.png"
                    alt="SmartRecipe app main screen showing recipe discovery and smart shopping features"
                    fill
                    className="object-cover"
                    sizes="220px" />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-foreground rounded-full opacity-90" />
                  <div className="absolute bottom-4 left-3 right-3">
                    <span className="text-white text-xs font-bold tracking-wide">SmartRecipe</span>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl z-30 flex items-center gap-3 whitespace-nowrap">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) =>
                  <div key={i} className="w-7 h-7 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">{i}</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-foreground">2 Live Apps</div>
                  <div className="text-xs text-muted-foreground">Android</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-20 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-8">
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