import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmartCartPrivacyContent from '@/app/smartcart-privacy-policy/components/SmartCartPrivacyContent';

export const metadata: Metadata = {
  title: 'SmartCart Privacy Policy',
  description:
    'Privacy policy for SmartCart, the UK grocery price comparison app from Cetia Solutions.',
  alternates: {
    canonical: '/smartcart-privacy-policy',
  },
};

export default function SmartCartPrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <SmartCartPrivacyContent />
      </main>
      <Footer />
    </>
  );
}
