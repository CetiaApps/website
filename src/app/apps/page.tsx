import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppsHero from '@/app/apps/components/AppsHero';
import AppsShowcase from '@/app/components/AppsShowcase';
import CtaBanner from '@/app/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Apps',
  description:
    'Explore SmartRecipe and Milo, the in-house apps from Cetia Solutions — recipes with live supermarket price comparison, and an AI-powered personal assistant.',
  alternates: {
    canonical: '/apps',
  },
  openGraph: {
    title: 'Apps | Cetia Solutions',
    description:
      'Explore SmartRecipe and Milo, the in-house apps from Cetia Solutions — recipes with live supermarket price comparison, and an AI-powered personal assistant.',
    url: '/apps',
  },
};

export default function AppsPage() {
  return (
    <>
      <Header />
      <main>
        <AppsHero />
        <AppsShowcase />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
