import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MiloPrivacyContent from '@/app/milo-privacy-policy/components/MiloPrivacyContent';

export const metadata: Metadata = {
  title: 'Milo Privacy Policy',
  description: 'Privacy policy for Milo, the AI assistant app from Cetia Solutions.',
  alternates: {
    canonical: '/milo-privacy-policy',
  },
};

export default function MiloPrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <MiloPrivacyContent />
      </main>
      <Footer />
    </>
  );
}
