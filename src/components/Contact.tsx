'use client';

import React, { useState } from 'react';
import { TranslationContent, Language } from '../data/translations';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, CheckCircle, Calendar, Clock } from 'lucide-react';

interface ContactProps {
  t: TranslationContent;
  lang: Language;
}

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.883 2.897 2.896 2.896 0 0 1-2.897-2.897 2.896 2.896 0 0 1 2.897-2.897c.362 0 .705.074 1.022.201V9.52a6.326 6.326 0 0 0-1.022-.086C6.07 9.434 3.5 12.004 3.5 15.176c0 3.171 2.57 5.741 5.742 5.741 3.171 0 5.741-2.57 5.741-5.741V8.65a8.214 8.214 0 0 0 4.606 1.411V6.616a4.814 4.814 0 0 1-.001.07z" />
  </svg>
);

export const Contact: React.FC<ContactProps> = ({ t, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inspectionDate: '',
    inspectionTime: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const formattedTime = formData.inspectionTime ? ` (${formData.inspectionTime})` : '';
    const dateFormatted = formData.inspectionDate
      ? `${formData.inspectionDate}${formattedTime}`
      : 'سيتم الاتفاق عليه';
    const dateFormattedEn = formData.inspectionDate
      ? `${formData.inspectionDate}${formattedTime}`
      : 'To be scheduled';

    const text =
      lang === 'ar'
        ? `مرحباً أورا للتصميم الداخلي والديكور 👋🏼\nأود حجز استشارة ومعاينة للشقة/العقار:\n• الاسم: ${formData.name}\n• رقم الهاتف: ${formData.phone}\n• البريد الإلكتروني: ${formData.email || 'غير محدد'}\n• موعد وقتا المعاينة المقترح: ${dateFormatted}\n• تفاصيل العقار والملاحظات: ${formData.message}`
        : `Hello Aura Interior Design 👋🏼\nI would like to book an apartment inspection & consultation:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Email: ${formData.email || 'N/A'}\n• Preferred Inspection Date & Time: ${dateFormattedEn}\n• Project Details: ${formData.message}`;

    const whatsappUrl = `https://wa.me/201097855765?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] dark:bg-[#141210] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 uppercase mb-3">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1A15] dark:text-[#F5F2EB]">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-[#1C1917] p-8 rounded-3xl border border-[#C5A059]/30 shadow-xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#C5A059]/20 text-[#C5A059]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-[#5C5243] dark:text-[#A39888] font-semibold">{t.contact.phoneLabel}</span>
                  <a href="tel:01126951134" dir="ltr" className="text-base font-bold text-[#1F1A15] dark:text-[#F5F2EB] hover:text-[#C5A059] inline-block font-mono">
                    011 26951134
                  </a>
                  <br />
                  <a href="https://wa.me/201097855765" target="_blank" rel="noreferrer" dir="ltr" className="text-xs text-[#C5A059] font-medium inline-block mt-0.5">
                    WhatsApp: +20 10 97855765
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#C5A059]/20 text-[#C5A059]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-[#5C5243] dark:text-[#A39888] font-semibold">{t.contact.emailLabel}</span>
                  <a href="mailto:aurainteriordesignn@gmail.com" className="text-sm font-semibold text-[#1F1A15] dark:text-[#F5F2EB] hover:text-[#C5A059]">
                    aurainteriordesignn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#C5A059]/20 text-[#C5A059]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-[#5C5243] dark:text-[#A39888] font-semibold">{lang === 'ar' ? 'الموقع والعنوان' : 'Location'}</span>
                  <span className="text-sm text-[#1F1A15] dark:text-[#F5F2EB]">{lang === 'ar' ? 'مصر — القاهرة الجديدة، التجمع الخامس' : 'Egypt — New Cairo, 5th Settlement'}</span>
                </div>
              </div>

              {/* Social Channels with Authentic TikTok Icon */}
              <div className="pt-4 border-t border-gray-200 dark:border-[#38322B]">
                <span className="block text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-3">
                  {lang === 'ar' ? 'تابعنا على مواقع التواصل الاجتماعي' : 'Follow Our Channels'}
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/Aurainterordesign"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-[#141210] text-[#1F1A15] dark:text-[#F5F2EB] hover:bg-[#C5A059] hover:text-white transition-colors border border-gray-200 dark:border-[#38322B]"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/aurainteriordesignn"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-[#141210] text-[#1F1A15] dark:text-[#F5F2EB] hover:bg-[#C5A059] hover:text-white transition-colors border border-gray-200 dark:border-[#38322B]"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@aura.interior.design"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-[#141210] text-[#1F1A15] dark:text-[#F5F2EB] hover:bg-[#C5A059] hover:text-white transition-colors border border-gray-200 dark:border-[#38322B]"
                    title="TikTok Aura Interior Design"
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#C5A059]/30 h-64 relative">
              <iframe
                title="Aura Interior Design Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185445209!2d31.428581781297746!3d30.007413000673322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c407ff250d7%3A0x63eb120352ef1e06!2sNew%20Cairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1C1917] p-8 rounded-3xl border border-[#C5A059]/30 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#1F1A15] dark:text-[#F5F2EB]">
                  {lang === 'ar' ? 'تم إرسال طلبك بنجاح' : 'Request Sent Successfully'}
                </h3>
                <p className="text-base text-[#5C5243] dark:text-[#E0D5C5] font-light max-w-md mx-auto">
                  {lang === 'ar'
                    ? 'تم توجيه تفاصيل استشارتك إلى الواتساب الرسمي لأورا. سيتواصل معك أحد مهندسينا فوراً.'
                    : 'Your consultation details have been sent to our official WhatsApp. Senior team will connect with you.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full border border-[#C5A059] text-[#C5A059] text-xs font-bold hover:bg-[#C5A059] hover:text-white transition-all mt-2 cursor-pointer"
                >
                  {lang === 'ar' ? 'إرسال طلب آخر' : 'Send Another Request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                    {lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={lang === 'ar' ? 'أدخل اسمك بالكامل' : 'Your full name'}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#141210] border border-gray-300 dark:border-[#38322B] text-[#1F1A15] dark:text-[#F5F2EB] placeholder-gray-400 dark:placeholder-[#6B6052] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="01xxxxxxxxx"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#141210] border border-gray-300 dark:border-[#38322B] text-[#1F1A15] dark:text-[#F5F2EB] placeholder-gray-400 dark:placeholder-[#6B6052] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#141210] border border-gray-300 dark:border-[#38322B] text-[#1F1A15] dark:text-[#F5F2EB] placeholder-gray-400 dark:placeholder-[#6B6052] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{lang === 'ar' ? 'تاريخ المعاينة' : 'Inspection Date'}</span>
                    </label>
                    <input
                      type="date"
                      name="inspectionDate"
                      value={formData.inspectionDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#141210] border border-gray-300 dark:border-[#38322B] text-[#1F1A15] dark:text-[#F5F2EB] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{lang === 'ar' ? 'الوقت المفضّل' : 'Preferred Time'}</span>
                    </label>
                    <select
                      name="inspectionTime"
                      value={formData.inspectionTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#141210] border border-gray-300 dark:border-[#38322B] text-[#1F1A15] dark:text-[#F5F2EB] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="">{lang === 'ar' ? 'اختر التوقيت (اختياري)' : 'Select Slot (Optional)'}</option>
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM (صباحاً)</option>
                      <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM (ظهراً)</option>
                      <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM (عصراً)</option>
                      <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM (مساءً)</option>
                      <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM (ليلاً)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2">
                    {lang === 'ar' ? 'تفاصيل الاستفسار والعقار' : 'Project Details & Inquiry'}
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={lang === 'ar' ? 'اكتب التفاصيل والمساحة ونوع العقار...' : 'Tell us about your space area & location...'}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#141210] border border-gray-300 dark:border-[#38322B] text-[#1F1A15] dark:text-[#F5F2EB] placeholder-gray-400 dark:placeholder-[#6B6052] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#C5A059] hover:bg-[#b08d48] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'إرسال طلب الاستشارة عبر الواتساب' : 'Send Consultation Request via WhatsApp'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
