import React from 'react';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="py-24 px-6 md:px-10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-purple-dark grain-overlay overflow-hidden p-12 md:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #DFFF5C 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 blur-2xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)' }} />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">For Businesses</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Your idea deserves a<br />
                <span className="text-accent accent-underline">world-class app.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Let CetiaApps turn your vision into a live, revenue-generating mobile product.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-5 bg-accent text-accent-foreground rounded-full font-extrabold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Your Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-5 border-2 border-white/30 text-white rounded-full font-bold text-base hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
              <p className="text-white/40 text-xs font-medium">Free discovery call · No commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}