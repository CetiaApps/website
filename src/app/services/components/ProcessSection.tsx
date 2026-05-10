'use client';
import React, { useRef, useEffect } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'A free 45-minute call to understand your idea, goals, and timeline. We ask the hard questions so there are no surprises later.',
    duration: '1 day',
  },
  {
    num: '02',
    title: 'Proposal & Scope',
    desc: 'You receive a detailed proposal with feature list, timeline, and fixed price. No hourly billing. No scope creep surprises.',
    duration: '3–5 days',
  },
  {
    num: '03',
    title: 'Design Sprint',
    desc: 'Our designers produce wireframes and high-fidelity mockups in Figma. You review and approve before a single line of code is written.',
    duration: '2–3 weeks',
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Biweekly builds are shared for your review via TestFlight and Google Play internal testing. You always know exactly where we are.',
    duration: '4–8 weeks',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'We submit to both stores, optimize metadata, and monitor the first 72 hours post-launch to catch any issues immediately.',
    duration: '1 week',
  },
];

export default function ProcessSection() {
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
    <section id="process" ref={sectionRef} className="py-24 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: title + sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-6 scroll-reveal-hidden">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6 scroll-reveal-hidden">
              From idea to<br />
              <span className="text-gradient-purple">live app.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed scroll-reveal-hidden">
              Our proven 5-step process has delivered 10+ apps on time and on budget. Here&apos;s exactly what working with CetiaApps looks like.
            </p>
            <div className="mt-8 p-6 bg-secondary rounded-2xl border border-primary/20 scroll-reveal-hidden">
              <div className="text-3xl font-extrabold text-primary mb-1">8–12 weeks</div>
              <div className="text-sm text-muted-foreground font-medium">Typical end-to-end delivery</div>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-8 space-y-6">
            {steps?.map((step, i) => (
              <div
                key={step?.num}
                className="scroll-reveal-hidden hover-lift bg-card border border-border rounded-2xl p-8 grid grid-cols-[auto_1fr_auto] gap-6 items-start"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-5xl font-extrabold text-primary/20 leading-none w-16">{step?.num}</div>
                <div>
                  <h3 className="text-xl font-extrabold text-foreground mb-2">{step?.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step?.desc}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex px-3 py-1.5 bg-secondary text-primary text-xs font-bold rounded-full whitespace-nowrap">
                    {step?.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}