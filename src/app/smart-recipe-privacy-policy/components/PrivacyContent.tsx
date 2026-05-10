import React from 'react';
import Link from 'next/link';

export default function PrivacyContent() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-10 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/apps#smartrecipe" className="inline-flex items-center gap-2 text-sm font-bold text-primary mb-6 hover:underline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to SmartRecipe
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">SmartRecipe</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-base">Last updated: May 10, 2026</p>
        </div>

        <div className="prose prose-stone max-w-none">
          <div className="bg-secondary border border-primary/20 rounded-2xl p-6 mb-10">
            <p className="text-sm text-foreground leading-relaxed">
              <strong>Summary:</strong> SmartRecipe collects only the data necessary to deliver personalized recipe recommendations. We do not sell your personal data to third parties. You can request deletion of your data at any time via our{' '}
              <Link href="/smartrecipe-data-deletion" className="text-primary font-semibold hover:underline">data deletion request form</Link>{' '}
              or by contacting us at <a href="mailto:admin@cetiapp.co.uk" className="text-primary font-semibold">admin@cetiapp.co.uk</a>.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">1. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              SmartRecipe is a mobile application developed and operated by CetiaApps (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the SmartRecipe mobile application available on Android.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If you have questions about this policy, please contact us at <a href="mailto:admin@cetiapp.co.uk" className="text-primary font-semibold">admin@cetiapp.co.uk</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-bold text-foreground mb-3">2.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li><strong>Account Information:</strong> Name, email address, and password when you create an account.</li>
              <li><strong>Profile Preferences:</strong> Dietary restrictions, allergies, cuisine preferences, and cooking skill level.</li>
              <li><strong>Pantry Data:</strong> Ingredients you manually enter or scan into your pantry inventory.</li>
              <li><strong>User Content:</strong> Recipes you create, photos you upload, and reviews you post.</li>
              <li><strong>Communications:</strong> Messages you send to our support team.</li>
            </ul>
            <h3 className="text-lg font-bold text-foreground mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li><strong>Usage Data:</strong> Recipes viewed, searches performed, features used, and time spent in the app.</li>
              <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers, and app version.</li>
              <li><strong>Log Data:</strong> IP address, app crashes, performance data, and diagnostic information.</li>
              <li><strong>Camera/Barcode Data:</strong> Only processed locally on your device for ingredient scanning; not transmitted to our servers.</li>
            </ul>
            <h3 className="text-lg font-bold text-foreground mb-3">2.3 Information from Third Parties</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li><strong>Social Sign-In:</strong> If you sign in with Google, we receive your name and email address from that provider.</li>
              <li><strong>Analytics Providers:</strong> Aggregated, anonymized usage statistics from Firebase Analytics.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Provide, personalize, and improve the SmartRecipe service</li>
              <li>Generate AI-powered recipe recommendations based on your preferences and pantry</li>
              <li>Create and maintain your account</li>
              <li>Process meal plans and generate shopping lists</li>
              <li>Send transactional notifications (e.g., meal plan reminders) — you can opt out at any time</li>
              <li>Diagnose technical problems and improve app performance</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>We do not use your data for advertising targeting or sell it to any third party.</strong>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We may share your information only in the following limited circumstances:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-3">
              <li><strong>Service Providers:</strong> We use trusted third-party vendors (e.g., AWS for hosting, Firebase for analytics) who are contractually obligated to protect your data and may only use it to provide services on our behalf.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or governmental authority.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred. We will notify you before your data is subject to a different privacy policy.</li>
              <li><strong>With Your Consent:</strong> We may share your data with third parties when you explicitly consent to such sharing.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal data for as long as your account is active or as needed to provide you services. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it by law (e.g., financial records for up to 7 years). Anonymized, aggregated data may be retained indefinitely for analytics purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your data, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-4">
              <li>TLS/HTTPS encryption for all data in transit</li>
              <li>AES-256 encryption for sensitive data at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Strict access controls — only authorized employees can access user data</li>
              <li>Multi-factor authentication for internal systems</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">7. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-3">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
              <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
              <li><strong>Objection:</strong> Object to processing of your data for certain purposes.</li>
              <li><strong>Opt-out of notifications:</strong> Disable push notifications at any time in your device settings or app preferences.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise any of these rights, email us at <a href="mailto:admin@cetiapp.co.uk" className="text-primary font-semibold">admin@cetiapp.co.uk</a>. We will respond within 30 days.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              SmartRecipe is not directed to children under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately at <a href="mailto:admin@cetiapp.co.uk" className="text-primary font-semibold">admin@cetiapp.co.uk</a> and we will delete such information promptly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">9. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">SmartRecipe integrates with the following third-party services:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-bold text-foreground">Service</th>
                    <th className="text-left p-4 font-bold text-foreground">Purpose</th>
                    <th className="text-left p-4 font-bold text-foreground">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: 'Firebase (Google)', purpose: 'Analytics & crash reporting', link: 'https://firebase.google.com/support/privacy' },
                    { service: 'AWS', purpose: 'Cloud hosting & storage', link: 'https://aws.amazon.com/privacy' },
                    { service: 'Google Sign-In', purpose: 'Authentication', link: 'https://policies.google.com/privacy' },
                  ]?.map((row, i) => (
                    <tr key={row?.service} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/50'}>
                      <td className="p-4 font-medium text-foreground">{row?.service}</td>
                      <td className="p-4 text-muted-foreground">{row?.purpose}</td>
                      <td className="p-4">
                        <a href={row?.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline text-xs">View Policy</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">10. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              CetiaApps operates globally. Your data may be transferred to and processed in countries other than your own, including the United States. We ensure appropriate safeguards are in place for such transfers, including Standard Contractual Clauses approved by the European Commission where applicable.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">11. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by sending an in-app notification or email at least 14 days before the changes take effect. Your continued use of SmartRecipe after the effective date constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-secondary border border-primary/20 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">Company:</span>
                <span className="text-muted-foreground text-sm">CetiaApps</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">App:</span>
                <span className="text-muted-foreground text-sm">SmartRecipe</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">Email:</span>
                <a href="mailto:admin@cetiapp.co.uk" className="text-primary font-semibold text-sm hover:underline">admin@cetiapp.co.uk</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">Response:</span>
                <span className="text-muted-foreground text-sm">Within 30 days</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}