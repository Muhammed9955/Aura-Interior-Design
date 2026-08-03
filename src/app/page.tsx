'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { VideoShowcase } from '../components/VideoShowcase';
import { Articles } from '../components/Articles';
import { Gallery } from '../components/Gallery';
import { SocialFeedPlayer } from '../components/SocialFeedPlayer';
import { CostCalculator } from '../components/CostCalculator';
import { StyleVisualizer } from '../components/StyleVisualizer';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { translations, Language } from '../data/translations';

export default function Home() {
  const [lang, setLang] = useState<Language>('ar');
  const t = translations[lang];

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#FAF8F5] dark:bg-[#121110] text-[#1F1A15] dark:text-[#F5F2EB] transition-colors duration-300">
      {/* Header Bar */}
      <Header t={t} lang={lang} onLanguageChange={setLang} />

      <main>
        {/* Full Image Focus Hero Slider */}
        <Hero t={t} lang={lang} />

        {/* Company History & Story */}
        <About t={t} lang={lang} />

        {/* Core Services */}
        <Services t={t} />

        {/* Portfolio & Interactive Before/After Split Slider */}
        <Portfolio t={t} lang={lang} />

        {/* Video Showcase */}
        <VideoShowcase t={t} lang={lang} />

        {/* Live Social Feed Player — Instagram / TikTok / Facebook */}
        {/* <SocialFeedPlayer lang={lang} /> */}

        {/* Gallery — real Instagram photos */}
        <Gallery lang={lang} previewCount={3} />

        {/* Articles & Expert Design Advice Blog Section */}
        <Articles t={t} lang={lang} />

        {/* Cost Calculator Estimator */}
        <CostCalculator t={t} lang={lang} />

        {/* Interior Style Visualizer & Moodboard */}
        <StyleVisualizer t={t} lang={lang} />

        {/* Testimonials */}
        <Testimonials t={t} lang={lang} />

        {/* Contact Form & Google Map Location */}
        <Contact t={t} lang={lang} />
      </main>

      {/* Footer */}
      <Footer t={t} lang={lang} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton lang={lang} />
    </div>
  );
}
