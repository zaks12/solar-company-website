# Zacks Solar — Solar Energy Website Template

A premium, responsive, multi-page website for a solar energy company.
Demo website developed by **Zarkode Digital Solutions** (www.zarkode.com.ng).

Built with React, TypeScript, Tailwind CSS, and React Router. This is a reusable
template designed to be customized for real solar company clients.

## Running the Project

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
npm run typecheck # TypeScript type checking
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/about` | About Us |
| `/projects` | Projects |
| `/contact` | Contact / Get a Quote |
| `*` | 404 Not Found |

## Changing Company Name and Contact Details

All editable company information is in one file:

```
src/config/brand.ts
```

This includes:
- Company name, tagline, and description
- Phone numbers (array — supports multiple)
- Email addresses (array — supports multiple)
- Address, service areas, and business hours
- WhatsApp number (leave empty to keep disabled)
- Social media URLs
- SEO default title, description, and social preview image path
- Contact form mode (`demo` or `live`) and endpoint
- Developer name and website (Zarkode Digital Solutions)

## Replacing Demo Project Images and Content

Project gallery data is in `src/pages/ProjectsPage.tsx`. Each project has a
title, category, description, and image URL. Replace the Pexels image URLs with
real client photographs and update the text descriptions.

The homepage also has a smaller projects section in
`src/components/Projects.tsx` that can be updated similarly.

Service card images are in `src/pages/ServicesPage.tsx` and
`src/components/Services.tsx`.

All images currently use Pexels stock photography as illustrative placeholders.

## Enabling Live Quote Submissions

The contact form is in demo mode by default — it validates input and shows a
success message but does not send data anywhere.

To enable live submissions:

1. Open `src/config/brand.ts`
2. Set `form.mode` to `'live'`
3. Set `form.endpoint` to your submission URL (e.g. a Supabase Edge Function,
   a hosted form service like Formspree, or any endpoint accepting POST JSON)

The form sends a JSON body with: `fullName`, `phone`, `email`, `serviceType`,
and `message`.

Never hardcode API keys in the frontend. Use server-side environment variables
for any authentication.

## Configuring WhatsApp

In `src/config/brand.ts`, set `contact.whatsapp` to a number in international
format without the `+` sign (e.g. `"2348106589619"` for a Nigerian number).
When set, the WhatsApp button on the Contact page becomes active and links to
`https://wa.me/<number>`. Leave as an empty string to keep it disabled.

## Social Preview Image

The Open Graph and Twitter card image is configured in `src/config/brand.ts`
under `seo.ogImage`. A branded SVG placeholder `/og-image.svg` is included in
the `public/` directory. For best social media compatibility, replace it with a
branded 1200x630px PNG image and update the path in `brand.ts` and `index.html`.
A favicon SVG is also included at `public/favicon.svg`.

## Production Deployment

This is a Vite static build. Run `npm run build` and deploy the `dist/` folder
to any static host (Netlify, Vercel, Cloudflare Pages, etc.).

For SPA routing to work on direct URL access, configure the host to redirect
all routes to `index.html`. Most platforms do this automatically or via a
configuration file (e.g. `_redirects` for Netlify with `/* /index.html 200`).

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- React Router DOM 6
- Lucide React (icons)

## Design System

- Midnight navy: `#101D32`
- Solar orange: `#F5A623`
- Off-white: `#F7F8FA`
- Energy green: `#21845B`
- Fonts: Manrope (headings) + Inter (body)

All colors are defined as Tailwind theme extensions in `tailwind.config.js`.

## Template Attribution

This is a demo website developed by **Zarkode Digital Solutions**
(www.zarkode.com.ng). It is intended as a reusable template for solar company
clients. The footer includes a developer credit linking to the Zarkode website.

## Important Notes

- Zacks Solar is a demo brand. Company details, testimonials, projects, and some
  contact information are placeholders for demonstration purposes.
- No testimonials, certifications, or client projects have been fabricated.
- The contact form does not submit anywhere in demo mode.
- WhatsApp is disabled until a real number is configured.
- The address and service areas fields remain as editable placeholders.
