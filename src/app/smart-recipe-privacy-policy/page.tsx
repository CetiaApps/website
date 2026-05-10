import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyContent from '@/app/smart-recipe-privacy-policy/components/PrivacyContent';

export default function SmartRecipePrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}