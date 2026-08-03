'use client';

import React from 'react';

interface SectionHeaderProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  center = true,
  className = '',
}) => {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 ${className}`}>
      {badge && (
        <div className="mb-3 flex justify-center">
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1A15] dark:text-[#F5F2EB]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-[#5C5243] dark:text-[#E0D5C5] font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface SectionBadgeProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ icon, children }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase">
    {icon}
    <span>{children}</span>
  </span>
);
