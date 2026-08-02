'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import { translations, Language } from '../../data/translations';
import { videosData, getEmbedUrl, getSocialUrl, VideoEntry } from '../../data/videosData';
import { Instagram, Maximize2, ExternalLink, X } from 'lucide-react';

// Show only Instagram reels for now
const instagramVideos = videosData.filter(
  (v) => v.platform === 'instagram' && v.shortcode !== 'REPLACE_ME'
);

export default function VideosPage() {
  const [lang, setLang] = useState<Language>('ar');
  const t = translations[lang];
  const [fullscreenUrl, setFullscreenUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreenUrl(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#FAF8F5] dark:bg-[#121110] text-[#1F1A15] dark:text-[#F5F2EB] transition-colors duration-300">
      <Header t={t} lang={lang} onLanguageChange={setLang} />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase mb-3 mx-auto">
              <Instagram className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'فيديوهاتنا على إنستغرام' : 'Our Instagram Videos'}</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#1F1A15] dark:text-[#F5F2EB]">
              {lang === 'ar' ? 'فيديوهاتنا' : 'Our Videos'}
            </h1>
            <p className="mt-4 text-base text-[#5C5243] dark:text-[#B8A99A] font-light">
              {lang === 'ar'
                ? 'استعرض جميع ريلز وفيديوهات أورا للتصميم الداخلي المباشرة من إنستغرام.'
                : 'Browse all official Aura Interior Design reels and live videos directly from Instagram.'}
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {instagramVideos.map((video) => (
              <div key={video.id} className="flex flex-col items-center gap-3 w-full max-w-[340px]">
                {/* Instagram badge */}
                <div className="flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#1C1917] border border-[#E4405F]/40 text-xs font-semibold text-[#E0D5C5]">
                  <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                  <span>Instagram</span>
                </div>

                {/* Phone-frame card with live embed */}
                <div
                  className="w-full rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/30 bg-white"
                  style={{ pointerEvents: 'none' }}
                >
                  <iframe
                    src={getEmbedUrl(video)}
                    className="w-full border-0 block"
                    style={{ height: '560px', overflow: 'hidden', display: 'block' }}
                    scrolling="no"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={lang === 'ar' ? video.titleAr : video.titleEn}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>

                {/* Card title & actions */}
                <div className="w-full space-y-2">
                  <h3 className="text-sm font-serif font-semibold text-[#F5F2EB] text-center line-clamp-1">
                    {lang === 'ar' ? video.titleAr : video.titleEn}
                  </h3>

                  <div className="flex items-center gap-2 w-full">
                    <button
                      onClick={() => setFullscreenUrl(getEmbedUrl(video))}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-bold border border-[#C5A059]/40 hover:bg-[#C5A059] hover:text-white transition-all cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'ملء الشاشة' : 'Full Screen'}</span>
                    </button>
                    <a
                      href={getSocialUrl(video)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1C1917] text-[#E0D5C5] text-xs font-semibold border border-[#C5A059]/30 hover:border-[#C5A059] transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'افتح' : 'Open'}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fullscreen Modal */}
      {fullscreenUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setFullscreenUrl(null)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Circular X Close Button */}
            <button
              onClick={() => setFullscreenUrl(null)}
              className="absolute -top-5 right-0 z-30 w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black hover:scale-110 transition-all cursor-pointer shadow-2xl border border-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/40 bg-white">
              <iframe
                src={fullscreenUrl}
                className="w-full border-0"
                style={{ height: '80vh', maxHeight: '700px' }}
                allowFullScreen
                loading="lazy"
                title="Instagram Video Fullscreen"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      )}

      <Footer t={t} lang={lang} />
      <WhatsAppButton lang={lang} />
    </div>
  );
}
