/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  AURA INTERIOR DESIGN — SOCIAL VIDEOS DATA FILE
 *  Edit this file to add / change videos shown on the site
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 *  HOW TO ADD EACH PLATFORM:
 *
 *  ✅ INSTAGRAM REEL
 *     Open the reel → copy the URL → it looks like:
 *     https://www.instagram.com/reel/ABC123xyz/
 *                                    ↑ this part is the "shortcode"
 *     Set  platform: 'instagram'
 *     Set  shortcode: 'ABC123xyz'
 *
 *  ✅ TIKTOK VIDEO
 *     Open the video → copy the URL → it looks like:
 *     https://www.tiktok.com/@aura.interior.design/video/7123456789012345678
 *                                                         ↑ this is the videoId
 *     Set  platform: 'tiktok'
 *     Set  videoId: '7123456789012345678'
 *
 *  ✅ FACEBOOK VIDEO
 *     Open the video → copy the URL → it looks like:
 *     https://www.facebook.com/Aurainterordesign/videos/123456789012345
 *                                                        ↑ this is the videoId
 *     Set  platform: 'facebook'
 *     Set  videoId: '123456789012345'
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

export type VideoPlatform = 'instagram' | 'tiktok' | 'facebook';

export interface VideoEntry {
  id: string;
  platform: VideoPlatform;
  /** Instagram reel shortcode (the part after /reel/) */
  shortcode?: string;
  /** TikTok video numeric ID */
  videoId?: string;
  /** Arabic title shown under the card */
  titleAr: string;
  /** English title shown under the card */
  titleEn: string;
}

/** Returns the embeddable iframe src for a video */
export function getEmbedUrl(video: VideoEntry): string {
  switch (video.platform) {
    case 'instagram':
      return `https://www.instagram.com/reel/${video.shortcode}/embed/`;
    case 'tiktok':
      return `https://www.tiktok.com/embed/v2/${video.videoId}`;
    case 'facebook':
      return `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAurainterordesign%2Fvideos%2F${video.videoId}&show_text=false&width=560&height=560&appId`;
    default:
      return '';
  }
}

/** Returns the original social media URL for "Open on …" button */
export function getSocialUrl(video: VideoEntry): string {
  switch (video.platform) {
    case 'instagram':
      return `https://www.instagram.com/reel/${video.shortcode}/`;
    case 'tiktok':
      return `https://www.tiktok.com/@aura.interior.design/video/${video.videoId}`;
    case 'facebook':
      return `https://www.facebook.com/Aurainterordesign/videos/${video.videoId}`;
    default:
      return '#';
  }
}

// ════════════════════════════════════════════════════════
//  ADD YOUR 20 VIDEOS BELOW
//  • Just paste the shortcode / videoId from the URL
//  • Add as many entries as you like
// ════════════════════════════════════════════════════════
export const videosData: VideoEntry[] = [

  // ─── INSTAGRAM REELS ───────────────────────────────────
  {
    id: 'ig-1',
    platform: 'instagram',
    shortcode: 'DbbW0zhguFg', // ← paste reel shortcode here
    titleAr: 'تشطيب فيلا فاخرة — أورا للتصميم الداخلي',
    titleEn: 'Luxury Villa Finish — Aura Interior Design',
  },
  {
    id: 'ig-2',
    platform: 'instagram',
    shortcode: 'DavSRonEvCA',
    titleAr: 'غرفة نوم ماستر سوبر ديلوكس — أورا',
    titleEn: 'Super Deluxe Master Bedroom — Aura',
  },
  {
    id: 'ig-3',
    platform: 'instagram',
    shortcode: 'DY8AMd1FGMl',
    titleAr: 'تصميم مطبخ عصري مودرن — أورا',
    titleEn: 'Modern Kitchen Design — Aura',
  },
  {
    id: 'ig-4',
    platform: 'instagram',
    shortcode: 'DbYnp8NCWcg',
    titleAr: 'شقة بنتهاوس — تشطيب كامل أورا',
    titleEn: 'Penthouse Apartment Full Finish — Aura',
  },
  {
    id: 'ig-5',
    platform: 'instagram',
    shortcode: 'DbOgKW4DyGz',
    titleAr: 'غرفة ملابس زجاجية فاخرة — أورا',
    titleEn: 'Luxury Glass Dressing Room — Aura',
  },
  {
    id: 'ig-6',
    platform: 'instagram',
    shortcode: 'Da8pOMdjI6j',
    titleAr: 'صالة معيشة بتشطيب سوبر لوكس — أورا',
    titleEn: 'Super Lux Living Room Finish — Aura',
  },
  {
    id: 'ig-7',
    platform: 'instagram',
    shortcode: 'DaF7RYcj6gr',
    titleAr: 'ديكور حمام فاخر بالرخام الإيطالي — أورا',
    titleEn: 'Italian Marble Luxury Bathroom — Aura',
  },
  {
    id: 'ig-8',
    platform: 'instagram',
    shortcode: 'DaAviGTAXPi',
    titleAr: 'تسليم مشروع فيلا — أورا للتصميم الداخلي',
    titleEn: 'Villa Project Handover — Aura Interior Design',
  },

  // ─── TIKTOK VIDEOS ─────────────────────────────────────
  {
    id: 'tt-1',
    platform: 'tiktok',
    videoId: '7668002838173289749', // ← paste TikTok video numeric ID here
    titleAr: 'فيديو ١ — أورا تيك توك',
    titleEn: 'Video 1 — Aura TikTok',
  },
  {
    id: 'tt-2',
    platform: 'tiktok',
    videoId: 'REPLACE_ME',
    titleAr: 'فيديو ٢ — أورا تيك توك',
    titleEn: 'Video 2 — Aura TikTok',
  },
  {
    id: 'tt-3',
    platform: 'tiktok',
    videoId: 'REPLACE_ME',
    titleAr: 'فيديو ٣ — أورا تيك توك',
    titleEn: 'Video 3 — Aura TikTok',
  },
  {
    id: 'tt-4',
    platform: 'tiktok',
    videoId: 'REPLACE_ME',
    titleAr: 'فيديو ٤ — أورا تيك توك',
    titleEn: 'Video 4 — Aura TikTok',
  },
  {
    id: 'tt-5',
    platform: 'tiktok',
    videoId: 'REPLACE_ME',
    titleAr: 'فيديو ٥ — أورا تيك توك',
    titleEn: 'Video 5 — Aura TikTok',
  },
  {
    id: 'tt-6',
    platform: 'tiktok',
    videoId: 'REPLACE_ME',
    titleAr: 'فيديو ٦ — أورا تيك توك',
    titleEn: 'Video 6 — Aura TikTok',
  },

  // ─── FACEBOOK VIDEOS ───────────────────────────────────
  {
    id: 'fb-1',
    platform: 'facebook',
    videoId: 'REPLACE_ME', // ← paste Facebook video numeric ID here
    titleAr: 'فيديو ١ — أورا فيسبوك',
    titleEn: 'Video 1 — Aura Facebook',
  },
  {
    id: 'fb-2',
    platform: 'facebook',
    videoId: 'REPLACE_ME',
    titleAr: 'فيديو ٢ — أورا فيسبوك',
    titleEn: 'Video 2 — Aura Facebook',
  },
  {
    id: 'fb-3',
    platform: 'facebook',
    videoId: 'REPLACE_ME',
    titleAr: 'فيديو ٣ — أورا فيسبوك',
    titleEn: 'Video 3 — Aura Facebook',
  },
  {
    id: 'fb-4',
    platform: 'facebook',
    videoId: 'REPLACE_ME',
    titleAr: 'فيديو ٤ — أورا فيسبوك',
    titleEn: 'Video 4 — Aura Facebook',
  },
  {
    id: 'fb-5',
    platform: 'facebook',
    videoId: 'REPLACE_ME',
    titleAr: 'فيديو ٥ — أورا فيسبوك',
    titleEn: 'Video 5 — Aura Facebook',
  },
  {
    id: 'fb-6',
    platform: 'facebook',
    videoId: 'REPLACE_ME',
    titleAr: 'فيديو ٦ — أورا فيسبوك',
    titleEn: 'Video 6 — Aura Facebook',
  },
];
