import React from 'react';

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 px-6 md:px-10 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #DFFF5C 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Get In Touch</span>
        </div>
        <h1 className="text-hero font-extrabold text-white tracking-tight mb-6 max-w-3xl">
          Let&apos;s build<br />
          <span className="text-accent">something great.</span>
        </h1>
        <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
          Tell us about your app idea. We read every message and respond within one business day.
        </p>
      </div>
    </section>
  );
}