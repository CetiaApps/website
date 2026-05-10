import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AppsShowcase from '@/app/components/AppsShowcase';
import StatsBar from '@/app/components/StatsBar';
import ServicesTeaserSection from '@/app/components/ServicesTeaserSection';
import CtaBanner from '@/app/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <AppsShowcase />
        <ServicesTeaserSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}