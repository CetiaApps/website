import React from 'react';

export default function AppsHero() {
  return (
    <section className="pt-32 pb-16 px-6 md:px-10 bg-primary overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #DFFF5C 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Portfolio</span>
        </div>
        <h1 className="text-hero font-extrabold text-white mb-6 max-w-3xl">
          Two apps.<br />
          <span className="text-accent">Millions of moments.</span>
        </h1>
        <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
          SmartRecipe and Milo are live proof of what CetiaApps builds — premium, purposeful mobile experiences that users return to every single day.
        </p>
      </div>
    </section>
  );
}