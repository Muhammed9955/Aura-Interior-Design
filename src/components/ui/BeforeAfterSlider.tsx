'use client';

import React, { useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Language } from '../../data/translations';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  altBefore?: string;
  altAfter?: string;
  lang?: Language;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc,
  afterSrc,
  altBefore = 'Before',
  altAfter = 'After',
  lang = 'en',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let percentage = ((clientX - rect.left) / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={(e) => { if (isDragging || e.buttons === 1) handleMove(e.clientX); }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      className="relative aspect-[16/10] w-full select-none overflow-hidden bg-black cursor-ew-resize"
    >
      {/* Before (Background) */}
      <div className="absolute inset-0">
        <img
          src={beforeSrc}
          alt={altBefore}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
      </div>

      {/* After (Clipped Overlay) */}
      <div
        className="absolute top-0 bottom-0 left-0 overflow-hidden z-10 border-r-2 border-[#C5A059]"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="relative h-full pointer-events-none"
          style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '1000px' }}
        >
          <img
            src={afterSrc}
            alt={altAfter}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
        </div>
      </div>

      {/* Divider Line + Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#C5A059] z-20 pointer-events-none shadow-2xl"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-2xl border-2 border-white">
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-20 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white border border-white/10 pointer-events-none">
        {lang === 'ar' ? 'التصميم النهائي (بعد)' : 'Final Design (After)'}
      </div>
      <div className="absolute bottom-4 right-4 z-20 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white border border-white/10 pointer-events-none">
        {lang === 'ar' ? 'المساحة الأصلية (قبل)' : 'Original Space (Before)'}
      </div>
    </div>
  );
};
