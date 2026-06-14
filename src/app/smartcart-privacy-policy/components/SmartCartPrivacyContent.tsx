import React from 'react';
import Link from 'next/link';

const thirdPartyServices = [
  {
    service: 'Supabase',
    purpose: 'Authentication, database, realtime sync, edge functions, and secure backend processing',
    link: 'https://supabase.com/privacy',
  },
  {
    service: 'Google Sign-In',
    purpose: 'Optional Google account sign-in',
    link: 'https://policies.google.com/privacy',
  },
  {
    service: 'Google Play Billing',
    purpose: 'Subscription purchase and purchase-status processing on Android',
    link: 'https://policies.google.com/privacy',
  },
  {
    service: 'Google Maps',
    purpose: 'Opening map search and directions links when you choose to view a store route',
    link: 'https://policies.google.com/privacy',
  },
  {
    service: 'Railway and supermarket scraper services',
    purpose: 'Server-side grocery price lookup for items you add to your lists',
    link: 'https://railway.com/legal/privacy',
  },
];

export default function SmartCartPrivacyContent() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-10 bg-background">
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-base">Last updated: June 12, 2026</p>
        </div>

        <div className="prose prose-stone max-w-none">
          <div className="bg-secondary border border-primary/20 rounded-2xl p-6 mb-10">
            <p className="text-sm text-foreground leading-relaxed">
              <strong>Summary:</strong> SmartCart helps you create grocery shopping lists, compare supermarket prices, find nearby stores, and manage subscriptions. We collect the information needed to provide those features, such as your account details, shopping-list content, price preferences, app cache data, and optional device permissions. We do not sell your personal data. You can request deletion of your SmartCart data through our <Link href="/smartcart-delete-my-data" className="text-primary font-semibold hover:underline">Delete my Data page</Link>.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">1. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              SmartCart is a mobile application developed and operated by Cetia Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains how we collect, use, store, and share information when you use SmartCart on Android, iOS, or any supported platform.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Contact us at <a href="mailto:admin@cetiaapp.co.uk" className="text-primary font-semibold">admin@cetiaapp.co.uk</a> if you have questions or privacy requests.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-bold text-foreground mb-3">2.1 Account and Profile Information</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li><strong>Account details:</strong> email address, password authentication data, user ID, and optional full name.</li>
              <li><strong>Google sign-in details:</strong> if you choose Google sign-in, we receive the information Google provides for authentication, such as your email address and basic account identity.</li>
              <li><strong>Profile settings:</strong> your display-name changes and price display preferences, including whether you prefer lowest, highest, or average price views.</li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mb-3">2.2 Shopping and Price Comparison Data</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li><strong>Shopping lists:</strong> list names, selected supermarket, list items, item quantities, categories, checked status, and timestamps.</li>
              <li><strong>Custom grocery items:</strong> item names you type or dictate, normalized item names, category guesses, and whether price lookup is enabled or disabled for an item.</li>
              <li><strong>Price lookup data:</strong> product matches, supermarket item references, scraped price rows, product URLs, price text, stock status, offer text, cheapest-store results, price status, and error messages.</li>
              <li><strong>Subscription information:</strong> plan, status, start and expiry timestamps, and purchase-state information needed to unlock paid features.</li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mb-3">2.3 Device Permissions and Mobile Data</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li><strong>Location:</strong> with your permission, SmartCart uses your current latitude and longitude to find nearby supermarkets. Location is used when you request the nearest-store feature.</li>
              <li><strong>Microphone and speech recognition:</strong> with your permission, SmartCart lets you add grocery items by voice. Recognized text is placed into the item-name field and may be saved as a shopping-list item if you add it.</li>
              <li><strong>Network and connectivity state:</strong> SmartCart checks whether your device is online so it can sync lists, fetch prices, and queue offline changes.</li>
              <li><strong>Local app storage:</strong> SmartCart stores cached supermarket catalogues, shopping lists, list items, subscription status, item images, and pending offline actions on your device using local preferences.</li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mb-3">2.4 Support and Communications</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Messages you send to us for support, feedback, account deletion, or privacy requests.</li>
              <li>Technical details you choose to include when reporting a problem.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">3. How We Use Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use information to:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Create, secure, and manage your SmartCart account.</li>
              <li>Save, sync, and display your shopping lists across sessions.</li>
              <li>Search supermarket catalogues and compare grocery prices.</li>
              <li>Run server-side price lookups through Supabase edge functions and scraper services.</li>
              <li>Find nearby supermarkets when you request location-based store results.</li>
              <li>Convert speech to grocery-item text when you use the microphone feature.</li>
              <li>Provide offline support, local caching, and retry syncing when your connection returns.</li>
              <li>Process subscriptions, enforce plan limits, and provide paid features.</li>
              <li>Diagnose app issues, protect against misuse, and improve SmartCart.</li>
              <li>Respond to support, privacy, and account-deletion requests.</li>
              <li>Comply with legal, tax, accounting, platform, and security obligations.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>We do not sell your personal data or use it for third-party advertising.</strong>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">4. Device Permissions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-bold text-foreground">Permission</th>
                    <th className="text-left p-4 font-bold text-foreground">Why SmartCart Requests It</th>
                    <th className="text-left p-4 font-bold text-foreground">Your Control</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Location', 'To find nearby supermarkets and show map or directions links.', 'You can deny or revoke location permission in your device settings.'],
                    ['Microphone', 'To let you speak grocery item names instead of typing them.', 'You can deny or revoke microphone permission in your device settings.'],
                    ['Speech Recognition', 'To convert spoken grocery items into text on supported platforms.', 'You can stop using voice input or manage speech permissions in device settings.'],
                    ['Internet and Network State', 'To sign in, sync lists, fetch supermarket catalogues, compare prices, and detect offline mode.', 'Internet access is required for cloud features and price lookup.'],
                  ].map(([permission, purpose, control], index) => (
                    <tr key={permission} className={index % 2 === 0 ? 'bg-card' : 'bg-muted/50'}>
                      <td className="p-4 font-medium text-foreground">{permission}</td>
                      <td className="p-4 text-muted-foreground">{purpose}</td>
                      <td className="p-4 text-muted-foreground">{control}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">5. How We Share Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We share information only where needed to operate SmartCart:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-3">
              <li><strong>Service providers:</strong> vendors that provide authentication, hosting, database, edge functions, payments, maps, support, or infrastructure services.</li>
              <li><strong>Supermarket and price services:</strong> item names and lookup identifiers may be processed by server-side scraper services to find product prices.</li>
              <li><strong>Payment platforms:</strong> subscription purchases are handled by Google Play Billing or the relevant platform provider. We do not receive your full card details.</li>
              <li><strong>Legal and safety reasons:</strong> we may disclose information if required by law, to protect rights and safety, or to investigate misuse.</li>
              <li><strong>Business transfers:</strong> if SmartCart or Cetia Solutions is reorganized, sold, or merged, information may transfer as part of that transaction, subject to this policy or a replacement policy.</li>
              <li><strong>With your consent:</strong> we may share information when you ask us to or explicitly permit it.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">6. Third-Party Services</h2>
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
                  {thirdPartyServices.map((row, index) => (
                    <tr key={row.service} className={index % 2 === 0 ? 'bg-card' : 'bg-muted/50'}>
                      <td className="p-4 font-medium text-foreground">{row.service}</td>
                      <td className="p-4 text-muted-foreground">{row.purpose}</td>
                      <td className="p-4">
                        <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline text-xs">View Policy</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">7. Local Storage, Offline Mode, and Caching</h2>
            <p className="text-muted-foreground leading-relaxed">
              SmartCart stores some data locally on your device to make the app faster and more reliable. This may include supermarket catalogue data, shopping lists, list items, subscription status, product-image references, offline status, and pending offline actions. When you are offline, changes may be queued locally and synced with Supabase after your connection returns.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can clear local app data by using your device&apos;s app storage controls or by uninstalling SmartCart. Clearing local storage may remove offline data that has not yet synced.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">8. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We keep account, profile, shopping-list, settings, subscription, and price-lookup data for as long as your account is active or as long as needed to provide SmartCart. If you request deletion, we aim to delete or anonymize personal data within 14 days after receiving and verifying your request, unless we need to retain limited information for legal, security, accounting, dispute, or platform-compliance reasons. Aggregated or anonymized price and catalogue data may be retained to improve grocery matching and price comparison.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">9. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use technical and organizational safeguards designed to protect SmartCart data, including HTTPS/TLS for network communication, Supabase authentication, row-level access controls where supported, server-side handling of sensitive scraper credentials, and restricted access to operational systems. No internet service can be guaranteed to be completely secure, but we work to protect your information against unauthorized access, loss, misuse, or alteration.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">10. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Depending on your location, including under UK GDPR where applicable, you may have rights to:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-3">
              <li>Access the personal data we hold about you.</li>
              <li>Correct inaccurate or incomplete information.</li>
              <li>Request deletion of your account and personal data.</li>
              <li>Request a copy of your data in a portable format.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Complain to a data protection authority, such as the UK Information Commissioner&apos;s Office.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To request deletion, open SmartCart, go to Account settings, choose Help & support, tap Create support ticket, and ask for data deletion. You can find the full instructions on our <Link href="/smartcart-delete-my-data" className="text-primary font-semibold hover:underline">Delete my Data page</Link>. You can also email <a href="mailto:admin@cetiaapp.co.uk" className="text-primary font-semibold">admin@cetiaapp.co.uk</a>. We aim to respond to support and privacy requests within 30 days unless a shorter or longer period is required by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">11. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              SmartCart is not directed to children under 13, and it is not intended for users under 16 in the UK or European Economic Area without appropriate consent. We do not knowingly collect personal information from children. If you believe a child has provided personal information, contact us and we will take appropriate steps to remove it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">12. International Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cetia Solutions is based in the United Kingdom, and our service providers may process information in the UK, European Economic Area, United States, or other countries. Where required, we rely on appropriate safeguards such as contractual protections, standard contractual clauses, or equivalent transfer mechanisms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">13. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. If we make material changes, we will take reasonable steps to notify you, such as by updating this page, showing an in-app notice, or sending an email where appropriate. The &quot;Last updated&quot; date above shows when this policy was most recently changed.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">14. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have questions, concerns, or requests about this Privacy Policy or SmartCart data practices, contact us:
            </p>
            <div className="bg-secondary border border-primary/20 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">Company:</span>
                <span className="text-muted-foreground text-sm">Cetia Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">App:</span>
                <span className="text-muted-foreground text-sm">SmartCart</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">Email:</span>
                <a href="mailto:admin@cetiaapp.co.uk" className="text-primary font-semibold text-sm hover:underline">admin@cetiaapp.co.uk</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">Response:</span>
                <span className="text-muted-foreground text-sm">Normally within 30 days</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
