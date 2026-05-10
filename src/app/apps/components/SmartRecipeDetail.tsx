'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const screenshots = [
{
  src: "/assets/images/SmartRecipeMainScreen-1778436348487.png",
  alt: 'SmartRecipe main screen showing recipe discovery and app overview',
  label: 'Home'
},
{
  src: "/assets/images/SmartRecipeScreenshot1-1778436348230.png",
  alt: 'SmartRecipe showing recipe search and browse with over 200 recipes',
  label: 'Recipes'
},
{
  src: "/assets/images/SmartRecipeScreenshot2-1778436344739.png",
  alt: 'SmartRecipe recipe detail showing ingredients, instructions and dietary information',
  label: 'Recipe Detail'
},
{
  src: "/assets/images/SmartRecipeScreenshot3-1778436344986.png",
  alt: 'SmartRecipe smart shopping list with live supermarket price updates',
  label: 'Shopping'
},
{
  src: "/assets/images/SmartRecipeScreenshot4-1778436348276.png",
  alt: 'SmartRecipe supermarket price comparison across major UK supermarkets',
  label: 'Price Compare'
}];


const features = [
{ title: '200+ Recipes', desc: 'Browse and search a library of over 200 recipes covering a wide range of cuisines and meal types.' },
{ title: 'Recipe Details', desc: 'Every recipe includes full ingredients, step-by-step instructions, and detailed dietary information.' },
{ title: 'Smart Shopping List', desc: 'Create a shopping list directly from any recipe with a single tap — ingredients added automatically.' },
{ title: 'Live Supermarket Prices', desc: 'Shopping lists update with live price information from all major UK supermarkets in real time.' },
{ title: 'Supermarket Info', desc: 'View store information and opening hours for major UK supermarkets alongside your shopping list.' },
{ title: 'Price Comparison', desc: 'Compare prices across supermarkets to find the best deal on every item in your shopping list.' }];


export default function SmartRecipeDetail() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal-hidden').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="smartrecipe" ref={sectionRef} className="py-24 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="scroll-reveal-hidden">
            <span className="app-badge bg-secondary text-primary mb-6 inline-block">Food & Cooking</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-4">
              Smart<span className="text-primary">Recipe</span>
            </h2>
            <p className="text-xl font-semibold text-primary mb-5">Cook smarter, shop smarter.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              SmartRecipe gives you access to over 200 recipes with full ingredients, instructions and dietary information. Create a smart shopping list from any recipe and get live price updates from all major UK supermarkets — with side-by-side price comparison so you always get the best deal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-bold text-sm hover:bg-primary transition-all duration-300 hover:scale-105">
                
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.67.19 1.01.02l12.09-6.98-2.56-2.56-10.54 9.52zm-1.15-20.4c-.05.18-.08.37-.08.57v19.14c0 .2.03.39.08.57l.07.06 10.72-10.72v-.25L2.1 3.3l-.07.06zm17.44 9.43l-2.43-1.4-2.85 2.86 2.85 2.86 2.45-1.41c.7-.4.7-1.06-.02-1.91zm-16.29 8.58l2.56-2.56 10.54-9.52L3.18.24C2.84.07 2.47.09 2.17.26 1.53.62 1.13 1.35 1.13 2.2v19.14c0 .85.4 1.58 1.04 1.94l.01.09z" />
                </svg>
                Google Play
              </a>
              <Link
                href="/smart-recipe-privacy-policy"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-muted-foreground rounded-full font-bold text-sm hover:text-foreground hover:border-foreground transition-all duration-200">
                
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* App info cards */}
          <div className="scroll-reveal-hidden grid grid-cols-2 gap-4">
            {[
            { value: '200+', label: 'Recipes Available', color: 'bg-secondary text-primary' },
            { value: 'UK', label: 'Supermarket Prices', color: 'bg-accent text-accent-foreground' },
            { value: 'Live', label: 'Price Updates', color: 'bg-muted text-foreground' },
            { value: '2024', label: 'Year Launched', color: 'bg-foreground text-background' }]?.
            map((stat) =>
            <div key={stat?.label} className={`${stat?.color} rounded-2xl p-6 flex flex-col justify-between min-h-[120px]`}>
                <div className="text-3xl font-extrabold tracking-tight">{stat?.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60">{stat?.label}</div>
              </div>
            )}
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-extrabold text-foreground mb-8 scroll-reveal-hidden">App Screenshots</h3>
          <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollSnapType: 'x mandatory' }}>
            {screenshots?.map((screen, i) =>
            <div
              key={i}
              className="flex-shrink-0 scroll-reveal-hidden"
              style={{ scrollSnapAlign: 'center', transitionDelay: `${i * 80}ms` }}>
              
                <div className="phone-frame bg-foreground overflow-hidden" style={{ width: '200px', height: '400px', borderRadius: '2.2rem' }}>
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-foreground/80 rounded-full z-10 relative" />
                  <div className="relative w-full h-full">
                    <AppImage src={screen?.src} alt={screen?.alt} fill className="object-cover" sizes="200px" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <span className="text-white text-xs font-bold tracking-widest uppercase">{screen?.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features grid */}
        <div>
          <h3 className="text-2xl font-extrabold text-foreground mb-8 scroll-reveal-hidden">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features?.map((feat, i) =>
            <div key={feat?.title} className="scroll-reveal-hidden hover-lift bg-card border border-border rounded-2xl p-6" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-extrabold text-foreground mb-2">{feat?.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat?.desc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}