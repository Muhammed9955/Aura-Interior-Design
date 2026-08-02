import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aurainteriordesign.com'),
  title: {
    default: 'Aura Interior Design | أورا للتصميم الداخلي والديكور — كل فراغ له حكاية',
    template: '%s | Aura Interior Design',
  },
  description:
    'شركة أورا للتصميم الداخلي والديكور في مصر. تصميم وتنفيذ ديكورات سكنية وتجارية فاخرة، شقق، فيلات، ومطابخ مودرن بأعلى معايير الجودة والاتقان. Aura Interior Design & Fit-Out.',
  keywords: [
    'Aura Interior Design',
    'أورا للتصميم الداخلي',
    'أورا للديكور والتشطيبات',
    'ديكور شقق وفيلا مصر',
    'تشطيبات التجمع الخامس والشيخ زايد',
    'حاسبة تكلفة التشطيب',
    'مطابخ مودرن أورا',
    'تصميم دالي وديكور فاخر',
    'Interior Design Egypt',
    'Luxury Turnkey Fit-Out',
  ],
  authors: [{ name: 'Aura Interior Design' }],
  creator: 'Aura Interior Design',
  publisher: 'Aura Interior Design',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Aura Interior Design — Every space has a story | أورا للتصميم الداخلي',
    description:
      'Luxury residential & commercial interior design and turnkey fit-out in Egypt. أورا للتصميم الداخلي والديكور الفاخر.',
    url: 'https://aurainteriordesign.com',
    siteName: 'Aura Interior Design',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Aura Interior Design Showcase',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Interior Design | أورا للتصميم الداخلي',
    description: 'Luxury interior design & turnkey fit-out company in Egypt.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://aurainteriordesign.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Anti-flicker inline script for dark/light mode preference */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] dark:bg-[#121110] text-[#2C2621] dark:text-[#F5F2EB] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
