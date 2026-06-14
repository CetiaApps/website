'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bot, CheckCircle2, Cloud, Mail, MapPin, Smartphone } from 'lucide-react';

const projectTypes = ['Mobile app', 'SaaS platform', 'AI agent or automation', 'SmartCart enquiry', 'Not sure yet'];
const timelines = ['ASAP', '1-3 months', '3-6 months', '6+ months', 'Just exploring'];

interface FormData {
  name: string;
  company: string;
  email: string;
  projectType: string;
  timeline: string;
  description: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    projectType: '',
    timeline: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <section className="bg-background px-5 py-20 md:px-10">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm">
          <CheckCircle2 className="mx-auto mb-6 text-primary" size={48} />
          <h2 className="text-3xl font-extrabold text-foreground">Message received.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Thanks for reaching out. We will review your details and get back to you within one business day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-card px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-border bg-background p-6 shadow-sm md:p-8">
          <h2 className="mb-8 text-3xl font-extrabold text-foreground">Project brief</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Full name</span>
              <input name="name" required value={form.name} onChange={handleChange} className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Company</span>
              <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Email</span>
              <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Project type</span>
              <select name="projectType" required value={form.projectType} onChange={handleChange} className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15">
                <option value="">Select a type</option>
                {projectTypes.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Timeline</span>
              <select name="timeline" value={form.timeline} onChange={handleChange} className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15">
                <option value="">Select a timeline</option>
                {timelines.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-muted-foreground">What are you trying to build?</span>
              <textarea name="description" required rows={7} value={form.description} onChange={handleChange} className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" />
            </label>
          </div>
          <button type="submit" disabled={loading} className="mt-7 inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-7 text-sm font-extrabold text-primary-foreground transition-colors hover:bg-teal-800 disabled:opacity-60">
            {loading ? 'Sending...' : 'Send project brief'}
          </button>
        </form>

        <aside className="space-y-5">
          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-sm md:p-8">
            <h2 className="mb-5 text-2xl font-extrabold text-foreground">What Cetia Solutions can help with</h2>
            <div className="grid gap-4">
              {[
                [Smartphone, 'Mobile app development'],
                [Cloud, 'SaaS product development'],
                [Bot, 'AI agent consulting and workflows'],
              ].map(([Icon, label]) => {
                const TypedIcon = Icon as typeof Smartphone;
                return (
                  <div key={label as string} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                    <TypedIcon className="text-primary" size={22} />
                    <span className="text-sm font-extrabold text-foreground">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-sm md:p-8">
            <h2 className="mb-5 text-2xl font-extrabold text-foreground">Contact details</h2>
            <div className="space-y-4 text-sm font-semibold text-muted-foreground">
              <a href="mailto:admin@cetiaapp.co.uk" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Mail size={20} className="text-primary" />
                admin@cetiaapp.co.uk
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={20} className="text-primary" />
                UK based, remote-first
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-purple-dark p-6 text-white shadow-xl shadow-teal-900/10 md:p-8">
            <h2 className="text-2xl font-extrabold">Want to see a live product?</h2>
            <p className="mt-3 text-sm leading-6 text-teal-50">
              SmartCart is Cetia Solutions' grocery price comparison app for UK shoppers.
            </p>
            <Link href="/smartcart" className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-white px-5 text-sm font-extrabold text-primary">
              View SmartCart
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
