'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TranslationContent, Language } from '../data/translations';
import { projectsData, ProjectItem } from '../data/projectsData';
import { Sparkles, X, MapPin, Maximize2, ArrowRight, ArrowLeft, Grid, ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  t: TranslationContent;
  lang: Language;
}

export const Portfolio: React.FC<PortfolioProps> = ({ t, lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: t.portfolio.all },
    { id: 'villas', label: t.portfolio.villas },
    { id: 'apartments', label: t.portfolio.apartments },
    { id: 'kitchens', label: t.portfolio.kitchens },
    { id: 'commercial', label: t.portfolio.commercial },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const homePreviewProjects = filteredProjects.slice(0, 4);

  const handleMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F5] dark:bg-[#121110] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase mb-3">
            {t.portfolio.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1A15] dark:text-[#F5F2EB]">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-base text-[#5C5243] dark:text-[#E0D5C5] font-light">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C5A059] text-white shadow-md'
                  : 'bg-white dark:bg-[#1C1917] text-[#1F1A15] dark:text-[#E0D5C5] border border-[#C5A059]/30 hover:border-[#C5A059]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {homePreviewProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white dark:bg-[#1C1917] rounded-3xl overflow-hidden border border-[#C5A059]/30 hover:border-[#C5A059] shadow-xl group cursor-pointer transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={lang === 'ar' ? project.titleAr : project.titleEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#C5A059] text-white uppercase tracking-wider shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Title & Location Under Title */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <h3 className="text-lg sm:text-xl font-serif text-white group-hover:text-[#E5CE93] transition-colors leading-snug">
                    {lang === 'ar' ? project.titleAr : project.titleEn}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#E0D5C5] font-light">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                    <span>{lang === 'ar' ? project.locationAr : project.locationEn}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Dedicated Projects Page Button */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#C5A059] bg-[#1C1917] text-[#F3E5AB] font-bold text-xs uppercase tracking-wider hover:bg-[#C5A059] hover:text-white transition-all shadow-lg cursor-pointer"
          >
            <Grid className="w-4 h-4" />
            <span>{lang === 'ar' ? 'عرض كافة المشاريع في صفحة جديدة' : 'Open Projects Page'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Lightbox Modal with Dynamic Dynamic Project Before/After Images */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-4xl bg-[#1C1917] rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/40 max-h-[92vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black hover:scale-110 transition-all cursor-pointer shadow-2xl border border-white/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dynamic Before/After Comparison Slider */}
              <div
                ref={sliderContainerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative aspect-[16/10] w-full select-none overflow-hidden bg-black cursor-ew-resize"
              >
                {/* Dynamic Before Image */}
                <div className="absolute inset-0">
                  <Image
                    src={selectedProject.beforeImage}
                    alt={`${selectedProject.titleEn} - Before`}
                    fill
                    className="object-cover object-center pointer-events-none"
                  />
                </div>

                {/* Dynamic After Image */}
                <div
                  className="absolute top-0 bottom-0 left-0 overflow-hidden z-10 border-r-2 border-[#C5A059]"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div
                    className="relative h-full pointer-events-none"
                    style={{
                      width: sliderContainerRef.current
                        ? `${sliderContainerRef.current.clientWidth}px`
                        : '1000px',
                    }}
                  >
                    <Image
                      src={selectedProject.afterImage}
                      alt={`${selectedProject.titleEn} - After`}
                      fill
                      className="object-cover object-center pointer-events-none"
                    />
                  </div>
                </div>

                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-[#C5A059] z-20 pointer-events-none shadow-2xl"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-2xl border-2 border-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 z-20 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white border border-white/10 pointer-events-none">
                  {lang === 'ar' ? 'التصميم النهائي (بعد)' : 'Final Design (After)'}
                </div>
                <div className="absolute bottom-4 right-4 z-20 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white border border-white/10 pointer-events-none">
                  {lang === 'ar' ? 'المساحة الأصلية (قبل)' : 'Original Space (Before)'}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-[#F5F2EB]">
                    {lang === 'ar' ? selectedProject.titleAr : selectedProject.titleEn}
                  </h3>
                  <p className="mt-2 text-sm text-[#E0D5C5]">
                    {lang === 'ar' ? selectedProject.descriptionAr : selectedProject.descriptionEn}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-[#141210] text-center border border-[#C5A059]/20">
                  <div>
                    <span className="block text-xs text-[#A39888]">{t.portfolio.area}</span>
                    <span className="text-sm font-semibold text-[#F3E5AB]">
                      {selectedProject.area}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#A39888]">{t.portfolio.location}</span>
                    <span className="text-sm font-semibold text-[#F5F2EB]">
                      {lang === 'ar' ? selectedProject.locationAr : selectedProject.locationEn}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#A39888]">{t.portfolio.year}</span>
                    <span className="text-sm font-semibold text-[#F5F2EB]">
                      {selectedProject.year}
                    </span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <a
                    href={`https://wa.me/201097855765?text=Hello%20Aura%20Design%2C%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(
                      selectedProject.titleEn
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] text-white text-xs font-semibold hover:opacity-90 shadow-md"
                  >
                    <span>{t.nav.bookConsultation}</span>
                    {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
