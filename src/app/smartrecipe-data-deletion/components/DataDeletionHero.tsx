import React from 'react';

export default function DataDeletionHero() {
  return (
    <section className="pt-32 pb-16 px-6 md:px-10 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, var(--ring) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--ring) 0%, transparent 70%)' }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ring)" strokeWidth="2.5">
            <path d="M12 22s8-4.5 8-11.8A8 8 0 0012 2a8 8 0 00-8 8.2c0 7.3 8 11.8 8 11.8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">SmartRecipe · Data Privacy</span>
        </div>
        <h1 className="text-hero font-extrabold text-white tracking-tight mb-6 max-w-3xl">
          Request data<br />
          <span className="text-accent">deletion.</span>
        </h1>
        <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
          You have the right to request deletion of your personal data from SmartRecipe at any time.
          Fill in the form below and we will process your request within 30 days.
        </p>
      </div>
    </section>
  );
}
