import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppsHero from '@/app/apps/components/AppsHero';
import SmartRecipeDetail from '@/app/apps/components/SmartRecipeDetail';
import MiloDetail from '@/app/apps/components/MiloDetail';

export const metadata: Metadata = {
  title: 'Apps',
  description: 'Explore apps from Cetia Solutions, including SmartRecipe, Milo and SmartCart.',
  alternates: {
    canonical: '/apps',
  },
};

export default function AppsPage() {
  return (
    <>
      <Header />
      <main>
        <AppsHero />
        <SmartRecipeDetail />
        <MiloDetail />
      </main>
      <Footer />
    </>
  );
}
