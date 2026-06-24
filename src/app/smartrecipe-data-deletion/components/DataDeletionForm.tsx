'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface FormData {
  fullName: string;
  email: string;
  accountEmail: string;
  reason: string;
  additionalInfo: string;
  confirmed: boolean;
}

const deletionReasons = [
  'I no longer use SmartRecipe',
  'Privacy concerns',
  'I want to create a new account',
  'I did not authorise this account',
  'Other',
];

export default function DataDeletionForm() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    accountEmail: '',
    reason: '',
    additionalInfo: '',
    confirmed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock submit — connect to backend/email service here
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <section className="py-24 px-6 md:px-10 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-8">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-extrabold text-foreground mb-4">Request received</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We&apos;ve received your data deletion request. You&apos;ll receive a confirmation email shortly,
            and your data will be permanently deleted within <strong className="text-foreground">30 days</strong>.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            If you have any questions in the meantime, email us at{' '}
            <a href="mailto:contact@cetia-solutions.co.uk" className="text-primary font-semibold hover:underline">
              contact@cetia-solutions.co.uk
            </a>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:bg-secondary-foreground transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">Your deletion request</h2>
            <p className="text-muted-foreground mb-8">
              All fields marked <span className="text-primary font-bold">*</span> are required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name + Contact Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Emma Johnson"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm font-medium"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Contact Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="emma@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm font-medium"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              {/* SmartRecipe Account Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  SmartRecipe Account Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="accountEmail"
                  required
                  value={form.accountEmail}
                  onChange={handleChange}
                  placeholder="The email address used to sign in to SmartRecipe"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm font-medium"
                  suppressHydrationWarning
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  This helps us locate your account. It may differ from your contact email above.
                </p>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Reason for deletion <span className="text-primary">*</span>
                </label>
                <select
                  name="reason"
                  required
                  value={form.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm font-medium appearance-none cursor-pointer"
                  suppressHydrationWarning
                >
                  <option value="">Select a reason</option>
                  {deletionReasons.map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Additional information
                </label>
                <textarea
                  name="additionalInfo"
                  value={form.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any other details that may help us process your request..."
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm font-medium resize-none"
                  suppressHydrationWarning
                />
              </div>

              {/* Confirmation checkbox */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <input
                  type="checkbox"
                  id="confirmed"
                  name="confirmed"
                  required
                  checked={form.confirmed}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-primary cursor-pointer flex-shrink-0"
                  suppressHydrationWarning
                />
                <label htmlFor="confirmed" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I understand that this action is <strong className="text-foreground">permanent and irreversible</strong>.
                  All my recipes, preferences, and account data will be deleted and cannot be recovered.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading || !form.confirmed}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-base hover:bg-secondary-foreground transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                suppressHydrationWarning
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Deletion Request
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* What happens next */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-extrabold text-foreground mb-6">What happens next?</h3>
              <div className="space-y-5">
                {[
                  {
                    step: '01',
                    title: 'Request confirmed',
                    desc: 'You\'ll receive an email confirming we\'ve received your request.',
                  },
                  {
                    step: '02',
                    title: 'Identity verified',
                    desc: 'We may contact you to verify your identity before proceeding.',
                  },
                  {
                    step: '03',
                    title: 'Data deleted',
                    desc: 'All personal data is permanently removed within 30 days.',
                  },
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-extrabold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground mb-0.5">{item.title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What data is deleted */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-extrabold text-foreground mb-4">What data is deleted?</h3>
              <ul className="space-y-3">
                {[
                  'Account profile & credentials',
                  'Saved recipes & meal plans',
                  'Dietary preferences & settings',
                  'Usage history & analytics',
                  'Any uploaded photos or content',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" className="flex-shrink-0">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-extrabold text-foreground mb-4">Need help?</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                If you have questions about your data or this process, contact our privacy team directly.
              </p>
              <a
                href="mailto:contact@cetia-solutions.co.uk"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@cetia-solutions.co.uk
              </a>
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  href="/smart-recipe-privacy-policy"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View SmartRecipe Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

