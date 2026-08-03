'use client';

import React, { useState } from 'react';
import { TranslationContent, Language } from '../data/translations';
import { Send, Layers, Sliders, Info, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CostCalculatorProps {
  t: TranslationContent;
  lang: Language;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ t, lang }) => {
  const [area, setArea] = useState<number>(180);
  const [unitType, setUnitType] = useState<'apartment' | 'villa' | 'office' | 'commercial'>('apartment');
  const [tier, setTier] = useState<'lux' | 'superLux' | 'ultraLux'>('superLux');
  const [inspectionDate, setInspectionDate] = useState<string>('');

  // Exact 2026 Egyptian market averages & ranges per sqm in EGP
  const tierRanges = {
    lux: { avg: 7000, min: 6500, max: 8000, label: '~7,000 EGP/m²' },
    superLux: { avg: 9500, min: 8500, max: 11000, label: '~9,500 EGP/m²' },
    ultraLux: { avg: 13500, min: 13000, max: 17000, label: '~13,500 EGP/m²' },
  };

  const unitMultipliers = {
    apartment: 1.0,
    villa: 1.15,
    office: 0.9,
    commercial: 1.05,
  };

  const selectedRange = tierRanges[tier];
  const multiplier = unitMultipliers[unitType];

  const avgTotal = Math.round(area * selectedRange.avg * multiplier);
  const minTotal = Math.round(area * selectedRange.min * multiplier);
  const maxTotal = Math.round(area * selectedRange.max * multiplier);

  const breakdown = {
    design: Math.round(avgTotal * 0.1),
    materials: Math.round(avgTotal * 0.6),
    supervision: Math.round(avgTotal * 0.3),
  };

  const handleConfettiAndWhatsapp = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const tierName =
      tier === 'lux' ? t.calculator.tierLux : tier === 'superLux' ? t.calculator.tierSuperLux : t.calculator.tierUltraLux;
    const unitName =
      unitType === 'apartment'
        ? t.calculator.apartment
        : unitType === 'villa'
        ? t.calculator.villa
        : unitType === 'office'
        ? t.calculator.office
        : t.calculator.commercial;

    const dateText = inspectionDate ? `%0A- Preferred Inspection Date: ${inspectionDate}` : '';

    const message = `Hello Aura Interior Design, I generated a finishing cost estimate on your website:%0A- Unit Type: ${encodeURIComponent(
      unitName
    )}%0A- Area: ${area} m²%0A- Finishing Tier: ${encodeURIComponent(
      tierName
    )}%0A- Estimated Average: ${avgTotal.toLocaleString()} EGP (Range: ${minTotal.toLocaleString()} - ${maxTotal.toLocaleString()} EGP)${dateText}%0A%0AAvailable for a site inspection?`;

    window.open(`https://wa.me/201097855765?text=${message}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-[#FAF8F5] dark:bg-[#121110] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase mb-3">
            {t.calculator.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1A15] dark:text-[#F5F2EB]">
            {t.calculator.title}
          </h2>
          <p className="mt-4 text-base text-[#5C5243] dark:text-[#E0D5C5] font-light">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1C1917] p-8 rounded-3xl border border-[#C5A059]/30 shadow-2xl space-y-8">
            {/* Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-[#1F1A15] dark:text-[#F5F2EB] flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#C5A059]" />
                  <span>{t.calculator.areaLabel}</span>
                </label>
                <span className="text-2xl font-serif font-bold text-[#C5A059] dark:text-[#F3E5AB]">m² {area}</span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="10"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-[#2D2823] rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
              />
              <div className="flex justify-between text-[11px] text-[#5C5243] dark:text-[#A39888] mt-1">
                <span>m² 50</span>
                <span>m² 500</span>
                <span>m² 1000</span>
              </div>
            </div>

            {/* Unit Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5243] dark:text-[#A39888] mb-3">
                {t.calculator.unitTypeLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'apartment', label: t.calculator.apartment },
                  { id: 'villa', label: t.calculator.villa },
                  { id: 'office', label: t.calculator.office },
                  { id: 'commercial', label: t.calculator.commercial },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUnitType(item.id as any)}
                    className={`p-3.5 rounded-2xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                      unitType === item.id
                        ? 'border-[#C5A059] bg-[#C5A059]/15 dark:bg-[#2A241E] text-[#C5A059] dark:text-[#F3E5AB] shadow-md'
                        : 'border-gray-200 dark:border-[#38322B] bg-gray-50 dark:bg-[#141210] text-[#5C5243] dark:text-[#E0D5C5] hover:border-[#C5A059]/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Finishing Tier Selection - Exact User Rates */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C5243] dark:text-[#A39888] mb-3">
                {t.calculator.tierLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'lux', label: t.calculator.tierLux, price: tierRanges.lux.label },
                  { id: 'superLux', label: t.calculator.tierSuperLux, price: tierRanges.superLux.label },
                  { id: 'ultraLux', label: t.calculator.tierUltraLux, price: tierRanges.ultraLux.label },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTier(item.id as any)}
                    className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                      tier === item.id
                        ? 'border-[#C5A059] bg-[#C5A059]/15 dark:bg-[#2A241E] text-[#1F1A15] dark:text-[#F5F2EB] shadow-md'
                        : 'border-gray-200 dark:border-[#38322B] bg-gray-50 dark:bg-[#141210] text-[#5C5243] dark:text-[#E0D5C5] hover:border-[#C5A059]/50'
                    }`}
                  >
                    <span className="block text-xs font-bold text-[#C5A059]">{item.label}</span>
                    <span className="block text-[11px] text-[#5C5243] dark:text-[#A39888] mt-1 font-mono">{item.price}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box - Displaying Average & Range */}
          <div className="lg:col-span-5 bg-white dark:bg-[#1C1917] text-[#1F1A15] dark:text-white p-8 rounded-3xl shadow-2xl border border-[#C5A059]/40 space-y-6 relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'التكلفة التقديرية المتوسطة:' : 'Estimated Average Cost:'}</span>
              </span>

              {/* Main Average Output */}
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C5A059] dark:text-[#F3E5AB]">
                {avgTotal.toLocaleString()}{' '}
                <span className="text-base font-normal text-[#5C5243] dark:text-[#E0D5C5]">{t.calculator.egp}</span>
              </div>

              {/* Expected Range Badge */}
              <div className="pt-1">
                <span className="inline-block px-3 py-1 rounded-lg bg-[#FAF8F5] dark:bg-[#2A241E] border border-[#C5A059]/30 text-xs text-[#5C5243] dark:text-[#E0D5C5] font-mono">
                  {lang === 'ar'
                    ? `النطاق المتوقع: من ${minTotal.toLocaleString()} إلى ${maxTotal.toLocaleString()} ج`
                    : `Expected Range: ${minTotal.toLocaleString()} – ${maxTotal.toLocaleString()} EGP`}
                </span>
              </div>
            </div>

            {/* Breakdown Allocation */}
            <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-[#38322B]">
              <h4 className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>{t.calculator.breakdownTitle}</span>
              </h4>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1 text-[#5C5243] dark:text-[#E0D5C5]">
                    <span>{t.calculator.designPlan} (10%)</span>
                    <span className="font-semibold text-[#1F1A15] dark:text-white">EGP {breakdown.design.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-[#2D2823] rounded-full overflow-hidden">
                    <div className="h-full bg-[#C5A059] w-[10%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 text-[#5C5243] dark:text-[#E0D5C5]">
                    <span>{t.calculator.materials} (60%)</span>
                    <span className="font-semibold text-[#1F1A15] dark:text-white">EGP {breakdown.materials.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-[#2D2823] rounded-full overflow-hidden">
                    <div className="h-full bg-[#E6D29A] w-[60%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 text-[#5C5243] dark:text-[#E0D5C5]">
                    <span>{t.calculator.supervision} (30%)</span>
                    <span className="font-semibold text-[#1F1A15] dark:text-white">EGP {breakdown.supervision.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-[#2D2823] rounded-full overflow-hidden">
                    <div className="h-full bg-[#8F6F2D] w-[30%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Apartment Inspection Date (Optional) */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{lang === 'ar' ? 'تاريخ معاينة الشقة / الموقع (اختياري)' : 'Apartment Inspection Date (Optional)'}</span>
              </label>
              <input
                type="date"
                value={inspectionDate}
                onChange={(e) => setInspectionDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#141210] border border-gray-300 dark:border-[#38322B] text-xs text-[#1F1A15] dark:text-[#F5F2EB] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            {/* WhatsApp Send Action */}
            <button
              onClick={handleConfettiAndWhatsapp}
              className="w-full py-4 rounded-2xl bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.calculator.sendWhatsappQuote}</span>
            </button>

            <p className="text-[10px] text-[#5C5243] dark:text-[#A39888] italic leading-normal text-center">
              {lang === 'ar'
                ? '* الأرقام تعبر عن المتوسط التقديري لعام 2026، وتحدد المقايسة التفصيلية بدقة بعد المعاينة الميدانية.'
                : '* Values represent 2026 estimated averages. Final itemized quote will be set after site inspection.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
