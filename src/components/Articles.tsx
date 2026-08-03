'use client';

import React, { useState } from 'react';

import { TranslationContent, Language } from '../data/translations';
import { BookOpen, Clock, X, ArrowLeft, ArrowRight, Sparkles, CheckCircle2, User, ArrowUpRight, Grid } from 'lucide-react';

interface ArticlesProps {
  t: TranslationContent;
  lang: Language;
}

export const Articles: React.FC<ArticlesProps> = ({ lang }) => {
  const [selectedArticle, setSelectedArticle] = useState<{
    id: string;
    titleAr: string;
    titleEn: string;
    categoryAr: string;
    categoryEn: string;
    readTime: string;
    image: string;
    snippetAr: string;
    snippetEn: string;
    contentAr: string[];
    contentEn: string[];
  } | null>(null);

  const [showAllArticlesPage, setShowAllArticlesPage] = useState<boolean>(false);

  const articles = [
    {
      id: 'art-1',
      titleAr: 'أسرار اختيار ألوان الدهانات والإضاءة لتبدو شقتك أكبر مساحة',
      titleEn: 'Interior Paint & Lighting Secrets to Maximize Small Spaces',
      categoryAr: 'نصائح التصميم',
      categoryEn: 'Design Tips',
      readTime: '4 min',
      image: '/images/hero.png',
      snippetAr: 'تعرف على التدرجات اللونية الفاتحة والإضاءات الخفية التي تمنح غرفتك اتساعاً ونقاءً بصرياً مضاعفاً.',
      snippetEn: 'Discover warm champagne shades and indirect LED cove lighting that visually double your room size.',
      contentAr: [
        'عند البدء في اختيار دهانات الشقة، تنصح أورا للتصميم الداخلي بالابتعاد عن الألوان الداكنة المباشرة في المساحات الصغيرة، واستبدالها بدرجات النيود، البيج العاجي (Ivory Cream)، والرمادي الدافيء (Warm Taupe).',
        'توزيع الإضاءة المباشرة وغير المباشرة يلعب دوراً محورياً؛ الإضاءة الخفية (Cove Lighting) أسفل الأسقف وبين تجليدات الخشب توهم العين بارتفاع السقف وتفتح المساحة بشكل طبيعي.',
        'الاستعانة بالمرايا والمساحات الزجاجية الشفافة في أبواب الدريسنج روم والمطابخ يعكس الإضاءة ويمنحك شعوراً بالفخامة الفندقية.',
      ],
      contentEn: [
        'When selecting interior wall paints, Aura Interior Design advises using warm nude, ivory cream, and soft taupe tones to open up cozy living spaces.',
        'Layered architectural lighting—combining dimmable magnetic track lights with hidden ceiling LED coves—adds depth and height visual effects.',
        'Integrating smoked glass wardrobe doors and bronze mirrors maximizes natural light reflections throughout your home.',
      ],
    },
    {
      id: 'art-2',
      titleAr: 'الفرق بين التشطيب اللوكس والسوبر لوكس والألترا ديلوكس في مصر',
      titleEn: 'Comparing Lux, Super Lux, and Ultra Deluxe Finishing in Egypt',
      categoryAr: 'دليل التشطيبات',
      categoryEn: 'Fit-Out Guide',
      readTime: '6 min',
      image: '/images/story.png',
      snippetAr: 'دليل شامل يوضح الفروق الجوهرية في أسعار وتأسيس الخامات والسباكة والكهرباء والرخام بكل مستوى.',
      snippetEn: 'Complete breakdown of plumbing, electrical conduits, marble flooring, and budget differences per tier.',
      contentAr: [
        'التشطيب اللوكس (Modern Lux): يعتمد على تأسيس سباكة وكهرباء معتمدة، مع أرضيات سيراميك فرز أول، ودهانات سايبس أو جوتن ناعمة، وأسقف مصيص أو كورنيش بسيط.',
        'التشطيب السوبر لوكس (Super Lux): يشمل أرضيات بورسلين، وأسقف جيبسوم بورد كاملة ببيت نور وإضاءات خفية، وأبواب خشبية جاهزة، وإكسسوارات كهربائية فاخرة.',
        'التشطيب الألترا ديلوكس (Ultra Deluxe): يمثل قمة الفخامة، حيث يتم تركيب رخام مستورد (كالكرارا أو كالاكاتا)، وتكسيات حوائط بخشب الأركتك وبديل الرخام، وتكييفات كونسيلد مخفية، وأنظمة سمارت هوم متكاملة.',
      ],
      contentEn: [
        'Modern Lux Fitout: Focuses on premium piping, Grade-1 ceramic flooring, smooth Jotun wall paint, and standard gypsum molding.',
        'Super Lux Fitout: Features full porcelain flooring, suspended gypsum board ceilings with cove lighting, and solid timber doors.',
        'Ultra Deluxe Fitout: The pinnacle of luxury with imported Italian marble, fluted wood wall panels, concealed AC ducting, and smart home automation.',
      ],
    },
    {
      id: 'art-3',
      titleAr: '5 خطوات لتصميم مطبخ مودرن ذكي بخامات ألمانية وإيطالية',
      titleEn: '5 Essential Steps for a Smart Modern Kitchen Fit-Out',
      categoryAr: 'تصميم المطابخ',
      categoryEn: 'Kitchen Design',
      readTime: '5 min',
      image: '/images/kitchen.png',
      snippetAr: 'كيف تختار وحدات الأكريليك المقاومة للمياه والإكسسوارات الهيدروليكية لراحة تدوم سنوات.',
      snippetEn: 'How to choose waterproof acrylic panels and Blum soft-close hydraulic hardware for lifetime durability.',
      contentAr: [
        'المطبخ هو قلب البيت، وتصميمه يتطلب مراعاة مثلث الحركة الذكي (المغسلة - البوتاجاز - الثلاجة) لسهولة الاستخدام.',
        'استخدام خامات الأكريليك والبوليلات المقاومة للمياه والحرارة يضمن عدم تغير لون المطبخ أو تلفه مع الوقت.',
        'الاستعانة رخام الكوارتز أو الجرانيت الطبيعي في السطح الرئيسي (Countertop) يمنح المطبخ مقاومة عالية للخدش والزيوت.',
        'إضافة وحدات إضاءة غائرة أسفل الخزانات العلوية يضيء مساحات العمل بشكل ممتاز بدون ظلال.',
      ],
      contentEn: [
        'The kitchen is the heart of the home; proper layout respects the ergonomic work triangle between sink, stove, and refrigerator.',
        'Using moisture-resistant acrylic cabinets guarantees long-lasting shine without color fading or heat warping.',
        'Quartz or natural granite countertops provide scratch-proof, heat-resistant surfaces that withstand daily culinary activity.',
        'Under-cabinet LED strip lights illuminate prep surfaces without harsh overhead shadows.',
      ],
    },
    {
      id: 'art-4',
      titleAr: 'كيف توفر 20% من ميزانية تشطيب شقتك بدون تقليل الجودة؟',
      titleEn: 'How to Save 20% on Finishing Costs Without Cutting Quality',
      categoryAr: 'إدارة الميزانية',
      categoryEn: 'Budgeting Advice',
      readTime: '5 min',
      image: '/images/cover.jpg',
      snippetAr: 'نصائح مهندس التشطيب الذكي للحد من الهدر في الخامات ومواد التأسيس وتحديد المقايسة من البداية.',
      snippetEn: 'Expert engineering advice on material bulk buying, site supervision, and preventing costly redos.',
      contentAr: [
        'أول خطوة لتوفير المال هي إعداد المخططات والهندسية الـ 3D قبل بدء التكسير والتأسيس لتجنب التعديلات المكلفة لاحقاً.',
        'الشراء المباشر لمواد التأسيس (مثل أسلاك السويدي ومواسير البيبتيم) من الموزعين المعتمدين بخصم الجملة.',
        'الدمج الذكي بين الرخام في الريسبشن والسيراميك عالي الجودة في الغرف الداخلية يوفر مبالغ ضخمة مع الحفاظ على الفخامة أمام الضيوف.',
        'التعاقد مع شركة تشطيب متكاملة تضمن لك تسليم المفتاح بدون تكاليف خفية أو غرامات تأخير.',
      ],
      contentEn: [
        'The primary key to saving budget is finalizing 3D blueprints before breaking ground to avoid expensive mid-construction changes.',
        'Bulk purchasing certified electrical cabling and plumbing pipes directly through wholesale distributors.',
        'Smart zoning: reserve marble flooring for main reception areas while utilizing high-grade wood-look porcelain in bedrooms.',
        'Partnering with a turnkey fit-out contractor protects you from hidden fees and project delays.',
      ],
    },
  ];

  return (
    <section id="articles" className="py-24 bg-[#FAF8F5] dark:bg-[#181614] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase mb-3 flex items-center justify-center gap-1.5 w-fit mx-auto">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'مقالات ونصائح أورا للتصميم' : 'Aura Design Articles & Guides'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1A15] dark:text-[#F5F2EB]">
            {lang === 'ar' ? 'دليلك الشامل لتشطيب وتصميم منزلك الفاخر' : 'Your Guide to Luxury Interior Design'}
          </h2>
          <p className="mt-4 text-base text-[#5C5243] dark:text-[#E0D5C5] font-light">
            {lang === 'ar'
              ? 'مقالات ونصائح هندسية يقدمها خبراء أورا لمساعدتك في التخطيط واختيار الخامات والميزانية.'
              : 'Expert architectural insights to guide your budgeting, material selection, and home styling.'}
          </p>
        </div>

        {/* 4 Articles in 1 Row Grid on Homepage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white dark:bg-[#1C1917] rounded-3xl overflow-hidden border border-[#C5A059]/30 hover:border-[#C5A059] shadow-xl group cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={art.image}
                    alt={lang === 'ar' ? art.titleAr : art.titleEn}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                     <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#C5A059] text-white uppercase">
                      {lang === 'ar' ? art.categoryAr : art.categoryEn}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-serif text-[#1F1A15] dark:text-[#F5F2EB] group-hover:text-[#C5A059] dark:group-hover:text-[#F3E5AB] transition-colors leading-snug line-clamp-2">
                    {lang === 'ar' ? art.titleAr : art.titleEn}
                  </h3>
                  <p className="text-sm text-[#5C5243] dark:text-[#E0D5C5] leading-relaxed font-light line-clamp-3">
                    {lang === 'ar' ? art.snippetAr : art.snippetEn}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-gray-200 dark:border-[#38322B] mt-3 flex items-center justify-between">
                <span className="text-xs text-[#5C5243] dark:text-[#A39888] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C5A059]" />
                  <span>{art.readTime}</span>
                </span>

                <span className="inline-flex items-center gap-1 text-sm font-bold text-[#C5A059] dark:text-[#F3E5AB] group-hover:underline">
                  <span>{lang === 'ar' ? 'اقرأ المقال' : 'Read Article'}</span>
                  {lang === 'ar' ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Button to Open Dedicated Full-Screen Articles Page */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllArticlesPage(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#C5A059] bg-[#1C1917] text-[#F3E5AB] font-bold text-xs uppercase tracking-wider hover:bg-[#C5A059] hover:text-white transition-all shadow-lg cursor-pointer"
          >
            <Grid className="w-4 h-4" />
            <span>{lang === 'ar' ? 'فتح صفحة كافة المقالات والنصائح' : 'Open Dedicated Articles Page'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dedicated Full Screen Articles Page Modal */}
        {showAllArticlesPage && (
          <div className="fixed inset-0 z-50 bg-[#121110] overflow-y-auto animate-fadeIn">
            {/* Top Sticky Header Bar */}
            <div className="sticky top-0 z-40 bg-[#1C1917]/95 backdrop-blur-md border-b border-[#C5A059]/30 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-serif font-bold text-[#F5F2EB]">
                  {lang === 'ar' ? 'مكتبة مقالات ودليل تشطيب أورا' : 'Aura Complete Articles & Guides Library'}
                </h2>
                <p className="text-xs text-[#E0D5C5]">
                  {lang === 'ar' ? 'صفحة المقالات الكاملة - إرشادات هندسية ونصائح ديكور متخصصة' : 'Exploring complete interior design & fitout articles'}
                </p>
              </div>

              <button
                onClick={() => setShowAllArticlesPage(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A059] text-white text-xs font-bold hover:bg-[#b08d48] transition-all cursor-pointer shadow-lg"
              >
                <X className="w-4 h-4" />
                <span>{lang === 'ar' ? 'الرجوع للرئيسية' : 'Back to Home'}</span>
              </button>
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {articles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => setSelectedArticle(art)}
                    className="bg-[#1C1917] rounded-3xl overflow-hidden border border-[#C5A059]/30 hover:border-[#C5A059] shadow-xl group cursor-pointer transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={art.image}
                        alt={lang === 'ar' ? art.titleAr : art.titleEn}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent opacity-80" />

                      <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C5A059] text-white">
                          {lang === 'ar' ? art.categoryAr : art.categoryEn}
                        </span>
                        <h3 className="text-xl font-serif text-[#F5F2EB] group-hover:text-[#F3E5AB]">
                          {lang === 'ar' ? art.titleAr : art.titleEn}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#1C1917] rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/40 max-h-[90vh] overflow-y-auto"
            >
              {/* Top Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article reader"
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#C5A059] transition-colors cursor-pointer border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Article Cover Image */}
              <div className="relative aspect-[16/8] w-full bg-black">
                <img
                  src={selectedArticle.image}
                  alt={lang === 'ar' ? selectedArticle.titleAr : selectedArticle.titleEn}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C5A059] text-white">
                    {lang === 'ar' ? selectedArticle.categoryAr : selectedArticle.categoryEn}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F2EB] drop-shadow-md">
                    {lang === 'ar' ? selectedArticle.titleAr : selectedArticle.titleEn}
                  </h3>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 space-y-6 text-[#E0D5C5]">
                <div className="space-y-4 leading-relaxed text-sm">
                  {(lang === 'ar' ? selectedArticle.contentAr : selectedArticle.contentEn).map((paragraph, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      <p>{paragraph}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#38322B] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#A39888]">
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    <span>{lang === 'ar' ? 'تواصل مع مهندس أورا للاستشارة المباشرة' : 'Consult with Aura Senior Engineers'}</span>
                  </div>

                  <a
                    href="https://wa.me/201097855765?text=Hello%20Aura%20Interior%20Design%2C%20I%20read%20your%20design%20article%20and%20would%20like%20a%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#C5A059] text-white font-bold text-xs hover:bg-[#b08d48] shadow-lg transition-all"
                  >
                    {lang === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
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
