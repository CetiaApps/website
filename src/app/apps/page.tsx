import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppsHero from '@/app/apps/components/AppsHero';
import SmartRecipeDetail from '@/app/apps/components/SmartRecipeDetail';
import MiloDetail from '@/app/apps/components/MiloDetail';

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