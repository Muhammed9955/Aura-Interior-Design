'use client';

import React from 'react';
import Image from 'next/image';
import { TranslationContent, Language } from '../data/translations';
import { AuraLogo } from './AuraLogo';
import { Compass, ShieldCheck, DollarSign, Quote, Building2, CheckCircle2, Award } from 'lucide-react';

interface AboutProps {
  t: TranslationContent;
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ t, lang }) => {
  return (
    <section id="about" className="py-20 bg-[#F3EDE2]/60 dark:bg-[#1C1916]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Brand Emblem & Header Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block transform hover:scale-105 transition-transform">
            <AuraLogo size="md" showSlogan={true} isArabic={lang === 'ar'} />
          </div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1A15] dark:text-[#F5F2EB]">
            {t.about.title}
          </h2>
        </div>

        {/* Company Story & Cover Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Framing Column with Cover Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 group">
              <Image
                src="/images/cover.jpg"
                alt="Aura Interior Design Official Showcase Cover"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#1F1C18]/90 dark:bg-[#1A1816]/95 backdrop-blur-md rounded-2xl border border-[#C5A059]/40 text-white shadow-xl">
                <Quote className="w-6 h-6 text-[#C5A059] mb-2 opacity-90" />
                <p className="text-sm font-serif italic text-[#F5F2EB] leading-relaxed">{t.about.quote}</p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="space-y-6">
            <p className="text-[#5C5243] dark:text-[#D4C7B5] leading-relaxed font-light text-base">
              {t.about.description1}
            </p>

            <p className="text-[#5C5243] dark:text-[#D4C7B5] leading-relaxed font-light text-base">
              {t.about.description2}
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#C5A059]/20">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#1F1A15] dark:text-[#F5F2EB]">{t.about.pillar1Title}</h3>
                <p className="text-sm text-[#6B6052] dark:text-[#D4C7B5] leading-relaxed">{t.about.pillar1Desc}</p>
              </div>

              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#1F1A15] dark:text-[#F5F2EB]">{t.about.pillar2Title}</h3>
                <p className="text-sm text-[#6B6052] dark:text-[#D4C7B5] leading-relaxed">{t.about.pillar2Desc}</p>
              </div>

              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                  <DollarSign className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#1F1A15] dark:text-[#F5F2EB]">{t.about.pillar3Title}</h3>
                <p className="text-sm text-[#6B6052] dark:text-[#D4C7B5] leading-relaxed">{t.about.pillar3Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats Cards - Fixed High Contrast Background & Text */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6 border-t border-[#C5A059]/20">
          <div className="bg-white dark:bg-[#221F1C] p-6 rounded-2xl flex items-center justify-center gap-4 shadow-lg border border-[#C5A059]/30">
            <div className="p-3 rounded-full bg-[#C5A059]/20 text-[#C5A059]">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-start">
              <span className="block text-3xl font-serif font-bold text-[#C5A059] dark:text-[#F3E5AB]">
                {t.hero.stat1Number}
              </span>
              <span className="text-sm font-semibold text-[#1F1A15] dark:text-[#D4C7B5]">{t.hero.stat1Label}</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#221F1C] p-6 rounded-2xl flex items-center justify-center gap-4 shadow-lg border border-[#C5A059]/30">
            <div className="p-3 rounded-full bg-[#C5A059]/20 text-[#C5A059]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="text-start">
              <span className="block text-3xl font-serif font-bold text-[#C5A059] dark:text-[#F3E5AB]">
                {t.hero.stat2Number}
              </span>
              <span className="text-sm font-semibold text-[#1F1A15] dark:text-[#D4C7B5]">{t.hero.stat2Label}</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#221F1C] p-6 rounded-2xl flex items-center justify-center gap-4 shadow-lg border border-[#C5A059]/30">
            <div className="p-3 rounded-full bg-[#C5A059]/20 text-[#C5A059]">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-start">
              <span className="block text-3xl font-serif font-bold text-[#C5A059] dark:text-[#F3E5AB]">
                {t.hero.stat3Number}
              </span>
              <span className="text-sm font-semibold text-[#1F1A15] dark:text-[#D4C7B5]">{t.hero.stat3Label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
