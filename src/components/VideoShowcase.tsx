'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Language, TranslationContent } from '../data/translations';
import { videosData, getEmbedUrl, getSocialUrl } from '../data/videosData';
import { Instagram, Facebook, ExternalLink, Maximize2, Video, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

const TikTokIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = 'w-4 h-4', style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.883 2.897 2.896 2.896 0 0 1-2.897-2.897 2.896 2.896 0 0 1 2.897-2.897c.362 0 .705.074 1.022.201V9.52a6.326 6.326 0 0 0-1.022-.086C6.07 9.434 3.5 12.004 3.5 15.176c0 3.171 2.57 5.741 5.742 5.741 3.171 0 5.741-2.57 5.741-5.741V8.65a8.214 8.214 0 0 0 4.606 1.411V6.616a4.814 4.814 0 0 1-.001.07z" />
  </svg>
);

// Show only Instagram reels for now (filter by platform)
const realVideos = videosData.filter(
  (v) => v.platform === 'instagram' && v.shortcode !== 'REPLACE_ME'
);

const platformColor: Record<string, string> = {
  instagram: '#E4405F',
  tiktok: '#00F2FE',
  facebook: '#1877F2',
};

interface VideoShowcaseProps {
  t: TranslationContent;
  lang: Language;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ lang }) => {
  const [showAll, setShowAll] = useState(false);
  const [fullscreen, setFullscreen] = useState<string | null>(null);

  const displayed = showAll ? realVideos : realVideos.slice(0, 3);

  const PlatformIcon = ({ platform }: { platform: string }) => {
    if (platform === 'instagram') return <Instagram className="w-4 h-4" style={{ color: platformColor.instagram }} />;
    if (platform === 'tiktok') return <TikTokIcon className="w-4 h-4" style={{ color: platformColor.tiktok }} />;
    return <Facebook className="w-4 h-4" style={{ color: platformColor.facebook }} />;
  };

  const platformLabel = (platform: string, lang: Language) => {
    if (platform === 'instagram') return lang === 'ar' ? 'إنستغرام' : 'Instagram';
    if (platform === 'tiktok') return lang === 'ar' ? 'تيك توك' : 'TikTok';
    return lang === 'ar' ? 'فيسبوك' : 'Facebook';
  };

  return (
    <section id="videos" className="py-24 bg-[#FAF8F5] dark:bg-[#121110] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase mb-3 mx-auto">
            <Instagram className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'فيديوهاتنا على إنستغرام' : 'Our Videos on Instagram'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1A15] dark:text-[#F5F2EB]">
            {lang === 'ar' ? 'شاهدوا فيديوهاتنا' : 'Watch Our Videos'}
          </h2>
          <p className="mt-4 text-base text-[#5C5243] dark:text-[#B8A99A] font-light">
            {lang === 'ar'
              ? 'ريلز أورا الرسمية مباشرة من إنستغرام — تشطيبات فاخرة ومشاريع حية.'
              : 'Official Aura reels from Instagram — luxury finishes and live project tours.'}
          </p>
        </div>

        {/* ── Video Cards Grid ── */}
        {realVideos.length === 0 ? (
          <div className="text-center py-16 text-[#A39888]">
            <Video className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p className="text-base">
              {lang === 'ar'
                ? 'لا توجد فيديوهات بعد — أضف الروابط في ملف videosData.ts'
                : 'No videos yet — add links in videosData.ts'}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {displayed.map((video) => (
                <div key={video.id} className="flex flex-col items-center gap-3 w-full max-w-[340px]">

                  {/* Instagram platform badge */}
                  <div className="flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#1C1917] border border-[#E4405F]/40 text-xs font-semibold text-[#E0D5C5]">
                    <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                    <span>Instagram</span>
                  </div>

                  {/* Phone-frame card with live embed player */}
                  <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/30 bg-white">
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

                  {/* Card actions */}
                  <div className="flex items-center gap-2 w-full">
                    <button
                      onClick={() => setFullscreen(getEmbedUrl(video))}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#C5A059] text-white text-xs font-bold hover:bg-[#b08d48] transition-all cursor-pointer shadow-md"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'تشغيل ملء الشاشة' : 'Play Full Screen'}</span>
                    </button>
                    <a
                      href={getSocialUrl(video)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#1C1917] text-[#1F1A15] dark:text-[#E0D5C5] text-xs font-semibold border border-[#C5A059]/30 hover:border-[#C5A059] transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'إنستغرام' : 'Instagram'}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Show More / Show Less & All Videos link ── */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              {realVideos.length > 3 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A059] text-white font-bold text-sm hover:bg-[#b08d48] transition-all shadow-xl cursor-pointer"
                >
                  {showAll ? (
                    <><ChevronUp className="w-4 h-4" /><span>{lang === 'ar' ? 'عرض أقل' : 'Show Less'}</span></>
                  ) : (
                    <><ChevronDown className="w-4 h-4" /><span>{lang === 'ar' ? `عرض كل الفيديوهات (${realVideos.length})` : `Show All Videos (${realVideos.length})`}</span></>
                  )}
                </button>
              )}

              <Link
                href="/videos"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#C5A059] bg-transparent text-[#F3E5AB] font-bold text-sm hover:bg-[#C5A059] hover:text-white transition-all shadow-lg"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>{lang === 'ar' ? 'صفحة الفيديوهات الكاملة' : 'All Videos Page'}</span>
              </Link>
            </div>
          </>
        )}
      </div>

      {/* ── Fullscreen Modal ── */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setFullscreen(null)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFullscreen(null)}
              className="absolute -top-5 right-0 z-30 w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black hover:scale-110 transition-all cursor-pointer shadow-2xl border border-white/10"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/40 bg-white">
              <iframe
                src={fullscreen}
                className="w-full border-0"
                style={{ height: '80vh', maxHeight: '700px' }}
                allowFullScreen
                loading="lazy"
                title="Video Fullscreen"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
