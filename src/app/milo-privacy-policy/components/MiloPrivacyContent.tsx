import React from 'react';
import Link from 'next/link';

export default function MiloPrivacyContent() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-10 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/apps#milo" className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:underline" style={{ color: '#7C3AED' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Milo
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ backgroundColor: '#EDE9FE', borderColor: '#7C3AED' }}>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#7C3AED' }}>Milo · AI Assistant</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-base">Last updated: May 10, 2026</p>
        </div>

        <div className="prose prose-stone max-w-none">
          <div className="rounded-2xl p-6 mb-10 border" style={{ backgroundColor: '#EDE9FE', borderColor: '#7C3AED' }}>
            <p className="text-sm text-foreground leading-relaxed">
              <strong>Summary:</strong> Milo collects only the data necessary to power your AI assistant experience and personalise responses over time. We do not sell your personal data or use your conversations for advertising. You can request deletion of your account and all associated data at any time by contacting <a href="mailto:admin@cetiapp.co.uk" className="font-semibold" style={{ color: '#7C3AED' }}>admin@cetiapp.co.uk</a>.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">1. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              Milo is an AI assistant mobile application developed and operated by CetiaApps (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy describes how we collect, use, and protect information you provide when using the Milo app on Android devices.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Questions? Reach us at <a href="mailto:admin@cetiapp.co.uk" className="font-semibold" style={{ color: '#7C3AED' }}>admin@cetiapp.co.uk</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-bold text-foreground mb-3">2.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li><strong>Account Information:</strong> Your name, email address, and password.</li>
              <li><strong>Conversation Data:</strong> Messages, prompts, and queries you send to Milo, along with the AI-generated responses, to enable conversation history and context-aware replies.</li>
              <li><strong>Uploaded Content:</strong> Documents, images, or files you share with Milo for summarisation or analysis. These are processed to generate your response and are not stored beyond the active session unless you explicitly save them.</li>
              <li><strong>Voice Input (Optional):</strong> Audio captured when you use voice mode, processed in real time for transcription. Audio is not stored on our servers after transcription is complete.</li>
              <li><strong>User Preferences:</strong> Communication style, topics of interest, and personalisation settings you configure within the app.</li>
            </ul>
            <h3 className="text-lg font-bold text-foreground mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li><strong>Usage Analytics:</strong> Features used, screens visited, and session duration — collected in anonymised, aggregated form to improve the app.</li>
              <li><strong>Device Information:</strong> Device model, OS version, unique identifiers, and app version.</li>
              <li><strong>Crash Reports:</strong> Automatic diagnostic data when the app encounters an error, to help us fix bugs quickly.</li>
              <li><strong>Push Notification Tokens:</strong> To send you reminders and updates (you can opt out at any time).</li>
            </ul>
            <h3 className="text-lg font-bold text-foreground mb-3">2.3 Information from Third Parties</h3>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li><strong>Social Sign-In:</strong> Name and email if you sign in with Google.</li>
              <li><strong>AI Model Providers:</strong> Conversation prompts are processed by our AI model provider (e.g., OpenAI) under strict data processing agreements. These providers do not use your data to train their models.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use collected data to:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>Provide and personalise the Milo AI assistant experience</li>
              <li>Maintain conversation history and context for more relevant responses</li>
              <li>Process voice input and generate real-time transcriptions</li>
              <li>Summarise documents and analyse uploaded content on your behalf</li>
              <li>Learn your preferences to improve response quality over time</li>
              <li>Send push notifications for reminders and app updates</li>
              <li>Diagnose technical issues and improve app performance</li>
              <li>Comply with legal obligations and prevent fraud</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>We never sell your data, use your conversations for advertising, or share your prompts with third parties beyond what is necessary to generate your AI responses.</strong>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">4. A Note on AI Conversation Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your conversations with Milo are processed by our AI model provider to generate responses. We have strict data processing agreements in place that prohibit the use of your conversations for training AI models or any purpose beyond generating your response. Conversation history stored in the app is encrypted and accessible only to you. You can delete individual conversations or your entire history at any time from within the app.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">5. Voice Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Milo requests access to your device&apos;s microphone only when you actively use voice mode. Audio is streamed in real time for transcription and is not stored on our servers after the transcription is complete. We do not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2 mt-4">
              <li>Store raw audio recordings on our servers</li>
              <li>Listen to your microphone in the background</li>
              <li>Share audio data with third parties beyond the transcription service</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can revoke microphone access at any time in your device settings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">6. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We share your data only in these limited circumstances:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-3">
              <li><strong>AI Model Provider:</strong> Conversation prompts are sent to our AI provider (e.g., OpenAI) solely to generate your response. This is governed by a strict data processing agreement.</li>
              <li><strong>Service Providers:</strong> AWS (hosting), Firebase (analytics/crash reporting), and push notification services. All are contractually bound to protect your data.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, with advance notice to you.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your account data and conversation history are retained for as long as your account is active. When you delete your account, we permanently delete all associated data within 30 days. You can delete individual conversations at any time from within the app. We retain anonymised analytics data indefinitely.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">8. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We protect your data with:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
              <li>TLS 1.3 encryption for all data in transit</li>
              <li>AES-256 encryption for all conversation history at rest</li>
              <li>Role-based access controls — minimal staff access to user data</li>
              <li>Regular security assessments</li>
              <li>Automatic session expiry and secure token management</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">9. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-3">
              <li><strong>Access your data:</strong> Request a full export of your account data and conversation history.</li>
              <li><strong>Correct your data:</strong> Update any inaccurate information directly in the app or by contacting us.</li>
              <li><strong>Delete your account:</strong> Request complete account and data deletion at any time.</li>
              <li><strong>Delete conversations:</strong> Remove individual or all conversations directly within the app at any time.</li>
              <li><strong>Opt out of notifications:</strong> Disable any or all push notifications in the app settings or device settings.</li>
              <li><strong>Revoke microphone access:</strong> Turn off microphone permission in your device settings at any time.</li>
              <li><strong>Data portability:</strong> Receive your conversation history in a portable format (JSON/PDF).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Contact us at <a href="mailto:admin@cetiapp.co.uk" className="font-semibold" style={{ color: '#7C3AED' }}>admin@cetiapp.co.uk</a> to exercise any of these rights. We will respond within 30 days.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Milo is not directed to children under 13. We do not knowingly collect data from children. If you believe a child has created an account, please contact us at <a href="mailto:admin@cetiapp.co.uk" className="font-semibold" style={{ color: '#7C3AED' }}>admin@cetiapp.co.uk</a> and we will delete the account immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">11. Third-Party Services</h2>
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
                    { service: 'OpenAI', purpose: 'AI language model for generating responses', link: 'https://openai.com/policies/privacy-policy' },
                    { service: 'Firebase (Google)', purpose: 'Analytics, crash reporting & push notifications', link: 'https://firebase.google.com/support/privacy' },
                    { service: 'AWS', purpose: 'Cloud hosting & encrypted storage', link: 'https://aws.amazon.com/privacy' },
                    { service: 'Google Sign-In', purpose: 'Authentication', link: 'https://policies.google.com/privacy' },
                  ]?.map((row, i) => (
                    <tr key={row?.service} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/50'}>
                      <td className="p-4 font-medium text-foreground">{row?.service}</td>
                      <td className="p-4 text-muted-foreground">{row?.purpose}</td>
                      <td className="p-4">
                        <a href={row?.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-xs" style={{ color: '#7C3AED' }}>View Policy</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">12. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will notify you of material changes to this Privacy Policy via in-app notification at least 14 days before changes take effect. Minor updates (e.g., typo corrections) may be made without notice. The &quot;Last updated&quot; date at the top of this page always reflects the most recent version.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For any privacy-related questions, requests, or concerns:
            </p>
            <div className="rounded-2xl p-6 space-y-3 border" style={{ backgroundColor: '#EDE9FE', borderColor: '#7C3AED' }}>
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">Company:</span>
                <span className="text-muted-foreground text-sm">CetiaApps</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">App:</span>
                <span className="text-muted-foreground text-sm">Milo — AI Assistant</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-sm w-24">Email:</span>
                <a href="mailto:admin@cetiapp.co.uk" className="font-semibold text-sm hover:underline" style={{ color: '#7C3AED' }}>admin@cetiapp.co.uk</a>
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