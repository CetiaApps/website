'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const screenshots = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_14ab51f1e-1764685127049.png",
  alt: 'SmartRecipe home feed showing recipe discovery cards with vibrant food photography and purple navigation bar',
  label: 'Discover'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_129db8dde-1778404640897.png",
  alt: 'SmartRecipe cooking mode showing step-by-step instructions with timer and ingredient checklist',
  label: 'Cook Mode'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_13e7e6aaf-1767961634914.png",
  alt: 'SmartRecipe meal planning calendar showing weekly schedule with calorie targets and shopping list',
  label: 'Meal Plan'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_15ced5786-1772092585280.png",
  alt: 'SmartRecipe pantry tracker showing ingredient inventory with expiry dates and recipe suggestions',
  label: 'Pantry'
}];


const features = [
{ title: 'AI Recipe Engine', desc: 'Learns your taste preferences and dietary restrictions to serve only recipes you\'ll love.' },
{ title: 'Pantry Tracker', desc: 'Scan barcodes or manually add ingredients. The app suggests recipes based on what you have.' },
{ title: 'Step-by-Step Mode', desc: 'Full-screen cooking mode with voice navigation, timers, and ingredient quantities scaled to your serving size.' },
{ title: 'Nutritional Insights', desc: 'Detailed macros, calories, and micronutrients for every recipe. Track your daily intake automatically.' },
{ title: 'Meal Planning', desc: 'Plan your full week in minutes. Auto-generate shopping lists and sync with your calendar.' },
{ title: 'Community Recipes', desc: 'Discover and share recipes with a growing community of home cooks.' }];


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
            <p className="text-xl font-semibold text-primary mb-5">Cook smarter, eat better.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              SmartRecipe is the AI-powered cooking companion that eliminates the daily "what&apos;s for dinner?" struggle. It learns what you love, knows what you have, and guides you through every step of cooking it perfectly.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-bold text-sm hover:bg-primary transition-all duration-300 hover:scale-105">
                
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
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

          {/* Stats */}
          <div className="scroll-reveal-hidden grid grid-cols-2 gap-4">
            {[
            { value: '4.9★', label: 'App Store Rating', color: 'bg-secondary text-primary' },
            { value: '30K+', label: 'Active Users', color: 'bg-accent text-accent-foreground' },
            { value: '500K+', label: 'Recipes in Database', color: 'bg-muted text-foreground' },
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