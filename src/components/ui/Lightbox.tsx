'use client';

import React, { useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  alt?: (index: number) => string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  alt,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [currentIndex, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Counter */}
        <div className="mb-3 px-2">
          <span className="text-white/50 text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/30">
          <img
            src={images[currentIndex]}
            alt={alt ? alt(currentIndex) : `Image ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-contain bg-black"
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black hover:scale-110 transition-all cursor-pointer shadow-2xl border border-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prev / Next — absolute so RTL doesn't flip them */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <button
            onClick={onPrev}
            style={{ position: 'absolute', left: '8px' }}
            className="pointer-events-auto p-3 rounded-full bg-black/60 text-white hover:bg-[#C5A059] transition-colors shadow-xl border border-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            style={{ position: 'absolute', right: '8px' }}
            className="pointer-events-auto p-3 rounded-full bg-black/60 text-white hover:bg-[#C5A059] transition-colors shadow-xl border border-white/10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
