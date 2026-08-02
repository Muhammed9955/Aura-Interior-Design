'use client';

import React from 'react';
import { TranslationContent } from '../data/translations';
import { Home, Building, Key, Armchair, CheckCircle } from 'lucide-react';

interface ServicesProps {
  t: TranslationContent;
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'residential':
        return <Home className="w-7 h-7" />;
      case 'commercial':
        return <Building className="w-7 h-7" />;
      case 'turnkey':
        return <Key className="w-7 h-7" />;
      case 'furnishing':
        return <Armchair className="w-7 h-7" />;
      default:
        return <Home className="w-7 h-7" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#121110] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase mb-3">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F5F2EB]">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base text-[#E0D5C5] font-light">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid with Fixed High Contrast Hover State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="bg-[#1C1917] p-8 rounded-3xl border border-[#C5A059]/30 hover:border-[#C5A059] shadow-xl hover:shadow-2xl hover:shadow-[#C5A059]/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300">
                  {getIcon(service.id)}
                </div>

                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-[#E0D5C5] leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2.5 border-t border-[#38322B] pt-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                      <span className="text-sm font-semibold text-[#F5F2EB]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#F3E5AB] hover:text-white transition-colors"
                >
                  <span>{t.nav.bookConsultation}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
