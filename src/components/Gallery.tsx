'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Language } from '../data/translations';
import { X, ZoomIn, Images, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

// First 6 gallery images for homepage preview
const galleryImages = [
  '/gallery/514270360_122111082434929138_9127036913966804476_n.jpg',
  '/gallery/514346601_122112028772929138_7720938269203130304_n.jpg',
  '/gallery/514369244_122112030932929138_6985732392068475812_n.jpg',
  '/gallery/514401836_122111075852929138_2152098566454277601_n.jpg',
  '/gallery/515437047_122122762616929138_662414821297221659_n.jpg',
  '/gallery/518096329_122111080574929138_5122237966014139462_n.jpg',
];

interface GalleryProps {
  lang: Language;
  previewCount?: number;
}

export const Gallery: React.FC<GalleryProps> = ({ lang, previewCount = 6 }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const previewImages = galleryImages.slice(0, previewCount);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % previewImages.length);
  }, [lightboxIndex, previewImages.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + previewImages.length) % previewImages.length);
  }, [lightboxIndex, previewImages.length]);

  return (
    <section id="gallery" className="py-24 bg-[#1C1917] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase mb-3 mx-auto">
            <Images className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'معرض الصور الحقيقية' : 'Real Project Gallery'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F5F2EB]">
            {lang === 'ar' ? 'لمح من أعمالنا الفعلية' : 'Glimpse of Our Real Work'}
          </h2>
          <p className="mt-4 text-base text-[#E0D5C5] font-light">
            {lang === 'ar'
              ? 'صور حقيقية لمشاريعنا المنفذة مباشرة من أرشيف إنستغرام أورا'
              : 'Real project photos directly from the official Aura Instagram archive'}
          </p>
        </div>

        {/* 3-column Equal Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {previewImages.map((src, i) => (
            <div
              key={src}
              onClick={() => openLightbox(i)}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group border border-[#C5A059]/20 hover:border-[#C5A059] transition-all shadow-lg"
            >
              <Image
                src={src}
                alt={`Aura Interior Design - ${lang === 'ar' ? 'صورة من أعمالنا' : 'Project photo'} ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-xl">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full Gallery Page */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#C5A059] bg-[#1C1917] text-[#F3E5AB] font-bold text-sm uppercase tracking-wider hover:bg-[#C5A059] hover:text-white transition-all shadow-lg cursor-pointer"
          >
            <Images className="w-4 h-4" />
            <span>{lang === 'ar' ? 'عرض كافة صور المشاريع' : 'View Full Gallery'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Counter */}
              <div className="mb-3 px-2">
                <span className="text-white/50 text-sm">
                  {lightboxIndex + 1} / {previewImages.length}
                </span>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/30">
                <Image
                  src={previewImages[lightboxIndex]}
                  alt={`Aura Design - Image ${lightboxIndex + 1}`}
                  fill
                  className="object-contain bg-black"
                />
                {/* ── Circular X Close Button ── */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black hover:scale-110 transition-all cursor-pointer shadow-2xl border border-white/10"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Prev/Next — absolute positioned so RTL doesn't flip them */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <button
                  onClick={goPrev}
                  style={{ position: 'absolute', left: '8px' }}
                  className="pointer-events-auto p-3 rounded-full bg-black/60 text-white hover:bg-[#C5A059] transition-colors shadow-xl border border-white/10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goNext}
                  style={{ position: 'absolute', right: '8px' }}
                  className="pointer-events-auto p-3 rounded-full bg-black/60 text-white hover:bg-[#C5A059] transition-colors shadow-xl border border-white/10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
