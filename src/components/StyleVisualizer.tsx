'use client';

import React, { useState } from 'react';

import { TranslationContent, Language } from '../data/translations';
import { Palette, Eye, Sparkles, Check } from 'lucide-react';

interface StyleVisualizerProps {
  t: TranslationContent;
  lang: Language;
}

export const StyleVisualizer: React.FC<StyleVisualizerProps> = ({ t }) => {
  const [selectedStyle, setSelectedStyle] = useState<'japandi' | 'modernLuxury' | 'warmMinimalist' | 'classicModern'>('modernLuxury');
  const [selectedPalette, setSelectedPalette] = useState<'warm' | 'gold' | 'dark' | 'monochrome'>('warm');

  const styleImages = {
    japandi: '/images/villa.png',
    modernLuxury: '/images/hero.png',
    warmMinimalist: '/images/kitchen.png',
    classicModern: '/images/villa.png',
  };

  const paletteColors = {
    warm: ['#FAF8F5', '#EFEAD8', '#C5A059', '#4A4238'],
    gold: ['#121110', '#1C1A18', '#D4AF37', '#F3E5AB'],
    dark: ['#1E2022', '#33373B', '#A39171', '#D0C5B4'],
    monochrome: ['#FFFFFF', '#F5F5F7', '#E5E5E7', '#1D1D1F'],
  };

  return (
    <section id="visualizer" className="py-24 bg-[#181614] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase mb-3">
            {t.visualizer.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F5F2EB]">
            {t.visualizer.title}
          </h2>
          <p className="mt-4 text-base text-[#E0D5C5] font-light">
            {t.visualizer.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Panel - Dark Matte Cards */}
          <div className="lg:col-span-5 space-y-8">
            {/* Style Selector */}
            <div className="bg-[#1C1917] p-6 rounded-3xl border border-[#C5A059]/30 shadow-xl">
              <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>{t.visualizer.selectStyle}</span>
              </label>

              <div className="space-y-2.5">
                {[
                  { id: 'japandi', label: t.visualizer.japandi },
                  { id: 'modernLuxury', label: t.visualizer.modernLuxury },
                  { id: 'warmMinimalist', label: t.visualizer.warmMinimalist },
                  { id: 'classicModern', label: t.visualizer.classicModern },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setSelectedStyle(st.id as any)}
                    className={`w-full p-3.5 rounded-2xl text-xs font-semibold flex items-center justify-between border transition-all cursor-pointer ${
                      selectedStyle === st.id
                        ? 'border-[#C5A059] bg-[#2A241E] text-[#F3E5AB]'
                        : 'border-[#38322B] bg-[#141210] text-[#E0D5C5] hover:border-[#C5A059]/50'
                    }`}
                  >
                    <span>{st.label}</span>
                    {selectedStyle === st.id && <Check className="w-4 h-4 text-[#C5A059]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Palette Picker */}
            <div className="bg-[#1C1917] p-6 rounded-3xl border border-[#C5A059]/30 shadow-xl">
              <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#C5A059]" />
                <span>{t.visualizer.selectPalette}</span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'warm', label: t.visualizer.paletteWarm },
                  { id: 'gold', label: t.visualizer.paletteGold },
                  { id: 'dark', label: t.visualizer.paletteDark },
                  { id: 'monochrome', label: t.visualizer.paletteMonochrome },
                ].map((pal) => (
                  <button
                    key={pal.id}
                    onClick={() => setSelectedPalette(pal.id as any)}
                    className={`p-3 rounded-2xl border text-start transition-all cursor-pointer ${
                      selectedPalette === pal.id
                        ? 'border-[#C5A059] bg-[#2A241E]'
                        : 'border-[#38322B] bg-[#141210]'
                    }`}
                  >
                    <span className="block text-[11px] font-semibold text-[#F5F2EB] mb-2 truncate">
                      {pal.label}
                    </span>
                    <div className="flex gap-1">
                      {paletteColors[pal.id as keyof typeof paletteColors].map((c, idx) => (
                        <div
                          key={idx}
                          className="w-4 h-4 rounded-full border border-black/20"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Room Preview Canvas */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 group">
              <img
                src={styleImages[selectedStyle]}
                alt="Style Preview"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div
                className="absolute inset-0 transition-colors duration-500 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundColor:
                    selectedPalette === 'gold'
                      ? 'rgba(212, 175, 55, 0.15)'
                      : selectedPalette === 'dark'
                      ? 'rgba(28, 26, 24, 0.25)'
                      : 'transparent',
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Active Badges */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block">
                    {t.visualizer.selectStyle}
                  </span>
                  <h4 className="text-xl font-serif">
                    {selectedStyle === 'japandi'
                      ? t.visualizer.japandi
                      : selectedStyle === 'modernLuxury'
                      ? t.visualizer.modernLuxury
                      : selectedStyle === 'warmMinimalist'
                      ? t.visualizer.warmMinimalist
                      : t.visualizer.classicModern}
                  </h4>
                </div>

                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full bg-[#C5A059] text-white text-xs font-semibold hover:opacity-90 shadow-md flex items-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t.nav.bookConsultation}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
