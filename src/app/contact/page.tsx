import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactForm from '@/app/contact/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Cetia Solutions about mobile apps, SaaS platforms and AI-assisted development for your business.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Cetia Solutions',
    description:
      'Contact Cetia Solutions about mobile apps, SaaS platforms and AI-assisted development for your business.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
