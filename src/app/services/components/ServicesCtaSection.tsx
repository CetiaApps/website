import React from 'react';
import Link from 'next/link';

export default function ServicesCtaSection() {
  return (
    <section className="py-20 px-6 md:px-10 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Ready to Build?</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
          Your app idea is<br />
          <span className="text-gradient-purple">one call away.</span>
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
          Book a free 45-minute discovery call. We&apos;ll listen to your idea, give you honest feedback, and tell you exactly what it would take to build it.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-secondary-foreground transition-all duration-300 hover:scale-105"
          >
            Book Free Discovery Call
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/apps"
            className="inline-flex items-center gap-3 px-8 py-5 border-2 border-border text-foreground rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            See Our Work
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">No commitment. No sales pressure. Just an honest conversation.</p>
      </div>
    </section>
  );
}