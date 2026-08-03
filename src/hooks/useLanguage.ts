'use client';

import { useState, useEffect } from 'react';
import { translations, Language, TranslationContent } from '../data/translations';

interface UseLanguageReturn {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationContent;
  toggleLanguage: () => void;
  dir: 'rtl' | 'ltr';
}

export function useLanguage(defaultLang: Language = 'ar'): UseLanguageReturn {
  const [lang, setLangState] = useState<Language>(defaultLang);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('aura-lang') as Language | null;
      if (saved === 'ar' || saved === 'en') {
        setLangState(saved);
      }
    } catch {}
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('aura-lang', newLang);
    } catch {}
  };

  const toggleLanguage = () => setLang(lang === 'ar' ? 'en' : 'ar');

  return {
    lang,
    setLang,
    t: translations[lang],
    toggleLanguage,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
  };
}
