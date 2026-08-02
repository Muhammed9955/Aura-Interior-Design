'use client';

import React from 'react';
import { TranslationContent, Language } from '../data/translations';
import { AuraLogo } from './AuraLogo';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  t: TranslationContent;
  lang: Language;
}

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.883 2.897 2.896 2.896 0 0 1-2.897-2.897 2.896 2.896 0 0 1 2.897-2.897c.362 0 .705.074 1.022.201V9.52a6.326 6.326 0 0 0-1.022-.086C6.07 9.434 3.5 12.004 3.5 15.176c0 3.171 2.57 5.741 5.742 5.741 3.171 0 5.741-2.57 5.741-5.741V8.65a8.214 8.214 0 0 0 4.606 1.411V6.616a4.814 4.814 0 0 1-.001.07z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  return (
    <footer className="bg-[#121110] border-t border-[#C5A059]/30 text-[#E0D5C5] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#38322B]">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <AuraLogo size="xs" showSlogan={false} isArabic={lang === 'ar'} />
              <span className="font-serif font-bold text-lg text-white">AURA INTERIOR DESIGN</span>
            </div>
            <p className="text-xs text-[#A39888] leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/Aurainterordesign"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1C1917] border border-[#38322B] text-white hover:border-[#C5A059] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/aurainteriordesignn"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1C1917] border border-[#38322B] text-white hover:border-[#C5A059] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@aura.interior.design"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#1C1917] border border-[#38322B] text-white hover:border-[#C5A059] transition-colors"
                title="TikTok Official Page"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-[#C5A059] transition-colors">
                  {lang === 'ar' ? 'معرض الفيديوهات' : 'Videos Showcase'}
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-[#C5A059] transition-colors">
                  {lang === 'ar' ? 'مقالات ونظريات التصميم' : 'Design Articles'}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">
              {t.footer.contactHeader}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <a href="tel:01126951134" dir="ltr" className="hover:text-white inline-block font-mono">
                  011 26951134
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <a href="mailto:aurainteriordesignn@gmail.com" className="hover:text-white">
                  aurainteriordesignn@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>{t.contact.locationVal}</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">
              {lang === 'ar' ? 'مواعيد العمل' : 'Working Hours'}
            </h4>
            <p className="text-xs text-[#A39888] leading-relaxed">
              {lang === 'ar'
                ? 'السبت - الخميس: 10:00 صباحاً - 8:00 مساءً'
                : 'Sat - Thu: 10:00 AM - 8:00 PM'}
            </p>
            <p className="text-xs text-[#A39888] leading-relaxed mt-2">
              {lang === 'ar' ? 'الجمعة: مغلق (استقبال الاستشارات أونلاين 24/7)' : 'Friday: Closed (Online 24/7)'}
            </p>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 text-center text-xs text-[#A39888] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Aura Interior Design. All rights reserved.</p>
          <p className="italic">{lang === 'ar' ? 'كل فراغ له حكاية' : 'Every space has a story'}</p>
        </div>
      </div>
    </footer>
  );
};
