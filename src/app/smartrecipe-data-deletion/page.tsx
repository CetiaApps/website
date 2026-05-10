import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DataDeletionHero from './components/DataDeletionHero';
import DataDeletionForm from './components/DataDeletionForm';

export const metadata = {
  title: 'SmartRecipe – Request Data Deletion',
  description: 'Submit a request to have your personal data deleted from SmartRecipe.',
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
