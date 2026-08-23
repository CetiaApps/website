import React from 'react';
import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-10 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">For Businesses</span>
            </div>
            <h1 className="text-hero font-extrabold text-foreground tracking-tight mb-6">
              Software<br />
              <span className="text-gradient-purple">worth shipping.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Cetia Solutions delivers end-to-end mobile app, SaaS and AI agent development for startups and established businesses — with the same craft we put into our own products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-secondary-foreground transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="#mobile-apps"
                className="inline-flex items-center gap-2 px-7 py-4 border-2 border-border text-foreground rounded-full font-bold hover:border-primary hover:text-primary transition-all duration-300"
              >
                See What We Build
              </a>
            </div>
          </div>

          {/* Right side stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: 'Mobile', label: 'Android, iOS & cross-platform', bg: 'bg-primary', text: 'text-primary-foreground' },
              { value: 'SaaS', label: 'Dashboards & platforms', bg: 'bg-accent', text: 'text-accent-foreground' },
              { value: 'AI', label: 'Agents & automation', bg: 'bg-muted', text: 'text-foreground' },
              { value: 'UK', label: 'Based, remote-first', bg: 'bg-foreground', text: 'text-background' },
            ]?.map((item) => (
              <div key={item?.label} className={`${item?.bg} ${item?.text} rounded-2xl p-8 flex flex-col justify-between min-h-[150px]`}>
                <div className="text-4xl font-extrabold tracking-tight">{item?.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60">{item?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
