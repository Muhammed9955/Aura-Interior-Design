'use client';

import React from 'react';
import { TranslationContent, Language } from '../data/translations';
import { Star, Quote, CheckCircle2, MessageSquareQuote } from 'lucide-react';

interface TestimonialsProps {
  t: TranslationContent;
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const reviews = [
    {
      nameAr: 'م. أحمد الشاذلي',
      nameEn: 'Eng. Ahmed El Shazly',
      roleAr: 'مالك فيلا — التجمع الخامس',
      roleEn: 'Villa Owner — New Cairo',
      commentAr: 'تجربة استثنائية مع شركة أورا. الالتزام بالجدول الزمني وجودة التشطيبات تفوقت على توقعاتي بكثير. المطبخ والريسبشن تحفة فنية معمارية.',
      commentEn: 'Exceptional experience with Aura Interior Design. Timely delivery and finishing quality exceeded my expectations. The open kitchen and reception are true works of art.',
      rating: 5,
    },
    {
      nameAr: 'د. سارة عبد الرحمن',
      nameEn: 'Dr. Sarah Abdelrahman',
      roleAr: 'مالكة شقة — الشيخ زايد',
      roleEn: 'Apartment Owner — Sheikh Zayed',
      commentAr: 'مهندسو أورا استمعوا لكل تفصيلة وطلباتي الخاصة، وحولوا الشقة لملاذ دافئ ومريح جداً. مقايسة التكلفة كانت شفافة ودقيقة من اليوم الأول بدون أي مصاريف خفية.',
      commentEn: 'Aura design engineers listened carefully to every custom request, turning my apartment into a warm sanctuary. Budget estimations were clear and transparent from day one.',
      rating: 5,
    },
    {
      nameAr: 'أ. طارق محمود',
      nameEn: 'Tarek Mahmoud',
      roleAr: 'مدير تنفيذي شركة استشارات — العاصمة الإدارية',
      roleEn: 'Corporate Managing Director — New Capital',
      commentAr: 'تصميم وتشطيب المقر الإداري لشركتنا في العاصمة الإدارية تم بأعلى احترافية ودقة في التوقيت. انطباع زوارنا وعملائنا ممتاز للغاية.',
      commentEn: 'Design and fit-out of our executive offices in New Capital were completed with top professionalism and exact timing. Our visiting clients are thoroughly impressed.',
      rating: 5,
    },
    {
      nameAr: 'م. ياسمين حسني',
      nameEn: 'Eng. Yasmine Hosny',
      roleAr: 'مالكة بنتهاوس — القاهرة الجديدة',
      roleEn: 'Penthouse Owner — New Cairo',
      commentAr: 'التناغم بين الألوان ومواد البورسلين والرخام المستخدمة كان مبهراً. الإشراف المباشر على الموقع والمتابعة الدورية أعطتني راحة بال كاملة.',
      commentEn: 'The harmony between color schemes, porcelain, and marble choices was stunning. Direct site supervision and weekly progress reports gave me complete peace of mind.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#FAF8F5] dark:bg-[#121110] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/30 uppercase mb-3 mx-auto">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'آراء عملائنا' : 'Client Testimonials'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2621] dark:text-[#F5F2EB]">
            {lang === 'ar' ? 'ماذا يقول عملاؤنا عن أورا؟' : 'What Our Clients Say About Aura'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B6155] dark:text-[#C4BBB0] font-light max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'تقييمات حقيقية وشهادات تعكس ثقة عملائنا في جودة واحترافية تنفيذ مشاريعنا.'
              : 'Authentic reviews and testimonials reflecting our clients’ trust in our project execution quality.'}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1C1917] p-8 rounded-3xl border border-[#C5A059]/20 shadow-xl flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C5A059]/30" />
                </div>

                <p className="text-base sm:text-lg text-[#3D352E] dark:text-[#E0D5C5] leading-relaxed font-normal italic">
                  "{lang === 'ar' ? review.commentAr : review.commentEn}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#C5A059]/20 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold font-serif text-[#2C2621] dark:text-[#F5F2EB]">
                    {lang === 'ar' ? review.nameAr : review.nameEn}
                  </h3>
                  <span className="text-xs font-semibold text-[#8C7A5E] dark:text-[#B8A99A]">
                    {lang === 'ar' ? review.roleAr : review.roleEn}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#C5A059] text-xs font-semibold bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>{lang === 'ar' ? 'عميل موثّق' : 'Verified Client'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
