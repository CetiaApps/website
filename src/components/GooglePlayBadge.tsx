'use client';

import React from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';

export const smartCartPlayStoreUrl =
  'https://play.google.com/store/apps/details?id=smartcart.cetia.app&utm_source=cetia_website&utm_medium=button&utm_campaign=smartcart_launch';

export default function GooglePlayBadge({ className = '' }: { className?: string }) {
  return (
    <Link
      href={smartCartPlayStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get SmartCart on Google Play"
      onClick={() => track('SmartCart Google Play Click', { page: 'smartcart_landing_page' })}
      className={`inline-flex min-h-[58px] min-w-[196px] items-center justify-center gap-3 rounded-lg bg-black px-5 py-3 text-white shadow-lg shadow-teal-900/15 transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <svg width="30" height="34" viewBox="0 0 30 34" aria-hidden="true" className="shrink-0">
        <path fill="#00F0FF" d="M1.1 1.4c-.5.4-.8 1.1-.8 2v27.2c0 .9.3 1.6.8 2l14.7-15.6L1.1 1.4Z" />
        <path fill="#00D084" d="m20.5 11.9-4.7 5 4.7 5 6-3.4c1.9-1.1 1.9-3 0-4.1l-6-2.5Z" />
        <path fill="#FFD43B" d="m1.1 1.4 19.4 10.5-4.7 5L1.1 1.4Z" />
        <path fill="#FF4F6D" d="m1.1 32.6 19.4-10.7-4.7-5L1.1 32.6Z" />
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[10px] font-bold uppercase tracking-wide">Get it on</span>
        <span className="mt-1 block text-xl font-extrabold tracking-tight">Google Play</span>
      </span>
    </Link>
  );
}
