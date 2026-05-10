'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const screenshots = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1069e702b-1772175188279.png",
  alt: 'Milo AI Assistant chat interface showing a natural conversation with intelligent responses and a clean dark-themed UI',
  label: 'Chat'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_11b8de516-1778408484884.png",
  alt: 'Milo AI Assistant showing smart suggestions and contextual recommendations in a modern card-based layout',
  label: 'Suggestions'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_14cc6a6a2-1778408484729.png",
  alt: 'Milo AI Assistant voice mode screen with animated waveform and real-time transcription display',
  label: 'Voice'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_172e2c6b5-1778408486112.png",
  alt: 'Milo AI Assistant task management screen showing AI-generated to-do lists and productivity insights',
  label: 'Tasks'
}];


const features = [
{ title: 'Conversational AI', desc: 'Chat naturally with Milo using advanced language understanding. Ask anything, get intelligent, context-aware answers instantly.' },
{ title: 'Voice Assistant', desc: 'Hands-free interaction with real-time voice recognition and natural text-to-speech responses for seamless conversations.' },
{ title: 'Smart Summaries', desc: 'Paste any article, document, or webpage and Milo distills it into clear, concise summaries in seconds.' },
{ title: 'Task & Schedule AI', desc: 'Let Milo help you plan your day, set reminders, and manage tasks intelligently based on your priorities.' },
{ title: 'Personalised Learning', desc: 'Milo adapts to your communication style and preferences over time, becoming smarter and more helpful with every interaction.' },
{ title: 'Multi-Modal Input', desc: 'Send text, voice, or images — Milo understands and responds to all input types for a truly versatile AI experience.' }];


export default function MiloDetail() {
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
    <section id="milo" ref={sectionRef} className="py-24 px-6 md:px-10 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="scroll-reveal-hidden">
            <span className="app-badge mb-6 inline-block" style={{ backgroundColor: '#EDE9FE', color: '#7C3AED' }}>AI Assistant</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-4">
              Milo<span style={{ color: '#7C3AED' }}>.</span>
            </h2>
            <p className="text-xl font-semibold mb-5" style={{ color: '#7C3AED' }}>Your intelligent AI companion.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Milo is a powerful AI assistant designed to make your life easier. From answering complex questions and summarising documents to managing your schedule and learning your preferences — Milo is always ready to help, 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#7C3AED' }}>
                
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#7C3AED' }}>
                
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.67.19 1.01.02l12.09-6.98-2.56-2.56-10.54 9.52zm-1.15-20.4c-.05.18-.08.37-.08.57v19.14c0 .2.03.39.08.57l.07.06 10.72-10.72v-.25L2.1 3.3l-.07.06zm17.44 9.43l-2.43-1.4-2.85 2.86 2.85 2.86 2.45-1.41c.7-.4.7-1.06-.02-1.91zm-16.29 8.58l2.56-2.56 10.54-9.52L3.18.24C2.84.07 2.47.09 2.17.26 1.53.62 1.13 1.35 1.13 2.2v19.14c0 .85.4 1.58 1.04 1.94l.01.09z" />
                </svg>
                Google Play
              </a>
              <Link
                href="/milo-privacy-policy"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-muted-foreground rounded-full font-bold text-sm hover:text-foreground hover:border-foreground transition-all duration-200">
                
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="scroll-reveal-hidden grid grid-cols-2 gap-4">
            {[
            { value: '4.9★', label: 'App Store Rating', color: 'bg-card border border-border text-foreground' },
            { value: '25K+', label: 'Active Users', color: 'text-white', style: { backgroundColor: '#7C3AED' } },
            { value: 'GPT-4', label: 'AI Powered', color: 'bg-accent text-accent-foreground' },
            { value: '2025', label: 'Year Launched', color: 'bg-foreground text-background' }]?.
            map((stat) =>
            <div
              key={stat?.label}
              className={`${stat?.color} rounded-2xl p-6 flex flex-col justify-between min-h-[120px]`}
              style={stat?.style}>
              
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
              
                <div className="bg-foreground overflow-hidden shadow-xl" style={{ width: '200px', height: '400px', borderRadius: '2.2rem', boxShadow: '0 0 0 2px rgba(124,58,237,0.2), 0 0 0 8px rgba(124,58,237,0.08), 0 30px 60px rgba(0,0,0,0.2)' }}>
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
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EDE9FE' }}>
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