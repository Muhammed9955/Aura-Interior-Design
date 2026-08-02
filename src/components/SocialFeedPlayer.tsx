'use client';

import React, { useState } from 'react';
import { Language } from '../data/translations';
import { Instagram, Facebook, MonitorPlay } from 'lucide-react';

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.883 2.897 2.896 2.896 0 0 1-2.897-2.897 2.896 2.896 0 0 1 2.897-2.897c.362 0 .705.074 1.022.201V9.52a6.326 6.326 0 0 0-1.022-.086C6.07 9.434 3.5 12.004 3.5 15.176c0 3.171 2.57 5.741 5.742 5.741 3.171 0 5.741-2.57 5.741-5.741V8.65a8.214 8.214 0 0 0 4.606 1.411V6.616a4.814 4.814 0 0 1-.001.07z" />
  </svg>
);

type Platform = 'instagram' | 'tiktok' | 'facebook';

const platforms: {
  id: Platform;
  labelAr: string;
  labelEn: string;
  Icon: React.FC<{ className?: string }>;
  color: string;
  embedUrl: string;
  externalUrl: string;
  noteAr: string;
  noteEn: string;
}[] = [
  {
    id: 'instagram',
    labelAr: 'إنستغرام',
    labelEn: 'Instagram',
    Icon: Instagram,
    color: '#E4405F',
    embedUrl: 'https://www.instagram.com/aurainteriordesignn/embed',
    externalUrl: 'https://www.instagram.com/aurainteriordesignn/reels/',
    noteAr: 'افتح على إنستغرام لمشاهدة الريلز',
    noteEn: 'Open on Instagram to watch Reels',
  },
  {
    id: 'tiktok',
    labelAr: 'تيك توك',
    labelEn: 'TikTok',
    Icon: TikTokIcon,
    color: '#00F2FE',
    embedUrl: 'https://www.tiktok.com/embed/@aura.interior.design',
    externalUrl: 'https://www.tiktok.com/@aura.interior.design',
    noteAr: 'افتح على تيك توك لمشاهدة الفيديوهات',
    noteEn: 'Open on TikTok to watch videos',
  },
  {
    id: 'facebook',
    labelAr: 'فيسبوك',
    labelEn: 'Facebook',
    Icon: Facebook,
    color: '#1877F2',
    embedUrl:
      'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAurainterordesign&tabs=timeline%2Cvideos&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true',
    externalUrl: 'https://www.facebook.com/Aurainterordesign/videos',
    noteAr: 'افتح على فيسبوك لمشاهدة الفيديوهات',
    noteEn: 'Open on Facebook to watch videos',
  },
];

interface SocialFeedPlayerProps {
  lang: Language;
}

export const SocialFeedPlayer: React.FC<SocialFeedPlayerProps> = ({ lang }) => {
  const [active, setActive] = useState<Platform>('instagram');
  const current = platforms.find((p) => p.id === active)!;

  return (
    <section className="pb-24 bg-[#121110]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* ── Platform Tabs ── */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          {platforms.map((p) => {
            const isActive = active === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer border ${
                  isActive
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-[#1C1917] text-[#E0D5C5] border-[#C5A059]/30 hover:border-[#C5A059]'
                }`}
                style={isActive ? { backgroundColor: p.color, borderColor: p.color } : {}}
              >
                <p.Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} style={!isActive ? { color: p.color } : {}} />
                <span>{lang === 'ar' ? p.labelAr : p.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* ── Embed Frame ── */}
        <div className="relative bg-[#1C1917] rounded-3xl overflow-hidden border border-[#C5A059]/30 shadow-2xl">
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 py-3 border-b border-[#38322B]"
            style={{ backgroundColor: current.color + '18' }}
          >
            <div className="flex items-center gap-2">
              <current.Icon className="w-5 h-5" style={{ color: current.color }} />
              <span className="text-sm font-semibold text-[#F5F2EB]">
                {lang === 'ar' ? `أورا على ${current.labelAr}` : `Aura on ${current.labelEn}`}
              </span>
            </div>
            <a
              href={current.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-3 py-1.5 rounded-full text-white transition-all hover:opacity-80"
              style={{ backgroundColor: current.color }}
            >
              {lang === 'ar' ? `افتح على ${current.labelAr}` : `Open on ${current.labelEn}`}
            </a>
          </div>

          {/* Iframe Player */}
          <div className="w-full overflow-hidden" style={{ height: '620px' }}>
            <iframe
              key={active} // remount on tab change
              src={current.embedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Aura ${current.labelEn} Feed`}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>

          {/* Bottom note */}
          <div className="px-5 py-3 border-t border-[#38322B] text-center">
            <p className="text-xs text-[#A39888]">
              {lang === 'ar' ? current.noteAr : current.noteEn}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
