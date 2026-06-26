import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyContent from '@/app/smart-recipe-privacy-policy/components/PrivacyContent';

export const metadata: Metadata = {
  title: 'SmartRecipe Privacy Policy',
  description: 'Privacy policy for SmartRecipe from Cetia Solutions.',
  alternates: {
    canonical: '/smart-recipe-privacy-policy',
  },
};

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
