import React from 'react';
import Image from 'next/image';

interface AuraLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
  isArabic?: boolean;
}

export const AuraLogo: React.FC<AuraLogoProps> = ({
  className = '',
  size = 'md',
  showSlogan = false,
  isArabic = false,
}) => {
  const sizeMap = {
    xs: { width: 44, height: 44, container: 'w-11 h-11 p-0.5' },
    sm: { width: 64, height: 64, container: 'w-16 h-16 p-1' },
    md: { width: 110, height: 110, container: 'w-28 h-28 p-1.5' },
    lg: { width: 140, height: 140, container: 'w-36 h-36 p-2' },
  }[size];

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <div className={`relative rounded-full bg-white dark:bg-[#1C1A18] border-2 border-[#C5A059]/60 shadow-md overflow-hidden flex items-center justify-center ${sizeMap.container}`}>
        <Image
          src="/images/logo.png"
          alt="Aura Interior Design Logo"
          width={sizeMap.width}
          height={sizeMap.height}
          className="object-cover rounded-full transform hover:scale-105 transition-transform"
        />
      </div>

      {showSlogan && (
        <div className="mt-1.5 text-center border-t border-[#C5A059]/30 pt-1 px-3">
          <span className="text-xs text-[#E0D5C5] font-medium italic tracking-wide">
            {isArabic ? 'كل فراغ له حكاية' : 'Every space has a story'}
          </span>
        </div>
      )}
    </div>
  );
};
