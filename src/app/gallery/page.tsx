'use client';

import React, { useState, useCallback } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import { translations, Language } from '../../data/translations';
import { ZoomIn, Images } from 'lucide-react';
import { Lightbox } from '../../components/ui/Lightbox';

// All 89 gallery images from public/gallery
const allGalleryImages = [
  '/gallery/514270360_122111082434929138_9127036913966804476_n.jpg',
  '/gallery/514346601_122112028772929138_7720938269203130304_n.jpg',
  '/gallery/514369244_122112030932929138_6985732392068475812_n.jpg',
  '/gallery/514401836_122111075852929138_2152098566454277601_n.jpg',
  '/gallery/515437047_122122762616929138_662414821297221659_n.jpg',
  '/gallery/518096329_122111080574929138_5122237966014139462_n.jpg',
  '/gallery/518096334_122113969970929138_5424624298896905892_n.jpg',
  '/gallery/518123495_122110891676929138_5361251671662672449_n.jpg',
  '/gallery/518173606_122112028172929138_4549293930245067622_n.jpg',
  '/gallery/518247563_122107667780929138_2982256841210503134_n.jpg',
  '/gallery/518358520_122114703704929138_6480718577699567734_n.jpg',
  '/gallery/518389284_122115249038929138_1957265225025243319_n.jpg',
  '/gallery/518419806_122115835166929138_1074918352508777153_n.jpg',
  '/gallery/519420498_122115045632929138_2283165472440173167_n.jpg',
  '/gallery/519501604_122118385562929138_1121310197699451521_n.jpg',
  '/gallery/521115000_122113493672929138_6133998740524832139_n.jpg',
  '/gallery/522716564_122115840890929138_4735117010945415858_n.jpg',
  '/gallery/522901190_122115840416929138_8267332111411201197_n.jpg',
  '/gallery/523408128_122115839084929138_7289588000355804614_n.jpg',
  '/gallery/524465371_122118389468929138_1466355167896315962_n.jpg',
  '/gallery/524912863_122118011234929138_8905659883987440665_n.jpg',
  '/gallery/525235559_122118388076929138_3759441679109956380_n.jpg',
  '/gallery/525333666_122118011786929138_9150920440084333694_n.jpg',
  '/gallery/525715490_122118390194929138_4381848739464139322_n.jpg',
  '/gallery/525800956_122118386198929138_2869837012725282836_n.jpg',
  '/gallery/525906641_122118388544929138_1199010675614266506_n.jpg',
  '/gallery/529023388_122120879132929138_4993596114252646395_n.jpg',
  '/gallery/529259285_122120893910929138_1956381620153581411_n.jpg',
  '/gallery/530232333_122121480608929138_3295708510636585383_n.jpg',
  '/gallery/531043156_122122382330929138_5990126911429761862_n.jpg',
  '/gallery/531190047_122121479990929138_2513605315831443641_n.jpg',
  '/gallery/532343823_122122763006929138_7110934664780732775_n.jpg',
  '/gallery/533488583_122123483144929138_6307457546703135633_n.jpg',
  '/gallery/535790108_122124922202929138_2151708855839818158_n.jpg',
  '/gallery/537570101_122125936658929138_8582750591603370289_n.jpg',
  '/gallery/538203689_122125925366929138_531014804884612369_n.jpg',
  '/gallery/538423322_122125938242929138_6268797336611063060_n.jpg',
  '/gallery/539608721_122127427094929138_2076236843978410626_n.jpg',
  '/gallery/540972140_122127424346929138_9184571379609666546_n.jpg',
  '/gallery/541135941_122127425906929138_4464993987668661699_n.jpg',
  '/gallery/545371671_122129394758929138_6296247917669077172_n.jpg',
  '/gallery/545889980_122129936942929138_514212609236192521_n.jpg',
  '/gallery/546159460_122130179432929138_7347924216706775787_n.jpg',
  '/gallery/548210525_122131112312929138_1759566639210229442_n.jpg',
  '/gallery/548268406_122130947330929138_1629326098442925023_n.jpg',
  '/gallery/549356475_122132621990929138_7129772447905037098_n.jpg',
  '/gallery/550205498_122132622950929138_6008215717513566622_n.jpg',
  '/gallery/554106503_122134132736929138_2069099748629675650_n.jpg',
  '/gallery/555903547_122134142300929138_1406607057578896283_n.jpg',
  '/gallery/689485744_122174160608929138_6624532318043070909_n.jpg',
  '/gallery/695350443_122174356070929138_4006485453139759515_n.jpg',
  '/gallery/696558292_17886716688517404_5603577527106189259_n.jpg',
  '/gallery/698284071_17886716679517404_599142200483304513_n.jpg',
  '/gallery/698347637_122174356094929138_4528107386313652643_n.jpg',
  '/gallery/698719955_122174356076929138_2533703961852748098_n.jpg',
  '/gallery/699310638_122174291978929138_7983808763155177247_n.jpg',
  '/gallery/699773139_122174356010929138_2857518824144869476_n.jpg',
  '/gallery/699891711_17886716661517404_4058800719796280801_n.jpg',
  '/gallery/700083713_17886716670517404_6073340560930636015_n.jpg',
  '/gallery/701488299_122175792914929138_4351067682176744008_n.jpg',
  '/gallery/701558911_122175792944929138_100254885155978585_n.jpg',
  '/gallery/701681573_122175792854929138_621633315051873561_n.jpg',
  '/gallery/701692380_122175792938929138_6144533414726953014_n.jpg',
  '/gallery/701746681_122175792950929138_2189757387677127650_n.jpg',
  '/gallery/702177009_17887330887517404_2778883628044764152_n.jpg',
  '/gallery/703844533_122176517924929138_7291323148372555807_n.jpg',
  '/gallery/705046378_122176770452929138_1928947273696886558_n.jpg',
  '/gallery/706712203_122177897336929138_1238438424359384115_n.jpg',
  '/gallery/707248057_122177897312929138_9006631961030514158_n.jpg',
  '/gallery/707427101_122177897306929138_5957819712833331185_n.jpg',
  '/gallery/707750217_122177897342929138_8547030127950269955_n.jpg',
  '/gallery/717341087_122179702820929138_7874403165826129823_n.jpg',
  '/gallery/717777410_122180559608929138_4088509510586782650_n.jpg',
  '/gallery/721041634_122181243464929138_216711952229909271_n.jpg',
  '/gallery/725589278_122182280042929138_914514533430800832_n.jpg',
  '/gallery/725634184_122182714328929138_3840691900930379600_n.jpg',
  '/gallery/728463117_122182844180929138_3417198818928742546_n.jpg',
  '/gallery/728512128_122183298416929138_4057537701299551182_n.jpg',
  '/gallery/729805327_122183298410929138_5163039335915314159_n.jpg',
  '/gallery/732770257_122183805914929138_315480367394519334_n.jpg',
  '/gallery/734455705_122184778784929138_2127506786332032367_n.jpg',
  '/gallery/736413162_122184778778929138_785461952547164398_n.jpg',
  '/gallery/737046362_122184778838929138_6370380662011531666_n.jpg',
  '/gallery/737502553_122184921302929138_3100713359370301861_n.jpg',
  '/gallery/737518585_122184778664929138_3922468581487354130_n.jpg',
  '/gallery/737577400_122184921440929138_4391174212770825124_n.jpg',
  '/gallery/738473109_122184921446929138_2196462470997750844_n.jpg',
  '/gallery/740012545_122184778790929138_4584265803694062170_n.jpg',
];

export default function GalleryPage() {
  const [lang, setLang] = useState<Language>('ar');
  const t = translations[lang];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % allGalleryImages.length);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + allGalleryImages.length) % allGalleryImages.length);
  }, [lightboxIndex]);

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#FAF8F5] dark:bg-[#121110] text-[#1F1A15] dark:text-[#F5F2EB] transition-colors duration-300">
      <Header t={t} lang={lang} onLanguageChange={setLang} />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase mb-4 mx-auto">
              <Images className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? `معرض الصور - ${allGalleryImages.length} صورة` : `Full Photo Gallery - ${allGalleryImages.length} Photos`}</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#1F1A15] dark:text-[#F5F2EB]">
              {lang === 'ar' ? 'أرشيف أورا — صور المشاريع الفعلية' : 'Aura Archive — Real Project Photos'}
            </h1>
            <p className="mt-4 text-base text-[#5C5243] dark:text-[#E0D5C5] font-light">
              {lang === 'ar'
                ? 'جميع صور مشاريعنا المنفذة فعلياً من أرشيف إنستغرام أورا للتصميم الداخلي.'
                : 'Every photo from our official Instagram archive — real work by Aura Interior Design.'}
            </p>
          </div>

          {/* Full Masonry Grid - all images */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {allGalleryImages.map((src, i) => (
              <div
                key={src}
                onClick={() => openLightbox(i)}
                className="relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group border border-[#C5A059]/20 hover:border-[#C5A059] transition-all shadow-lg mb-3"
              >
                <img
                  src={src}
                  alt={`Aura Interior Design - Photo ${i + 1}`}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-xl">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Lightbox
          images={allGalleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
          alt={(i) => `Aura Design - Image ${i + 1}`}
        />
      </main>

      <Footer t={t} lang={lang} />
      <WhatsAppButton lang={lang} />
    </div>
  );
}
