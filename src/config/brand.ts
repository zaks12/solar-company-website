/**
 * Central brand configuration for Zacks Solar.
 * This website is a reusable template developed by Zarkode Digital Solutions.
 * Replace these values when customizing for a real solar company client.
 */
export const brand = {
  name: 'Zacks Solar',
  tagline: 'Powering a Brighter Tomorrow.',
  shortName: 'Zacks Solar',
  description:
    'Dependable solar energy solutions for Nigerian homes and businesses. We design, install, and maintain solar power systems built around your needs.',
  // Contact details for Zacks Solar.
  contact: {
    phones: ['08106589619', '07038764507'],
    emails: ['info@zarkode.com.ng', 'zakariyaisah@gmail.com'],
    address: '[Office address, Nigeria]',
    hours: 'Mon – Fri, 8:00 AM – 6:00 PM WAT',
    serviceAreas: '[Service areas — e.g. Lagos, Abuja, Port Harcourt]',
    // WhatsApp placeholder — replace with a real number in international format
    // (e.g. "2348106589619"). Leave as empty string to keep the button disabled.
    whatsapp: '',
  },
  // Social placeholders — replace with real accounts.
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  // SEO defaults — used as the fallback title and meta description.
  seo: {
    defaultTitle: 'Zacks Solar | Solar Energy Solutions',
    defaultDescription:
      'Discover reliable solar energy solutions, solar installations, inverter systems, and energy services with Zacks Solar. Explore our services and request a consultation.',
    // Social preview image — replace with a Zacks Solar branded preview image
    // placed in the public/ directory when available.
    ogImage: '/og-image.svg',
  },
  // Contact form mode.
  // 'demo' — form validates but does not submit anywhere (no backend configured).
  // 'live'  — form submits to the endpoint specified in endpoint below.
  form: {
    mode: 'demo' as 'demo' | 'live',
    // When mode is 'live', set this to the form submission endpoint URL.
    // This can be a Supabase Edge Function, a hosted form service, or any
    // endpoint that accepts POST with JSON. Never put API keys here — use
    // environment variables on the server side.
    endpoint: '',
  },
  // Developer / template owner information.
  developer: {
    name: 'Zarkode Digital Solutions',
    website: 'https://www.zarkode.com.ng',
  },
} as const;

export type Brand = typeof brand;

/** Whether a real WhatsApp number has been configured. */
export const whatsappEnabled: boolean = brand.contact.whatsapp.length > 0;

export const whatsappLink: string = whatsappEnabled
  ? `https://wa.me/${brand.contact.whatsapp}`
  : '';
