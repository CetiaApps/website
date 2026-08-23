import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DataDeletionHero from './components/DataDeletionHero';
import DataDeletionForm from './components/DataDeletionForm';

export const metadata: Metadata = {
  title: 'SmartRecipe Data Deletion',
  description: 'Submit a request to have your personal data deleted from SmartRecipe.',
  alternates: {
    canonical: '/smartrecipe-data-deletion',
  },
  openGraph: {
    title: 'SmartRecipe Data Deletion | Cetia Solutions',
    description: 'Submit a request to have your personal data deleted from SmartRecipe.',
    url: '/smartrecipe-data-deletion',
  },
};

export default function SmartRecipeDataDeletionPage() {
  return (
    <>
      <Header />
      <main>
        <DataDeletionHero />
        <DataDeletionForm />
      </main>
      <Footer />
    </>
  );
}
