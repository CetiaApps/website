import React from 'react';

export default function ContactHero() {
  return (
    <section className="border-b border-border bg-background px-5 pb-16 pt-32 md:px-10 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
            Tell us what you want to build.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Share your app, SaaS or AI agent idea and Cetia Solutions will help turn the next step into a practical plan.
          </p>
        </div>
      </div>
    </section>
  );
}
