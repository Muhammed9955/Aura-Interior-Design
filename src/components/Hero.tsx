'use client';

import React, { useState, useEffect } from 'react';
import { TranslationContent, Language } from '../data/translations';
import { Calculator, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  t: TranslationContent;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/story.png',
      badgeAr: 'أورا للتصميم الداخلي',
      badgeEn: 'Aura Interior Design',
      titleAr: 'كل فراغ له حكاية',
      titleEn: 'Every Space Has A Story',
      descAr: 'نُحَوِّل مساحتك إلى تحفة فنية تعكس شخصيتك وطموحك بأعلى معايير الفخامة والاتقان.',
      descEn: 'We transform your space into a living masterpiece that reflects your lifestyle with unmatched luxury.',
    },
    {
      image: '/images/hero.png',
      badgeAr: 'ريسبشن ومساحات معيشة',
      badgeEn: 'Living & Reception Spaces',
      titleAr: 'فخامة المعمار ولمسات الفنادق المودرن',
      titleEn: 'Architectural Luxury & Modern Hotel Touches',
      descAr: 'تصميم وتنفيذ غرف معيشة بلمسات برونزية فاخرة وإضاءة خفية تمنحك أقصى درجات الراحة.',
      descEn: 'Bespoke reception areas designed with subtle bronze accents and architectural indirect lighting.',
    },
    {
      image: '/images/villa.png',
      badgeAr: 'فيلات وشقق سكنية',
      badgeEn: 'Villas & Luxury Apartments',
      titleAr: 'تشطيبات وتصميمات سكنية متكاملة',
      titleEn: 'Comprehensive Villa & Residential Fit-Out',
      descAr: 'ديكورات وتصميمات 3D واقعية مع إشراف هندسي مباشر وتسليم المفتاح بالموعد.',
      descEn: 'Realistic 3D blueprints and full turnkey fit-out under direct engineering site supervision.',
    },
    {
      image: '/images/kitchen.png',
      badgeAr: 'مطابخ فاخرة',
      badgeEn: 'Bespoke Modern Kitchens',
      titleAr: 'مطابخ ألترا مودرن بخامات إيطالية',
      titleEn: 'Ultra Modern Italian Style Kitchens',
      descAr: 'تصميم مطابخ أكريليك ورخام مقاومة للماء مع وحدات إضاءة غائرة ذكية.',
      descEn: 'Water-resistant acrylic cabinetry with waterfall marble islands and smart ambient lighting.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="hero" className="relative h-screen min-h-[650px] flex flex-col justify-end pb-12 overflow-hidden bg-black">
      {/* Full-Screen Background Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={slide.image}
            alt="Aura Showcase Interior Slide"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />
        </div>
      ))}

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-[#C5A059] hover:border-[#C5A059] transition-all cursor-pointer hidden sm:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-[#C5A059] hover:border-[#C5A059] transition-all cursor-pointer hidden sm:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Floating Text Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-4">
        <div className="inline-block px-3.5 py-1 rounded-full bg-black/50 border border-[#C5A059]/60 backdrop-blur-md text-xs font-bold text-[#E5CE93] uppercase tracking-wider drop-shadow-md">
          {lang === 'ar' ? slides[currentSlide].badgeAr : slides[currentSlide].badgeEn}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal drop-shadow-lg leading-tight">
          {lang === 'ar' ? slides[currentSlide].titleAr : slides[currentSlide].titleEn}
        </h1>

        <p className="text-base sm:text-lg text-white/95 font-normal max-w-2xl mx-auto drop-shadow-md leading-relaxed">
          {lang === 'ar' ? slides[currentSlide].descAr : slides[currentSlide].descEn}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href="#calculator"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-bold bg-[#C5A059] text-white shadow-2xl hover:bg-[#b08d48] transition-all w-full sm:w-auto"
          >
            <Calculator className="w-4 h-4" />
            <span>{t.hero.ctaPrimary}</span>
          </a>

          <a
            href="#portfolio"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-bold bg-black/50 border border-white/40 text-white backdrop-blur-md hover:bg-black/80 transition-all w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>{t.hero.ctaSecondary}</span>
          </a>
        </div>

        {/* Dots */}
        <div className="pt-4 flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlide ? 'w-8 bg-[#C5A059]' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
