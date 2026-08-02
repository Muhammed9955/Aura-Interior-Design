'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TranslationContent, Language } from '../data/translations';
import { AuraLogo } from './AuraLogo';
import { Phone, Calendar, Globe, Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  t: TranslationContent;
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ t, lang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkMode =
      document.documentElement.classList.contains('dark') ||
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    onLanguageChange(lang === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { href: '/', label: lang === 'ar' ? 'الرئيسية' : 'Home' },
    { href: '/projects', label: t.nav.portfolio },
    { href: '/gallery', label: lang === 'ar' ? 'المعرض' : 'Gallery' },
    { href: '/videos', label: lang === 'ar' ? 'فيديوهاتنا' : 'Our Videos' },
    { href: '/articles', label: lang === 'ar' ? 'المقالات' : 'Articles' },
    { href: '/#services', label: t.nav.services },
    { href: '/#calculator', label: t.nav.calculator },
    { href: '/#contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#121110]/90 dark:bg-[#121110]/95 bg-white/90 backdrop-blur-md border-b border-[#C5A059]/30 transition-colors duration-300 h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand Emblem Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <AuraLogo size="xs" showSlogan={false} isArabic={lang === 'ar'} />
          <span className="font-serif font-bold text-sm tracking-wider text-[#1F1A15] dark:text-[#F5F2EB] group-hover:text-[#C5A059] transition-colors">
            AURA
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[#5C5243] dark:text-[#E0D5C5] hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Actions CTA & Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Phone Link */}
          <a
            href="tel:01126951134"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#1F1A15] dark:text-[#F5F2EB] hover:text-[#C5A059] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span dir="ltr" className="inline-block font-mono tracking-wide">011 26951134</span>
          </a>

          {/* Consultation CTA — Opens WhatsApp directly */}
          <a
            href={`https://wa.me/201097855765?text=${encodeURIComponent(
              lang === 'ar'
                ? 'مرحباً أورا للتصميم الداخلي والديكور 👋🏼 أرغب في حجز استشارة للتصميم والتشطيب.'
                : 'Hello Aura Interior Design 👋🏼 I would like to book a consultation for interior fit-out.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#C5A059] text-white hover:bg-[#b08d48] transition-all shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.nav.bookConsultation}</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#C5A059]/40 text-xs font-semibold text-[#1F1A15] dark:text-[#F5F2EB] hover:bg-[#C5A059]/20 transition-all cursor-pointer"
            title="Switch Language / تغيير اللغة"
          >
            <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="uppercase">{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>
        </div>

        {/* Mobile Controls & Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Lang Toggle */}
          <button
            onClick={toggleLanguage}
            className="p-1.5 text-[#C5A059] text-xs font-bold"
          >
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1F1A15] dark:text-[#F5F2EB] hover:text-[#C5A059] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#121110] border-b border-[#C5A059]/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl transition-colors">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#1F1A15] dark:text-[#F5F2EB] hover:text-[#C5A059] py-2 border-b border-black/5 dark:border-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:01126951134"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#1F1A15] dark:text-[#F5F2EB] bg-gray-100 dark:bg-[#1C1917] rounded-xl border border-[#C5A059]/30"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span dir="ltr" className="inline-block font-mono tracking-wide">011 26951134</span>
            </a>

            <a
              href={`https://wa.me/201097855765?text=${encodeURIComponent(
                lang === 'ar'
                  ? 'مرحباً أورا للتصميم الداخلي والديكور 👋🏼 أرغب في حجز استشارة للتصميم والتشطيب.'
                  : 'Hello Aura Interior Design 👋🏼 I would like to book a consultation for interior fit-out.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 text-xs font-bold text-white bg-[#C5A059] rounded-xl shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookConsultation}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
