import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServicesGrid from '@/app/services/components/ServicesGrid';
import ProcessSection from '@/app/services/components/ProcessSection';
import ServicesCtaSection from '@/app/services/components/ServicesCtaSection';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ProcessSection />
        <ServicesCtaSection />
      </main>
      <Footer />
    </>
  );
}