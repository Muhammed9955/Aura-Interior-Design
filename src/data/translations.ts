export type Language = 'ar' | 'en';

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    calculator: string;
    visualizer: string;
    contact: string;
    bookConsultation: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    slogan: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
  };
  about: {
    badge: string;
    title: string;
    description1: string;
    description2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    quote: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      features: string[];
    }[];
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    villas: string;
    apartments: string;
    kitchens: string;
    commercial: string;
    beforeAfter: string;
    viewDetails: string;
    area: string;
    location: string;
    year: string;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    areaLabel: string;
    unitTypeLabel: string;
    apartment: string;
    villa: string;
    office: string;
    commercial: string;
    tierLabel: string;
    tierLux: string;
    tierSuperLux: string;
    tierUltraLux: string;
    estimatedCost: string;
    egp: string;
    breakdownTitle: string;
    designPlan: string;
    materials: string;
    supervision: string;
    sendWhatsappQuote: string;
    note: string;
  };
  visualizer: {
    badge: string;
    title: string;
    subtitle: string;
    selectStyle: string;
    selectPalette: string;
    japandi: string;
    modernLuxury: string;
    warmMinimalist: string;
    classicModern: string;
    paletteWarm: string;
    paletteGold: string;
    paletteDark: string;
    paletteMonochrome: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    cityPlaceholder: string;
    serviceSelectPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    directContactTitle: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    socialsLabel: string;
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    services: string;
    followUs: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن أورا',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      calculator: 'حاسبة التكلفة',
      visualizer: 'استوديو التصميم',
      contact: 'تواصل معنا',
      bookConsultation: 'احجز استشارة',
    },
    hero: {
      badge: 'أورا للتصميم الداخلي والديكور',
      titleLine1: 'كل فراغ',
      titleLine2: 'له حكاية',
      slogan: 'نُحَوِّل مساحتك إلى تحفة فنية تعكس شخصيتك وطموحك بأعلى معايير الفخامة والاتقان.',
      subtitle: 'تصميم وتنفيذ ديكورات سكنية وتجارية فاخرة بأعلى معايير الجودة والاتقان في مصر والشرق الأوسط.',
      ctaPrimary: 'احسب تكلفة تشطيبك',
      ctaSecondary: 'استكشف مشاريعنا',
      stat1Number: '+120',
      stat1Label: 'مشروع مُنفّذ',
      stat2Number: '100%',
      stat2Label: 'تسليم في الموعد',
      stat3Number: '10+',
      stat3Label: 'سنوات خبرة',
    },
    about: {
      badge: 'قصتنا وفلسفتنا',
      title: 'نحن نبتكر مساحات تعيش وتتحدث عنك',
      description1: 'تأسست شركة أورا للتصميم الداخلي والديكور لرسم مفهوم جديد للفخامة والعملية. نؤمن بأن البيت ليس مجرد جدران، بل هو ملاذك الخاص والمكان الذي يروي قصتك للتفاصيل.',
      description2: 'من الاستشارة الأولى وحتى تسليم المفتاح، نضع شغفنا ودقتنا الهندسية لضمان خلق بيئة متوازنة تدمج بين الجمال المعماري والراحة الاستثنائية.',
      pillar1Title: 'تصميم مُخصص',
      pillar1Desc: 'نلبي تطلعاتك بدقة من خلال المخططات الثلاثية الأبعاد المبتكرة.',
      pillar2Title: 'دقة التنفيذ',
      pillar2Desc: 'إشراف هندسي دقيق على كل تفصيلة في الموقع لضمان تطابق التصميم.',
      pillar3Title: 'شفافية التكلفة',
      pillar3Desc: 'جداول مقايسات واضحة ومحددة بدون تكاليف خفية.',
      quote: '«الجمال الحقيقي للتصميم يكمن في الشعور بالراحة والتناغم فور دخول المساحة»',
    },
    services: {
      badge: 'خدماتنا المتكاملة',
      title: 'حلول تصميم وتنفيذ شاملة لجميع المساحات',
      subtitle: 'نقدم لك تجربة تشطيب وديكور متكاملة من الألف إلى الياء، تريحك من عناء المتابعة وتضمن لك أعلى جودة.',
      items: [
        {
          id: 'residential',
          title: 'التصميم والتشطيب السكني',
          description: 'تصميم وتنفيذ الشقق، الفيلات، والقصور بلمسات عصرية وفاخرة تمنحك أقصى درجات الراحة.',
          features: ['تصميمات 3D Max واقعية', 'تشطيبات سوبر ديلوكس', 'تنسيق الإضاءة والأثاث'],
        },
        {
          id: 'commercial',
          title: 'المساحات التجارية والإدارية',
          description: 'ابتكار هوية بصرية متميزة للمقرات، المكاتب، والشركات تزيد من إنتاجية العمل وتترك انطباعاً مبهراً.',
          features: ['استغلال ذكي للمساحات', 'تصميم واجهات ومكاتب', 'حلول صوتية وإضاءة إدارية'],
        },
        {
          id: 'turnkey',
          title: 'التنفيذ وتسليم المفتاح (Fit-Out)',
          description: 'إدارة وتنفيذ المشروع بالكامل مع إشراف هندسي مستمر وضمان الالتزام بالجدول الزمني.',
          features: ['إشراف هندسي مباشر', 'جدول زمني محدد', 'ضمان على الأعمال والتأسيسات'],
        },
        {
          id: 'furnishing',
          title: 'التأثيث والديكور التفصيلي',
          description: 'اختيار وتصنيع الأثاث الخاص، الستائر، ووحدات الإضاءة المتناسقة مع روح التصميم.',
          features: ['تصنيع أثاث مخصص', 'تنسيق الخامات والألوان', 'إكسسوارات وتحف ديكورية'],
        },
      ],
    },
    portfolio: {
      badge: 'معرض الأعمال',
      title: 'مشاريع تميزنا بتنفيذها',
      subtitle: 'جولة بين أحدث مشاريع أورا للتصميم الداخلي والديكور في المساحات السكنية والتجارية.',
      all: 'الكل',
      villas: 'فيلات وقصور',
      apartments: 'شقق مودرن',
      kitchens: 'مطابخ فاخرة',
      commercial: 'مكاتب وتجاري',
      beforeAfter: 'قبل وبعد التنفيذ',
      viewDetails: 'عرض التفاصيل',
      area: 'المساحة',
      location: 'الموقع',
      year: 'سنة التنفيذ',
    },
    calculator: {
      badge: 'حاسبة التكلفة التفاعلية',
      title: 'احسب التكلفة التقديرية لتشطيب مساحتك',
      subtitle: 'أدخل مساحة وحدتك واختر مستوى التشطيب للحصول على تقدير فوري ومقايسة أولية لتكلفتك.',
      areaLabel: 'مساحة الوحدة (متر مربع):',
      unitTypeLabel: 'نوع المساحة:',
      apartment: 'شقة سكنية',
      villa: 'فيلا / تاون هاوس',
      office: 'مكتب إداري',
      commercial: 'محل تجاري',
      tierLabel: 'مستوى التشطيب والديكور:',
      tierLux: 'لوكس عصري (Modern Lux)',
      tierSuperLux: 'سوبر لوكس (Super Lux)',
      tierUltraLux: 'ألترا ديلوكس (Ultra Deluxe)',
      estimatedCost: 'التكلفة التقديرية الإجمالية:',
      egp: 'جنيه مصري',
      breakdownTitle: 'توزيع التكلفة التقديرية:',
      designPlan: 'التصميم ثلاثي الأبعاد والمخططات (3D & Planning)',
      materials: 'المواد والخامات الأساسية والديكورية',
      supervision: 'التنفيذ والعمالة والإشراف الهندسي',
      sendWhatsappQuote: 'احصل على المقايسة الكاملة عبر الواتساب',
      note: '* السعر تقديري بناءً على متوسط أسعار السوق الحالية، ويتم تحديد المقايسة النهائية بعد المعاينة الميدانية.',
    },
    visualizer: {
      badge: 'استوديو الرؤية والتصميم',
      title: 'جرب طرازك المفضل وتناسق الألوان',
      subtitle: 'اختر الطراز المعماري ولوحة الألوان لتشاهد انطباعاً حياً عن مساحتك المستقبلية.',
      selectStyle: 'اختر طراز التصميم:',
      selectPalette: 'اختر درجات الألوان:',
      japandi: 'ياباندي عالي الهدوء (Japandi)',
      modernLuxury: 'مودرن فاخر (Modern Luxury)',
      warmMinimalist: 'مينيماليست دافئ (Warm Minimalist)',
      classicModern: 'كلاسيك معاصر (Classic Contemporary)',
      paletteWarm: 'درجات الرمل والبيج (Warm Sand & Cream)',
      paletteGold: 'الذهبي مع الفحم (Gold & Charcoal)',
      paletteDark: 'الرمادي الداكن والخشب (Slate & Oak)',
      paletteMonochrome: 'أبيض وعاجي ناصع (Pure Ivory & Snow)',
    },
    contact: {
      badge: 'تواصل وحجز استشارة',
      title: 'لنبدأ كتابة حكاية مساحتك اليوم',
      subtitle: 'فريق مهندسي أورا مستعد لمساعدتك في تحويل رؤيتك إلى واقع ملموس.',
      formTitle: 'طلب استشارة وتكلفة مشروع',
      namePlaceholder: 'الاسم بالكامل',
      phonePlaceholder: 'رقم الهاتف / الواتساب',
      cityPlaceholder: 'المدينة / المنطقة (مثال: التجمع، الشيخ زايد، المعادي)',
      serviceSelectPlaceholder: 'اختر الخدمة المطلوبة',
      messagePlaceholder: 'اكتب تفاصيل مشروعك أو أي استفسار...',
      sendButton: 'إرسال الطلب الآن',
      directContactTitle: 'معلومات التواصل المباشر',
      phoneLabel: 'الهاتف المباشر',
      whatsappLabel: 'الواتساب الرسمي',
      emailLabel: 'البريد الإلكتروني',
      socialsLabel: 'تابعنا على المنصات الاجتماعي',
      facebook: 'فيسبوك',
      instagram: 'إنستغرام',
      tiktok: 'تيك توك',
    },
    footer: {
      tagline: 'أورا للتصميم الداخلي والديكور - كل فراغ له حكاية.',
      quickLinks: 'روابط السريعة',
      services: 'خدماتنا',
      followUs: 'تابعنا على مواقع التواصل',
      copyright: 'جميع الحقوق محفوظة © Aura Interior Design 2026.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Aura',
      services: 'Services',
      portfolio: 'Portfolio',
      calculator: 'Cost Calculator',
      visualizer: 'Style Studio',
      contact: 'Contact Us',
      bookConsultation: 'Book Consultation',
    },
    hero: {
      badge: 'AURA INTERIOR DESIGN & FIT-OUT',
      titleLine1: 'Every Space',
      titleLine2: 'Has A Story',
      slogan: 'We transform your space into a living masterpiece that reflects your lifestyle with unmatched luxury and precision.',
      subtitle: 'Premium residential and commercial interior design & turnkey execution in Egypt and the region.',
      ctaPrimary: 'Calculate Finishing Cost',
      ctaSecondary: 'Explore Projects',
      stat1Number: '+120',
      stat1Label: 'Completed Projects',
      stat2Number: '100%',
      stat2Label: 'On-Time Delivery',
      stat3Number: '10+',
      stat3Label: 'Years Experience',
    },
    about: {
      badge: 'OUR STORY & PHILOSOPHY',
      title: 'We Craft Living Stories Out Of Spaces',
      description1: 'Aura Interior Design was founded to redefine luxury, harmony, and functionality. We believe your home is not merely walls; it is your personal sanctuary and a story written through every detail.',
      description2: 'From the initial concept to final turnkey delivery, our passion and engineering rigor guarantee a harmonious blend of architectural beauty and high comfort.',
      pillar1Title: 'Bespoke Design',
      pillar1Desc: 'Tailored 3D layouts aligned precisely with your functional requirements.',
      pillar2Title: 'Precision Fit-Out',
      pillar2Desc: 'Rigorous engineering supervision on-site matching design blueprints.',
      pillar3Title: 'Transparent Pricing',
      pillar3Desc: 'Clear itemized budget estimations with zero hidden fees.',
      quote: '“True interior beauty lies in the feeling of warmth, harmony, and effortless comfort the moment you step inside.”',
    },
    services: {
      badge: 'OUR INTEGRATED SERVICES',
      title: 'Comprehensive Design & Turnkey Fit-Out Solutions',
      subtitle: 'End-to-end interior design and execution services crafted to deliver seamless luxury.',
      items: [
        {
          id: 'residential',
          title: 'Residential Interior Design & Finishing',
          description: 'Luxury apartments, townhouses, and villas styled with modern warmth and elegance.',
          features: ['Hyper-realistic 3D renders', 'Super-deluxe finishing standards', 'Lighting & spatial harmony'],
        },
        {
          id: 'commercial',
          title: 'Commercial & Executive Spaces',
          description: 'Elevating corporate offices, retail boutiques, and headquarters for peak productivity.',
          features: ['Smart ergonomic layouts', 'Corporate brand alignment', 'Acoustic & ambient lighting'],
        },
        {
          id: 'turnkey',
          title: 'Turnkey Fit-Out & Project Management',
          description: 'Full project management taking care of procurement, contractors, and structural work.',
          features: ['Direct site supervision', 'Strict milestone timeline', 'Workmanship & structural guarantee'],
        },
        {
          id: 'furnishing',
          title: 'Custom Furnishing & Decor Styling',
          description: 'Handcrafted bespoke furniture, curated fabrics, and decorative accents.',
          features: ['Custom furniture manufacturing', 'Material & color curation', 'Art & decor accessories'],
        },
      ],
    },
    portfolio: {
      badge: 'FEATURED PORTFOLIO',
      title: 'Our Signature Completed Projects',
      subtitle: 'Explore our latest residential and commercial transformations executed by Aura Interior Design.',
      all: 'All Projects',
      villas: 'Luxury Villas',
      apartments: 'Modern Apartments',
      kitchens: 'Bespoke Kitchens',
      commercial: 'Commercial & Offices',
      beforeAfter: 'Before & After',
      viewDetails: 'View Project',
      area: 'Area',
      location: 'Location',
      year: 'Year',
    },
    calculator: {
      badge: 'INTERACTIVE BUDGET CALCULATOR',
      title: 'Estimate Your Interior Finishing Cost',
      subtitle: 'Enter your unit area in square meters and select your finishing tier for an instant estimate in EGP.',
      areaLabel: 'Unit Area (m²):',
      unitTypeLabel: 'Space Type:',
      apartment: 'Residential Apartment',
      villa: 'Villa / Townhouse',
      office: 'Executive Office',
      commercial: 'Commercial Store',
      tierLabel: 'Finishing Tier:',
      tierLux: 'Modern Lux',
      tierSuperLux: 'Super Lux',
      tierUltraLux: 'Ultra Deluxe',
      estimatedCost: 'Total Estimated Cost:',
      egp: 'EGP',
      breakdownTitle: 'Estimated Cost Allocation:',
      designPlan: '3D Design & Engineering Blueprints',
      materials: 'Materials, Flooring & Decor Finishes',
      supervision: 'Labor & Engineering Site Management',
      sendWhatsappQuote: 'Get Full Itemized Quote via WhatsApp',
      note: '* Prices are estimations based on current market averages. Final budget will be confirmed after on-site inspection.',
    },
    visualizer: {
      badge: 'INTERIOR STYLE STUDIO',
      title: 'Explore Styles & Color Harmony',
      subtitle: 'Select an architectural interior style and color palette to envision your dream space.',
      selectStyle: 'Select Interior Style:',
      selectPalette: 'Select Color Palette:',
      japandi: 'Serene Japandi',
      modernLuxury: 'Modern Luxury',
      warmMinimalist: 'Warm Minimalist',
      classicModern: 'Classic Contemporary',
      paletteWarm: 'Warm Sand & Cream',
      paletteGold: 'Brushed Gold & Charcoal',
      paletteDark: 'Slate Grey & Dark Oak',
      paletteMonochrome: 'Pure Ivory & Snow',
    },
    contact: {
      badge: 'CONTACT & CONSULTATION',
      title: 'Let’s Write Your Space’s Story Today',
      subtitle: 'Our design engineers are ready to bring your vision to life.',
      formTitle: 'Request a Free Consultation',
      namePlaceholder: 'Full Name',
      phonePlaceholder: 'Phone Number / WhatsApp',
      cityPlaceholder: 'City / Neighborhood (e.g. New Cairo, Zayed, Maadi)',
      serviceSelectPlaceholder: 'Select Required Service',
      messagePlaceholder: 'Tell us about your project details or requirements...',
      sendButton: 'Send Consultation Request',
      directContactTitle: 'Direct Contacts',
      phoneLabel: 'Direct Phone',
      whatsappLabel: 'Official WhatsApp',
      emailLabel: 'Email Address',
      socialsLabel: 'Follow Us on Social Media',
      facebook: 'Facebook',
      instagram: 'Instagram',
      tiktok: 'TikTok',
    },
    footer: {
      tagline: 'Aura Interior Design - Every space has a story.',
      quickLinks: 'Quick Links',
      services: 'Services',
      followUs: 'Follow Us',
      copyright: 'All rights reserved © Aura Interior Design 2026.',
    },
  },
};
