import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmartCartPrivacyContent from '@/app/smartcart-privacy-policy/components/SmartCartPrivacyContent';

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
