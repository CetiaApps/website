import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MiloPrivacyContent from '@/app/milo-privacy-policy/components/MiloPrivacyContent';

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