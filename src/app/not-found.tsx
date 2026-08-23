'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
    const router = useRouter();

    const handleGoBack = () => {
        if (typeof window !== 'undefined') {
            window.history?.back();
        }
    };

    return (
        <>
            <Header />
            <main className="bg-hero-glow flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 pt-32">
                <div className="max-w-md text-center">
                    <h1 className="text-9xl font-extrabold text-primary opacity-20">404</h1>
                    <h2 className="mb-2 mt-2 text-2xl font-extrabold text-foreground">Page not found</h2>
                    <p className="mb-8 text-foreground/70">
                        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <button
                            onClick={handleGoBack}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
                        >
                            <Icon name="ArrowLeftIcon" size={16} />
                            Go back
                        </button>

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-bold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
                        >
                            <Icon name="HomeIcon" size={16} />
                            Back to home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
