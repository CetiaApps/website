import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const steps = [
  'Open the SmartCart mobile app and sign in to the account you want deleted.',
  'Go to Account settings.',
  'Tap Help & support.',
  'Tap Create support ticket.',
  'In the message box, clearly write that you want your SmartCart personal data deleted.',
  'Send the ticket and watch the email linked to your SmartCart account in case we need to verify the request.',
];

export const metadata: Metadata = {
  title: 'SmartCart Delete my Data',
  description:
    'How SmartCart users can request account and personal data deletion under UK GDPR and data protection rights.',
};

export default function SmartCartDeleteMyDataPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 px-6 md:px-10 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Link href="/smartcart" className="inline-flex items-center gap-2 text-sm font-bold text-primary mb-6 hover:underline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to SmartCart
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">SmartCart</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">Delete my Data</h1>
            <p className="text-muted-foreground text-base">
              How to request deletion of your SmartCart account data.
            </p>
          </div>

          <div className="prose prose-stone max-w-none">
            <div className="bg-secondary border border-primary/20 rounded-2xl p-6 mb-10">
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Summary:</strong> You can ask Cetia Solutions to delete the personal data associated with your SmartCart account by raising a support ticket inside the SmartCart app. Once we receive and verify your request, we aim to remove all personal data within 14 days.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-foreground mb-4">How to Request Deletion in SmartCart</h2>
              <ol className="list-decimal pl-6 text-muted-foreground leading-relaxed space-y-3">
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-foreground mb-4">What to Write in the Ticket</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To help us identify and process the request quickly, please include a short message like this:
              </p>
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-foreground leading-relaxed">
                  Please delete my SmartCart account and all personal data linked to this account. I am making this request under my data protection rights.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please send the ticket from inside the SmartCart account you want deleted. If you contact us another way, include the email address used for your SmartCart account so we can verify ownership.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-foreground mb-4">How Long Deletion Takes</h2>
              <p className="text-muted-foreground leading-relaxed">
                After we receive and verify your request, we aim to delete or anonymize all personal data associated with your SmartCart account within 14 days. Some limited records may be retained where we are required to keep them for legal, tax, accounting, fraud-prevention, security, dispute-resolution, or platform-compliance reasons.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-foreground mb-4">What Data is Removed</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A deletion request may include personal data such as:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
                <li>Your SmartCart account profile and email-linked account data.</li>
                <li>Your shopping lists, list items, selected supermarket preferences, and app settings.</li>
                <li>Subscription status records linked to the SmartCart account where they are not required for platform, legal, or accounting purposes.</li>
                <li>Support messages and deletion request records, unless we need to keep a limited record to prove the request was handled.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Aggregated or anonymized supermarket catalogue and price data may remain where it no longer identifies you.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-foreground mb-4">Your GDPR and Data Protection Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If UK GDPR, EU GDPR, or similar data protection law applies to you, you may have the right to request deletion of your personal data. You may also have the right to access your data, correct inaccurate data, restrict or object to certain processing, request portability, and withdraw consent where processing is based on consent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We may need to verify your identity before completing a deletion request. If you are in the UK and are unhappy with how we handle your request, you may contact the UK Information Commissioner&apos;s Office. You may also contact your local data protection authority if you are outside the UK.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-foreground mb-4">Need Help?</h2>
              <p className="text-muted-foreground leading-relaxed">
                The preferred method is to raise a SmartCart support ticket inside the app. You can also contact us at <a href="mailto:contact@cetia-solutions.co.uk" className="text-primary font-semibold hover:underline">contact@cetia-solutions.co.uk</a> if you cannot access your account.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

